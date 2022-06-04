import React, { useCallback, useEffect, useState } from 'react'

import { screenPointToCoordinate } from '../tileMath'
import { Coordinate, Point } from '../types'
import { isClickable } from './utils'

function getRelativeMousePoint(event: MouseEvent, div: HTMLDivElement): Point {
  const { top, left } = div.getBoundingClientRect()
  const point: Point = {
    x: event.clientX - left,
    y: event.clientY - top,
  }
  return point
}

/**
 * The prop type for the [[`useClickProp`]] hook.
 */
export interface useClickProps {
  ref: React.RefObject<HTMLDivElement>
  centerRef: React.RefObject<Coordinate>
  zoomRef: React.RefObject<number>
  delay?: number
  onClick?: (coordinate: Coordinate, point: Point) => void
  onDoubleClick?: (coordinate: Coordinate, point: Point) => void
}

/**
 * The useClick hook.
 */
export default function useClick({
  ref,
  centerRef,
  zoomRef,
  delay = 150,
  onClick,
  onDoubleClick,
}: useClickProps): void {
  const [timeout, saveTimeout] =
    useState<ReturnType<typeof setTimeout> | undefined>()

  const handleClick = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!(ref.current && target && isClickable(target))) {
        console.log('not clickable')
        return
      }

      const element = ref.current

      if (timeout) {
        clearTimeout(timeout)
      }

      const newTimeout = setTimeout(() => {
        const mousePoint: Point = getRelativeMousePoint(event, element)
        const { width, height } = element.getBoundingClientRect()
        const coordinate = screenPointToCoordinate(
          mousePoint,
          centerRef.current as Coordinate,
          zoomRef.current as number,
          width,
          height
        )

        if (event.detail === 1) {
          onClick && onClick(coordinate, mousePoint)
        } else {
          onDoubleClick && onDoubleClick(coordinate, mousePoint)
        }
      }, delay)

      saveTimeout(newTimeout)
    },
    [ref, centerRef, zoomRef, delay, timeout, onClick, onDoubleClick]
  )

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const element = ref.current

    element.onclick = handleClick
    // element.addEventListener('click', handleClick)

    return () => {
      element.onclick = null
      // element.removeEventListener('click', handleClick)
    }
  }, [ref, handleClick])
}

import React, { useCallback, useEffect, useState } from 'react'

import { pointToCoordinate } from '../tileMath'
import { Coordinate, Point } from '../types'

function getRelativeMousePoint(event: MouseEvent, div: HTMLDivElement): Point {
  const { top, left } = div.getBoundingClientRect()
  const point: Point = {
    x: event.clientX - left,
    y: event.clientY - top,
  }
  return point
}
export interface useClickProps {
  ref: React.RefObject<HTMLDivElement>
  centerRef: React.RefObject<Coordinate>
  zoomRef: React.RefObject<number>
  delay?: number
  onClick?: (coordinate: Coordinate, point: Point) => void
  onDoubleClick?: (coordinate: Coordinate, point: Point) => void
}

export default function useClick({
  ref,
  centerRef,
  zoomRef,
  delay = 150,
  onClick,
  onDoubleClick,
}: useClickProps): void {
  const [timeout, saveTimeout] = useState<
    ReturnType<typeof setTimeout> | undefined
  >()

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (timeout) {
        clearTimeout(timeout)
      }

      const newTimeout = setTimeout(() => {
        if (!ref.current) {
          return
        }

        const mousePoint: Point = getRelativeMousePoint(event, ref.current)
        const { width, height } = ref.current.getBoundingClientRect()
        const coordinate = pointToCoordinate(
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

    element.addEventListener('click', handleClick)

    return () => {
      element.removeEventListener('click', handleClick)
    }
  }, [ref, handleClick])
}

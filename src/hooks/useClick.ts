import React, { useCallback, useEffect, useRef, useState } from 'react'

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
 * The prop type for the [[`useClick`]] hook.
 */
export interface useClickProps {
  ref: React.RefObject<HTMLDivElement>
  center: Coordinate
  zoom: number
  delay?: number
  onClick?: (coordinate: Coordinate, point: Point) => void
  onDoubleClick?: (coordinate: Coordinate, point: Point) => void
}

interface MouseState {
  count: number
  lastPoint: Point
  timeout: ReturnType<typeof setTimeout> | null
}

/**
 * The useClick hook.
 */
export default function useClick({
  ref,
  center,
  zoom,
  delay = 150,
  onClick,
  onDoubleClick,
}: useClickProps): void {
  const mouseState = useRef<MouseState>({
    count: 0,
    lastPoint: { x: 0, y: 0 },
    timeout: null,
  })

  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!(ref.current && target && isClickable(target))) {
        return
      }

      event.preventDefault()

      mouseState.current.count += 1
      mouseState.current.lastPoint = getRelativeMousePoint(event, ref.current)
    },
    [ref]
  )

  const handleMouseUp = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!(ref.current && target)) {
        return
      }

      if (mouseState.current.count === 0) {
        // Not our event
        return
      }

      const element = ref.current

      if (mouseState.current.timeout) {
        // If this was a double click this will clear the first timeout.
        clearTimeout(mouseState.current.timeout)
      }

      // Wait a short time before handling the event to capture double clicks.
      mouseState.current.timeout = setTimeout(() => {
        mouseState.current.timeout = null

        // If the down location is a long way away from the up location
        // treat it as a drag and ignore.
        const mousePoint: Point = getRelativeMousePoint(event, element)
        const delta: Point = {
          x: Math.abs(mouseState.current.lastPoint.x - mousePoint.x),
          y: Math.abs(mouseState.current.lastPoint.y - mousePoint.y),
        }
        if (delta.x + delta.y <= 2) {
          const { width, height } = element.getBoundingClientRect()
          const coordinate = screenPointToCoordinate(
            mousePoint,
            center,
            zoom,
            width,
            height
          )

          if (mouseState.current.count === 1) {
            onClick && onClick(coordinate, mousePoint)
          } else {
            onDoubleClick && onDoubleClick(coordinate, mousePoint)
          }
        }

        mouseState.current.count = 0
      }, delay)
    },
    [ref, zoom, center]
  )

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const element = ref.current

    element.addEventListener('mousedown', handleMouseDown)
    element.addEventListener('mouseup', handleMouseUp)

    return () => {
      element.removeEventListener('mousedown', handleMouseDown)
      element.removeEventListener('mouseup', handleMouseUp)
    }
  }, [ref, handleMouseDown, handleMouseUp])
}

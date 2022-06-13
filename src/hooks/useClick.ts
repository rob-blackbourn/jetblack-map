import React, { useCallback, useEffect, useRef } from 'react'

import { screenPointToCoordinate } from '../tileMath'
import { Coordinate, Point } from '../types'
import { getRelativeMousePoint, isClickable } from './utils'

/**
 * The prop type for the [[`useClick`]] hook.
 */
export interface useClickProps {
  /** A reference to the map container. */
  ref: React.RefObject<HTMLDivElement>
  /** The map center. */
  center: Coordinate
  /** The current zoom level */
  zoom: number
  /** The time to wait in milliseconds for a double click. */
  delay?: number
  /** The width of a map tile */
  tileWidth: number
  /** The height of a map tile */
  tileHeight: number
  /** The handler for a single click event. */
  onClick?: (coordinate: Coordinate, point: Point) => void
  /** The handler for a multi click event */
  onDoubleClick?: (coordinate: Coordinate, point: Point) => void
}

interface MouseState {
  clickCount: number
  lastPoint: Point
  timeoutId: ReturnType<typeof setTimeout> | null
}

/**
 * The useClick hook.
 */
export default function useClick({
  ref,
  center,
  zoom,
  delay = 150,
  tileWidth,
  tileHeight,
  onClick,
  onDoubleClick,
}: useClickProps): void {
  const mouseState = useRef<MouseState>({
    clickCount: 0,
    lastPoint: { x: 0, y: 0 },
    timeoutId: null,
  })

  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!(ref.current && target && isClickable(target))) {
        return
      }

      event.preventDefault()

      mouseState.current.clickCount += 1
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

      if (mouseState.current.clickCount === 0) {
        // Not our event
        return
      }

      const element = ref.current

      if (mouseState.current.timeoutId) {
        // This was a multi click so clear the previous timeout.
        clearTimeout(mouseState.current.timeoutId)
      }

      // Wait a short time before handling the event to capture double clicks.
      mouseState.current.timeoutId = setTimeout(() => {
        mouseState.current.timeoutId = null

        // If the down location is a long way away from the up location
        // treat it as a drag and ignore.
        const mousePoint: Point = getRelativeMousePoint(event, element)
        const delta: Point = {
          x: Math.abs(mouseState.current.lastPoint.x - mousePoint.x),
          y: Math.abs(mouseState.current.lastPoint.y - mousePoint.y),
        }
        if (delta.x + delta.y <= 2) {
          // This is a real click. Find the earth coordinate and call
          // the appropriate handler.
          const { width, height } = element.getBoundingClientRect()
          const coordinate = screenPointToCoordinate(mousePoint, center, zoom, width, height, tileWidth, tileHeight)

          if (mouseState.current.clickCount === 1) {
            onClick && onClick(coordinate, mousePoint)
          } else {
            onDoubleClick && onDoubleClick(coordinate, mousePoint)
          }
        }

        mouseState.current.clickCount = 0
      }, delay)
    },
    [ref, zoom, center, tileWidth, tileHeight]
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

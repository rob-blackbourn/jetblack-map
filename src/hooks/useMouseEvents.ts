import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Coordinate, Point } from '../types'

import { coordinateToTilePoint, tilePointToCoordinate } from '../tileMath'
import { LOCATIONS } from '../constants'
import { getRelativeMousePoint, isDraggable } from './utils'

/**
 * The prop type for the [[`useMouseEvents`]] hook.
 */
export interface useMouseEventsProps {
  ref: React.RefObject<HTMLDivElement>
  defaultCenter?: Coordinate
  zoom: number
}

interface MouseState {
  mouseDown: boolean
  lastPoint: Point
}

/**
 * A hook for mouse events.
 */
export default function useMouseEvents({
  ref,
  defaultCenter = LOCATIONS.greenwichObservatory,
  zoom,
}: useMouseEventsProps): [Coordinate, (center: Coordinate) => void] {
  const [center, setCenter] = useState(defaultCenter)
  const mouseState = useRef<MouseState>({
    mouseDown: false,
    lastPoint: { x: 0, y: 0 },
  })

  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      event.preventDefault()

      if (!ref.current) {
        return
      }

      mouseState.current.mouseDown = true
      mouseState.current.lastPoint = getRelativeMousePoint(event, ref.current)
    },
    [ref]
  )

  const handleMouseUp = useCallback((event: MouseEvent) => {
    event.preventDefault()
    mouseState.current.mouseDown = false
  }, [])

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!(ref.current && target && isDraggable(target))) {
        return
      }

      event.preventDefault()

      if (mouseState.current.mouseDown) {
        const mousePoint: Point = getRelativeMousePoint(event, ref.current)
        const tileDelta: Point = {
          x: (mouseState.current.lastPoint.x - mousePoint.x) / 256,
          y: (mouseState.current.lastPoint.y - mousePoint.y) / 256,
        }
        const tile = coordinateToTilePoint(center, zoom)
        const newCenter = tilePointToCoordinate(
          { x: tile.x + tileDelta.x, y: tile.y + tileDelta.y },
          zoom
        )
        mouseState.current.lastPoint = mousePoint
        setCenter(newCenter)
      }
    },
    [ref, center, zoom, setCenter]
  )

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const element = ref.current

    element.addEventListener('mousedown', handleMouseDown)
    element.addEventListener('mouseup', handleMouseUp)
    element.addEventListener('mousemove', handleMouseMove)

    return () => {
      element.removeEventListener('mousedown', handleMouseDown)
      element.removeEventListener('mouseup', handleMouseUp)
      element.removeEventListener('mousemove', handleMouseMove)
    }
  }, [ref, handleMouseDown, handleMouseUp, handleMouseMove])

  return [center, setCenter]
}

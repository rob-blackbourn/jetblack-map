import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Coordinate, Point, Size } from '../types'

import { coordinateToTilePoint, screenToTilePoint, tilePointToCoordinate } from '../tileMath'
import { LOCATIONS } from '../constants'
import { getRelativeMousePoint, isDraggable } from './utils'

/**
 * The prop type for the [[`useDrag`]] hook.
 */
export interface useDragProps {
  /** A reference to the map component */
  ref: React.RefObject<HTMLDivElement>
  /** An optional initial value for the center of the map */
  defaultCenter?: Coordinate
  /** The current zoom level */
  zoom: number
  /** The size of the tiles */
  tileSize: Size
}

interface MouseState {
  mouseDown: boolean
  lastPoint: Point
}

/**
 * A hook for mouse events.
 */
export default function useDrag({
  ref,
  defaultCenter = LOCATIONS.greenwichObservatory,
  zoom,
  tileSize,
}: useDragProps): [Coordinate, (center: Coordinate) => void] {
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
        const currentPoint: Point = getRelativeMousePoint(event, ref.current)
        const screenDelta: Point = {
          x: mouseState.current.lastPoint.x - currentPoint.x,
          y: mouseState.current.lastPoint.y - currentPoint.y,
        }
        const tileDelta: Point = screenToTilePoint(screenDelta, tileSize)
        const tileCenter = coordinateToTilePoint(center, zoom)
        const newTileCenter = {
          x: tileCenter.x + tileDelta.x,
          y: tileCenter.y + tileDelta.y,
        }
        const newCenter = tilePointToCoordinate(newTileCenter, zoom)
        mouseState.current.lastPoint = currentPoint
        setCenter(newCenter)
      }
    },
    [ref, center, zoom, setCenter, tileSize]
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

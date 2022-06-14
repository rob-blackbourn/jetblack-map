import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Coordinate, Point } from '../types'

import { coordinateToTilePoint, tilePointToCoordinate } from '../tileMath'
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
  /** The width of the tiles */
  tileWidth: number
  /** The height of the tiles */
  tileHeight: number
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
  tileWidth,
  tileHeight,
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
        const mousePoint: Point = getRelativeMousePoint(event, ref.current)
        const tileDelta: Point = {
          x: (mouseState.current.lastPoint.x - mousePoint.x) / tileWidth,
          y: (mouseState.current.lastPoint.y - mousePoint.y) / tileHeight,
        }
        const tileCenter = coordinateToTilePoint(center, zoom)
        const newCenter = tilePointToCoordinate(
          { x: tileCenter.x + tileDelta.x, y: tileCenter.y + tileDelta.y },
          zoom
        )
        mouseState.current.lastPoint = mousePoint
        setCenter(newCenter)
      }
    },
    [ref, center, zoom, setCenter, tileWidth, tileHeight]
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

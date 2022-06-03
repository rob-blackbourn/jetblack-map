import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Coordinate, Point } from '../types'

import { coordinateToTilePoint, tilePointToCoordinate } from '../tileMath'
import { GREENWICH_OBSERVATORY } from '../constants'

function getRelativeMousePoint(event: MouseEvent, div: HTMLDivElement): Point {
  const { top, left } = div.getBoundingClientRect()
  const point: Point = {
    x: event.clientX - left,
    y: event.clientY - top,
  }
  return point
}

/**
 * The prop type for the [[`useMouseEvents`]] hook.
 */
export interface useMouseEventsProps {
  ref: React.RefObject<HTMLDivElement>
  defaultCenter?: Coordinate
  zoomRef: React.RefObject<number>
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
  defaultCenter = GREENWICH_OBSERVATORY,
  zoomRef,
}: useMouseEventsProps): [
  Coordinate,
  React.RefObject<Coordinate>,
  (center: Coordinate) => void
] {
  const [center, _setCenter] = useState(defaultCenter)
  const centerRef = useRef(center)
  const mouseState = useRef<MouseState>({
    mouseDown: false,
    lastPoint: { x: 0, y: 0 },
  })

  const setCenter = useCallback((center: Coordinate) => {
    centerRef.current = center
    _setCenter(center)
  }, [])

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
      event.preventDefault()

      if (!ref.current) {
        return
      }

      if (mouseState.current.mouseDown) {
        const mousePoint: Point = getRelativeMousePoint(event, ref.current)
        const tileDelta: Point = {
          x: (mouseState.current.lastPoint.x - mousePoint.x) / 256,
          y: (mouseState.current.lastPoint.y - mousePoint.y) / 256,
        }
        const tile = coordinateToTilePoint(center, zoomRef.current as number)
        const newCenter = tilePointToCoordinate(
          { x: tile.x + tileDelta.x, y: tile.y + tileDelta.y },
          zoomRef.current as number
        )
        mouseState.current.lastPoint = mousePoint
        setCenter(newCenter)
      }
    },
    [ref, center, zoomRef, setCenter]
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

  return [center, centerRef, setCenter]
}

import { Position } from 'geojson'

import { range, recenterScreenPoint, screenPointToCoordinate } from '../../tileMath'
import { Bounds, Coordinate, Point, Size } from '../../types'

export const geoJsonPointToCoordinate = (position: Position): Coordinate => ({
  latitude: position[1],
  longitude: position[0],
})

export const geoJsonPointToScreenPoint = (
  position: Position,
  center: Coordinate,
  zoom: number,
  screenSize: Size,
  tileSize: Size
): Point =>
  recenterScreenPoint(
    {
      latitude: position[1],
      longitude: position[0],
    },
    center,
    zoom,
    screenSize,
    tileSize
  )

export function calcCenters(
  center: Coordinate,
  zoom: number,
  bounds: Bounds,
  tileSize: Size
): Coordinate[] {
  const topLeft = screenPointToCoordinate({ x: 0, y: 0 }, center, zoom, bounds, tileSize, false)
  const bottomRight = screenPointToCoordinate(
    { x: bounds.width, y: bounds.height },
    center,
    zoom,
    bounds,
    tileSize,
    false
  )

  const westLongitudeCount = Math.trunc(topLeft.longitude / 180)
  const eastLongitudeCount = Math.trunc(bottomRight.longitude / 180)

  const centers = [
    ...range(westLongitudeCount, 0, 1).map(x => ({
      latitude: center.latitude,
      longitude: center.longitude + x * 360,
    })),
    center,
    ...range(0, eastLongitudeCount, 1).map(x => ({
      latitude: center.latitude,
      longitude: center.longitude + (x + 1) * 360,
    })),
  ]

  return centers
}

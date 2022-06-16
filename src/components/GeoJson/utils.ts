import { Position } from 'geojson'

import { recenterScreenPoint } from '../../tileMath'
import { Coordinate, Point, Size } from '../../types'

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

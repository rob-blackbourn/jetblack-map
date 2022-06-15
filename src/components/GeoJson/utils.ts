import { Position } from 'geojson'

import { recenterScreenPoint } from '../../tileMath'
import { Coordinate, Point } from '../../types'

export const geoJsonPointToCoordinate = (position: Position): Coordinate => ({
  latitude: position[1],
  longitude: position[0],
})

export const geoJsonPointToScreenPoint = (
  position: Position,
  center: Coordinate,
  zoom: number,
  screenWidth: number,
  screenHeight: number,
  tileWidth: number,
  tileHeight: number
): Point =>
  recenterScreenPoint(
    {
      latitude: position[1],
      longitude: position[0],
    },
    center,
    zoom,
    screenWidth,
    screenHeight,
    tileWidth,
    tileHeight
  )

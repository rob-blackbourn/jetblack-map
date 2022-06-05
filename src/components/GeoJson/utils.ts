import { Position } from 'geojson'

import { coordinateToScreenPoint } from '../../tileMath'
import { Coordinate, Point } from '../../types'

export const geoJsonPointToCoordinate = (position: Position): Coordinate => ({
  latitude: position[1],
  longitude: position[0],
})

export const geoJsonPointToScreenPoint = (
  position: Position,
  center: Coordinate,
  zoom: number,
  width: number,
  height: number
): Point =>
  coordinateToScreenPoint(
    {
      latitude: position[1],
      longitude: position[0],
    },
    center,
    zoom,
    width,
    height
  )

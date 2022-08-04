import {
  Feature,
  Geometry,
  GeometryCollection,
  LineString,
  MultiLineString,
  MultiPoint,
  MultiPolygon,
  Point,
  Polygon,
  Position,
} from 'geojson'

import { isInWorldBounds, range, recenterScreenPoint } from '../../tileMath'
import { Coordinate, CoordinateRect, Point as ScreenPoint, Size } from '../../types'

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
): ScreenPoint =>
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
  { topLeft, bottomRight }: CoordinateRect
): Coordinate[] {
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

function isPointInWorldBounds(
  [longitude, latitude]: Position,
  worldBounds: CoordinateRect
): boolean {
  return isInWorldBounds(latitude, longitude, worldBounds)
}

function isGeometryInWorldBounds(geometry: Geometry, worldBounds: CoordinateRect): boolean {
  switch (geometry.type) {
    case 'GeometryCollection':
      return (geometry as GeometryCollection).geometries.some(g =>
        isGeometryInWorldBounds(g, worldBounds)
      )

    case 'Point':
      return isPointInWorldBounds((geometry as Point).coordinates, worldBounds)

    case 'MultiPoint':
      return (geometry as MultiPoint).coordinates.some(point =>
        isPointInWorldBounds(point, worldBounds)
      )

    case 'LineString':
      return (geometry as LineString).coordinates.some(point =>
        isPointInWorldBounds(point, worldBounds)
      )

    case 'MultiLineString':
      return (geometry as MultiLineString).coordinates.some(line =>
        line.some(point => isPointInWorldBounds(point, worldBounds))
      )

    case 'Polygon':
      return (geometry as Polygon).coordinates.some(path =>
        path.some(point => isPointInWorldBounds(point, worldBounds))
      )

    case 'MultiPolygon':
      return (geometry as MultiPolygon).coordinates.some(polygon =>
        polygon.some(path => path.some(point => isPointInWorldBounds(point, worldBounds)))
      )

    default:
      return false
  }
}

export function isFeatureInWorldBounds(feature: Feature, worldBounds: CoordinateRect): boolean {
  return isGeometryInWorldBounds(feature.geometry, worldBounds)
}

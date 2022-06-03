import { Coordinate, Point, TileProvider, TileInfo, ScaleInfo } from './types'
import { boundValue } from './math'

// These functions are provided by the Open Street Map wiki.
// See: https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames

const lng2tile = (lon: number, zoom: number): number =>
  ((lon + 180) / 360) * 2 ** zoom

const lat2tile = (lat: number, zoom: number): number =>
  ((1 -
    Math.log(
      Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)
    ) /
      Math.PI) /
    2) *
  2 ** zoom

function tile2lng(x: number, zoom: number): number {
  return (x / 2 ** zoom) * 360 - 180
}

function tile2lat(y: number, zoom: number): number {
  const n = Math.PI - (2 * Math.PI * y) / 2 ** zoom
  return (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)))
}

export const coordinateToTilePoint = (
  coordinate: Coordinate,
  zoom: number
): Point => ({
  x: lng2tile(coordinate.longitude, zoom),
  y: lat2tile(coordinate.latitude, zoom),
})

export const tilePointToCoordinate = (
  tile: Point,
  zoom: number
): Coordinate => ({
  latitude: tile2lat(tile.y, zoom),
  longitude: tile2lng(tile.x, zoom),
})

export function calcScaleInfo(
  zoom: number,
  width: number,
  height: number
): ScaleInfo {
  // The tiles are provided for discrete (integer) zoom values.
  // We achieve smooth scrolling by scaling the image.
  const roundedZoom = Math.round(zoom)
  const zoomDiff = zoom - roundedZoom

  const scale = Math.pow(2, zoomDiff)
  const scaleWidth = width / scale
  const scaleHeight = height / scale

  return {
    roundedZoom,
    scale,
    scaleWidth,
    scaleHeight,
  }
}

export function calcTileInfo(
  center: Coordinate,
  zoom: number,
  width: number,
  height: number
): TileInfo {
  const { roundedZoom, scale, scaleWidth, scaleHeight } = calcScaleInfo(
    zoom,
    width,
    height
  )

  const tileCenter = coordinateToTilePoint(center, roundedZoom)

  const halfWidth = scaleWidth / 2 / 256
  const halfHeight = scaleHeight / 2 / 256

  const tileMin = {
    x: Math.floor(tileCenter.x - halfWidth),
    y: Math.floor(tileCenter.y - halfHeight),
  }
  const tileMax = {
    x: Math.floor(tileCenter.x + halfWidth),
    y: Math.floor(tileCenter.y + halfHeight),
  }

  return {
    tileMin,
    tileMax,
    tileCenter,
    roundedZoom,
    scaleWidth,
    scaleHeight,
    scale,
  }
}

export function srcSet(
  dprs: number[],
  tileProvider: TileProvider,
  x: number,
  y: number,
  z: number
): string {
  if (dprs.length === 0) {
    return ''
  }
  const attr = dprs
    .map(dpr => tileProvider(x, y, z, dpr) + (dpr === 1 ? '' : ` ${dpr}x`))
    .join(', ')
  return attr
}

export function screenPointToCoordinate(
  screenPoint: Point,
  center: Coordinate,
  zoom: number,
  width: number,
  height: number
): Coordinate {
  // Calculate the distance from the screen center and convert to tile units.
  const tilePoint = {
    x: (screenPoint.x - width / 2) / 256,
    y: (screenPoint.y - height / 2) / 256,
  }

  // Find the current center for the current zoom in tile units and add the delta.
  const centerTilePoint = coordinateToTilePoint(center, zoom)
  const adjTilePoint = {
    x: centerTilePoint.x + tilePoint.x,
    y: centerTilePoint.y + tilePoint.y,
  }

  // Find the center in projection units for the given zoom level..
  const coordinate = tilePointToCoordinate(adjTilePoint, zoom)

  // Clip the latitude.
  const latitude = boundValue(-90, coordinate.latitude, 90)

  // Allow the longitude to wrap.
  let longitude = coordinate.longitude % 180

  return {
    latitude,
    longitude,
  }
}

export function coordinateToScreenPoint(
  coordinate: Coordinate,
  center: Coordinate,
  zoom: number,
  width: number,
  height: number
): Point {
  const centerTilePoint = coordinateToTilePoint(center, zoom)

  const coordinateTilePoint = coordinateToTilePoint(coordinate, zoom)

  return {
    x: (coordinateTilePoint.x - centerTilePoint.x) * 256 + width / 2,
    y: (coordinateTilePoint.y - centerTilePoint.y) * 256 + height / 2,
  }
}

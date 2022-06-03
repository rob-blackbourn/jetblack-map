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

/**
 * Convert a latitude and longitude to an x and y point in the tile coordinate system.
 *
 * @param coordinate The coordinate from which to calculate a tile point
 * @param zoom The zoom level
 * @returns The point in the tile coordinate system
 */
export const coordinateToTilePoint = (
  coordinate: Coordinate,
  zoom: number
): Point => ({
  x: lng2tile(coordinate.longitude, zoom),
  y: lat2tile(coordinate.latitude, zoom),
})

/**
 * Convert an x and y point to a longitude and latitude coordinate.
 *
 * @param tilePoint The x and y point in the tile coordinate system.
 * @param zoom The zoom level
 * @returns The coordinate as a latitude and longitude
 */
export const tilePointToCoordinate = (
  tilePoint: Point,
  zoom: number
): Coordinate => ({
  latitude: tile2lat(tilePoint.y, zoom),
  longitude: tile2lng(tilePoint.x, zoom),
})

/**
 * Calculate scale factors.
 *
 * The tiles are provide at discrete zoom levels starting at 0 where a single tile represents the world.
 *
 * To provide smooth scrolling the width and height of the image tiles can be scaled.
 *
 * @param zoom The zoom level
 * @param width The display width
 * @param height The display height
 * @returns An object containing the rounded zoom, the scale, the scale width and height.
 */
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

/**
 * Calculate the information required to render the tiles.
 *
 * @param center The coordinate for the center of the display area
 * @param zoom The zoom level
 * @param width The screen width
 * @param height The screen height
 * @returns An object containing the information required to render the tiles
 */
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

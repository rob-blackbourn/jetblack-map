import { Coordinate, Point, ScaleInfo } from './types'

// These functions are provided by the Open Street Map wiki.
// See: https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames

/**
 * Calculate the x coordinate from a longitude in the tile coordinate system.
 *
 * @param lon The longitude
 * @param zoom The zoom level
 * @returns The x coordinate in the tile coordinate system
 */
const lng2tile = (lon: number, zoom: number): number => ((lon + 180) / 360) * 2 ** zoom

/**
 * Calculate the y coordinate from a latitude in the tile coordinate system.
 *
 * @param lat The latitude
 * @param zoom The zoom level
 * @returns The y coordinate in the tile coordinate systsem
 */
const lat2tile = (lat: number, zoom: number): number =>
  ((1 - Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) / Math.PI) / 2) * 2 ** zoom

/**
 * Calculate the longitude from an x coordinate in the tile coordinate system.
 *
 * @param x The x coordinate in the tile coordinate system
 * @param zoom The zoom level
 * @returns The longitude
 */
function tile2lng(x: number, zoom: number): number {
  return (x / 2 ** zoom) * 360 - 180
}

/**
 * Calculate the latitude from a y coordinate in the tile coordinate system.
 *
 * @param y The y coordinate in the tile coordinate system
 * @param zoom The zoom level
 * @returns The latitude
 */
function tile2lat(y: number, zoom: number): number {
  const n = Math.PI - (2 * Math.PI * y) / 2 ** zoom
  return (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)))
}

/**
 * Ensure the value is between the minimum and maximum value.
 *
 * @param min The minimum allowed value
 * @param value The value to be constrained
 * @param max The maximum allowable value
 * @returns The value bounded by the constraints
 */
export const boundValue = (min: number, value: number, max: number): number => Math.max(min, Math.min(value, max))

/**
 * Convert a latitude and longitude to an x and y point in the tile coordinate system.
 *
 * @param coordinate The coordinate from which to calculate a tile point
 * @param zoom The zoom level
 * @returns The point in the tile coordinate system
 */
export const coordinateToTilePoint = (coordinate: Coordinate, zoom: number): Point => ({
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
export const tilePointToCoordinate = (tilePoint: Point, zoom: number): Coordinate => ({
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
 * @param screenWidth The screen width
 * @param screenHeight The screen height
 * @returns An object containing the rounded zoom, the scale, the scale width and height.
 */
export function calcScaleInfo(zoom: number, screenWidth: number, screenHeight: number): ScaleInfo {
  // The tiles are provided for discrete (integer) zoom values.
  // We achieve smooth scrolling by scaling the image.
  const roundedZoom = Math.round(zoom)
  const zoomDiff = zoom - roundedZoom

  const scale = Math.pow(2, zoomDiff)
  const scaleWidth = screenWidth / scale
  const scaleHeight = screenHeight / scale

  return {
    roundedZoom,
    scale,
    scaleWidth,
    scaleHeight,
  }
}

/**
 * Convert a screen point to a longitude and latitude.
 *
 * @param screenPoint The point in the screen coordinate system
 * @param center The latitude and longitude of the center of the screen
 * @param zoom The zoom level
 * @param screenWidth The width of the screen
 * @param screenHeight The height of the screen
 * @returns The longitude and latitude of the screen point
 */
export function screenPointToCoordinate(
  screenPoint: Point,
  center: Coordinate,
  zoom: number,
  screenWidth: number,
  screenHeight: number,
  tileWidth: number,
  tileHeight: number
): Coordinate {
  // Calculate the distance from the screen center and convert to tile units.
  const tilePoint = {
    x: (screenPoint.x - screenWidth / 2) / tileWidth,
    y: (screenPoint.y - screenHeight / 2) / tileHeight,
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

/**
 * Convert a longitude and latitude to an x and y in the screen coordinate system.
 *
 * @param coordinate The longitude and latitude of the point
 * @param center The longitude and latitude of the center of the screen
 * @param zoom The zoom level
 * @param screenWidth The screen width
 * @param screenHeight The screen height
 * @returns The x and y coordinates of the point in th screen coordinate system
 */
export function coordinateToScreenPoint(
  coordinate: Coordinate,
  center: Coordinate,
  zoom: number,
  screenWidth: number,
  screenHeight: number,
  tileWidth: number,
  tileHeight: number
): Point {
  const centerTilePoint = coordinateToTilePoint(center, zoom)

  const coordinateTilePoint = coordinateToTilePoint(coordinate, zoom)

  return {
    x: (coordinateTilePoint.x - centerTilePoint.x) * tileWidth + screenWidth / 2,
    y: (coordinateTilePoint.y - centerTilePoint.y) * tileHeight + screenHeight / 2,
  }
}

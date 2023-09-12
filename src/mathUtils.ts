import { Bounds, Coordinate, CoordinateBounds, Point, ScaleInfo, Size } from './types'

import { LOCATIONS } from './constants'
import { limitValue } from './utils'

import { lat2tile, lng2tile, tile2lat, tile2lng } from './tileMath'
import { LATITUDE_LIMIT } from './constants'

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
 * @param screenSize The screen size
 * @returns An object containing the rounded zoom, the scale, the scale width and height.
 */
export function calcScaleInfo(zoom: number, screenSize: Size): ScaleInfo {
  // The tiles are provided for discrete (integer) zoom values.
  // We achieve smooth scrolling by scaling the image.
  const roundedZoom = Math.round(zoom)
  const zoomDiff = zoom - roundedZoom

  const scale = Math.pow(2, zoomDiff)
  const scaledScreen = {
    width: screenSize.width / scale,
    height: screenSize.height / scale,
  }

  return {
    roundedZoom,
    scale,
    scaledScreen,
  }
}

/**
 * Convert a point in the screen coordinate system to a point in the
 * tile coordinate system.
 *
 * @param screenPoint A point in the screen coordinate system.
 * @param tileSize The tile size.
 * @returns The point in the tile coordinate system.
 */
export function screenToTilePoint(screenPoint: Point, tileSize: Size): Point {
  return {
    x: screenPoint.x / tileSize.width,
    y: screenPoint.y / tileSize.height,
  }
}

/**
 * Convert a point in the tile coordinate system to a point in the
 * screen coordinate system.
 *
 * @param tilePoint A point in the tile coordinate system.
 * @param tileSize The tile size.
 * @returns A point in the screen coordinate system.
 */
export function tileToScreenPoint(tilePoint: Point, tileSize: Size): Point {
  return {
    x: tilePoint.x * tileSize.width,
    y: tilePoint.y * tileSize.height,
  }
}

/**
 * Convert a screen point to a longitude and latitude.
 *
 * @param screenPoint The point in the screen coordinate system
 * @param center The latitude and longitude of the center of the screen
 * @param zoom The zoom level
 * @param screenSize The size of the screen
 * @param tileSize The size of the tiles
 * @returns The longitude and latitude of the screen point
 */
export function screenPointToCoordinate(
  screenPoint: Point,
  center: Coordinate,
  zoom: number,
  screenSize: Size,
  tileSize: Size,
  wrapLongitude: boolean = true
): Coordinate {
  // Calculate the delta from the screen center to the point.
  const screenDelta = {
    x: screenPoint.x - screenSize.width / 2,
    y: screenPoint.y - screenSize.height / 2,
  }
  // Convert to tile units.
  const tileDelta = screenToTilePoint(screenDelta, tileSize)

  // Find the current center for the current zoom in tile units and add the delta.
  const tileCenter = coordinateToTilePoint(center, zoom)
  const adjTileCenter = {
    x: tileCenter.x + tileDelta.x,
    y: tileCenter.y + tileDelta.y,
  }

  // Find the center in projection units for the given zoom level..
  const coordinate = tilePointToCoordinate(adjTileCenter, zoom)

  // Clip the latitude.
  const latitude = limitValue(coordinate.latitude, -LATITUDE_LIMIT, LATITUDE_LIMIT)

  let longitude = coordinate.longitude
  if (wrapLongitude) {
    // Allow the longitude to wrap.
    longitude %= 180
  }

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
 * @param screenSize The size of the screen
 * @param tileSize The size of the tiles
 * @returns The x and y coordinates of the point in th screen coordinate system
 */
export function recenterScreenPoint(
  coordinate: Coordinate,
  center: Coordinate,
  zoom: number,
  screenSize: Size,
  tileSize: Size
): Point {
  const centerTilePoint = coordinateToTilePoint(center, zoom)
  const coordinateTilePoint = coordinateToTilePoint(coordinate, zoom)
  const deltaTilePoint = {
    x: coordinateTilePoint.x - centerTilePoint.x,
    y: coordinateTilePoint.y - centerTilePoint.y,
  }
  const deltaScreenPoint = tileToScreenPoint(deltaTilePoint, tileSize)

  return {
    x: deltaScreenPoint.x + screenSize.width / 2,
    y: deltaScreenPoint.y + screenSize.height / 2,
  }
}

/**
 * Find all the points that would be visible.
 *
 * @param point The starting pointy.
 * @param roundedZoom The rounded zoom
 * @param scale The scale.
 * @param screenWidth The screen width.
 * @param tileWidth The tile width.
 * @returns A list of the points
 *
 * @ignore
 */
export function createVisiblePoints(
  point: Point,
  roundedZoom: number,
  scale: number,
  screenWidth: number,
  tileWidth: number
): Point[] {
  const maxTiles = 2 ** roundedZoom
  const expectedWidth = maxTiles * tileWidth * scale

  // If the screen is zoomed out the coordinate may appear many times as the display will wrap horizontally.
  const elementPoints: Point[] = [point]
  // Points to the left.
  for (
    let p = { x: point.x - expectedWidth, y: point.y };
    p.x >= 0;
    p = { x: p.x - expectedWidth, y: p.y }
  ) {
    elementPoints.push(p)
  }
  // Points to the right.
  for (
    let p = { x: point.x + expectedWidth, y: point.y };
    p.x < screenWidth;
    p = { x: p.x + expectedWidth, y: p.y }
  ) {
    elementPoints.push(p)
  }

  return elementPoints
}

/**
 * Return the bounds of the view area in the world coordinate system.
 *
 * @param center The center of the map in world coordinates.
 * @param zoom The zoom level.
 * @param bounds The bounds of the view area in the screen coordinate system.
 * @param tileSize The size of a tile
 * @returns The bounds of the view area in the world coordinate system.
 */
export function calcWorldBounds(
  center: Coordinate,
  zoom: number,
  bounds: Bounds,
  tileSize: Size
): CoordinateBounds {
  return {
    northWest: screenPointToCoordinate({ x: 0, y: 0 }, center, zoom, bounds, tileSize, false),
    southEast: screenPointToCoordinate(
      { x: bounds.width, y: bounds.height },
      center,
      zoom,
      bounds,
      tileSize,
      false
    ),
  }
}

/**
 * Determine if a coordinate is inside the viewable area given in the world
 * coordinate system.
 *
 * @param latitude The latitude.
 * @param longitude The longitude.
 * @param bounds The bounds of the viewable area in the world coordinate system.
 * @returns True if the coordinate was within the bounds; otherwise false.
 */
export function isInWorldBounds(
  latitude: number,
  longitude: number,
  { northWest, southEast }: CoordinateBounds
): boolean {
  return (
    latitude <= northWest.latitude &&
    latitude >= southEast.latitude &&
    longitude >= northWest.longitude &&
    longitude <= southEast.longitude
  )
}

/**
 * Determine if a coordinate is inside the viewable area given in the world
 * coordinate system.
 *
 * @param coordinate The coordinate in the world coordinate system.
 * @param worldBounds The bounds of the viewable area in the world coordinate system.
 * @returns True if the coordinate was within the bounds; otherwise false.
 */
export function isCoordinateInWorldBounds(
  { latitude, longitude }: Coordinate,
  worldBounds: CoordinateBounds
): boolean {
  return isInWorldBounds(latitude, longitude, worldBounds)
}

/**
 * Limit a coordinate in the world coordinate system to be within the bounds
 * of a minimum and maximum coordinate.
 *
 * @param coordinate The coordinate to limit.
 * @param min The minimum allowed value.
 * @param max The maximum allowed value in the world coordinate system.
 * @returns The value, limited by the minimum and maximum values.
 */
export const limitCoordinate = (
  { latitude, longitude }: Coordinate,
  min: Coordinate = LOCATIONS.southWest,
  max: Coordinate = LOCATIONS.northEast
): Coordinate => ({
  latitude: limitValue(latitude, min.latitude, max.latitude),
  longitude: limitValue(longitude, min.longitude, max.longitude),
})

import React from 'react'

/**
 * An earth coordinate in terms of latitude and longitude.
 */
export interface Coordinate {
  /** The latitude from the north pole to the south pole, passing
   * through the international reference meridian. This ranges
   * from 90 degrees in the north to -90 degrees in the south.
   */
  latitude: number
  /**
   * The longitude around the equator ranging from 180 degrees in
   * the east to -180 degrees in the west.
   */
  longitude: number
}

/**
 * A point in the Cartesian coordinate system.
 */
export type Point = {
  /** A point on the horizontal axis. */
  x: number
  /** A point on the vertical axis */
  y: number
}

/**
 * The type for scale information returned from [[`calcScaleInfo`]]
 */
export interface ScaleInfo {
  roundedZoom: number
  scale: number
  scaleWidth: number
  scaleHeight: number
}

/**
 * The type for the screen bounds.
 */
export interface Bounds {
  /** The top */
  top: number
  /** The left */
  left: number
  /** The width */
  width: number
  /** The height */
  height: number
}

/**
 * The type for a tile provider.
 *
 * The tile provider takes the tile coordinates and returns an image url.
 */
export type TileUrlProvider = (
  /** The x coordinate of the tile */
  x: number,
  /** The y coordinate of the tile */
  y: number,
  /** The zoom level */
  zoom: number,
  /** Optional resolutions */
  dpr?: number
) => string

export interface TileProvider {
  makeUrl: TileUrlProvider
  attribution: React.ReactElement
}

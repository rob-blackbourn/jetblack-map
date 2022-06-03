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

export interface ScaleInfo {
  roundedZoom: number
  scale: number
  scaleWidth: number
  scaleHeight: number
}
export interface TileInfo extends ScaleInfo {
  tileMin: Point
  tileMax: Point
  tileCenter: Point
}

export interface Bounds {
  top: number
  left: number
  width: number
  height: number
}

export type TileProvider = (
  x: number,
  y: number,
  z: number,
  dpr?: number
) => string

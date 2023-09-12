export const toDegrees = (radians: number): number => (radians / Math.PI) * 180
export const toRadians = (degrees: number): number => (degrees * Math.PI) / 180

// These functions are provided by the Open Street Map wiki.
// See: https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames

/**
 * Calculate the x coordinate from a longitude in the tile coordinate system.
 *
 * Where -180 degrees = 0, 0 degrees = 0.5, 180 degrees = 1.
 *
 * There are no limits. for example -360 degrees == -0.5.
 *
 * @param lng The longitude
 * @param zoom The zoom level
 * @returns The x coordinate in the tile coordinate system
 */
export const lng2tile = (lng: number, zoom: number): number => ((lng + 180) / 360) * 2 ** zoom

/**
 * Calculate the y coordinate from a latitude in the tile coordinate system.
 *
 * Where 85.0511 degrees = 0, 0 degrees = 0, -85.0511 = 1.
 *
 * The function is unstable at the limits. For example -90 degreed gives Infinity.
 *
 * @param lat The latitude
 * @param zoom The zoom level
 * @returns The y coordinate in the tile coordinate system
 */
export function lat2tile(lat: number, zoom: number): number {
  const n = toRadians(lat)
  const y = (1 - Math.log(Math.tan(n) + 1 / Math.cos(n)) / Math.PI) / 2
  return y * 2 ** zoom
}

/**
 * Calculate the longitude from an x coordinate in the tile coordinate system.
 *
 * WHere 0 gives -180 degrees, 0.5 gives 0 degrees, 1 gives 180 degrees.
 *
 * The output is linear for all inputs.
 *
 * @param x The x coordinate in the tile coordinate system
 * @param zoom The zoom level
 * @returns The longitude
 */
export function tile2lng(x: number, zoom: number): number {
  return (x / 2 ** zoom) * 360 - 180
}

/**
 * Calculate the latitude from a y coordinate in the tile coordinate system.
 *
 * Unstable outside: -85.05112 < y < 85.05122
 *
 * @param y The y coordinate in the tile coordinate system
 * @param zoom The zoom level
 * @returns The latitude
 */
export function tile2lat(y: number, zoom: number): number {
  const n = Math.PI - (2 * Math.PI * y) / 2 ** zoom
  return toDegrees(Math.atan((Math.exp(n) - Math.exp(-n)) / 2))
}

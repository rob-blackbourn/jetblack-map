/**
 * Provide a url for a tile from Open Street Map.
 *
 * @param x The x coordinate in the tile coordinate system.
 * @param y The y coordinate in the tile coordinate system.
 * @param zoom The zoom level.
 * @returns A url for the tile with these parameters.
 */
export function osmTileProvider(x: number, y: number, zoom: number): string {
  const s = String.fromCharCode(97 + ((x + y + zoom) % 3))
  return `https://${s}.tile.openstreetmap.org/${zoom}/${x}/${y}.png`
}

/**
 * Provide a url for a tile from Stamen Tiles using the toner variant.
 *
 * @param x The x coordinate in the tile coordinate system.
 * @param y The y coordinate in the tile coordinate system.
 * @param zoom The zoom level.
 * @param dpr A resolution.
 * @returns A url for the tile with these parameters.
 */
export function stamenTonerTileProvider(
  x: number,
  y: number,
  zoom: number,
  dpr = 1
): string {
  const d = dpr >= 2 ? '@2x' : ''
  return `https://stamen-tiles.a.ssl.fastly.net/toner/${zoom}/${x}/${y}${d}.png`
}

/**
 * Provide a url for a tile from Stamen Tiles using the terrain variant.
 *
 * @param x The x coordinate in the tile coordinate system.
 * @param y The y coordinate in the tile coordinate system.
 * @param zoom The zoom level.
 * @param dpr A resolution.
 * @returns A url for the tile with these parameters.
 */
export function stamenTerrainTileProvider(
  x: number,
  y: number,
  zoom: number,
  dpr = 1
): string {
  const d = dpr >= 2 ? '@2x' : ''
  return `https://stamen-tiles.a.ssl.fastly.net/terrain/${zoom}/${x}/${y}${d}.jpg`
}

/**
 * A factory method to create a tile provider for Map Tiler.
 *
 * @param apiKey The Map Tiler API key.
 * @param map The map variant
 * @returns A tile provider for Map Tiler.
 */
export const maptilerTileProviderFactory =
  (apiKey: string, map = 'streets') =>
  (x: number, y: number, z: number, dpr = 1): string => {
    const d = dpr >= 2 ? '@2x' : ''
    return `https://api.maptiler.com/maps/${map}/256/${z}/${x}/${y}${d}.png?key=${apiKey}`
  }

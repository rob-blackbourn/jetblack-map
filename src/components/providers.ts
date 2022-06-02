export function osmTileProvider(x: number, y: number, z: number): string {
  const s = String.fromCharCode(97 + ((x + y + z) % 3))
  return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`
}

export function stamenTonerTileProvider(
  x: number,
  y: number,
  z: number,
  dpr = 1
): string {
  const d = dpr >= 2 ? '@2x' : ''
  return `https://stamen-tiles.a.ssl.fastly.net/toner/${z}/${x}/${y}${d}.png`
}

export function stamenTerrainTileProvider(
  x: number,
  y: number,
  z: number,
  dpr = 1
): string {
  const d = dpr >= 2 ? '@2x' : ''
  return `https://stamen-tiles.a.ssl.fastly.net/terrain/${z}/${x}/${y}${d}.jpg`
}

export const maptilerTileProviderFactory =
  (apiKey: string, map = 'streets') =>
  (x: number, y: number, z: number, dpr = 1): string => {
    const d = dpr >= 2 ? '@2x' : ''
    return `https://api.maptiler.com/maps/${map}/256/${z}/${x}/${y}${d}.png?key=${apiKey}`
  }

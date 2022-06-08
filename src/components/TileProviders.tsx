import { TileProvider } from '../types'

/**
 * A tile provider for Open Street Map.
 *
 * @category Tile Provider
 */
export const osmTileProvider: TileProvider = {
  makeUrl: (x: number, y: number, zoom: number): string => {
    const s = String.fromCharCode(97 + ((x + y + zoom) % 3))
    return `https://${s}.tile.openstreetmap.org/${zoom}/${x}/${y}.png`
  },
  attribution: (
    <span>
      {' © '}
      <a
        href="https://www.openstreetmap.org/copyright"
        style={{
          color: '#0078A8',
          textDecoration: 'none',
        }}
        target="_blank"
        rel="noreferrer noopener"
      >
        OpenStreetMap
      </a>
      {' contributors'}
    </span>
  ),
}

/**
 * A tile provider factory for Stamen.
 *
 * @param map The map to use
 * @returns A tile provider for the requested Stamen map
 *
 * @category Tile Provider
 */
export function stamenTileProviderFactory(
  map: 'toner' | 'terrain'
): TileProvider {
  return {
    makeUrl: (x: number, y: number, zoom: number, dpr = 1): string => {
      const d = dpr >= 2 ? '@2x' : ''
      return `https://stamen-tiles.a.ssl.fastly.net/${map}/${zoom}/${x}/${y}${d}.png`
    },
    attribution: (
      <span className="map-attribution">
        Map tiles by{' '}
        <a href="http://stamen.com" target="_blank" rel="noreferrer noopener">
          Stamen Design
        </a>
        , under{' '}
        <a
          href="http://creativecommons.org/licenses/by/3.0"
          target="_blank"
          rel="noreferrer noopener"
        >
          CC BY 3.0
        </a>
        . Data by{' '}
        <a
          href="http://openstreetmap.org"
          target="_blank"
          rel="noreferrer noopener"
        >
          OpenStreetMap
        </a>
        , under{' '}
        <a
          href="http://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noreferrer noopener"
        >
          ODbL
        </a>
        .
      </span>
    ),
  }
}

/**
 * A factory for MapTiler tile providers.
 *
 * @param apiKey The API key
 * @param map The map to use
 * @returns A tile provider for the requested MatTiler map
 *
 * @category Tile Provider
 */
export const maptilerTileProviderFactory = (
  apiKey: string,
  map = 'streets'
): TileProvider => ({
  makeUrl: (x: number, y: number, z: number, dpr = 1): string => {
    const d = dpr >= 2 ? '@2x' : ''
    return `https://api.maptiler.com/maps/${map}/256/${z}/${x}/${y}${d}.png?key=${apiKey}`
  },
  attribution: <span />,
})

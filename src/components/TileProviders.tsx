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
  minZoom: 0,
  maxZoom: 19,
  attribution: (
    <span>
      &copy;&nbsp;
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
  const subdomains = ['a', 'b', 'c', 'd']
  const zooms: { [map: string]: { minZoom: number; maxZoom: number } } = {
    toner: {
      minZoom: 0,
      maxZoom: 20,
    },
    terrain: {
      minZoom: 0,
      maxZoom: 18,
    },
  }

  return {
    makeUrl: (x: number, y: number, zoom: number): string => {
      const r = window.devicePixelRatio > 1 ? '@2x' : ''
      const d = subdomains[(x + y + zoom) % subdomains.length]
      return `https://stamen-tiles-${d}.a.ssl.fastly.net/${map}/${zoom}/${x}/${y}${r}.png`
    },
    ...zooms[map],
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

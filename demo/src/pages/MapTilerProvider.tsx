import React, { useRef, useState } from 'react'

import {
  AttributionLayer,
  Map,
  Coordinate,
  Point,
  TileProvider,
  useClick,
  useDrag,
  useZoom,
} from '../../../dist'

const tileProviders: { [key: string]: { title: string; tileProvider: TileProvider } } = {
  basic: {
    title: 'Tile provider MapTiler (basic/512)',
    tileProvider: {
      makeUrl: (x: number, y: number, z: number): string => {
        const apiKey = `${process.env.MAP_TILER_API_KEY}`
        const r = window.devicePixelRatio > 1 ? '@2x' : ''
        return `https://api.maptiler.com/maps/basic/${z}/${x}/${y}${r}.png?key=${apiKey}`
      },
      minZoom: 0,
      maxZoom: 14,
      tileSize: { width: 512, height: 512 },
      attribution: (
        <span>
          <a href="https://www.maptiler.com/copyright/" target="_blank">
            &copy; MapTiler
          </a>{' '}
          <a href="https://www.openstreetmap.org/copyright" target="_blank">
            &copy; OpenStreetMap contributors
          </a>
        </span>
      ),
    },
  },
  streets: {
    title: 'Tile provider MapTiler (streets/256)',
    tileProvider: {
      makeUrl: (x: number, y: number, z: number): string => {
        const apiKey = `${process.env.MAP_TILER_API_KEY}`
        const r = window.devicePixelRatio > 1 ? '@2x' : ''
        return `https://api.maptiler.com/maps/streets/256/${z}/${x}/${y}${r}.png?key=${apiKey}`
      },
      minZoom: 0,
      maxZoom: 17,
      tileSize: { width: 256, height: 256 },
      attribution: (
        <span>
          <a href="https://www.maptiler.com/copyright/" target="_blank">
            &copy; MapTiler
          </a>{' '}
          <a href="https://www.openstreetmap.org/copyright" target="_blank">
            &copy; OpenStreetMap contributors
          </a>
        </span>
      ),
    },
  },
  streets512: {
    title: 'Tile provider MapTiler (streets/512)',
    tileProvider: {
      makeUrl: (x: number, y: number, z: number): string => {
        const apiKey = `${process.env.MAP_TILER_API_KEY}`
        const r = window.devicePixelRatio > 1 ? '@2x' : ''
        return `https://api.maptiler.com/maps/streets/${z}/${x}/${y}${r}.png?key=${apiKey}`
      },
      minZoom: 0,
      maxZoom: 14,
      tileSize: { width: 512, height: 512 },
      attribution: (
        <span>
          <a href="https://www.maptiler.com/copyright/" target="_blank">
            &copy; MapTiler
          </a>{' '}
          <a href="https://www.openstreetmap.org/copyright" target="_blank">
            &copy; OpenStreetMap contributors
          </a>
        </span>
      ),
    },
  },
  satellite: {
    title: 'Tile provider MapTiler (Satellite)',
    tileProvider: {
      makeUrl: (x: number, y: number, z: number): string => {
        const apiKey = `${process.env.MAP_TILER_API_KEY}`
        return `https://api.maptiler.com/tiles/satellite-v2/${z}/${x}/${y}.jpg?key=${apiKey}`
      },
      minZoom: 0,
      maxZoom: 17,
      tileSize: { width: 256, height: 256 },
      attribution: (
        <span>
          <a href="https://www.maptiler.com/copyright/" target="_blank">
            &copy; MapTiler
          </a>{' '}
          <a href="https://www.openstreetmap.org/copyright" target="_blank">
            &copy; OpenStreetMap contributors
          </a>
        </span>
      ),
    },
  },
  satelliteHybrid: {
    title: 'Tile provider MapTiler (Satellite Hybrid 512)',
    tileProvider: {
      makeUrl: (x: number, y: number, z: number): string => {
        const apiKey = `${process.env.MAP_TILER_API_KEY}`
        const r = window.devicePixelRatio > 1 ? '@2x' : ''
        return `https://api.maptiler.com/maps/hybrid/${z}/${x}/${y}${r}.jpg?key=${apiKey}`
      },
      minZoom: 0,
      maxZoom: 17,
      tileSize: { width: 512, height: 512 },
      attribution: (
        <span>
          <a href="https://www.maptiler.com/copyright/" target="_blank">
            &copy; MapTiler
          </a>{' '}
          <a href="https://www.openstreetmap.org/copyright" target="_blank">
            &copy; OpenStreetMap contributors
          </a>
        </span>
      ),
    },
  },
}

interface MapTilerProviderProps {
  tileProvider: TileProvider
}

function MapTilerProvider({ tileProvider }: MapTilerProviderProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { tileSize } = tileProvider

  const [zoom, setZoom] = useZoom({ ref, defaultZoom: 6 })
  const [center, setCenter] = useDrag({
    ref,
    zoom,
    tileSize,
  })

  useClick({
    ref,
    center,
    zoom,
    tileSize,
    onClick: (coordinate: Coordinate, point: Point) => console.log('click', { coordinate, point }),
    onDoubleClick: (coordinate: Coordinate, point: Point) => {
      setCenter(coordinate)
      setZoom(zoom + 1)
    },
  })

  return (
    <Map ref={ref} width={800} height={600} center={center} zoom={zoom} tileProvider={tileProvider}>
      <AttributionLayer />
    </Map>
  )
}

export default function MapTilerProviderWrapper() {
  const [tileProviderKey, setTileProviderKey] = useState('basic')

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTileProviderKey(event.target.value)
  }

  return (
    <div>
      <div style={{ marginBottom: 5 }}>
        <h2>Tiles from MapTiler</h2>

        <p>
          Tiles from MapTiler require an API key stored in the environment variable{' '}
          <code>MAP_TILER_API_KEY</code>. This can be put in a <code>.env</code> file in the root of
          the project.
        </p>

        <pre>MAP_TILER_API_KEY=your_api_key</pre>

        <p>
          Once you have setup a key this demo will show a number of different tile types and sizes.
        </p>

        <select onChange={handleSelect}>
          {Object.entries(tileProviders).map(([key, value]) => (
            <option key={key} value={key}>
              {value.title}
            </option>
          ))}
        </select>
      </div>

      <MapTilerProvider tileProvider={tileProviders[tileProviderKey].tileProvider} />
    </div>
  )
}

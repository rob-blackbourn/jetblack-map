import React, { useRef } from 'react'

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

const tileProviders = {
  basic: {
    title: 'Tile provider MapTiler (basic/512)',
    tileProvider: {
      makeUrl: (x: number, y: number, z: number): string => {
        const apiKey = `${process.env.STORYBOOK_MAP_TILER_API_KEY}`
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
        const apiKey = `${process.env.STORYBOOK_MAP_TILER_API_KEY}`
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
        const apiKey = `${process.env.STORYBOOK_MAP_TILER_API_KEY}`
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
        const apiKey = `${process.env.STORYBOOK_MAP_TILER_API_KEY}`
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
        const apiKey = `${process.env.STORYBOOK_MAP_TILER_API_KEY}`
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

export default function App() {
  const tileProvider = args.tileProvider as TileProvider
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
    <div>
      <p>
        Tiles from MapTiler require an API key stored in the environment variable{' '}
        <code>STORYBOOK_MAP_TILER_API_KEY</code>. This can be put in a <code>.env</code> file in the
        root of the project.
      </p>

      <pre>STORYBOOK_MAP_TILER_API_KEY=your_api_key</pre>

      <Map
        ref={ref}
        width="600px"
        height="400px"
        center={center}
        zoom={zoom}
        tileProvider={tileProvider}
      >
        <AttributionLayer />
      </Map>
    </div>
  )
}

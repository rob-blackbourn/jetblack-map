import React, { useRef } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AttributionLayer, Map, Coordinate, Point, TileLayer, useClick, useMouseEvents, useZoomWheel } from '..'
import { TileProvider } from '../types'

export default {
  title: 'MapTilers',
  component: Map,
} as ComponentMeta<typeof Map>

const Template: ComponentStory<typeof Map> = args => {
  const tileProvider = args.tileProvider as TileProvider
  const ref = useRef<HTMLDivElement>(null)

  const { tileWidth, tileHeight } = tileProvider

  const [zoom, setZoom] = useZoomWheel({ ref, defaultZoom: 6 })
  const [center, setCenter] = useMouseEvents({
    ref,
    zoom,
    tileWidth,
    tileHeight,
  })

  useClick({
    ref,
    center,
    zoom,
    tileWidth,
    tileHeight,
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
        <code>STORYBOOK_MAP_TILER_API_KEY</code>. This can be put in a <code>.env</code> file in the root of the
        project.
      </p>

      <pre>STORYBOOK_MAP_TILER_API_KEY=your_api_key</pre>

      <Map ref={ref} width="600px" height="400px" center={center} zoom={zoom} tileProvider={tileProvider}>
        <TileLayer />
        <AttributionLayer />
      </Map>
    </div>
  )
}

export const Streets = Template.bind({})

Streets.args = {
  tileProvider: {
    makeUrl: (x: number, y: number, z: number): string => {
      const apiKey = `${process.env.STORYBOOK_MAP_TILER_API_KEY}`
      const r = window.devicePixelRatio > 1 ? '@2x' : ''
      return `https://api.maptiler.com/maps/streets/256/${z}/${x}/${y}${r}.png?key=${apiKey}`
    },
    minZoom: 0,
    maxZoom: 17,
    tileWidth: 256,
    tileHeight: 256,
    attribution: <span />,
  },
}
Streets.storyName = 'Tile provider MapTiler (streets/256)'

export const Streets512 = Template.bind({})

Streets512.args = {
  tileProvider: {
    makeUrl: (x: number, y: number, z: number): string => {
      const apiKey = `${process.env.STORYBOOK_MAP_TILER_API_KEY}`
      const r = window.devicePixelRatio > 1 ? '@2x' : ''
      return `https://api.maptiler.com/maps/streets/${z}/${x}/${y}${r}.png?key=${apiKey}`
    },
    minZoom: 0,
    maxZoom: 17,
    tileWidth: 512,
    tileHeight: 512,
    attribution: <span />,
  },
}
Streets512.storyName = 'Tile provider MapTiler (streets/512)'

export const Satellite = Template.bind({})

Satellite.args = {
  tileProvider: {
    makeUrl: (x: number, y: number, z: number): string => {
      const apiKey = `${process.env.STORYBOOK_MAP_TILER_API_KEY}`
      return `https://api.maptiler.com/tiles/satellite-v2/${z}/${x}/${y}.jpg?key=${apiKey}`
    },
    minZoom: 0,
    maxZoom: 17,
    tileWidth: 256,
    tileHeight: 256,
    attribution: <span />,
  },
}
Satellite.storyName = 'Tile provider MapTiler (Satellite)'

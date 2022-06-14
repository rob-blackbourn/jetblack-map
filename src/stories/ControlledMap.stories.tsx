import React, { useRef } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Coordinate, Map, Point, osmTileProvider, useClick, useDrag, useZoom } from '..'

export default {
  title: 'Controlled Map',
  component: Map,
} as ComponentMeta<typeof Map>

const Template: ComponentStory<typeof Map> = args => {
  const ref = useRef<HTMLDivElement>(null)

  const [zoom, setZoom] = useZoom({ ref, defaultZoom: 6 })
  const [center, setCenter] = useDrag({
    ref,
    zoom,
    tileWidth: osmTileProvider.tileWidth,
    tileHeight: osmTileProvider.tileHeight,
  })

  useClick({
    ref,
    center,
    zoom,
    tileWidth: osmTileProvider.tileWidth,
    tileHeight: osmTileProvider.tileHeight,
    onClick: (coordinate: Coordinate, point: Point) => console.log('click', { coordinate, point }),
    onDoubleClick: (coordinate: Coordinate, point: Point) => {
      setCenter(coordinate)
      setZoom(zoom + 1)
    },
  })

  return (
    <Map
      center={center}
      zoom={zoom}
      width="1000px"
      height="600px"
      ref={ref}
      tileProvider={osmTileProvider}
    />
  )
}
export const ControlledMap = Template.bind({})

ControlledMap.args = {
  width: '600px',
  height: '400px',
}

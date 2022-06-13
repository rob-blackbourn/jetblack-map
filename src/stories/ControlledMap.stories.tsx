import React, { useRef } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Coordinate, Map, Point, TileLayer, useClick, useMouseEvents, useZoomWheel } from '..'

export default {
  title: 'Controlled Map',
  component: Map,
} as ComponentMeta<typeof Map>

const Template: ComponentStory<typeof Map> = args => {
  const ref = useRef<HTMLDivElement>(null)

  const [zoom, setZoom] = useZoomWheel({ ref, defaultZoom: 6 })
  const [center, setCenter] = useMouseEvents({
    ref,
    zoom,
    tileWidth: 256,
    tileHeight: 256,
  })

  useClick({
    ref,
    center,
    zoom,
    tileWidth: 256,
    tileHeight: 256,
    onClick: (coordinate: Coordinate, point: Point) => console.log('click', { coordinate, point }),
    onDoubleClick: (coordinate: Coordinate, point: Point) => {
      setCenter(coordinate)
      setZoom(zoom + 1)
    },
  })

  return (
    <Map center={center} zoom={zoom} width="1000px" height="600px" ref={ref}>
      <TileLayer />
    </Map>
  )
}
export const ControlledMap = Template.bind({})

ControlledMap.args = {
  width: '600px',
  height: '400px',
}

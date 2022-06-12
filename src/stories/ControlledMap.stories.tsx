import React, { useRef } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  Coordinate,
  Map,
  Point,
  TileLayer,
  useClick,
  useMouseEvents,
  useZoomWheel,
} from '..'

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
  })

  const handleClick = (coordinate: Coordinate, point: Point) => {
    console.log('click', { coordinate, point })
  }

  const handleDoubleClick = (coordinate: Coordinate, point: Point) => {
    console.log('doubleClick', { coordinate, point })
    setCenter(coordinate)
    setZoom(zoom + 1)
  }

  useClick({
    ref,
    center,
    zoom,
    onClick: handleClick,
    onDoubleClick: handleDoubleClick,
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

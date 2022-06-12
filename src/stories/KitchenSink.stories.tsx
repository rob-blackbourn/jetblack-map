import React, { useRef } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  AttributionLayer,
  Coordinate,
  Map,
  Marker,
  OverlayLayer,
  Point,
  SVGPin,
  TileLayer,
  ZoomButton,
  useClick,
  useMouseEvents,
  useZoomWheel,
} from '..'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'All Features',
  component: Map,
} as ComponentMeta<typeof Map>

const GREENWICH_OBSERVATORY: Coordinate = {
  latitude: 51.47684676353231,
  longitude: -0.0005261695762532147,
}

const EMPIRE_STATE_BUILDING: Coordinate = {
  latitude: 40.748585815569854,
  longitude: -73.9856543574467,
}

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
    setZoom(zoom + 1)
    setCenter(coordinate)
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
      <OverlayLayer>
        <Marker
          coordinate={GREENWICH_OBSERVATORY}
          render={point => <SVGPin point={point} />}
        />
        <Marker
          coordinate={EMPIRE_STATE_BUILDING}
          render={point => <SVGPin point={point} />}
        />
        <ZoomButton point={{ x: 10, y: 10 }} onChange={zoom => setZoom(zoom)} />
      </OverlayLayer>
      <AttributionLayer />
    </Map>
  )
}
export const KitchenSink = Template.bind({})

KitchenSink.args = {
  width: '600px',
  height: '400px',
}

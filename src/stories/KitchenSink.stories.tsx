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
  ZoomButton,
  useClick,
  useDrag,
  useZoom,
} from '..'
import { osmTileProvider } from '../components/TileProviders'

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

  const [zoom, setZoom] = useZoom({ ref, defaultZoom: 6 })
  const [center, setCenter] = useDrag({
    ref,
    zoom,
    tileSize: osmTileProvider.tileSize,
  })

  useClick({
    ref,
    center,
    zoom,
    tileSize: osmTileProvider.tileSize,
    onClick: (coordinate: Coordinate, point: Point) => console.log('click', { coordinate, point }),
    onDoubleClick: (coordinate: Coordinate, point: Point) => {
      setZoom(zoom + 1)
      setCenter(coordinate)
    },
  })

  return (
    <Map
      center={center}
      zoom={zoom}
      tileProvider={osmTileProvider}
      width="1000px"
      height="600px"
      ref={ref}
    >
      <OverlayLayer>
        <Marker coordinate={GREENWICH_OBSERVATORY} render={point => <SVGPin point={point} />} />
        <Marker coordinate={EMPIRE_STATE_BUILDING} render={point => <SVGPin point={point} />} />
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

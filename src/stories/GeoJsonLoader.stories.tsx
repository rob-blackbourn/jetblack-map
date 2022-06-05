import React, { SVGProps, useEffect, useRef, useState } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Feature, FeatureCollection } from 'geojson'

import {
  Coordinate,
  GeoJSONLayer,
  Map,
  TileLayer,
  useMouseEvents,
  useZoomWheel,
} from '..'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'GeoJSON Loader',
  component: Map,
} as ComponentMeta<typeof Map>

const GREENWICH_OBSERVATORY: Coordinate = {
  latitude: 51.47684676353231,
  longitude: -0.0005261695762532147,
}

const Template: ComponentStory<typeof Map> = args => {
  const [data, setData] = useState<Feature>({} as Feature)

  const ref = useRef<HTMLDivElement>(null)

  const [zoom, zoomRef, setZoom] = useZoomWheel({ ref, defaultZoom: 6 })
  const [center, centerRef, setCenter] = useMouseEvents({
    ref,
    zoomRef,
    defaultCenter: GREENWICH_OBSERVATORY,
  })

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/4_niedrig.geo.json'
    )
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  return (
    <Map ref={ref} center={center} zoom={zoom} {...args}>
      <TileLayer />
      <GeoJSONLayer data={data} />
    </Map>
  )
}
export const GeoJsonLoader = Template.bind({})

GeoJsonLoader.args = {
  width: '600px',
  height: '400px',
}

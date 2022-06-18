import React, { useRef } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FeatureCollection } from 'geojson'

import {
  Coordinate,
  GeoJSONLayer,
  Map,
  MarkerComponentProps,
  osmTileProvider,
  useDrag,
  useZoom,
} from '..'

function PinMarker({ point }: MarkerComponentProps) {
  return (
    <g
      style={{ pointerEvents: 'auto' }}
      transform={`translate(${point.x - 14} ${point.y - 25}) scale(0.5 0.5)`}
    >
      <path
        d="M52 31.5C52 36.8395 49.18 42.314 45.0107 47.6094C40.8672 52.872 35.619 57.678 31.1763 61.6922C30.7916 62.0398 30.2084 62.0398 29.8237 61.6922C25.381 57.678 20.1328 52.872 15.9893 47.6094C11.82 42.314 9 36.8395 9 31.5C9 18.5709 18.6801 9 30.5 9C42.3199 9 52 18.5709 52 31.5Z"
        fill="orange"
        stroke="white"
        strokeWidth="4"
      />
      <circle cx="30.5" cy="30.5" r="8.5" fill="white" opacity={0.6} />
    </g>
  )
}

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'GeoJSON Marker',
  component: Map,
} as ComponentMeta<typeof Map>

const GREENWICH_OBSERVATORY: Coordinate = {
  latitude: 51.47684676353231,
  longitude: -0.0005261695762532147,
}

const Template: ComponentStory<typeof Map> = args => {
  const data: FeatureCollection = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-0.0005261695762532147, 51.47684676353231],
        },
        properties: { name: 'Greenwich Observatory' },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'MultiPoint',
          coordinates: [
            [2.3742684290761105, 48.86380120851702],
            [-1.5517871865064765, 47.246730628236755],
            [1.4460149695779017, 43.606797136829464],
            [3.8655608722043815, 43.59577745327528],
            [5.341636045504812, 43.30855735318184],
            [4.839466141186111, 45.77013358229793],
          ],
        },
        properties: { name: 'French Cities' },
      },
    ],
  }

  const ref = useRef<HTMLDivElement>(null)

  const [zoom, setZoom] = useZoom({ ref, defaultZoom: 6 })
  const [center, setCenter] = useDrag({
    ref,
    zoom,
    defaultCenter: GREENWICH_OBSERVATORY,
    tileSize: osmTileProvider.tileSize,
  })

  return (
    <Map ref={ref} center={center} zoom={zoom} tileProvider={osmTileProvider} {...args}>
      <GeoJSONLayer data={data} markerComponent={PinMarker} />
    </Map>
  )
}
export const GeoJsonMarker = Template.bind({})

GeoJsonMarker.args = {
  width: '600px',
  height: '400px',
}

import React, { SVGProps, useRef } from 'react'

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
  title: 'GeoJSON Layer',
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
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [-2.5826946698502713, 51.46359918153936],
            [-1.8773290720606506, 52.48054446053743],
            [-2.237515760293648, 53.48344634623912],
          ],
        },
        properties: {
          name: 'Bristol-Birmingham-Manchester',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'MultiLineString',
          coordinates: [
            [
              [-1.9866601334551377, 50.71284269506134],
              [-1.8210675694654823, 50.64988780301567],
              [-1.6223564926778955, 49.63967630461819],
            ],
            [
              [1.3185676135378612, 51.132464268639396],
              [1.8451519670249663, 50.95964640369708],
            ],
          ],
        },
        properties: {
          name: 'Channel Ferry Routes',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [-2.725202984442157, 49.59676280493421],
              [-2.410577112861812, 49.60105585469554],
              [-1.8674335029757423, 49.25857832678847],
              [-1.9667890413695357, 49.07668096925981],
              [-2.357587492385122, 49.05498200171354],
              [-2.7980637125976053, 49.392407428298945],
            ],
          ],
        },
        properties: {
          name: 'Channel Islands',
        },
      },
    ],
  }

  const ref = useRef<HTMLDivElement>(null)

  const [zoom, zoomRef, setZoom] = useZoomWheel({ ref, defaultZoom: 6 })
  const [center, centerRef, setCenter] = useMouseEvents({
    ref,
    zoomRef,
    defaultCenter: GREENWICH_OBSERVATORY,
  })

  const handleRequestFeatureStyle = (
    feature: Feature
  ): SVGProps<SVGAElement> | null => {
    if (feature.properties.name === 'French Cities') {
      return {
        fill: '#93c0d099',
        strokeWidth: '2',
        stroke: 'red',
        r: '15',
      }
    } else if ((feature.properties.name = 'Bristol-Birmingham-Manchester')) {
      return {
        fill: 'none',
        strokeWidth: '2',
        stroke: 'blue',
      }
    } else {
      return null
    }
  }

  return (
    <Map ref={ref} center={center} zoom={zoom} {...args}>
      <TileLayer />
      <GeoJSONLayer
        data={data}
        requestFeatureStyle={handleRequestFeatureStyle}
      />
    </Map>
  )
}
export const GeoJsonMap = Template.bind({})

GeoJsonMap.args = {
  width: '600px',
  height: '400px',
}

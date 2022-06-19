import React, { SVGProps, useEffect, useRef, useState } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Feature } from 'geojson'

import { Coordinate, GeoJSONLayer, Map, Point, useClick, useDrag, useZoom } from '..'
import { FeatureState } from '..'
import { osmTileProvider } from '../components/TileProviders'

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

  const [zoom, setZoom] = useZoom({ ref, defaultZoom: 5 })
  const [center, setCenter] = useDrag({
    ref,
    zoom,
    defaultCenter: GREENWICH_OBSERVATORY,
    tileSize: osmTileProvider.tileSize,
  })

  useClick({
    ref,
    center,
    zoom,
    tileSize: osmTileProvider.tileSize,
    onClick: (coordinate: Coordinate, point: Point) => console.log('click', { coordinate, point }),
    onDoubleClick: (coordinate: Coordinate, point: Point) => {
      setCenter(coordinate)
      setZoom(zoom + 1)
    },
  })

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/4_niedrig.geo.json'
    )
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  const handleRequestFeatureStyle = (
    feature: Feature,
    state: FeatureState
  ): SVGProps<SVGSVGElement> | null => {
    if (state.mouseOver) {
      return {
        fill: '#93c0d099',
        strokeWidth: '2',
        stroke: 'white',
        opacity: 0.5,
      }
    } else {
      return {
        fill: '#d4e6ec99',
        strokeWidth: '1',
        stroke: 'white',
        r: '20',
        opacity: 0.3,
      }
    }
  }

  const handleRenderFeature = (feature: Feature) => {
    if (!(feature && feature.properties)) {
      return null
    }

    return (
      <div
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: 2,
          borderRadius: 5,
          fontSize: '75%',
        }}
      >
        <table>
          <tbody>
            {Object.entries(feature.properties).map(([key, value]) => (
              <tr>
                <th style={{ textAlign: 'left' }}>{key}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <Map ref={ref} center={center} zoom={zoom} tileProvider={osmTileProvider} {...args}>
      <GeoJSONLayer
        data={data}
        requestFeatureStyle={handleRequestFeatureStyle}
        renderPopup={handleRenderFeature}
      />
    </Map>
  )
}

export const GeoJsonLoader = Template.bind({})

GeoJsonLoader.args = {
  width: '1000px',
  height: '600px',
}

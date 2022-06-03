import React, { useRef } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Coordinate, Map, Marker, OverlayLayer, SVGPin, TileLayer } from '..'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Overlay Layer',
  component: Map,
} as ComponentMeta<typeof Map>

const GREENWICH_OBSERVATORY: Coordinate = {
  latitude: 51.47684676353231,
  longitude: -0.0005261695762532147,
}

const BUCKINGHAM_PALACE: Coordinate = {
  latitude: 51.501200111998415,
  longitude: -0.14182556179982908,
}

const Template: ComponentStory<typeof Map> = args => {
  return (
    <Map {...args}>
      <TileLayer />
      <OverlayLayer>
        <Marker
          coordinate={GREENWICH_OBSERVATORY}
          render={point => <SVGPin point={point} />}
        />
        <Marker
          coordinate={BUCKINGHAM_PALACE}
          render={point => <SVGPin point={point} size={1.25} />}
        />
      </OverlayLayer>
    </Map>
  )
}
export const OverlayMap = Template.bind({})

OverlayMap.args = {
  width: '600px',
  height: '400px',
  zoom: 11,
  center: BUCKINGHAM_PALACE,
}

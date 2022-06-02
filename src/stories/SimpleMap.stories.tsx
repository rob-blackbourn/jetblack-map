import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Map, TileLayer } from '..'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Simple Map',
  component: Map,
} as ComponentMeta<typeof Map>

const Template: ComponentStory<typeof Map> = args => (
  <Map {...args}>
    <TileLayer />
  </Map>
)

export const MinimumConfig = Template.bind({})

MinimumConfig.args = {
  width: '600px',
  height: '400px',
}
MinimumConfig.storyName = 'Minimum Configuration'

export const ZoomAndCenter = Template.bind({})

ZoomAndCenter.args = {
  width: '600px',
  height: '400px',
  center: {
    latitude: 51.47684676353231,
    longitude: -0.0005261695762532147,
  },
  zoom: 12,
}
ZoomAndCenter.storyName = 'Specify zoom and center'

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Map, TileLayer } from '..'
import { stamenTileProviderFactory } from '../components/TileProviders'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Tile Provider',
  component: Map,
} as ComponentMeta<typeof Map>

const Template: ComponentStory<typeof Map> = args => {
  const tileProvider = stamenTileProviderFactory(
    (args as any).map as 'terrain' | 'toner'
  )

  return (
    <Map width="600px" height="400px">
      <TileLayer tileProvider={tileProvider} />
    </Map>
  )
}

export const StamenTerrain = Template.bind({})

StamenTerrain.args = {
  map: 'terrain',
}
StamenTerrain.storyName = 'Tile provider Stamen (terrain)'

export const StamenToner = Template.bind({})

StamenToner.args = {
  map: 'toner',
}
StamenToner.storyName = 'Tile provider Stamen (toner)'

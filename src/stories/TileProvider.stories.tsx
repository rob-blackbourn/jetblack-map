import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AttributionLayer, Map } from '..'
import { stamenTileProviderFactory } from '../components/TileProviders'

export default {
  title: 'Tile Provider',
  component: Map,
} as ComponentMeta<typeof Map>

const Template: ComponentStory<typeof Map> = args => {
  const tileProvider = stamenTileProviderFactory((args as any).map as 'terrain' | 'toner')

  return (
    <Map width="600px" height="400px" tileProvider={tileProvider}>
      <AttributionLayer />
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

import React from 'react'

import { AttributionLayer, Map, stamenTileProviderFactory } from '../../../dist'

export default function App() {
  const tileProvider = stamenTileProviderFactory('terrain' as 'terrain' | 'toner')

  return (
    <Map width="600px" height="400px" tileProvider={tileProvider}>
      <AttributionLayer />
    </Map>
  )
}

import React from 'react'

import { Map } from '../../../dist'

export default function App() {
  return (
    <Map
      width={600}
      height={400}
      center={{
        latitude: 51.47684676353231,
        longitude: -0.0005261695762532147,
      }}
      zoom={12}
    />
  )
}

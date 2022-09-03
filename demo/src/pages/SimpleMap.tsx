import React from 'react'

import { Map } from '../../../dist'

export default function App() {
  return (
    <div>
      <div>
        <h2>A Simple Map</h2>

        <p>An example of a single map with no other features.</p>
      </div>

      <Map
        width={800}
        height={600}
        center={{
          latitude: 51.47684676353231,
          longitude: -0.0005261695762532147,
        }}
        zoom={12}
      />
    </div>
  )
}

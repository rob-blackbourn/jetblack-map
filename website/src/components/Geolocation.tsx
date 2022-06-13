import React, { useEffect, useState } from 'react'

import { Coordinate, Map } from '@jetblack/map'

export default function Geolocation() {
  const [center, setCenter] = useState<Coordinate>({
    latitude: 51.47684676353231,
    longitude: -0.0005261695762532147,
  })
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => setCenter({ latitude, longitude }),
      error => console.log('error', error)
    )
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <div style={{ margin: '0 auto' }}>
        <Map center={center} />
      </div>
    </div>
  )
}

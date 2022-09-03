import React, { useRef } from 'react'

import {
  AttributionLayer,
  Coordinate,
  Map,
  Marker,
  OverlayLayer,
  Point,
  SVGPin,
  ZoomButton,
  osmTileProvider,
  useClick,
  useDrag,
  useZoom,
} from '../../../dist'

const GREENWICH_OBSERVATORY: Coordinate = {
  latitude: 51.47684676353231,
  longitude: -0.0005261695762532147,
}

const EMPIRE_STATE_BUILDING: Coordinate = {
  latitude: 40.748585815569854,
  longitude: -73.9856543574467,
}

export default function KitchenSink() {
  const ref = useRef<HTMLDivElement>(null)

  const [zoom, setZoom] = useZoom({ ref, defaultZoom: 6 })
  const [center, setCenter] = useDrag({
    ref,
    zoom,
    tileSize: osmTileProvider.tileSize,
  })

  useClick({
    ref,
    center,
    zoom,
    tileSize: osmTileProvider.tileSize,
    onClick: (coordinate: Coordinate, point: Point) => console.log('click', { coordinate, point }),
    onDoubleClick: (coordinate: Coordinate, point: Point) => {
      setZoom(zoom + 1)
      setCenter(coordinate)
    },
  })

  return (
    <div>
      <div>
        <h2>The kitchen sink</h2>

        <p>This example uses a bunch of components and hooks.</p>
      </div>

      <Map
        center={center}
        zoom={zoom}
        tileProvider={osmTileProvider}
        width={800}
        height={600}
        ref={ref}
      >
        <OverlayLayer>
          <Marker coordinate={GREENWICH_OBSERVATORY} render={point => <SVGPin point={point} />} />
          <Marker coordinate={EMPIRE_STATE_BUILDING} render={point => <SVGPin point={point} />} />
          <ZoomButton point={{ x: 10, y: 10 }} onChange={zoom => setZoom(zoom)} />
        </OverlayLayer>
        <AttributionLayer />
      </Map>
    </div>
  )
}

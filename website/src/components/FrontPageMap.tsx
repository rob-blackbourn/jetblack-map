import React, { useRef } from 'react'

import {
  AttributionLayer,
  Coordinate,
  Map,
  Marker,
  OverlayLayer,
  Point,
  SVGPin,
  TileLayer,
  useClick,
  useMouseEvents,
  useZoomWheel,
} from '@jetblack/map'

const places: { [name: string]: Coordinate } = {
  greenwichObservatory: {
    latitude: 51.47684676353231,
    longitude: -0.0005261695762532147,
  },
  empireStateBuilding: {
    latitude: 40.748585815569854,
    longitude: -73.9856543574467,
  },
}

export default function FrontPageMap() {
  const ref = useRef<HTMLDivElement>(null)

  const [zoom, setZoom] = useZoomWheel({ ref, defaultZoom: 0 })
  const [center, setCenter] = useMouseEvents({
    ref,
    defaultCenter: places.greenwichObservatory,
    zoom,
  })

  useClick({
    ref,
    center,
    zoom,
    onDoubleClick: (coordinate: Coordinate, point: Point) => {
      setCenter(coordinate)
      setZoom(zoom + 1)
    },
  })

  return (
    <Map center={center} zoom={zoom} width="450px" height="150px" ref={ref}>
      <TileLayer />
      <OverlayLayer>
        <Marker
          coordinate={places.greenwichObservatory}
          render={point => <SVGPin point={point} />}
        />
        <Marker
          coordinate={places.empireStateBuilding}
          render={point => <SVGPin point={point} />}
        />
      </OverlayLayer>
      <AttributionLayer />
    </Map>
  )
}

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

const GREENWICH_OBSERVATORY: Coordinate = {
  latitude: 51.47684676353231,
  longitude: -0.0005261695762532147,
}

const EMPIRE_STATE_BUILDING: Coordinate = {
  latitude: 40.748585815569854,
  longitude: -73.9856543574467,
}

export default function FrontPageMap() {
  const ref = useRef<HTMLDivElement>(null)

  const [zoom, zoomRef, setZoom] = useZoomWheel({ ref, defaultZoom: 0 })
  const [center, centerRef, setCenter] = useMouseEvents({
    ref,
    defaultCenter: GREENWICH_OBSERVATORY,
    zoomRef,
  })

  const handleDoubleClick = (coordinate: Coordinate, point: Point) => {
    console.log('doubleClick', { coordinate, point })
    setCenter(coordinate)
    setZoom(zoom + 1)
  }

  useClick({
    ref,
    centerRef,
    zoomRef,
    onDoubleClick: handleDoubleClick,
  })

  return (
    <Map center={center} zoom={zoom} width="450px" height="150px" ref={ref}>
      <TileLayer />
      <OverlayLayer>
        <Marker
          coordinate={GREENWICH_OBSERVATORY}
          render={point => <SVGPin point={point} />}
        />
        <Marker
          coordinate={EMPIRE_STATE_BUILDING}
          render={point => <SVGPin point={point} />}
        />
      </OverlayLayer>
      <AttributionLayer />
    </Map>
  )
}

import React, { useRef } from 'react'

import { Coordinate, Map, Point, osmTileProvider, useClick, useDrag, useZoom } from '../../../dist'

export default function ControlledMap() {
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
      setCenter(coordinate)
      setZoom(zoom + 1)
    },
  })

  return (
    <Map
      center={center}
      zoom={zoom}
      width="1000px"
      height="600px"
      ref={ref}
      tileProvider={osmTileProvider}
    />
  )
}

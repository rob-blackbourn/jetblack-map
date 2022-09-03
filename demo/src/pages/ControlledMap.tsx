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
    <div>
      <div>
        <h2>A controlled map</h2>

        <p>
          The map uses the following hooks to control movement, zoom and clicks.
          <ul>
            <li>
              <code>useZoom</code> for zooming with the mouse wheel,
            </li>
            <li>
              <code>useDrag</code> for dragging,
            </li>
            <li>
              <code>useClick</code> for handling single and double clicks.
            </li>
          </ul>
        </p>

        <p>
          Note the use of <code>useRef</code> to pass the reference to the map component to the
          hooks.
        </p>
      </div>

      <Map
        center={center}
        zoom={zoom}
        width={800}
        height={600}
        ref={ref}
        tileProvider={osmTileProvider}
      />
    </div>
  )
}

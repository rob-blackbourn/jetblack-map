import React, { useRef, useState } from 'react'

import {
  AttributionLayer,
  Coordinate,
  Map,
  Point,
  stamenTileProviderFactory,
  TileProvider,
  useClick,
  useDrag,
  useZoom,
} from '../../../dist'

function Example({ tileProvider }: { tileProvider: TileProvider }) {
  const ref = useRef<HTMLDivElement>(null)

  const { tileSize } = tileProvider

  const [zoom, setZoom] = useZoom({ ref, defaultZoom: 6 })
  const [center, setCenter] = useDrag({
    ref,
    zoom,
    tileSize,
  })

  useClick({
    ref,
    center,
    zoom,
    tileSize,
    onClick: (coordinate: Coordinate, point: Point) => console.log('click', { coordinate, point }),
    onDoubleClick: (coordinate: Coordinate, point: Point) => {
      setCenter(coordinate)
      setZoom(zoom + 1)
    },
  })

  return (
    <div>
      <div>
        <h2>Tile Providers</h2>

        <p>An example of using different tile providers.</p>
      </div>

      <Map
        ref={ref}
        width={800}
        height={600}
        center={center}
        zoom={zoom}
        tileProvider={tileProvider}
      >
        <AttributionLayer />
      </Map>
    </div>
  )
}

export default function Wrapper() {
  const [tileProviderKey, setTileProviderKey] = useState('terrain')

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTileProviderKey(event.target.value)
  }

  return (
    <div>
      <div>
        <select onChange={handleSelect}>
          <option value="terrain">Terrain</option>
          <option value="toner">Toner</option>
        </select>
      </div>
      <Example tileProvider={stamenTileProviderFactory(tileProviderKey as 'terrain' | 'toner')} />
    </div>
  )
}

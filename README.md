# @jetblack/map

A map component for React.

The component has a few unique features:

* Is is built as a pure react component with no dependencies,
* When zoomed out the map can scroll continuously in the horizontal direction.
* It uses hooks to provide interaction with the map.

## Installation

Install from npmjs:

```bash
npm install --save @jetblack/map
```

React is a peer dependency and will not be automatically installed.

## Usage

### Tile Layer

Here is a basic map with the tile layer.

```typescript
import { Map, TileLayer } from '@jetblack/map'

export default function App() {
  return (
    <Map width='600px' height='400px'>
        <TileLayer />
    </Map>
  )
}
```

Typically we will want to specify the center of the map and the zoom level.

```typescript
import { Map, TileLayer } from '@jetblack/map'

const GREENWICH_OBSERVATORY: Coordinate = {
  latitude: 51.47684676353231,
  longitude: -0.0005261695762532147,
}

export default function App() {
  return (
    <Map
        width='600px'
        height='400px'
        center={GREENWICH_OBSERVATORY}
        zoom={12}
    >
        <TileLayer />
    </Map>
  )
}
```

### Overlay Layer

An overlay layer can be added.

```typescript
import {
    Map,
    Marker,
    OverlayLayer,
    SVGPin,
    TileLayer
} from '@jetblack/map'

const GREENWICH_OBSERVATORY: Coordinate = {
    latitude: 51.47684676353231,
    longitude: -0.0005261695762532147,
}

const BUCKINGHAM_PALACE: Coordinate = {
    latitude: 51.501200111998415,
    longitude: -0.14182556179982908,
}

export default function App() {
  return (
    <Map
        width='600px'
        height='400px'
        center={GREENWICH_OBSERVATORY}
        zoom={11}
    >
        <TileLayer />
        <OverlayLayer>
            <Marker
                coordinate={GREENWICH_OBSERVATORY}
                render={point => <SVGPin point={point} />}
            />
            <Marker
                coordinate={BUCKINGHAM_PALACE}
                render={point => <SVGPin point={point} />}
            />
        </OverlayLayer>
    </Map>
  )
}
```

### Interaction

Hooks are provided for interaction with the map.

```typescript
import { useRef } from 'react'
import {
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

export default function App() {
  const ref = useRef<HTMLDivElement>(null)

  const [zoom, zoomRef, setZoom] = useZoomWheel({ ref, defaultZoom: 6 })
  const [center, centerRef, setCenter] = useMouseEvents({
    ref,
    defaultCenter: GREENWICH_OBSERVATORY,
    zoomRef,
  })

  const handleClick = (coordinate: Coordinate, point: Point) => {
    console.log('click', { coordinate, point })
  }

  const handleDoubleClick = (coordinate: Coordinate, point: Point) => {
    console.log('doubleClick', { coordinate, point })
    setCenter(coordinate)
    setZoom(zoom + 1)
  }

  useClick({ ref, centerRef, zoomRef, onClick: handleClick, onDoubleClick: handleDoubleClick })

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <div style={{ margin: '0 auto' }}>
        <Map center={center} zoom={zoom} width="1000px" height="600px" ref={ref}>
          <TileLayer />
          <OverlayLayer>
            <Marker coordinate={GREENWICH_OBSERVATORY} render={point => <SVGPin point={point} />} />
            <Marker coordinate={EMPIRE_STATE_BUILDING} render={point => <SVGPin point={point} />} />
          </OverlayLayer>
        </Map>
      </div>
    </div>
  )
}
```

### Hooks

As shown in the example above some hooks are provided for interacting with the map.

The hooks are intentionally primitive. There are a number of excellent packages
which can achieve this.

## Acknowledgements

This is largely a reworking of other libraries.

In particular much of the heavy lifting was done by [Pigeon Maps](https://github.com/mariusandra/pigeon-maps).

Another library which was a good source of ideas was [react-slippy-map](https://github.com/gaswelder/react-slippy-map).
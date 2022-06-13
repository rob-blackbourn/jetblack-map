---
id: "index"
title: "@jetblack/map"
sidebar_label: "Readme"
sidebar_position: 0
custom_edit_url: null
---

# @jetblack/map

A map component for React.

The component has a few unique features:

* Is is built as a pure react component with no dependencies,
* When zoomed out the map can scroll continuously in the horizontal direction.
* It uses hooks to provide interaction with the map.

## Demo

You can see a demo of the map [here](https://rob-blackbourn.github.io/jetblack-example-map/).

## Installation

Install from npmjs:

```bash
npm install --save @jetblack/map
```

React is a peer dependency and will not be automatically installed.

## Usage

### Basic

Here is a basic map using the default tile provider.

```typescript
import { Map } from '@jetblack/map'

export default function App() {
  return (
    <Map width='600px' height='400px' />
  )
}
```

Typically we will want to specify the center of the map and the zoom level.

```typescript
import { Map } from '@jetblack/map'

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
    />
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
    SVGPin
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

The default tile provider is Open Street Map (`osmTileProvider`), which has a
tile width and height of 256.

```typescript
import { useRef } from 'react'
import {
  Coordinate,
  Map,
  Marker,
  OverlayLayer,
  Point,
  SVGPin,
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

  const [zoom, setZoom] = useZoomWheel({ ref, defaultZoom: 6 })
  const [center, setCenter] = useMouseEvents({
    ref,
    defaultCenter: GREENWICH_OBSERVATORY,
    zoom,
    tileWidth: 256,
    tileHeight: 256
  })

  useClick({
    ref,
    center,
    zoom,
    tileWidth: 256,
    tileHeight: 256,
    onClick: (coordinate: Coordinate, point: Point) => {
      console.log('click', { coordinate, point })
    },
    onDoubleClick: (coordinate: Coordinate, point: Point) => {
      // Center and zoom to the double clicked point.
      setCenter(coordinate)
      setZoom(zoom + 1)
    }
  })

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <div style={{ margin: '0 auto' }}>
        <Map center={center} zoom={zoom} width="1000px" height="600px" ref={ref}>
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

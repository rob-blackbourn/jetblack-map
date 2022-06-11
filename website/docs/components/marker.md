---
sidebar_position: 5
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Coordinate, Map, Marker, OverlayLayer, SVGPin, TileLayer } from '@jetblack/map'

# Marker

The marker component is a child of the overlay layer. It provides
a `div` with the top left corner at the provided coordinate, and takes
a render function for a component.

## Properties

* `coordinate`: The latitude and longitude of the top left corner,
* `render`: The render function. The `props` of the render function
  contain the screen coordinate of the top left of the `div`.

<Map
  width='600px'
  height='400px'
  center={{
    latitude: 51.501200111998415,
    longitude: -0.14182556179982908,
  }}
  zoom={11}
>
  <TileLayer />
  <OverlayLayer>
    <Marker
      coordinate={{
        latitude: 51.501200111998415,
        longitude: -0.14182556179982908,
      }}
      render={point => <SVGPin point={point} size={1.25} />}
    />
    <Marker
      coordinate={{
      latitude: 51.47684676353231,
      longitude: -0.0005261695762532147,
    }}
      render={point => <SVGPin point={point} />}
    />
  </OverlayLayer>
</Map>

<Tabs>
  <TabItem value='js' label='JS'>

```jsx
import { Map, Marker, OverlayLayer, SVGPin, TileLayer } from '@jetblack/map'

export default function App() {
  const GREENWICH_OBSERVATORY = {
    latitude: 51.47684676353231,
    longitude: -0.0005261695762532147,
  }

  const BUCKINGHAM_PALACE = {
    latitude: 51.501200111998415,
    longitude: -0.14182556179982908,
  }

  return (
    <Map
      width='600px'
      height='400px'
      center={BUCKINGHAM_PALACE}
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
          render={point => <SVGPin point={point} size={1.25} />}
        />
      </OverlayLayer>
    </Map>
  )
}
```

  </TabItem>
  <TabItem value='ts' label='TS'>

```tsx
import { Coordinate, Map, Marker, OverlayLayer, SVGPin, TileLayer } from '@jetblack/map'

export default function App() {
  const GREENWICH_OBSERVATORY: Coordinate = {
    latitude: 51.47684676353231,
    longitude: -0.0005261695762532147,
  }

  const BUCKINGHAM_PALACE: Coordinate = {
    latitude: 51.501200111998415,
    longitude: -0.14182556179982908,
  }

  return (
    <Map
      width='600px'
      height='400px'
      center={BUCKINGHAM_PALACE}
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
          render={point => <SVGPin point={point} size={1.25} />}
        />
      </OverlayLayer>
    </Map>
  )
}
```

  </TabItem>
</Tabs>

---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Overlay Layer

An overlay layer can be added to display markers.

# Marker

The `Marker` component creates a `div`, the top left corner
of which is the screen point corresponding to the coordinate.

Markers have a render function which is used to display the
desired component. The library comes with a standard pin.

<Tabs>
  <TabItem value='js' label='JS'>

```jsx
import {
    Map,
    Marker,
    OverlayLayer,
    SVGPin,
    TileLayer
} from '@jetblack/map'

const places = {
  greenwichObservatory: {
    latitude: 51.47684676353231,
    longitude: -0.0005261695762532147,
  },
  buckinghamPalace: {
    latitude: 51.501200111998415,
    longitude: -0.14182556179982908,
  }
}

export default function App() {
  return (
    <Map
        width='600px'
        height='400px'
        center={places.greenwichObservatory}
        zoom={11}
    >
        <TileLayer />
        <OverlayLayer>
            <Marker
                coordinate={places.greenwichObservatory}
                render={point => <SVGPin point={point} />}
            />
            <Marker
                coordinate={places.buckinghamPalace}
                render={point => <SVGPin point={point} />}
            />
        </OverlayLayer>
    </Map>
  )
}
```

  </TabItem>
  <TabItem value='ts' label='TS'>

```tsx
import {
    Coordinate,
    Map,
    Marker,
    OverlayLayer,
    SVGPin,
    TileLayer
} from '@jetblack/map'

const places: { [ name: string ]: Coordinate } = {
  greenwichObservatory: {
    latitude: 51.47684676353231,
    longitude: -0.0005261695762532147,
  },
  buckinghamPalace: {
    latitude: 51.501200111998415,
    longitude: -0.14182556179982908,
  }
}

export default function App() {
  return (
    <Map
        width='600px'
        height='400px'
        center={places.greenwichObservatory}
        zoom={11}
    >
        <TileLayer />
        <OverlayLayer>
            <Marker
                coordinate={places.greenwichObservatory}
                render={point => <SVGPin point={point} />}
            />
            <Marker
                coordinate={places.buckinghamPalace}
                render={point => <SVGPin point={point} />}
            />
        </OverlayLayer>
    </Map>
  )
}
```

  </TabItem>
</Tabs>

## Custom Markers

The following code demonstrates a custom marker of a circle centered around the
coordinate.

There are a couple of gotchas here.

1. As the containing `div` is centered around the top left of the coordinate,
    the circle must be shifted up and left. This is done with the `transform`
    style.
2. Mouse events are consumed by the map to allow interaction. If the marker
    should receive mouse events the `pointerEvents` attribute should be set to
    `auto`.

```tsx
export interface CustomMarkerProps {
  point: Point
  radius?: number
  strokeWidth?: number
  color?: string
}

function CircleMarker({
  radius = 10,
  strokeWidth = 2,
  color = 'red'
}: CustomMarkerProps) {
  const size = radius * 2 + strokeWidth * 2

  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        pointerEvents: 'auto',
        transform: `translate(${-size / 2}px, ${-size / 2}px)`,
      }}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={2}
        fill="none"
      />
    </svg>
  )
}
```

This marker could be incorporated into the map as follows:

```tsx
<Map ref={ref} width="600px" height="400px" center={center} zoom={zoom}>
    <TileLayer />
    <OverlayLayer>
    <Marker
      coordinate={places.greenwichObservatory}
      render={point => <CircleMarker point={point} />}
    />
    <Marker
      coordinate={places.greenwichObservatory}
      render={point => <CircleMarker point={point} radius={15} />}
    />
    </OverlayLayer>
</Map>
```

## Using the MapContext

All map children have access to the map context.

When there are a lot of markers the map gets very cluttered when
zoomed out. The following example uses the map context to scale the circle
according to the zoom level. The farther out the map is zoomed the smaller the
circle is.

```tsx
export interface ScaledMarkerProps {
  point: Point
  color?: string
  radius?: number
}

function ScaledMarker({ radius = 5, color = 'red' }: ScaledMarkerProps) {
  // Get zoom info from the context.
  const {
    zoom,
    tileProvider: { minZoom, maxZoom },
  } = useContext(MapContext)

  // Calculate the scale and apply it to the radius of the circle.
  const scale = (zoom - minZoom) / (maxZoom - minZoom)
  const scaledRadius = radius + 20 * radius * scale

const strokeWidth = 2
  const size = scaledRadius * 2 + strokeWidth * 2

  return (
    <svg
      className={classNames.customMarker}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        pointerEvents: 'auto',
        transform: `translate(${-size / 2}px, ${-size / 2}px)`,
      }}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={scaledRadius}
        stroke={color}
        strokeWidth={2}
        fill="none"
      />
    </svg>
  )
}
```

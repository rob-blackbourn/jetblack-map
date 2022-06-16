---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Interaction

Some simple hooks are provided to enable interaction with the map.

The hooks are intentionally basic, as there are a large number of
great event hook packages out there.

Three hooks are provided:

* `useDrag`: Handles dragging the map,
* `useZoom`: Updates the zoom level when the wheel moves.
* `useClick`: Registers callbacks for single or double clicks on the mouse.

A ref is used to bind the mouse events to the map elements.

<Tabs>
  <TabItem value='js' label='JS'>

```jsx
import { useRef } from 'react'

import {
  Map,
  useClick,
  useDrag,
  useZoom,
} from '@jetblack/map'

const tileSize = { width: 256, height: 256 }

export default function App() {
  // A ref is required to bind events to the map.
  const ref = useRef(null)

  const [zoom, setZoom] = useZoom({ ref, defaultZoom: 6 })

  const [center, setCenter] = useDrag({
    ref,
    defaultCenter: { latitude: 51.4768, longitude: -0.0005 },
    zoom,
    tileSize,
  })

  useClick({
    ref,
    center,
    zoom,
    tileSize,
    onClick: (coordinate, point) => console.log('click', { coordinate, point }),
    onDoubleClick: (coordinate, point) => {
      // Zoom in on the new coordinate.
      setCenter(coordinate)
      setZoom(zoom + 1)
    }
  })

  return (
    <Map
      ref={ref}        // Bind the ref to the map component.
      center={center}  // The useDrag hook updates the center property.
      zoom={zoom}      // The useZoom hook updates the zoom property.
      width="1000px"
      height="600px"
    />
  )
}
```

  </TabItem>
  <TabItem value='ts' label='TS'>

```tsx
import { useRef } from 'react'

import {
  Coordinate,
  Map,
  Point,
  useClick,
  useDrag,
  useZoom,
} from '@jetblack/map'

const tileSize = { width: 256, height: 256 }

export default function App() {
  // A ref is required to bind events to the map.
  const ref = useRef<HTMLDivElement>(null)

  const [zoom, setZoom] = useZoom({ ref, defaultZoom: 6 })

  const [center, setCenter] = useDrag({
    ref,
    defaultCenter: { latitude: 51.4768, longitude: -0.0005 },
    zoom,
    tileSize,
  })

  useClick({
    ref,
    center,
    zoom,
    tileSize,
    onClick: (coordinate: Coordinate, point: Point)
      => console.log('click', { coordinate, point }),
    onDoubleClick: (coordinate: Coordinate, point: Point) => {
      // Zoom in on the new coordinate.
      setCenter(coordinate)
      setZoom(zoom + 1)
    }
  })

  return (
    <Map
      ref={ref}        // Bind the ref to the map component.
      center={center}  // The useDrag hook updates the center property.
      zoom={zoom}      // The useZoom hook updates the zoom property.
      width="1000px"
      height="600px"
    />
  )
}
```

  </TabItem>
</Tabs>
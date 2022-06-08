---
sidebar_position: 8
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# GeoJSON Loader

The data can also be loaded dynamically.

<Tabs>
  <TabItem value='js' label='JS'>

```jsx
import React, { useEffect, useRef, useState } from 'react'

import {
  GeoJSONLayer,
  Map,
  TileLayer,
  useClick,
  useMouseEvents,
  useZoomWheel,
} from '@jetblack/maps'

export default function App() {
  const [data, setData] = useState({})

  const ref = useRef(null)

  const [zoom, zoomRef, setZoom] = useZoomWheel({ ref, defaultZoom: 6 })
  const [center, centerRef, setCenter] = useMouseEvents({
    ref,
    zoomRef,
    defaultCenter: GREENWICH_OBSERVATORY,
  })

  const handleClick = (coordinate, point) => {
    console.log('click', { coordinate, point })
  }

  const handleDoubleClick = (coordinate, point) => {
    console.log('doubleClick', { coordinate, point })
    setCenter(coordinate)
    setZoom(zoom + 1)
  }

  useClick({
    ref,
    centerRef,
    zoomRef,
    onClick: handleClick,
    onDoubleClick: handleDoubleClick,
  })

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/4_niedrig.geo.json'
    )
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  const handleRequestFeatureStyle = (feature, state) => {
    if (state.mouseOver) {
      return {
        fill: '#93c0d099',
        strokeWidth: '2',
        stroke: 'white',
        opacity: 0.5,
      }
    } else {
      return {
        fill: '#d4e6ec99',
        strokeWidth: '1',
        stroke: 'white',
        r: '20',
        opacity: 0.3,
      }
    }
  }

  return (
    <Map ref={ref} center={center} zoom={zoom} {...args}>
      <TileLayer />
      <GeoJSONLayer
        data={data}
        requestFeatureStyle={handleRequestFeatureStyle}
        renderPopup={handleRenderFeature}
      />
    </Map>
  )
}
```

  </TabItem>
  <TabItem value='ts' label='TS'>

```tsx
import React, { SVGProps, useEffect, useRef, useState } from 'react'

import { Feature } from 'geojson'

import {
  Coordinate,
  FeatureState,
  GeoJSONLayer,
  Map,
  Point,
  TileLayer,
  useClick,
  useMouseEvents,
  useZoomWheel,
} from '@jetblack/maps'

export default function App() {
  const [data, setData] = useState<Feature>({} as Feature)

  const ref = useRef<HTMLDivElement>(null)

  const [zoom, zoomRef, setZoom] = useZoomWheel({ ref, defaultZoom: 6 })
  const [center, centerRef, setCenter] = useMouseEvents({
    ref,
    zoomRef,
    defaultCenter: GREENWICH_OBSERVATORY,
  })

  const handleClick = (coordinate: Coordinate, point: Point) => {
    console.log('click', { coordinate, point })
  }

  const handleDoubleClick = (coordinate: Coordinate, point: Point) => {
    console.log('doubleClick', { coordinate, point })
    setCenter(coordinate)
    setZoom(zoom + 1)
  }

  useClick({
    ref,
    centerRef,
    zoomRef,
    onClick: handleClick,
    onDoubleClick: handleDoubleClick,
  })

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/4_niedrig.geo.json'
    )
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  const handleRequestFeatureStyle = (
    feature: Feature,
    state: FeatureState
  ): SVGProps<SVGAElement> | null => {
    if (state.mouseOver) {
      return {
        fill: '#93c0d099',
        strokeWidth: '2',
        stroke: 'white',
        opacity: 0.5,
      }
    } else {
      return {
        fill: '#d4e6ec99',
        strokeWidth: '1',
        stroke: 'white',
        r: '20',
        opacity: 0.3,
      }
    }
  }

  return (
    <Map ref={ref} center={center} zoom={zoom} {...args}>
      <TileLayer />
      <GeoJSONLayer
        data={data}
        requestFeatureStyle={handleRequestFeatureStyle}
        renderPopup={handleRenderFeature}
      />
    </Map>
  )
}
```

  </TabItem>
</Tabs>
---
sidebar_position: 8
---

# GeoJSON Loader

The data can also be loaded dynamically.

```typescript
import React, { SVGProps, useEffect, useRef, useState } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Feature } from 'geojson'

import {
  Coordinate,
  GeoJSONLayer,
  Map,
  Point,
  TileLayer,
  useClick,
  useMouseEvents,
  useZoomWheel,
} from '..'
import { FeatureState } from '@jetblack/maps'

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

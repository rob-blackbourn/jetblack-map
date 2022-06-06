The 'GeoJSONLayer' can display data supplied with that format.

For use with typescript the `@types/geojson` library can be installed as a
dev dependency.

The data can be supplied directly.

```typescript
import { Feature, FeatureCollection } from 'geojson'

import {
  Coordinate,
  GeoJSONLayer,
  Map,
  TileLayer,
  useMouseEvents,
  useZoomWheel,
} from '@jetblack/map'

export default function App() {
  const data: FeatureCollection = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-0.0005261695762532147, 51.47684676353231],
        },
        properties: { name: 'Greenwich Observatory' },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'MultiPoint',
          coordinates: [
            [2.3742684290761105, 48.86380120851702],
            [-1.5517871865064765, 47.246730628236755],
            [1.4460149695779017, 43.606797136829464],
            [3.8655608722043815, 43.59577745327528],
            [5.341636045504812, 43.30855735318184],
            [4.839466141186111, 45.77013358229793],
          ],
        },
        properties: { name: 'French Cities' },
      },
    ],
  }

  const handleRequestFeatureStyle = (
    feature: Feature
  ): SVGProps<SVGElement> | null => {
    if (feature.properties.name === 'French Cities') {
      return {
        fill: '#93c0d099',
        strokeWidth: '2',
        stroke: 'red',
        r: '15',
      }
    } else {
      return null
    }
  }

  return (
    <Map ref={ref} center={center} zoom={zoom} {...args}>
      <TileLayer />
      <GeoJSONLayer
        data={data}
        requestFeatureStyle={handleRequestFeatureStyle}
      />
    </Map>
  )
}
```

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

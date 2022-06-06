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

## What Next ?

See {@page ./geojson-loader.md}

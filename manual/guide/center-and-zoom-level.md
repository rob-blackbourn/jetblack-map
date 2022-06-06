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

## What Next ?

See {@page ./tile-provider.md}

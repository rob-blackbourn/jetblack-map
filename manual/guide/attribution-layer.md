Some tile providers request or require attribution.

The following adds an attribution layer.

```typescript
import { AttributionLayer, Map, TileLayer, stamenTileProviderFactory } from '@jetblack/map'

export default function TileProvider() {
  const tileProvider = stamenTileProviderFactory('terrain')

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <div style={{ margin: '0 auto' }}>
        <Map tileProvider={tileProvider}>
          <TileLayer />
          <AttributionLayer />
        </Map>
      </div>
    </div>
  )
}
```

## What Next ?

See {@page ./overlay-layer.md}

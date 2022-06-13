---
sidebar_position: 4
---

# Attribution Layer

Some tile providers request or require attribution.

The following adds an attribution layer.

```typescript
import { AttributionLayer, Map, stamenTileProviderFactory } from '@jetblack/map'

export default function TileProvider() {
  const tileProvider = stamenTileProviderFactory('terrain')

  return (
    <Map tileProvider={tileProvider} width={600} height={400}>
      <AttributionLayer />
    </Map>
  )
}
```

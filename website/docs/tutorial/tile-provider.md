---
sidebar_position: 3
---

# Tile Provider

A number of tile providers are provided. The default is the Open Street Map provider: `osmTileProvider`.

Some of the providers are presented as factories. This might be because they require an API token,
or because they provide different types of maps.

The following example uses [Stamen](http://maps.stamen.com) `terrain` tiles.

```typescript
import { Map, stamenTileProviderFactory } from '@jetblack/map'

export default function TileProvider() {
  const tileProvider = stamenTileProviderFactory('terrain')

  return (
    <Map
      tileProvider={tileProvider}
      width={600}
      height={400}
    />
  )
}
```

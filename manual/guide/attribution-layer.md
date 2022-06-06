A number of tile providers are provided. The default is the Open Street Map provider: `osmTileProvider`.

Some of the providers are presented as factories. This might be because they require an API token,
or because they provide different types of maps.

The following example uses [Stamen](http://maps.stamen.com) `terrain` tiles.

```typescript
import { Map, TileLayer, stamenTileProviderFactory } from '@jetblack/map'

export default function TileProvider() {
  const tileProvider = stamenTileProviderFactory('terrain')

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <div style={{ margin: '0 auto' }}>
        <Map tileProvider={tileProvider}>
          <TileLayer />
        </Map>
      </div>
    </div>
  )
}
```

## What Next ?

See {@page ./overlay-layer.md}

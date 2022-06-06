An overlay layer can be added to display markers.

The `Marker` component creates a `div`, the top left corner
of which is the screen point corresponding to the coordinate.

Markers have a render function which is used to display the
desired component. The library comes with a standard pin.

```typescript
import {
    Map,
    Marker,
    OverlayLayer,
    SVGPin,
    TileLayer
} from '@jetblack/map'

const GREENWICH_OBSERVATORY: Coordinate = {
    latitude: 51.47684676353231,
    longitude: -0.0005261695762532147,
}

const BUCKINGHAM_PALACE: Coordinate = {
    latitude: 51.501200111998415,
    longitude: -0.14182556179982908,
}

export default function App() {
  return (
    <Map
        width='600px'
        height='400px'
        center={GREENWICH_OBSERVATORY}
        zoom={11}
    >
        <TileLayer />
        <OverlayLayer>
            <Marker
                coordinate={GREENWICH_OBSERVATORY}
                render={point => <SVGPin point={point} />}
            />
            <Marker
                coordinate={BUCKINGHAM_PALACE}
                render={point => <SVGPin point={point} />}
            />
        </OverlayLayer>
    </Map>
  )
}
```

## What Next ?

See {@page ./interaction.md}

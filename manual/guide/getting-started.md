## Installation

Install from npmjs:

```bash
npm install --save @jetblack/map
```

React is a peer dependency and will not be automatically installed.

## Usage

### Tile Layer

Here is a basic map with the tile layer.

```typescript
import { Map, TileLayer } from '@jetblack/map'

export default function App() {
  return (
    <Map width='600px' height='400px'>
        <TileLayer />
    </Map>
  )
}
```

## What Next ?

See {@page ./center-and-zoom-level.md}
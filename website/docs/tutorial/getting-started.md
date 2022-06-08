---
sidebar_position: 1
---

# Getting Started

## Installation

Install from npmjs:

```bash
npm install --save @jetblack/map
```

React is a peer dependency and will not be automatically installed.

## Usage

Here is a basic map with the tile layer.

```tsx
import { Map, TileLayer } from '@jetblack/map'

export default function App() {
  return (
    <Map width='600px' height='400px'>
      <TileLayer />
    </Map>
  )
}
```

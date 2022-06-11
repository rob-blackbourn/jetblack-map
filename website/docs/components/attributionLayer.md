---
sidebar_position: 7
---

import { AttributionLayer, Map, TileLayer } from '@jetblack/map'

# AttributionLayer

The attribution layer is a child of the map component, and renders 
attribution taken from the tile provider. It takes no properties,
as it uses the map context.

<Map width='600px' height='400px'>
  <TileLayer />
  <AttributionLayer />
</Map>

```jsx
import { AttributionLayer, Map, TileLayer } from '@jetblack/map'

<Map width='600px' height='400px'>
  <TileLayer />
  <AttributionLayer />
</Map>
```

---
sidebar_position: 6
---

import { AttributionLayer, Map } from '@jetblack/map'

# AttributionLayer

The attribution layer is a child of the map component, and renders 
attribution taken from the tile provider. It takes no properties,
as it uses the map context.

<Map width='600px' height='400px'>
  <AttributionLayer />
</Map>

```jsx
import { AttributionLayer, Map } from '@jetblack/map'

<Map width='600px' height='400px'>
  <AttributionLayer />
</Map>
```

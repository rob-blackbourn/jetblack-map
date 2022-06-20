---
sidebar_position: 9
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# GeoJSON Styling

The `requestFeatureStyle` callback that can be registered to alter the style of a geojson feature. It Takes a geojson feature and a feature state as
arguments, and returns properties that are passed to the svg element.

The `feature` is the geojson feature. The feature state contains
information about the state of the feature. This contains
a boolean `mouseOver`.

The following code changes the opacity of the feature when the mouse
if over it.

<Tabs>
  <TabItem value='js' label='JS'>

```jsx
const handleRequestFeatureStyle = (feature, state) => {
  if (state.mouseOver) {
    return {
      fill: '#93c0d099',
      strokeWidth: '2',
      stroke: 'white',
      opacity: 0.5,
    }
  } else {
    return {
      fill: '#d4e6ec99',
      strokeWidth: '1',
      stroke: 'white',
      r: '20',
      opacity: 0.3,
    }
  }
}
```

  </TabItem>
  <TabItem value='ts' label='TS'>

```tsx
const handleRequestFeatureStyle = (
  feature: Feature,
  state: FeatureState
): SVGProps<SVGSVGElement> | null => {
  if (state.mouseOver) {
    return {
      fill: '#93c0d099',
      strokeWidth: '2',
      stroke: 'white',
      opacity: 0.5,
    }
  } else {
    return {
      fill: '#d4e6ec99',
      strokeWidth: '1',
      stroke: 'white',
      r: '20',
      opacity: 0.3,
    }
  }
}
```

  </TabItem>
</Tabs>


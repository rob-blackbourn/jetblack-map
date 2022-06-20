---
sidebar_position: 10
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# GeoJSON Popups

The renderPopup callback returns a component to render when the mouse
is over a feature. It takes the feature as it's argument and returns
null or the popup to be displayed.

The following displays a table of the feature's properties.

<Tabs>
  <TabItem value='js' label='JS'>

```jsx
const handleRenderFeature = (feature) => {
  if (!(feature && feature.properties)) {
    return null
  }

  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: 2,
        borderRadius: 5,
        fontSize: '75%',
      }}
    >
      <table>
        <tbody>
          {Object.entries(feature.properties).map(([key, value]) => (
            <tr>
              <th style={{ textAlign: 'left' }}>{key}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

  </TabItem>
  <TabItem value='ts' label='TS'>

```tsx
const handleRenderFeature = (feature: Feature) => {
  if (!(feature && feature.properties)) {
    return null
  }

  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: 2,
        borderRadius: 5,
        fontSize: '75%',
      }}
    >
      <table>
        <tbody>
          {Object.entries(feature.properties).map(([key, value]) => (
            <tr>
              <th style={{ textAlign: 'left' }}>{key}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

  </TabItem>
</Tabs>

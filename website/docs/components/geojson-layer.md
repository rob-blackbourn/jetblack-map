---
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# GeoJSONLayer

This layer displays data presented in the [geojson](https://geojson.org/)
format. This data can be provided by code, JSON files, or dynamically
loaded from the internet. Typescript types are available [here](https://www.npmjs.com/package/@types/geojson).

The component has the following properties.

* `data`: The geojson data,
* `requestFeatureStyle`: A callback to request the SVG props for a feature,
* `renderPopup`: A callback to provide a popup when the pointer is over the feature,
* `markerComponent`: A marker component to be used for points.

## `data`

Here's a trivial bit of code that provides some points in code.

<Tabs>
  <TabItem value='js' label='JS'>

```js
const data = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-0.0005261695762532147, 51.47684676353231],
      },
      properties: { name: 'Greenwich Observatory' },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'MultiPoint',
        coordinates: [
          [2.3742684290761105, 48.86380120851702],
          [-1.5517871865064765, 47.246730628236755],
          [1.4460149695779017, 43.606797136829464],
          [3.8655608722043815, 43.59577745327528],
          [5.341636045504812, 43.30855735318184],
          [4.839466141186111, 45.77013358229793],
        ],
      },
      properties: { name: 'French Cities' },
    },
  ],
}
```

  </TabItem>
  <TabItem value='ts' label='TS'>

```ts
// Using the @types/geojson package.
import { FeatureCollection } from 'geojson'

const data: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-0.0005261695762532147, 51.47684676353231],
      },
      properties: { name: 'Greenwich Observatory' },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'MultiPoint',
        coordinates: [
          [2.3742684290761105, 48.86380120851702],
          [-1.5517871865064765, 47.246730628236755],
          [1.4460149695779017, 43.606797136829464],
          [3.8655608722043815, 43.59577745327528],
          [5.341636045504812, 43.30855735318184],
          [4.839466141186111, 45.77013358229793],
        ],
      },
      properties: { name: 'French Cities' },
    },
  ],
}
```

  </TabItem>
</Tabs>

A more common approach would be to load a JSON file. Here's an example
of loading one from the internet.

<Tabs>
  <TabItem value='js' label='JS'>

```jsx
function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/4_niedrig.geo.json'
    )
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  return (
    <Map width={600} height={400} zoom={1}>
      <GeoJSONLayer data={data} />
    </Map>
  )
}
```

  </TabItem>
  <TabItem value='ts' label='TS'>

```tsx
function App() {
  const [data, setData] = useState<Feature>({} as Feature)

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/4_niedrig.geo.json'
    )
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  return (
    <Map width={600} height={400} zoom={1}>
      <GeoJSONLayer data={data} />
    </Map>
  )
}
```

  </TabItem>
</Tabs>

## `requestFeatureStyle`

This is a callback that can be registered to alter the style of a geojson feature. It Takes a geojson feature and a feature state as
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


## `renderPopup`

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

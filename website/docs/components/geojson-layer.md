---
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# GeoJSONLayer

The GeoJson layer can be installed from the package
[@jetblack/map-geojson](https://www.npmjs.com/package/@jetblack/map-geojson),

```bash
npm install --save @jetblack/map-geojson
```

This layer displays data presented in the [geojson](https://geojson.org/)
format. This data can be provided by code, JSON files, or dynamically
loaded from the internet. Typescript types are available [here](https://www.npmjs.com/package/@types/geojson).

The component has the following properties.

* `data`: The geojson data,
* `requestFeatureStyle`: A callback to request the SVG props for a feature,
* `renderPopup`: A callback to provide a popup when the pointer is over the feature,
* `markerComponent`: A marker component to be used for points.

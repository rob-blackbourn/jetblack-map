---
id: "GeoJSONLayerProps"
title: "Interface: GeoJSONLayerProps"
sidebar_label: "GeoJSONLayerProps"
sidebar_position: 0
custom_edit_url: null
---

The prop type for the [[`GeoJSONLayer`]] component.

## Properties

### data

• **data**: `undefined` \| `GeoJSON`

The GeoJSON data

#### Defined in

[src/components/GeoJson/GeoJsonLayer.tsx:28](https://github.com/rob-blackbourn/jetblack-map/blob/c03dbd7/src/components/GeoJson/GeoJsonLayer.tsx#L28)

___

### markerComponent

• `Optional` **markerComponent**: `MarkerComponent`

A marker component to be used for points

#### Defined in

[src/components/GeoJson/GeoJsonLayer.tsx:34](https://github.com/rob-blackbourn/jetblack-map/blob/c03dbd7/src/components/GeoJson/GeoJsonLayer.tsx#L34)

___

### requestFeatureStyle

• `Optional` **requestFeatureStyle**: `RequestFeatureStyleHandler`

A callback to request the SVG props for a feature

#### Defined in

[src/components/GeoJson/GeoJsonLayer.tsx:30](https://github.com/rob-blackbourn/jetblack-map/blob/c03dbd7/src/components/GeoJson/GeoJsonLayer.tsx#L30)

## Methods

### renderPopup

▸ `Optional` **renderPopup**(`feature`, `point`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

A callback to provide a popup when the pointer is over the feature

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | `Feature`<`Geometry`, `GeoJsonProperties`\> |
| `point` | [`Point`](../modules.md#point) |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

[src/components/GeoJson/GeoJsonLayer.tsx:32](https://github.com/rob-blackbourn/jetblack-map/blob/c03dbd7/src/components/GeoJson/GeoJsonLayer.tsx#L32)

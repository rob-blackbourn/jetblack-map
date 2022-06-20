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

• **data**: `GeoJSON`

The GeoJSON data

#### Defined in

[src/components/GeoJson/GeoJsonLayer.tsx:29](https://github.com/rob-blackbourn/jetblack-map/blob/303d233/src/components/GeoJson/GeoJsonLayer.tsx#L29)

___

### markerComponent

• `Optional` **markerComponent**: `MarkerComponent`

A marker component to be used for points

#### Defined in

[src/components/GeoJson/GeoJsonLayer.tsx:35](https://github.com/rob-blackbourn/jetblack-map/blob/303d233/src/components/GeoJson/GeoJsonLayer.tsx#L35)

___

### requestFeatureStyle

• `Optional` **requestFeatureStyle**: `RequestFeatureStyleHandler`

A callback to request the SVG props for a feature

#### Defined in

[src/components/GeoJson/GeoJsonLayer.tsx:31](https://github.com/rob-blackbourn/jetblack-map/blob/303d233/src/components/GeoJson/GeoJsonLayer.tsx#L31)

## Methods

### renderPopup

▸ `Optional` **renderPopup**(`feature`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

A callback to provide a popup when the pointer is over the feature

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | `Feature`<`Geometry`, `GeoJsonProperties`\> |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

[src/components/GeoJson/GeoJsonLayer.tsx:33](https://github.com/rob-blackbourn/jetblack-map/blob/303d233/src/components/GeoJson/GeoJsonLayer.tsx#L33)

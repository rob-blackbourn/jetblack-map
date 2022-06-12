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

[components/GeoJson/GeoJsonLayer.tsx:29](https://github.com/rob-blackbourn/jetblack-map/blob/62d5ba9/src/components/GeoJson/GeoJsonLayer.tsx#L29)

___

### requestFeatureStyle

• `Optional` **requestFeatureStyle**: `RequestFeatureStyleHandler`

A callback to request the SVG props for a feature

#### Defined in

[components/GeoJson/GeoJsonLayer.tsx:31](https://github.com/rob-blackbourn/jetblack-map/blob/62d5ba9/src/components/GeoJson/GeoJsonLayer.tsx#L31)

## Methods

### renderPopup

▸ `Optional` **renderPopup**(`feature`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | `Feature`<`Geometry`, `GeoJsonProperties`\> |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

[components/GeoJson/GeoJsonLayer.tsx:32](https://github.com/rob-blackbourn/jetblack-map/blob/62d5ba9/src/components/GeoJson/GeoJsonLayer.tsx#L32)

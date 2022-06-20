---
id: "ZoomButtonPops"
title: "Interface: ZoomButtonPops"
sidebar_label: "ZoomButtonPops"
sidebar_position: 0
custom_edit_url: null
---

The prop type for a [[`ZoomButton`]] component.

## Properties

### maxZoom

• `Optional` **maxZoom**: `number`

The maximum zoom level.

#### Defined in

[src/components/ZoomButton.tsx:28](https://github.com/rob-blackbourn/jetblack-map/blob/b3b8376/src/components/ZoomButton.tsx#L28)

___

### minZoom

• `Optional` **minZoom**: `number`

The minimum zoom level.

#### Defined in

[src/components/ZoomButton.tsx:26](https://github.com/rob-blackbourn/jetblack-map/blob/b3b8376/src/components/ZoomButton.tsx#L26)

___

### point

• `Optional` **point**: [`Point`](../modules.md#point)

The screen point where the button will be placed.

#### Defined in

[src/components/ZoomButton.tsx:24](https://github.com/rob-blackbourn/jetblack-map/blob/b3b8376/src/components/ZoomButton.tsx#L24)

___

### zoomStep

• `Optional` **zoomStep**: `number`

The amount by which the zoom will be changed on each click.

#### Defined in

[src/components/ZoomButton.tsx:30](https://github.com/rob-blackbourn/jetblack-map/blob/b3b8376/src/components/ZoomButton.tsx#L30)

## Methods

### onChange

▸ **onChange**(`value`): `void`

A callback with the requested zoom level.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/ZoomButton.tsx:32](https://github.com/rob-blackbourn/jetblack-map/blob/b3b8376/src/components/ZoomButton.tsx#L32)

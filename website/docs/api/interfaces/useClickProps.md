---
id: "useClickProps"
title: "Interface: useClickProps"
sidebar_label: "useClickProps"
sidebar_position: 0
custom_edit_url: null
---

The prop type for the [[`useClick`]] hook.

## Properties

### center

• **center**: [`Coordinate`](Coordinate.md)

The map center.

#### Defined in

[src/hooks/useClick.ts:14](https://github.com/rob-blackbourn/jetblack-map/blob/472c22c/src/hooks/useClick.ts#L14)

___

### delay

• `Optional` **delay**: `number`

The time to wait in milliseconds for a double click.

#### Defined in

[src/hooks/useClick.ts:18](https://github.com/rob-blackbourn/jetblack-map/blob/472c22c/src/hooks/useClick.ts#L18)

___

### ref

• **ref**: `RefObject`<`HTMLDivElement`\>

A reference to the map component.

#### Defined in

[src/hooks/useClick.ts:12](https://github.com/rob-blackbourn/jetblack-map/blob/472c22c/src/hooks/useClick.ts#L12)

___

### tileSize

• **tileSize**: [`Size`](Size.md)

The size of a map tile

#### Defined in

[src/hooks/useClick.ts:20](https://github.com/rob-blackbourn/jetblack-map/blob/472c22c/src/hooks/useClick.ts#L20)

___

### zoom

• **zoom**: `number`

The current zoom level

#### Defined in

[src/hooks/useClick.ts:16](https://github.com/rob-blackbourn/jetblack-map/blob/472c22c/src/hooks/useClick.ts#L16)

## Methods

### onClick

▸ `Optional` **onClick**(`coordinate`, `point`): `void`

The handler for a single click event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | [`Coordinate`](Coordinate.md) |
| `point` | [`Point`](../modules.md#point) |

#### Returns

`void`

#### Defined in

[src/hooks/useClick.ts:22](https://github.com/rob-blackbourn/jetblack-map/blob/472c22c/src/hooks/useClick.ts#L22)

___

### onDoubleClick

▸ `Optional` **onDoubleClick**(`coordinate`, `point`): `void`

The handler for a multi click event

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | [`Coordinate`](Coordinate.md) |
| `point` | [`Point`](../modules.md#point) |

#### Returns

`void`

#### Defined in

[src/hooks/useClick.ts:24](https://github.com/rob-blackbourn/jetblack-map/blob/472c22c/src/hooks/useClick.ts#L24)

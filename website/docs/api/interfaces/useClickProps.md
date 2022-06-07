---
id: "useClickProps"
title: "Interface: useClickProps"
sidebar_label: "useClickProps"
sidebar_position: 0
custom_edit_url: null
---

The prop type for the [[`useClickProp`]] hook.

## Properties

### centerRef

• **centerRef**: `RefObject`<[`Coordinate`](Coordinate.md)\>

#### Defined in

[hooks/useClick.ts:21](https://github.com/rob-blackbourn/jetblack-map/blob/1405b9e/src/hooks/useClick.ts#L21)

___

### delay

• `Optional` **delay**: `number`

#### Defined in

[hooks/useClick.ts:23](https://github.com/rob-blackbourn/jetblack-map/blob/1405b9e/src/hooks/useClick.ts#L23)

___

### ref

• **ref**: `RefObject`<`HTMLDivElement`\>

#### Defined in

[hooks/useClick.ts:20](https://github.com/rob-blackbourn/jetblack-map/blob/1405b9e/src/hooks/useClick.ts#L20)

___

### zoomRef

• **zoomRef**: `RefObject`<`number`\>

#### Defined in

[hooks/useClick.ts:22](https://github.com/rob-blackbourn/jetblack-map/blob/1405b9e/src/hooks/useClick.ts#L22)

## Methods

### onClick

▸ `Optional` **onClick**(`coordinate`, `point`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | [`Coordinate`](Coordinate.md) |
| `point` | [`Point`](../modules.md#point) |

#### Returns

`void`

#### Defined in

[hooks/useClick.ts:24](https://github.com/rob-blackbourn/jetblack-map/blob/1405b9e/src/hooks/useClick.ts#L24)

___

### onDoubleClick

▸ `Optional` **onDoubleClick**(`coordinate`, `point`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinate` | [`Coordinate`](Coordinate.md) |
| `point` | [`Point`](../modules.md#point) |

#### Returns

`void`

#### Defined in

[hooks/useClick.ts:25](https://github.com/rob-blackbourn/jetblack-map/blob/1405b9e/src/hooks/useClick.ts#L25)

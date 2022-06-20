---
id: "SVGPinProps"
title: "Interface: SVGPinProps"
sidebar_label: "SVGPinProps"
sidebar_position: 0
custom_edit_url: null
---

The prop type of an [[`SVGPin`]] component.

## Properties

### color

• `Optional` **color**: `string`

The color of the pin

#### Defined in

[src/components/SVGPin.tsx:18](https://github.com/rob-blackbourn/jetblack-map/blob/c05345a/src/components/SVGPin.tsx#L18)

___

### point

• **point**: [`Point`](../modules.md#point)

The point in the screen coordinate system.

#### Defined in

[src/components/SVGPin.tsx:14](https://github.com/rob-blackbourn/jetblack-map/blob/c05345a/src/components/SVGPin.tsx#L14)

___

### size

• `Optional` **size**: `number`

The size of the pin

#### Defined in

[src/components/SVGPin.tsx:16](https://github.com/rob-blackbourn/jetblack-map/blob/c05345a/src/components/SVGPin.tsx#L16)

## Methods

### onClick

▸ `Optional` **onClick**(`event`): `void`

A handler for click events

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`SVGElement`, `MouseEvent`\> |

#### Returns

`void`

#### Defined in

[src/components/SVGPin.tsx:24](https://github.com/rob-blackbourn/jetblack-map/blob/c05345a/src/components/SVGPin.tsx#L24)

___

### onContextMenu

▸ `Optional` **onContextMenu**(`event`): `void`

A handler for a context menu event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`SVGElement`, `MouseEvent`\> |

#### Returns

`void`

#### Defined in

[src/components/SVGPin.tsx:26](https://github.com/rob-blackbourn/jetblack-map/blob/c05345a/src/components/SVGPin.tsx#L26)

___

### onMouseOut

▸ `Optional` **onMouseOut**(`event`): `void`

A handler for mouse-out events

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`SVGElement`, `MouseEvent`\> |

#### Returns

`void`

#### Defined in

[src/components/SVGPin.tsx:20](https://github.com/rob-blackbourn/jetblack-map/blob/c05345a/src/components/SVGPin.tsx#L20)

___

### onMouseOver

▸ `Optional` **onMouseOver**(`event`): `void`

A handler for mouse-over events

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`SVGElement`, `MouseEvent`\> |

#### Returns

`void`

#### Defined in

[src/components/SVGPin.tsx:22](https://github.com/rob-blackbourn/jetblack-map/blob/c05345a/src/components/SVGPin.tsx#L22)

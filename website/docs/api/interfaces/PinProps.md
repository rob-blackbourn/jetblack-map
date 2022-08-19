---
id: "PinProps"
title: "Interface: PinProps<T>"
sidebar_label: "PinProps"
sidebar_position: 0
custom_edit_url: null
---

The prop type of an [[`Pin`]] component.

## Type parameters

| Name |
| :------ |
| `T` |

## Properties

### color

• `Optional` **color**: `string`

The color of the pin

#### Defined in

[src/components/Pin.tsx:20](https://github.com/rob-blackbourn/jetblack-map/blob/c03dbd7/src/components/Pin.tsx#L20)

___

### data

• `Optional` **data**: `T`

Data for the pin

#### Defined in

[src/components/Pin.tsx:16](https://github.com/rob-blackbourn/jetblack-map/blob/c03dbd7/src/components/Pin.tsx#L16)

___

### point

• **point**: [`Point`](../modules.md#point)

The point in the screen coordinate system.

#### Defined in

[src/components/Pin.tsx:14](https://github.com/rob-blackbourn/jetblack-map/blob/c03dbd7/src/components/Pin.tsx#L14)

___

### size

• `Optional` **size**: `number`

The size of the pin

#### Defined in

[src/components/Pin.tsx:18](https://github.com/rob-blackbourn/jetblack-map/blob/c03dbd7/src/components/Pin.tsx#L18)

## Methods

### onClick

▸ `Optional` **onClick**(`event`, `point`, `size`, `data?`): `void`

A handler for click events

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`SVGElement`, `MouseEvent`\> |
| `point` | [`Point`](../modules.md#point) |
| `size` | [`Size`](Size.md) |
| `data?` | `T` |

#### Returns

`void`

#### Defined in

[src/components/Pin.tsx:26](https://github.com/rob-blackbourn/jetblack-map/blob/c03dbd7/src/components/Pin.tsx#L26)

___

### onContextMenu

▸ `Optional` **onContextMenu**(`event`, `point`, `size`, `data?`): `void`

A handler for a context menu event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`SVGElement`, `MouseEvent`\> |
| `point` | [`Point`](../modules.md#point) |
| `size` | [`Size`](Size.md) |
| `data?` | `T` |

#### Returns

`void`

#### Defined in

[src/components/Pin.tsx:33](https://github.com/rob-blackbourn/jetblack-map/blob/c03dbd7/src/components/Pin.tsx#L33)

___

### onHover

▸ `Optional` **onHover**(`mouseOver`, `point`, `size`, `data?`): `void`

A function called when the mouse enters or leaves the pin

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseOver` | `boolean` |
| `point` | [`Point`](../modules.md#point) |
| `size` | [`Size`](Size.md) |
| `data?` | `T` |

#### Returns

`void`

#### Defined in

[src/components/Pin.tsx:24](https://github.com/rob-blackbourn/jetblack-map/blob/c03dbd7/src/components/Pin.tsx#L24)

___

### renderPopup

▸ `Optional` **renderPopup**(`point`, `size`, `data?`): `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

A function called to render a popup when the mouse is over the pin

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](../modules.md#point) |
| `size` | [`Size`](Size.md) |
| `data?` | `T` |

#### Returns

`ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

[src/components/Pin.tsx:22](https://github.com/rob-blackbourn/jetblack-map/blob/c03dbd7/src/components/Pin.tsx#L22)

---
id: "PopupProps"
title: "Interface: PopupProps<T>"
sidebar_label: "PopupProps"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `T` |

## Properties

### data

• **data**: `T`

Data for the popup

#### Defined in

[src/components/Popup.tsx:10](https://github.com/rob-blackbourn/jetblack-map/blob/0342e44/src/components/Popup.tsx#L10)

___

### downShift

• `Optional` **downShift**: `number`

#### Defined in

[src/components/Popup.tsx:14](https://github.com/rob-blackbourn/jetblack-map/blob/0342e44/src/components/Popup.tsx#L14)

___

### leftShift

• `Optional` **leftShift**: `number`

#### Defined in

[src/components/Popup.tsx:11](https://github.com/rob-blackbourn/jetblack-map/blob/0342e44/src/components/Popup.tsx#L11)

___

### point

• **point**: [`Point`](../modules.md#point)

The point in the screen coordinate system.

#### Defined in

[src/components/Popup.tsx:8](https://github.com/rob-blackbourn/jetblack-map/blob/0342e44/src/components/Popup.tsx#L8)

___

### rightShift

• `Optional` **rightShift**: `number`

#### Defined in

[src/components/Popup.tsx:12](https://github.com/rob-blackbourn/jetblack-map/blob/0342e44/src/components/Popup.tsx#L12)

___

### style

• `Optional` **style**: `CSSProperties`

#### Defined in

[src/components/Popup.tsx:17](https://github.com/rob-blackbourn/jetblack-map/blob/0342e44/src/components/Popup.tsx#L17)

___

### upShift

• `Optional` **upShift**: `number`

#### Defined in

[src/components/Popup.tsx:13](https://github.com/rob-blackbourn/jetblack-map/blob/0342e44/src/components/Popup.tsx#L13)

## Methods

### renderPopup

▸ **renderPopup**(`data`): `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

A function called to render a popup when the mouse is over the pin

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

[src/components/Popup.tsx:16](https://github.com/rob-blackbourn/jetblack-map/blob/0342e44/src/components/Popup.tsx#L16)

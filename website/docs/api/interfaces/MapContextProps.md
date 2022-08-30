---
id: "MapContextProps"
title: "Interface: MapContextProps"
sidebar_label: "MapContextProps"
sidebar_position: 0
custom_edit_url: null
---

The prop type of a [[`MapContext`]].

This is the information that children of the map will need.

## Properties

### bounds

• **bounds**: [`Bounds`](Bounds.md)

The bounds of the map in the screen coordinate system

#### Defined in

[components/MapContext.ts:18](https://github.com/rob-blackbourn/jetblack-map/blob/4867b73/src/components/MapContext.ts#L18)

___

### center

• **center**: [`Coordinate`](Coordinate.md)

The latitude and longitude of the center of the map

#### Defined in

[components/MapContext.ts:14](https://github.com/rob-blackbourn/jetblack-map/blob/4867b73/src/components/MapContext.ts#L14)

___

### tileProvider

• **tileProvider**: [`TileProvider`](TileProvider.md)

The tile provider

#### Defined in

[components/MapContext.ts:22](https://github.com/rob-blackbourn/jetblack-map/blob/4867b73/src/components/MapContext.ts#L22)

___

### worldBounds

• **worldBounds**: [`CoordinateBounds`](CoordinateBounds.md)

The bounds of the map in the world coordinate system

#### Defined in

[components/MapContext.ts:20](https://github.com/rob-blackbourn/jetblack-map/blob/4867b73/src/components/MapContext.ts#L20)

___

### zoom

• **zoom**: `number`

The zoom level

#### Defined in

[components/MapContext.ts:16](https://github.com/rob-blackbourn/jetblack-map/blob/4867b73/src/components/MapContext.ts#L16)

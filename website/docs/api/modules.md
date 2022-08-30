---
id: "modules"
title: "@jetblack/map"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Component Interfaces

- [ImageTileProps](interfaces/ImageTileProps.md)
- [MapProps](interfaces/MapProps.md)
- [MarkerProps](interfaces/MarkerProps.md)

## Context Interfaces

- [MapContextProps](interfaces/MapContextProps.md)

## Other Interfaces

- [Bounds](interfaces/Bounds.md)
- [Coordinate](interfaces/Coordinate.md)
- [CoordinateBounds](interfaces/CoordinateBounds.md)
- [OverlayLayerProps](interfaces/OverlayLayerProps.md)
- [PinProps](interfaces/PinProps.md)
- [PopupProps](interfaces/PopupProps.md)
- [SVGPinProps](interfaces/SVGPinProps.md)
- [ScaleInfo](interfaces/ScaleInfo.md)
- [Size](interfaces/Size.md)
- [TileProvider](interfaces/TileProvider.md)
- [ZoomButtonPops](interfaces/ZoomButtonPops.md)
- [useClickProps](interfaces/useClickProps.md)
- [useDragProps](interfaces/useDragProps.md)
- [useZoomProps](interfaces/useZoomProps.md)

## Component Variables

- [Map](modules.md#map)

## Context Variables

- [MapContext](modules.md#mapcontext)

## Other Variables

- [CLASS\_NAMES](modules.md#class_names)

## Tile Provider Variables

- [osmTileProvider](modules.md#osmtileprovider)

## Component Functions

- [AttributionLayer](modules.md#attributionlayer)
- [ImageTile](modules.md#imagetile)
- [Marker](modules.md#marker)
- [OverlayLayer](modules.md#overlaylayer)
- [Pin](modules.md#pin)
- [Popup](modules.md#popup)
- [SVGPin](modules.md#svgpin)
- [ZoomButton](modules.md#zoombutton)

## Other Functions

- [calcScaleInfo](modules.md#calcscaleinfo)
- [calcWorldBounds](modules.md#calcworldbounds)
- [coordinateToTilePoint](modules.md#coordinatetotilepoint)
- [isCoordinateInWorldBounds](modules.md#iscoordinateinworldbounds)
- [isInWorldBounds](modules.md#isinworldbounds)
- [limitCoordinate](modules.md#limitcoordinate)
- [recenterScreenPoint](modules.md#recenterscreenpoint)
- [screenPointToCoordinate](modules.md#screenpointtocoordinate)
- [screenToTilePoint](modules.md#screentotilepoint)
- [tilePointToCoordinate](modules.md#tilepointtocoordinate)
- [useClick](modules.md#useclick)
- [useDrag](modules.md#usedrag)
- [useZoom](modules.md#usezoom)

## Tile Provider Functions

- [stamenTileProviderFactory](modules.md#stamentileproviderfactory)

## Type Aliases

### Point

Ƭ **Point**: `Object`

A point in the Cartesian coordinate system.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | A point on the horizontal axis. |
| `y` | `number` | A point on the vertical axis |

#### Defined in

[types.ts:22](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/types.ts#L22)

## Component Variables

### Map

• `Const` **Map**: `ForwardRefExoticComponent`<[`MapProps`](interfaces/MapProps.md) & `RefAttributes`<`HTMLDivElement`\>\>

Render a map.

**`param`** The props.

**`returns`** A map.

#### Defined in

[components/Map.tsx:52](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/components/Map.tsx#L52)

___

## Context Variables

### MapContext

• `Const` **MapContext**: `Context`<[`MapContextProps`](interfaces/MapContextProps.md)\>

The map context.

#### Defined in

[components/MapContext.ts:30](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/components/MapContext.ts#L30)

___

## Other Variables

### CLASS\_NAMES

• `Const` **CLASS\_NAMES**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clickable` | `string` |
| `draggable` | `string` |
| `primary` | `string` |
| `zoomable` | `string` |

#### Defined in

[constants.ts:56](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/constants.ts#L56)

___

## Tile Provider Variables

### osmTileProvider

• `Const` **osmTileProvider**: [`TileProvider`](interfaces/TileProvider.md)

A tile provider for Open Street Map.

#### Defined in

[components/TileProviders.tsx:8](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/components/TileProviders.tsx#L8)

## Component Functions

### AttributionLayer

▸ **AttributionLayer**(): `Element`

Render the attribution layer.

#### Returns

`Element`

#### Defined in

[components/AttributionLayer.tsx:15](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/components/AttributionLayer.tsx#L15)

___

### ImageTile

▸ **ImageTile**(`props`): `Element`

Render an image tile.

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`ImageTileProps`](interfaces/ImageTileProps.md) | The props. |

#### Returns

`Element`

An image tile.

#### Defined in

[components/ImageTile.tsx:41](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/components/ImageTile.tsx#L41)

___

### Marker

▸ **Marker**(`props`): `Element`

Render a marker component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`MarkerProps`](interfaces/MarkerProps.md) | The props. |

#### Returns

`Element`

A map.

#### Defined in

[components/Marker.tsx:37](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/components/Marker.tsx#L37)

___

### OverlayLayer

▸ **OverlayLayer**(`props`): `Element`

Render an overlay layer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`OverlayLayerProps`](interfaces/OverlayLayerProps.md) | The props. |

#### Returns

`Element`

A map.

#### Defined in

[components/OverlayLayer.tsx:33](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/components/OverlayLayer.tsx#L33)

___

### Pin

▸ **Pin**<`T`\>(`props`): `Element`

Render a pin.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`PinProps`](interfaces/PinProps.md)<`T`\> | The props. |

#### Returns

`Element`

A pin at the point.

#### Defined in

[components/Pin.tsx:49](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/components/Pin.tsx#L49)

___

### Popup

▸ **Popup**(`props`): `Element`

Render a popup.

The popup will attempt to stay inside the map space by
checking if the point is in the left/right and top/bottom
of the screen and positioning the containing `div` appropriately.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`PopupProps`](interfaces/PopupProps.md) | The props. |

#### Returns

`Element`

A popup near the point.

#### Defined in

[components/Popup.tsx:35](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/components/Popup.tsx#L35)

___

### SVGPin

▸ **SVGPin**(`props`): `Element`

Render an SVG pin.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`SVGPinProps`](interfaces/SVGPinProps.md) | The props. |

#### Returns

`Element`

A map.

#### Defined in

[components/SVGPin.tsx:37](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/components/SVGPin.tsx#L37)

___

### ZoomButton

▸ **ZoomButton**(`props`): `Element`

Render a zoom button.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`ZoomButtonPops`](interfaces/ZoomButtonPops.md) | The props. |

#### Returns

`Element`

A map.

#### Defined in

[components/ZoomButton.tsx:43](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/components/ZoomButton.tsx#L43)

___

## Other Functions

### calcScaleInfo

▸ **calcScaleInfo**(`zoom`, `screenSize`): [`ScaleInfo`](interfaces/ScaleInfo.md)

Calculate scale factors.

The tiles are provide at discrete zoom levels starting at 0 where a single tile represents the world.

To provide smooth scrolling the width and height of the image tiles can be scaled.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zoom` | `number` | The zoom level |
| `screenSize` | [`Size`](interfaces/Size.md) | The screen size |

#### Returns

[`ScaleInfo`](interfaces/ScaleInfo.md)

An object containing the rounded zoom, the scale, the scale width and height.

#### Defined in

[tileMath.ts:88](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/tileMath.ts#L88)

___

### calcWorldBounds

▸ **calcWorldBounds**(`center`, `zoom`, `bounds`, `tileSize`): [`CoordinateBounds`](interfaces/CoordinateBounds.md)

Return the bounds of the view area in the world coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `center` | [`Coordinate`](interfaces/Coordinate.md) | The center of the map in world coordinates. |
| `zoom` | `number` | The zoom level. |
| `bounds` | [`Bounds`](interfaces/Bounds.md) | The bounds of the view area in the screen coordinate system. |
| `tileSize` | [`Size`](interfaces/Size.md) | The size of a tile |

#### Returns

[`CoordinateBounds`](interfaces/CoordinateBounds.md)

The bounds of the view area in the world coordinate system.

#### Defined in

[tileMath.ts:272](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/tileMath.ts#L272)

___

### coordinateToTilePoint

▸ **coordinateToTilePoint**(`coordinate`, `zoom`): [`Point`](modules.md#point)

Convert a latitude and longitude to an x and y point in the tile coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coordinate` | [`Coordinate`](interfaces/Coordinate.md) | The coordinate from which to calculate a tile point |
| `zoom` | `number` | The zoom level |

#### Returns

[`Point`](modules.md#point)

The point in the tile coordinate system

#### Defined in

[tileMath.ts:60](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/tileMath.ts#L60)

___

### isCoordinateInWorldBounds

▸ **isCoordinateInWorldBounds**(`coordinate`, `worldBounds`): `boolean`

Determine if a coordinate is inside the viewable area given in the world
coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coordinate` | [`Coordinate`](interfaces/Coordinate.md) | The coordinate in the world coordinate system. |
| `worldBounds` | [`CoordinateBounds`](interfaces/CoordinateBounds.md) | The bounds of the viewable area in the world coordinate system. |

#### Returns

`boolean`

True if the coordinate was within the bounds; otherwise false.

#### Defined in

[tileMath.ts:321](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/tileMath.ts#L321)

___

### isInWorldBounds

▸ **isInWorldBounds**(`latitude`, `longitude`, `bounds`): `boolean`

Determine if a coordinate is inside the viewable area given in the world
coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `latitude` | `number` | The latitude. |
| `longitude` | `number` | The longitude. |
| `bounds` | [`CoordinateBounds`](interfaces/CoordinateBounds.md) | The bounds of the viewable area in the world coordinate system. |

#### Returns

`boolean`

True if the coordinate was within the bounds; otherwise false.

#### Defined in

[tileMath.ts:300](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/tileMath.ts#L300)

___

### limitCoordinate

▸ **limitCoordinate**(`coordinate`, `min?`, `max?`): [`Coordinate`](interfaces/Coordinate.md)

Limit a coordinate in the world coordinate system to be within the bounds
of a minimum and maximum coordinate.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `coordinate` | [`Coordinate`](interfaces/Coordinate.md) | `undefined` | The coordinate to limit. |
| `min` | [`Coordinate`](interfaces/Coordinate.md) | `LOCATIONS.southWest` | The minimum allowed value. |
| `max` | [`Coordinate`](interfaces/Coordinate.md) | `LOCATIONS.northEast` | The maximum allowed value in the world coordinate system. |

#### Returns

[`Coordinate`](interfaces/Coordinate.md)

The value, limited by the minimum and maximum values.

#### Defined in

[tileMath.ts:337](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/tileMath.ts#L337)

___

### recenterScreenPoint

▸ **recenterScreenPoint**(`coordinate`, `center`, `zoom`, `screenSize`, `tileSize`): [`Point`](modules.md#point)

Convert a longitude and latitude to an x and y in the screen coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `coordinate` | [`Coordinate`](interfaces/Coordinate.md) | The longitude and latitude of the point |
| `center` | [`Coordinate`](interfaces/Coordinate.md) | The longitude and latitude of the center of the screen |
| `zoom` | `number` | The zoom level |
| `screenSize` | [`Size`](interfaces/Size.md) | The size of the screen |
| `tileSize` | [`Size`](interfaces/Size.md) | The size of the tiles |

#### Returns

[`Point`](modules.md#point)

The x and y coordinates of the point in th screen coordinate system

#### Defined in

[tileMath.ts:198](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/tileMath.ts#L198)

___

### screenPointToCoordinate

▸ **screenPointToCoordinate**(`screenPoint`, `center`, `zoom`, `screenSize`, `tileSize`, `wrapLongitude?`): [`Coordinate`](interfaces/Coordinate.md)

Convert a screen point to a longitude and latitude.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `screenPoint` | [`Point`](modules.md#point) | `undefined` | The point in the screen coordinate system |
| `center` | [`Coordinate`](interfaces/Coordinate.md) | `undefined` | The latitude and longitude of the center of the screen |
| `zoom` | `number` | `undefined` | The zoom level |
| `screenSize` | [`Size`](interfaces/Size.md) | `undefined` | The size of the screen |
| `tileSize` | [`Size`](interfaces/Size.md) | `undefined` | The size of the tiles |
| `wrapLongitude` | `boolean` | `true` | - |

#### Returns

[`Coordinate`](interfaces/Coordinate.md)

The longitude and latitude of the screen point

#### Defined in

[tileMath.ts:147](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/tileMath.ts#L147)

___

### screenToTilePoint

▸ **screenToTilePoint**(`screenPoint`, `tileSize`): [`Point`](modules.md#point)

Convert a point in the screen coordinate system to a point in the
tile coordinate system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `screenPoint` | [`Point`](modules.md#point) | A point in the screen coordinate system. |
| `tileSize` | [`Size`](interfaces/Size.md) | The tile size. |

#### Returns

[`Point`](modules.md#point)

The point in the tile coordinate system.

#### Defined in

[tileMath.ts:115](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/tileMath.ts#L115)

___

### tilePointToCoordinate

▸ **tilePointToCoordinate**(`tilePoint`, `zoom`): [`Coordinate`](interfaces/Coordinate.md)

Convert an x and y point to a longitude and latitude coordinate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tilePoint` | [`Point`](modules.md#point) | The x and y point in the tile coordinate system. |
| `zoom` | `number` | The zoom level |

#### Returns

[`Coordinate`](interfaces/Coordinate.md)

The coordinate as a latitude and longitude

#### Defined in

[tileMath.ts:72](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/tileMath.ts#L72)

___

### useClick

▸ **useClick**(`__namedParameters`): `void`

The useClick hook.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`useClickProps`](interfaces/useClickProps.md) |

#### Returns

`void`

#### Defined in

[hooks/useClick.ts:36](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/hooks/useClick.ts#L36)

___

### useDrag

▸ **useDrag**(`__namedParameters`): [[`Coordinate`](interfaces/Coordinate.md), (`center`: [`Coordinate`](interfaces/Coordinate.md)) => `void`]

A hook for mouse events.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`useDragProps`](interfaces/useDragProps.md) |

#### Returns

[[`Coordinate`](interfaces/Coordinate.md), (`center`: [`Coordinate`](interfaces/Coordinate.md)) => `void`]

#### Defined in

[hooks/useDrag.ts:31](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/hooks/useDrag.ts#L31)

___

### useZoom

▸ **useZoom**(`__namedParameters`): [`number`, (`zoom`: `number`) => `void`]

A hook to integrate the zoom wheel with a map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`useZoomProps`](interfaces/useZoomProps.md) |

#### Returns

[`number`, (`zoom`: `number`) => `void`]

#### Defined in

[hooks/useZoom.ts:26](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/hooks/useZoom.ts#L26)

___

## Tile Provider Functions

### stamenTileProviderFactory

▸ **stamenTileProviderFactory**(`map`): [`TileProvider`](interfaces/TileProvider.md)

A tile provider factory for Stamen.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | ``"toner"`` \| ``"terrain"`` | The map to use |

#### Returns

[`TileProvider`](interfaces/TileProvider.md)

A tile provider for the requested Stamen map

#### Defined in

[components/TileProviders.tsx:43](https://github.com/rob-blackbourn/jetblack-map/blob/32451b5/src/components/TileProviders.tsx#L43)

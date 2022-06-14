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
- [FeatureState](interfaces/FeatureState.md)
- [GeoJSONLayerProps](interfaces/GeoJSONLayerProps.md)
- [OverlayLayerProps](interfaces/OverlayLayerProps.md)
- [SVGPinProps](interfaces/SVGPinProps.md)
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
- [SVGPin](modules.md#svgpin)
- [ZoomButton](modules.md#zoombutton)

## Other Functions

- [GeoJSONLayer](modules.md#geojsonlayer)
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

[types.ts:22](https://github.com/rob-blackbourn/jetblack-map/blob/91a620d/src/types.ts#L22)

## Component Variables

### Map

• `Const` **Map**: `ForwardRefExoticComponent`<[`MapProps`](interfaces/MapProps.md) & `RefAttributes`<`HTMLDivElement`\>\>

Render a map.

**`param`** The props.

**`returns`** A map.

#### Defined in

[components/Map.tsx:43](https://github.com/rob-blackbourn/jetblack-map/blob/91a620d/src/components/Map.tsx#L43)

___

## Context Variables

### MapContext

• `Const` **MapContext**: `Context`<[`MapContextProps`](interfaces/MapContextProps.md)\>

The map context.

#### Defined in

[components/MapContext.ts:28](https://github.com/rob-blackbourn/jetblack-map/blob/91a620d/src/components/MapContext.ts#L28)

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

[constants.ts:40](https://github.com/rob-blackbourn/jetblack-map/blob/91a620d/src/constants.ts#L40)

___

## Tile Provider Variables

### osmTileProvider

• `Const` **osmTileProvider**: `TileProvider`

A tile provider for Open Street Map.

#### Defined in

[components/TileProviders.tsx:8](https://github.com/rob-blackbourn/jetblack-map/blob/91a620d/src/components/TileProviders.tsx#L8)

## Component Functions

### AttributionLayer

▸ **AttributionLayer**(): `Element`

Render the attribution layer.

#### Returns

`Element`

#### Defined in

[components/AttributionLayer.tsx:15](https://github.com/rob-blackbourn/jetblack-map/blob/91a620d/src/components/AttributionLayer.tsx#L15)

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

[components/ImageTile.tsx:41](https://github.com/rob-blackbourn/jetblack-map/blob/91a620d/src/components/ImageTile.tsx#L41)

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

[components/Marker.tsx:33](https://github.com/rob-blackbourn/jetblack-map/blob/91a620d/src/components/Marker.tsx#L33)

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

[components/OverlayLayer.tsx:33](https://github.com/rob-blackbourn/jetblack-map/blob/91a620d/src/components/OverlayLayer.tsx#L33)

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

[components/SVGPin.tsx:37](https://github.com/rob-blackbourn/jetblack-map/blob/91a620d/src/components/SVGPin.tsx#L37)

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

[components/ZoomButton.tsx:43](https://github.com/rob-blackbourn/jetblack-map/blob/91a620d/src/components/ZoomButton.tsx#L43)

___

## Other Functions

### GeoJSONLayer

▸ **GeoJSONLayer**(`__namedParameters`): `Element`

Render a GeoJSON layer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`GeoJSONLayerProps`](interfaces/GeoJSONLayerProps.md) |

#### Returns

`Element`

#### Defined in

[components/GeoJson/GeoJsonLayer.tsx:38](https://github.com/rob-blackbourn/jetblack-map/blob/91a620d/src/components/GeoJson/GeoJsonLayer.tsx#L38)

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

[hooks/useClick.ts:38](https://github.com/rob-blackbourn/jetblack-map/blob/91a620d/src/hooks/useClick.ts#L38)

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

[hooks/useDrag.ts:28](https://github.com/rob-blackbourn/jetblack-map/blob/91a620d/src/hooks/useDrag.ts#L28)

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

[hooks/useZoom.ts:21](https://github.com/rob-blackbourn/jetblack-map/blob/91a620d/src/hooks/useZoom.ts#L21)

___

## Tile Provider Functions

### stamenTileProviderFactory

▸ **stamenTileProviderFactory**(`map`): `TileProvider`

A tile provider factory for Stamen.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | ``"toner"`` \| ``"terrain"`` | The map to use |

#### Returns

`TileProvider`

A tile provider for the requested Stamen map

#### Defined in

[components/TileProviders.tsx:44](https://github.com/rob-blackbourn/jetblack-map/blob/91a620d/src/components/TileProviders.tsx#L44)

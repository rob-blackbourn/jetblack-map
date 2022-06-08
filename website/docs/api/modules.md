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
- [useMouseEventsProps](interfaces/useMouseEventsProps.md)
- [useZoomWheelProps](interfaces/useZoomWheelProps.md)

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
- [TileLayer](modules.md#tilelayer)
- [ZoomButton](modules.md#zoombutton)

## Other Functions

- [GeoJSONLayer](modules.md#geojsonlayer)
- [useClick](modules.md#useclick)
- [useMouseEvents](modules.md#usemouseevents)
- [useZoomWheel](modules.md#usezoomwheel)

## Tile Provider Functions

- [maptilerTileProviderFactory](modules.md#maptilertileproviderfactory)
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

[types.ts:22](https://github.com/rob-blackbourn/jetblack-map/blob/694b7ce/src/types.ts#L22)

## Component Variables

### Map

• `Const` **Map**: `ForwardRefExoticComponent`<[`MapProps`](interfaces/MapProps.md) & `RefAttributes`<`HTMLDivElement`\>\>

Render a map.

**`param`** The props.

**`returns`** A map.

#### Defined in

[components/Map.tsx:50](https://github.com/rob-blackbourn/jetblack-map/blob/694b7ce/src/components/Map.tsx#L50)

___

## Context Variables

### MapContext

• `Const` **MapContext**: `Context`<[`MapContextProps`](interfaces/MapContextProps.md)\>

The map context.

#### Defined in

[components/MapContext.ts:30](https://github.com/rob-blackbourn/jetblack-map/blob/694b7ce/src/components/MapContext.ts#L30)

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

[constants.ts:40](https://github.com/rob-blackbourn/jetblack-map/blob/694b7ce/src/constants.ts#L40)

___

## Tile Provider Variables

### osmTileProvider

• `Const` **osmTileProvider**: `TileProvider`

A tile provider for Open Street Map.

#### Defined in

[components/TileProviders.tsx:8](https://github.com/rob-blackbourn/jetblack-map/blob/694b7ce/src/components/TileProviders.tsx#L8)

## Component Functions

### AttributionLayer

▸ **AttributionLayer**(): `Element`

Render the attribution layer.

#### Returns

`Element`

#### Defined in

[components/AttributionLayer.tsx:15](https://github.com/rob-blackbourn/jetblack-map/blob/694b7ce/src/components/AttributionLayer.tsx#L15)

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

[components/ImageTile.tsx:43](https://github.com/rob-blackbourn/jetblack-map/blob/694b7ce/src/components/ImageTile.tsx#L43)

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

[components/Marker.tsx:33](https://github.com/rob-blackbourn/jetblack-map/blob/694b7ce/src/components/Marker.tsx#L33)

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

[components/OverlayLayer.tsx:33](https://github.com/rob-blackbourn/jetblack-map/blob/694b7ce/src/components/OverlayLayer.tsx#L33)

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

[components/SVGPin.tsx:37](https://github.com/rob-blackbourn/jetblack-map/blob/694b7ce/src/components/SVGPin.tsx#L37)

___

### TileLayer

▸ **TileLayer**(): `Element`

Render a tile layer.

#### Returns

`Element`

A map.

#### Defined in

[components/TileLayer.tsx:35](https://github.com/rob-blackbourn/jetblack-map/blob/694b7ce/src/components/TileLayer.tsx#L35)

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

[components/ZoomButton.tsx:43](https://github.com/rob-blackbourn/jetblack-map/blob/694b7ce/src/components/ZoomButton.tsx#L43)

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

[components/GeoJson/GeoJsonLayer.tsx:38](https://github.com/rob-blackbourn/jetblack-map/blob/694b7ce/src/components/GeoJson/GeoJsonLayer.tsx#L38)

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

[hooks/useClick.ts:31](https://github.com/rob-blackbourn/jetblack-map/blob/694b7ce/src/hooks/useClick.ts#L31)

___

### useMouseEvents

▸ **useMouseEvents**(`__namedParameters`): [[`Coordinate`](interfaces/Coordinate.md), `React.RefObject`<[`Coordinate`](interfaces/Coordinate.md)\>, (`center`: [`Coordinate`](interfaces/Coordinate.md)) => `void`]

A hook for mouse events.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`useMouseEventsProps`](interfaces/useMouseEventsProps.md) |

#### Returns

[[`Coordinate`](interfaces/Coordinate.md), `React.RefObject`<[`Coordinate`](interfaces/Coordinate.md)\>, (`center`: [`Coordinate`](interfaces/Coordinate.md)) => `void`]

#### Defined in

[hooks/useMouseEvents.ts:35](https://github.com/rob-blackbourn/jetblack-map/blob/694b7ce/src/hooks/useMouseEvents.ts#L35)

___

### useZoomWheel

▸ **useZoomWheel**(`__namedParameters`): [`number`, `React.RefObject`<`number`\>, (`zoom`: `number`) => `void`]

A hook to integrate the zoom wheel with a map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`useZoomWheelProps`](interfaces/useZoomWheelProps.md) |

#### Returns

[`number`, `React.RefObject`<`number`\>, (`zoom`: `number`) => `void`]

#### Defined in

[hooks/useZoomWheel.ts:21](https://github.com/rob-blackbourn/jetblack-map/blob/694b7ce/src/hooks/useZoomWheel.ts#L21)

___

## Tile Provider Functions

### maptilerTileProviderFactory

▸ **maptilerTileProviderFactory**(`apiKey`, `map?`): `TileProvider`

A factory for MapTiler tile providers.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `apiKey` | `string` | `undefined` | The API key |
| `map` | `string` | `'streets'` | The map to use |

#### Returns

`TileProvider`

A tile provider for the requested MatTiler map

#### Defined in

[components/TileProviders.tsx:93](https://github.com/rob-blackbourn/jetblack-map/blob/694b7ce/src/components/TileProviders.tsx#L93)

___

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

[components/TileProviders.tsx:40](https://github.com/rob-blackbourn/jetblack-map/blob/694b7ce/src/components/TileProviders.tsx#L40)

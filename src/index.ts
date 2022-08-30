import AttributionLayer from './components/AttributionLayer'
import ImageTile, { ImageTileProps } from './components/ImageTile'
import Map, { MapProps } from './components/Map'
import MapContext, { MapContextProps } from './components/MapContext'
import Marker, { MarkerProps } from './components/Marker'
import OverlayLayer, { OverlayLayerProps } from './components/OverlayLayer'
import Pin, { PinProps } from './components/Pin'
import Popup, { PopupProps } from './components/Popup'
import SVGPin, { SVGPinProps } from './components/SVGPin'
import ZoomButton, { ZoomButtonPops } from './components/ZoomButton'

import { osmTileProvider, stamenTileProviderFactory } from './components/TileProviders'

import { Bounds, Coordinate, CoordinateBounds, Point, ScaleInfo, Size, TileProvider } from './types'

import useClick, { useClickProps } from './hooks/useClick'
import useDrag, { useDragProps } from './hooks/useDrag'
import useZoom, { useZoomProps } from './hooks/useZoom'

import {
  calcScaleInfo,
  calcWorldBounds,
  coordinateToTilePoint,
  createVisiblePoints,
  isCoordinateInWorldBounds,
  isInWorldBounds,
  limitCoordinate,
  recenterScreenPoint,
  screenPointToCoordinate,
  screenToTilePoint,
  tilePointToCoordinate,
} from './tileMath'

import { CLASS_NAMES } from './constants'

export type {
  ImageTileProps,
  MapProps,
  MapContextProps,
  MarkerProps,
  OverlayLayerProps,
  PinProps,
  PopupProps,
  SVGPinProps,
  ZoomButtonPops,
  Bounds,
  Coordinate,
  CoordinateBounds,
  Point,
  ScaleInfo,
  Size,
  TileProvider,
  useClickProps,
  useDragProps,
  useZoomProps,
}

export {
  // Components
  AttributionLayer,
  ImageTile,
  Map,
  MapContext,
  Marker,
  OverlayLayer,
  Pin,
  Popup,
  SVGPin,
  ZoomButton,
  // Tile Providers
  osmTileProvider,
  stamenTileProviderFactory,
  // Hooks
  useClick,
  useDrag,
  useZoom,
  // Tile Maths
  calcScaleInfo,
  calcWorldBounds,
  coordinateToTilePoint,
  createVisiblePoints,
  isCoordinateInWorldBounds,
  isInWorldBounds,
  limitCoordinate,
  recenterScreenPoint,
  screenPointToCoordinate,
  screenToTilePoint,
  tilePointToCoordinate,
  // Misc
  CLASS_NAMES,
}

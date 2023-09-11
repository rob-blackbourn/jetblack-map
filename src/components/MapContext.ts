import React from 'react'

import { Bounds, Coordinate, CoordinateBounds, TileProvider } from '../types'

/**
 * The prop type of a [[`MapContext`]].
 *
 * This is the information that children of the map will need.
 *
 * @category Context
 */
export interface MapContextProps {
  /** The latitude and longitude of the center of the map */
  center: Coordinate

  /** The zoom level */
  zoom: number

  /** The bounds of the map in the screen coordinate system */
  bounds: Bounds

  /** The bounds of the map in the world coordinate system */
  worldBounds: CoordinateBounds

  /** The tile provider */
  tileProvider: TileProvider
}

/**
 * The map context.
 *
 * @category Context
 */
const MapContext = React.createContext<MapContextProps>({} as MapContextProps)

export default MapContext

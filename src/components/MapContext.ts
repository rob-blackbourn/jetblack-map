import React from 'react'

import { Bounds, Coordinate, TileProvider } from '../types'

/**
 * The prop type of a [[`MapContext`]].
 *
 * This is the information that children of the map will need.
 */
export interface MapContextProps {
  /** The latitude and longitude of the center of the map */
  center: Coordinate
  /** The zoom level */
  zoom: number
  /** The bounds of the map in hte screen coordinate system */
  bounds: Bounds
  /** The tile provider */
  tileProvider: TileProvider
  /** Optional resolutions */
  dprs: number[]
}

/** The map context */
const MapContext = React.createContext<MapContextProps>({} as MapContextProps)

export default MapContext

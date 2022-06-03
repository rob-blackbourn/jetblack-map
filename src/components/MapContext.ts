import React from 'react'

import { Bounds, Coordinate } from '../types'

/**
 * The prop type for a [[`MapContext`]].
 *
 * This is the information that children of the map will need.
 */
export interface MapContextProps {
  center: Coordinate
  zoom: number
  bounds: Bounds
}

/** The map context */
const MapContext = React.createContext<MapContextProps>({} as MapContextProps)

export default MapContext

import React from 'react'

import { Bounds, Coordinate } from '../types'

// This is the information children of the map will need.
export interface MapContextProps {
  center: Coordinate
  zoom: number
  bounds: Bounds
}

const MapContext = React.createContext<MapContextProps>({} as MapContextProps)

export default MapContext

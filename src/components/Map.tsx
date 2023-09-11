import React, { useEffect, useRef, useState } from 'react'

import { Bounds, Coordinate, CoordinateBounds, TileProvider } from '../types'

import { LOCATIONS, DEFAULTS, CLASS_NAMES } from '../constants'

import MapContext from './MapContext'
import TileLayer from './TileLayer'
import { osmTileProvider } from './TileProviders'
import { calcWorldBounds } from '../mathUtils'

const classNames = {
  map: [
    CLASS_NAMES.primary,
    CLASS_NAMES.draggable,
    CLASS_NAMES.zoomable,
    CLASS_NAMES.clickable,
    'map',
  ].join(' '),
}

/**
 * The prop type of a [[`Map`]] component.
 *
 * @category Component
 */
export interface MapProps {
  /** The center of the map */
  center?: Coordinate
  /** The zoom level */
  zoom?: number
  /** The screen width */
  width?: number | string
  /** The screen height */
  height?: number | string
  /** The tile provider */
  tileProvider?: TileProvider
  /** Map components */
  children?: React.ReactNode
  /** The untilled background */
  background?: string | number | undefined
}

/**
 * Render a map.
 *
 * @param props The props.
 * @returns A map.
 *
 * @category Component
 */
const Map = React.forwardRef<HTMLDivElement, MapProps>(
  (
    {
      center = LOCATIONS.greenwichObservatory,
      zoom = DEFAULTS.zoom,
      width = DEFAULTS.width,
      height = DEFAULTS.height,
      tileProvider = osmTileProvider,
      children,
      background = '#dddddd',
    },
    forwardedRef
  ) => {
    // Use a local ref if a forwarded ref is not available.
    const localRef = useRef<HTMLDivElement>(null)
    const ref = forwardedRef ? (forwardedRef as React.MutableRefObject<HTMLDivElement>) : localRef

    // The screen coordinate system is bounded by the containing div rectangle.
    const [bounds, setBounds] = useState<Bounds>({
      top: 0,
      left: 0,
      width: 0,
      height: 0,
    })

    // The world coordinate system calculated from the containing div rectangle.
    const [worldBounds, setWorldBounds] = useState<CoordinateBounds>({
      northWest: {
        latitude: 0,
        longitude: 0,
      },
      southEast: {
        latitude: 0,
        longitude: 0,
      },
    })

    useEffect(() => {
      if (ref.current) {
        // Update the bounds when the browser has found them.
        setBounds(ref.current.getBoundingClientRect())
      }
    }, [ref])

    useEffect(() => {
      setWorldBounds(calcWorldBounds(center, zoom, bounds, tileProvider.tileSize))
    }, [center, zoom, bounds, tileProvider.tileSize])

    // Wrap everything in a context to allow child components access to the map state.
    return (
      <MapContext.Provider
        value={{
          center,
          zoom,
          bounds,
          worldBounds,
          tileProvider,
        }}
      >
        <div
          className={classNames.map}
          style={{
            width,
            height,
            position: 'relative',
            display: 'inline-block',
            background,
          }}
          ref={ref}
        >
          <TileLayer />
          {children}
        </div>
      </MapContext.Provider>
    )
  }
)

export default Map

import React, { useEffect, useRef, useState } from 'react'

import { Bounds, Coordinate } from '../types'

import { LOCATIONS, DEFAULTS, CLASS_NAMES } from '../constants'

import MapContext from './MapContext'

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
 * The prop type for a [[`Map`]] component.
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
  /** Map components */
  children?: React.ReactNode
}

/**
 * Render a map.
 */
const Map = React.forwardRef<HTMLDivElement, MapProps>(
  (
    {
      center = LOCATIONS.greenwichObservatory,
      zoom = DEFAULTS.zoom,
      width = DEFAULTS.width,
      height = DEFAULTS.height,
      children,
    },
    forwardedRef
  ) => {
    // Use a local ref if a forwarded ref is not available.
    const localRef = useRef<HTMLDivElement>(null)
    const ref = forwardedRef
      ? (forwardedRef as React.MutableRefObject<HTMLDivElement>)
      : localRef

    // The screen coordinate system is bounded by the containing div rectangle.
    const [bounds, setBounds] = useState<Bounds>({
      top: 0,
      left: 0,
      width: 0,
      height: 0,
    })

    useEffect(() => {
      if (ref.current) {
        // Update the bounds when the browser has found them.
        setBounds(ref.current.getBoundingClientRect())
      }
    }, [ref])

    // Wrap everything in a context to allow child components access to the map state.
    return (
      <MapContext.Provider
        value={{
          center,
          zoom,
          bounds,
        }}
      >
        <div
          className={classNames.map}
          style={{
            width,
            height,
            position: 'relative',
            display: 'inline-block',
            overflow: 'hidden',
            background: '#dddddd',
          }}
          ref={ref}
        >
          {children}
        </div>
      </MapContext.Provider>
    )
  }
)

export default Map

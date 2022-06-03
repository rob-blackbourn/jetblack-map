import React, { useContext } from 'react'

import MapContext from './MapContext'

/**
 * The prop type for an [[`OverlayLater`]] component.
 */
export interface OverlayLayerProps {
  /** The markers to render */
  children?: React.ReactNode
}

/**
 * Render an overlay layer.
 */
export default function OverlayLayer({ children }: OverlayLayerProps) {
  const {
    bounds: { width, height },
  } = useContext(MapContext)

  return (
    <div
      className="jetblack-map-overlay-layer"
      style={{
        position: 'absolute',
        width: width,
        height: height,
        top: `calc((100% - ${height}px) / 2)`,
        left: `calc((100% - ${width}px) / 2)`,
      }}
    >
      {children}
    </div>
  )
}

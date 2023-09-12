import React, { useContext } from 'react'

import { CLASS_NAMES } from '../constants'

import { MapContext } from './MapContext'

const classNames = {
  overlayLayer: [
    CLASS_NAMES.primary,
    CLASS_NAMES.draggable,
    CLASS_NAMES.zoomable,
    CLASS_NAMES.clickable,
    'overlay-layer',
  ].join(' '),
}

/**
 * The prop type of an [[`OverlayLater`]] component.
 */
export interface OverlayLayerProps {
  /** The markers to render */
  children?: React.ReactNode
}

/**
 * Render an overlay layer.
 *
 * @param props The props.
 * @returns A map.
 *
 * @category Component
 */
export function OverlayLayer({ children }: OverlayLayerProps) {
  const {
    bounds: { width, height },
  } = useContext(MapContext)

  return (
    <div
      className={classNames.overlayLayer}
      style={{
        position: 'absolute',
        width: width,
        height: height,
        top: `calc((100% - ${height}px) / 2)`,
        left: `calc((100% - ${width}px) / 2)`,
        pointerEvents: 'none',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  )
}

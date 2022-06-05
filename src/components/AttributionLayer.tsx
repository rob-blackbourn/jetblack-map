import React from 'react'

import { CLASS_NAMES } from '../constants'

import { osmTileProvider } from './TileProviders'

const classNames = {
  attributionLayer: [CLASS_NAMES.primary, 'attribution-layer'].join(' '),
}

/**
 * The prop type for the [[`AttributionLayer`]] component.
 */
export interface AttributionLayerProps {
  attribution?: React.ReactElement
}

/**
 * Render the attribution layer.
 */
export default function AttributionLayer({
  attribution = osmTileProvider.attribution,
}: AttributionLayerProps) {
  return (
    <div
      className={classNames.attributionLayer}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        fontSize: '11px',
        padding: '2px 5px',
        background: 'rgba(255, 255, 255, 0.7)',
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        color: '#333',
      }}
    >
      {attribution}
    </div>
  )
}

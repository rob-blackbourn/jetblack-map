import React, { useContext } from 'react'

import { CLASS_NAMES } from '../constants'
import { Point } from '../types'

import MapContext from './MapContext'

const classNames = {
  container: [
    CLASS_NAMES.primary,
    CLASS_NAMES.clickable,
    CLASS_NAMES.draggable,
    CLASS_NAMES.zoomable,
    'zoom-button-container',
  ].join(' '),
  button: [CLASS_NAMES.primary, 'zoom-button'].join(' '),
}

export interface ZoomButtonPops {
  point?: Point
  minZoom?: number
  maxZoom?: number
  zoomStep?: number
  onChange: (value: number) => void
}

export default function ZoomButton({
  point = { x: 10, y: 10 },
  minZoom = 0,
  maxZoom = 19,
  zoomStep = 0.1,
  onChange,
}: ZoomButtonPops): JSX.Element {
  const {
    zoom,
    bounds: { width, height },
  } = useContext(MapContext)

  return (
    <div
      className={classNames.container}
      style={{
        position: 'absolute',
        pointerEvents: 'auto',
        cursor: 'pointer',
        transform: `translate(${point.x}px, ${point.y}px)`,
      }}
    >
      <button
        className={classNames.button}
        style={{
          width: 28,
          height: 28,
          borderRadius: 2,
          boxShadow: '0 1px 4px -1px rgba(0,0,0,.3)',
          background: 'white',
          lineHeight: '26px',
          fontSize: '20px',
          fontWeight: 700,
          color: '#666',
          marginLeft: 2,
          marginTop: 2,
          marginBottom: 1,
          cursor: 'pointer',
          border: 'none',
          display: 'block',
          outline: 'none',
        }}
        onClick={event => {
          event.preventDefault()
          event.stopPropagation()
          onChange(Math.min(zoom + zoomStep, maxZoom))
        }}
      >
        +
      </button>
      <button
        className={classNames.button}
        style={{
          width: 28,
          height: 28,
          borderRadius: 2,
          boxShadow: '0 1px 4px -1px rgba(0,0,0,.3)',
          background: 'white',
          lineHeight: '26px',
          fontSize: '20px',
          fontWeight: 700,
          color: '#666',
          marginLeft: 2,
          marginBottom: 1,
          cursor: 'pointer',
          border: 'none',
          display: 'block',
          outline: 'none',
        }}
        onClick={event => {
          event.preventDefault()
          event.stopPropagation()
          onChange(Math.max(zoom - zoomStep, minZoom))
        }}
      >
        –
      </button>
    </div>
  )
}

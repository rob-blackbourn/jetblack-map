import React, { useContext } from 'react'

import MapContext from './MapContext'

export interface ZoomControlPops {
  minZoom?: number
  maxZoom?: number
  zoomStep?: number
  onChange: (value: number) => void
}

export default function ZoomControl({
  minZoom = 0,
  maxZoom = 19,
  zoomStep = 0.1,
  onChange,
}: ZoomControlPops) {
  const { zoom } = useContext(MapContext)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.round(event.target.valueAsNumber * 100) / 100
    const zoom = Math.min(maxZoom, Math.max(minZoom, value))
    onChange(zoom)
  }

  return (
    <div
      style={{
        position: 'absolute',
        right: '10px',
        bottom: '10px',
      }}
    >
      ({zoom})
      <input
        type="range"
        min={minZoom}
        max={maxZoom}
        step={zoomStep}
        value={zoom}
        onChange={handleChange}
      />
    </div>
  )
}

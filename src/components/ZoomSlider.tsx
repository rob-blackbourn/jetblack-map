import React, { useContext } from 'react'

import { CLASS_NAMES } from '../constants'

import MapContext from './MapContext'

const classNames = {
  container: [CLASS_NAMES.primary, 'zoom-slider-container'].join(' '),
  slider: [CLASS_NAMES.primary, 'zoom-slider'].join(' '),
}

export interface ZoomSliderPops {
  minZoom?: number
  maxZoom?: number
  zoomStep?: number
  onChange: (value: number) => void
}

export default function ZoomSlider({
  minZoom = 0,
  maxZoom = 19,
  zoomStep = 0.1,
  onChange,
}: ZoomSliderPops) {
  const { zoom } = useContext(MapContext)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.round(event.target.valueAsNumber * 100) / 100
    const zoom = Math.min(maxZoom, Math.max(minZoom, value))
    onChange(zoom)
  }

  return (
    <div
      className={classNames.container}
      style={{
        position: 'absolute',
        right: '10px',
        bottom: '10px',
      }}
    >
      ({zoom})
      <input
        className={classNames.slider}
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

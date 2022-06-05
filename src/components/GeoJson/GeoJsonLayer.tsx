import { Feature, FeatureCollection, GeoJSON } from 'geojson'
import React, { SVGProps, useContext, useState } from 'react'

import { CLASS_NAMES } from '../../constants'

import MapContext from '../MapContext'

import { RequestFeatureStyleHandler } from './types'

import { FeatureComponent } from './FeatureComponent'
import { Point } from '../../types'

const classNames = {
  geoJsonLayer: [
    CLASS_NAMES.primary,
    CLASS_NAMES.draggable,
    CLASS_NAMES.zoomable,
    CLASS_NAMES.clickable,
    'geojson-layer',
    'layer',
  ].join(' '),
}

/**
 * The prop type for the [[`GeoJSONLayer`]] component.
 */
export interface GeoJSONLayerProps {
  /** The GeoJSON data */
  data: GeoJSON
  /** A callback to request the SVG props for a feature */
  requestFeatureStyle?: RequestFeatureStyleHandler
  renderPopup?: (feature: Feature) => React.ReactElement | null
}

/**
 * Render a GeoJSON layer.
 */
export default function GeoJSONLayer({
  data,
  requestFeatureStyle,
  renderPopup,
}: GeoJSONLayerProps) {
  const {
    bounds: { width, height },
  } = useContext(MapContext)

  const [hoverPoint, setHoverPoint] = useState<Point>()
  const [hoverFeature, setHoverFeature] = useState<Feature>()

  const handleMouseOver = (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    feature: Feature
  ) => {
    console.log('handleMouseOver', { hoverPoint, hoverFeature })
    setHoverPoint({ x: event.clientX, y: event.clientY })
    setHoverFeature(feature)
  }

  const handleMouseOut = (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    feature: Feature
  ) => {
    console.log('handleMouseOut')
    setHoverPoint(undefined)
    setHoverFeature(undefined)
  }

  const features = () => {
    if (data.type === 'Feature') {
      return (
        <FeatureComponent
          feature={data as Feature}
          requestFeatureStyle={requestFeatureStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      )
    } else if (data.type == 'FeatureCollection') {
      return (
        <>
          {(data as FeatureCollection).features.map((feature, i) => (
            <FeatureComponent
              key={`feature-${i}`}
              feature={feature}
              requestFeatureStyle={requestFeatureStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          ))}
        </>
      )
    } else {
      return null
    }
  }

  return (
    <div
      className={classNames.geoJsonLayer}
      style={{
        position: 'absolute',
        left: '0',
        top: '0',
        pointerEvents: 'none',
        cursor: 'pointer',
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
      >
        {features()}
      </svg>
      <div
        style={{
          display: hoverPoint ? 'block' : 'none',
          left: hoverPoint?.x,
          top: hoverPoint?.y,
          position: 'absolute',
        }}
      >
        {renderPopup && hoverFeature && renderPopup(hoverFeature)}
      </div>
    </div>
  )
}

import { Feature, FeatureCollection, GeoJSON } from 'geojson'
import React, { SVGProps, useContext, useState } from 'react'

import { CLASS_NAMES } from '../../constants'

import MapContext from '../MapContext'

import { MarkerComponent, RequestFeatureStyleHandler } from './types'

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
  /** A callback to provide a popup when the pointer is over the feature */
  renderPopup?: (feature: Feature) => React.ReactElement | null
  /** A marker component to be used for points */
  markerComponent?: MarkerComponent
}

/**
 * Render a GeoJSON layer.
 */
export default function GeoJSONLayer({
  data,
  requestFeatureStyle,
  renderPopup,
  markerComponent,
}: GeoJSONLayerProps) {
  const {
    bounds: { width, height, top, left },
  } = useContext(MapContext)

  const [hoverPoint, setHoverPoint] = useState<Point>()
  const [hoverFeature, setHoverFeature] = useState<Feature>()

  const handleMouseOver = (event: React.MouseEvent<SVGElement, MouseEvent>, feature: Feature) => {
    setHoverPoint({ x: event.clientX, y: event.clientY })
    setHoverFeature(feature)
  }

  const handleMouseOut = (event: React.MouseEvent<SVGElement, MouseEvent>, feature: Feature) => {
    setHoverPoint(undefined)
    setHoverFeature(undefined)
  }

  const features = () => {
    if (data.type === 'Feature') {
      return (
        <FeatureComponent
          feature={data as Feature}
          markerComponent={markerComponent}
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
              markerComponent={markerComponent}
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
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
        {features()}
      </svg>
      <div
        style={{
          display: hoverPoint ? 'block' : 'none',
          top: !hoverPoint ? 0 : hoverPoint.y - top,
          left: !hoverPoint ? 0 : hoverPoint.x - left,
          position: 'absolute',
        }}
      >
        {renderPopup && hoverFeature && renderPopup(hoverFeature)}
      </div>
    </div>
  )
}

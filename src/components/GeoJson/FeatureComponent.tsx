import React, { SVGProps, useState } from 'react'

import { Feature } from 'geojson'

import { CLASS_NAMES } from '../../constants'

import { RequestFeatureStyleHandler } from './types'

import GeometryCollectionComponent from './GeometryCollectionComponent'

const classNames = {
  feature: [
    CLASS_NAMES.primary,
    CLASS_NAMES.draggable,
    CLASS_NAMES.zoomable,
    CLASS_NAMES.clickable,
    'geojson',
    'feature',
  ].join(' '),
}

/**
 * The default SVG properties.
 */
export const defaultFeatureStyle: SVGProps<SVGElement> = {
  fill: '#93c0d099',
  strokeWidth: '2',
  stroke: 'white',
  r: '10',
}

/**
 * The prop type for [[`FeatureComponent`]].
 */
export interface FeatureComponentProps {
  /** The GeoJSON Feature */
  feature: Feature
  /** A click handler */
  onClick?: (event: React.MouseEvent<SVGElement>, feature: Feature) => void
  /** A mouseover handler */
  onMouseOver?: (event: React.MouseEvent<SVGElement>, feature: Feature) => void
  /** A mouseout handler */
  onMouseOut?: (event: React.MouseEvent<SVGElement>, feature: Feature) => void
  /** A context menu handler */
  onContextMenu?: (
    event: React.MouseEvent<SVGElement>,
    feature: Feature
  ) => void
  /** A callback to request the SVG props for a feature */
  requestFeatureStyle?: RequestFeatureStyleHandler
}

/**
 * Renders a GeoJSON Feature.
 */
export function FeatureComponent({
  feature,
  onClick,
  onMouseOver,
  onMouseOut,
  onContextMenu,
  requestFeatureStyle,
}: FeatureComponentProps) {
  const [mouseOver, setMouseOver] = useState(false)

  const featureStyle =
    (requestFeatureStyle && requestFeatureStyle(feature, { mouseOver })) ||
    defaultFeatureStyle

  return (
    <g
      className={classNames.feature}
      clipRule="evenodd"
      style={{ pointerEvents: 'auto' }}
      onClick={onClick && (event => onClick(event, feature))}
      onMouseOver={event => {
        onMouseOver && onMouseOver(event, feature)
        setMouseOver(true)
      }}
      onMouseOut={event => {
        onMouseOut && onMouseOut(event, feature)
        setMouseOver(false)
      }}
      onContextMenu={onContextMenu && (event => onContextMenu(event, feature))}
    >
      <GeometryCollectionComponent
        geometry={feature.geometry}
        {...featureStyle}
      />
    </g>
  )
}

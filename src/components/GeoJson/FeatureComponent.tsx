import React, { SVGProps } from 'react'

import { Feature } from 'geojson'

import { CLASS_NAMES } from '../../constants'

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
  requestFeatureStyle?: (feature: Feature) => SVGProps<SVGElement> | null
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
  const featureStyle =
    (requestFeatureStyle && requestFeatureStyle(feature)) || defaultFeatureStyle

  return (
    <g
      className={classNames.feature}
      clipRule="evenodd"
      style={{ pointerEvents: 'auto' }}
      onClick={onClick && (event => onClick(event, feature))}
      onMouseOver={onMouseOver && (event => onMouseOver(event, feature))}
      onMouseOut={onMouseOut && (event => onMouseOut(event, feature))}
      onContextMenu={onContextMenu && (event => onContextMenu(event, feature))}
    >
      <GeometryCollectionComponent
        geometry={feature.geometry}
        {...featureStyle}
      />
    </g>
  )
}

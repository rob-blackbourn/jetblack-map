import React, { SVGProps, useState } from 'react'
import GeometryCollectionComponent from './GeometryCollectionComponent'
import { Feature } from 'geojson'

export const defaultFeatureStyle: SVGProps<SVGElement> = {
  fill: '#93c0d099',
  strokeWidth: '2',
  stroke: 'white',
  r: '10',
}

export interface FeatureComponentProps {
  feature: Feature
  onClick?: (event: React.MouseEvent<SVGElement>, feature: Feature) => void
  onMouseOver?: (event: React.MouseEvent<SVGElement>, feature: Feature) => void
  onMouseOut?: (event: React.MouseEvent<SVGElement>, feature: Feature) => void
  onContextMenu?: (
    event: React.MouseEvent<SVGElement>,
    feature: Feature
  ) => void
  requestFeatureStyle?: (feature: Feature) => SVGProps<SVGElement> | null
}

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

import React, { CSSProperties, SVGProps, useContext } from 'react'

import { Feature, Point } from 'geojson'

import { CLASS_NAMES } from '../../constants'
import { Point as ScreenPoint } from '../../types'

import MapContext from '../MapContext'

import { geoJsonPointToScreenPoint } from './utils'
import { MarkerComponent, MarkerComponentProps } from './types'

const classNames = {
  point: [
    CLASS_NAMES.primary,
    CLASS_NAMES.draggable,
    CLASS_NAMES.zoomable,
    CLASS_NAMES.clickable,
    'geojson',
    'point',
  ].join(' '),
}

/**
 * The prop type for a [[`PointComponent`]]
 */
export interface PointComponentProps {
  /** The GeoJSON Point */
  point: Point
  feature: Feature
  markerComponent?: MarkerComponent
}

export const Circle: MarkerComponent = ({ point, ...props }) => (
  <circle cx={point.x} cy={point.y} {...(props as SVGProps<SVGCircleElement>)} />
)

/**
 * Render a GeoJSON Point.
 */
export default function PointComponent({
  point,
  markerComponent: Component = Circle,
  ...props
}: PointComponentProps & SVGProps<SVGSVGElement>) {
  const {
    center,
    zoom,
    bounds,
    tileProvider: { tileSize },
  } = useContext(MapContext)

  const screenPoint = geoJsonPointToScreenPoint(point.coordinates, center, zoom, bounds, tileSize)

  return <Component point={screenPoint} {...props} />
}

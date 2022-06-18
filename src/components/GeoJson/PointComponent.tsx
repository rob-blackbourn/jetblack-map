import React, { CSSProperties, SVGProps, useContext } from 'react'

import { Point } from 'geojson'

import { CLASS_NAMES } from '../../constants'
import { Point as ScreenPoint } from '../../types'

import MapContext from '../MapContext'

import { geoJsonPointToScreenPoint } from './utils'
import { MarkerPointComponent, MarkerPointComponentProps } from './types'

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
  markerPointComponent?: MarkerPointComponent
}

export const Circle: MarkerPointComponent = ({ point, ...props }) => (
  <circle cx={point.x} cy={point.y} {...(props as SVGProps<SVGCircleElement>)} />
)

/**
 * Render a GeoJSON Point.
 */
export default function PointComponent({
  point,
  markerPointComponent: Component = Circle,
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

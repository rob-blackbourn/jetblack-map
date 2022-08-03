import { SVGProps } from 'react'

import { Feature, MultiPoint, Position } from 'geojson'

import { CLASS_NAMES } from '../../constants'
import { Coordinate } from '../../types'

import { geoJsonPointToScreenPoint } from './utils'
import { ComponentProps, MarkerComponent } from './types'
import { Circle } from './PointComponent'

const classNames = {
  multiPoint: [
    CLASS_NAMES.primary,
    CLASS_NAMES.draggable,
    CLASS_NAMES.zoomable,
    CLASS_NAMES.clickable,
    'geojson',
    'multi-point',
  ].join(' '),
}

/**
 * The prop type for a [[`MultiPointComponent`]].
 */
export interface MultiPointComponentProps extends ComponentProps {
  /** The GeoJSON MultiPoint */
  multiPoint: MultiPoint
  feature: Feature
  markerComponent?: MarkerComponent
}

/**
 * Render a GeoJSON MultiPoint.
 */
export default function MultiPointComponent({
  multiPoint,
  feature,
  markerComponent: Component = Circle,
  centers,
  zoom,
  bounds,
  tileSize,
  ...props
}: MultiPointComponentProps & SVGProps<SVGSVGElement>) {
  const toScreenPoint = (point: Position, center: Coordinate) =>
    geoJsonPointToScreenPoint(point, center, zoom, bounds, tileSize)

  return (
    <>
      {centers
        .flatMap(center => multiPoint.coordinates.map(point => toScreenPoint(point, center)))
        .map((screenPoint, i) => (
          <Component
            key={i}
            className={classNames.multiPoint}
            point={screenPoint}
            feature={feature}
            {...props}
          />
        ))}
    </>
  )
}

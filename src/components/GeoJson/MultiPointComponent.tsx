import React, { SVGProps, useContext } from 'react'

import { MultiPoint } from 'geojson'

import { CLASS_NAMES } from '../../constants'

import MapContext from '../MapContext'

import { geoJsonPointToScreenPoint } from './utils'
import { MarkerPointComponent } from './types'
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
export interface MultiPointComponentProps {
  /** The GeoJSON MultiPoint */
  multiPoint: MultiPoint
  markerPointComponent?: MarkerPointComponent
}

/**
 * Render a GeoJSON MultiPoint.
 */
export default function MultiPointComponent({
  multiPoint,
  markerPointComponent: Component = Circle,
  ...props
}: MultiPointComponentProps & SVGProps<SVGSVGElement>) {
  const {
    center,
    zoom,
    bounds,
    tileProvider: { tileSize },
  } = useContext(MapContext)

  return (
    <>
      {multiPoint.coordinates
        .map(point => geoJsonPointToScreenPoint(point, center, zoom, bounds, tileSize))
        .map((screenPoint, i) => (
          <Component
            className={classNames.multiPoint}
            point={screenPoint}
            key={`multi-point-${i}`}
            {...props}
          />
        ))}
    </>
  )
}

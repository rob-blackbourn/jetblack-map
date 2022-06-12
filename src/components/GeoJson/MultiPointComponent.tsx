import { SVGProps, useContext } from 'react'

import { MultiPoint } from 'geojson'

import { CLASS_NAMES } from '../../constants'

import MapContext from '../MapContext'

import { geoJsonPointToScreenPoint } from './utils'

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
}

/**
 * Render a GeoJSON MultiPoint.
 */
export default function MultiPointComponent({
  multiPoint,
  ...props
}: MultiPointComponentProps & SVGProps<SVGCircleElement>) {
  const {
    center,
    zoom,
    bounds: { width, height },
  } = useContext(MapContext)

  return (
    <>
      {multiPoint.coordinates
        .map(point =>
          geoJsonPointToScreenPoint(point, center, zoom, width, height)
        )
        .map((screenPoint, i) => (
          <circle
            className={classNames.multiPoint}
            key={`multi-point-${i}`}
            cx={screenPoint.x}
            cy={screenPoint.y}
            {...props}
          />
        ))}
    </>
  )
}

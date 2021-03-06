import { SVGProps, useContext } from 'react'

import { Feature, Polygon } from 'geojson'

import { CLASS_NAMES } from '../../constants'

import MapContext from '../MapContext'

import { geoJsonPointToScreenPoint } from './utils'

const classNames = {
  polygon: [
    CLASS_NAMES.primary,
    CLASS_NAMES.draggable,
    CLASS_NAMES.zoomable,
    CLASS_NAMES.clickable,
    'geojson',
    'polygon',
  ].join(' '),
}

/**
 * The prop type for a [[`PolygonComponent`]].
 */
export interface PolygonComponentProps {
  /** The GeoJSON Polygon */
  polygon: Polygon
}

/**
 * Render a GeoJSON Polygon.
 */
export default function PolygonComponent({
  polygon,
  ...props
}: PolygonComponentProps & SVGProps<SVGPathElement>) {
  const {
    center,
    zoom,
    bounds,
    tileProvider: { tileSize },
  } = useContext(MapContext)

  const p = polygon.coordinates.reduce(
    (a, part) =>
      a +
      ' M' +
      part
        .map(point => geoJsonPointToScreenPoint(point, center, zoom, bounds, tileSize))
        .reduce((a, pixel) => a + ' ' + pixel.x + ' ' + pixel.y, '') +
      'Z',
    ''
  )

  return <path className={classNames.polygon} d={p} {...props} />
}

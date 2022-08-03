import { SVGProps } from 'react'

import { Polygon, Position } from 'geojson'

import { CLASS_NAMES } from '../../constants'
import { Coordinate } from '../../types'

import { ComponentProps } from './types'
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
export interface PolygonComponentProps extends ComponentProps {
  /** The GeoJSON Polygon */
  polygon: Polygon
}

/**
 * Render a GeoJSON Polygon.
 */
export default function PolygonComponent({
  polygon,
  centers,
  zoom,
  bounds,
  tileSize,
  ...props
}: PolygonComponentProps & SVGProps<SVGPathElement>) {
  const toScreenPoint = (point: Position, center: Coordinate) =>
    geoJsonPointToScreenPoint(point, center, zoom, bounds, tileSize)

  const toPath = (polygon: Polygon, center: Coordinate) =>
    polygon.coordinates.reduce(
      (a, part) =>
        a +
        ' M' +
        part
          .map(point => toScreenPoint(point, center))
          .reduce((a, pixel) => a + ' ' + pixel.x + ' ' + pixel.y, '') +
        'Z',
      ''
    )

  return (
    <>
      {centers.map((center, i) => (
        <path key={i} className={classNames.polygon} d={toPath(polygon, center)} {...props} />
      ))}
    </>
  )
}

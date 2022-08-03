import { SVGProps, useContext } from 'react'

import { MultiPolygon, Position } from 'geojson'

import { CLASS_NAMES } from '../../constants'
import { Coordinate } from '../../types'

import { ComponentProps } from './types'
import { geoJsonPointToScreenPoint } from './utils'

const classNames = {
  multiPolygon: [
    CLASS_NAMES.primary,
    CLASS_NAMES.draggable,
    CLASS_NAMES.zoomable,
    CLASS_NAMES.clickable,
    'geojson',
    'multi-polygon',
  ].join(' '),
}

/**
 * The prop type for a [[`MultiPolygonComponent`]].
 */
export interface MultiPolygonComponentProps extends ComponentProps {
  /** The GeoJSON MultiPolygon */
  multiPolygon: MultiPolygon
}

/**
 * Render a GeoJSON MultiPolygon.
 */
export default function MultiPolygonComponent({
  multiPolygon,
  centers,
  zoom,
  bounds,
  tileSize,
  ...props
}: MultiPolygonComponentProps & SVGProps<SVGPathElement>) {
  const toScreenPoint = (point: Position, center: Coordinate) =>
    geoJsonPointToScreenPoint(point, center, zoom, bounds, tileSize)

  const toPath = (polygon: Position[][], center: Coordinate) =>
    polygon.reduce(
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
      {centers
        .flatMap(center => multiPolygon.coordinates.map((polygon, i) => toPath(polygon, center)))
        .map((d, i) => (
          <path key={i} className={classNames.multiPolygon} d={d} {...props} />
        ))}
    </>
  )
}

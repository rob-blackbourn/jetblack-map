import { SVGProps } from 'react'

import { MultiLineString, Position } from 'geojson'

import { CLASS_NAMES } from '../../constants'
import { Coordinate } from '../../types'

import { ComponentProps } from './types'
import { geoJsonPointToScreenPoint } from './utils'

const classNames = {
  multiLineString: [
    CLASS_NAMES.primary,
    CLASS_NAMES.draggable,
    CLASS_NAMES.zoomable,
    CLASS_NAMES.clickable,
    'geojson',
    'multi-line-string',
  ].join(' '),
}

/**
 * The prop type for a [[`MultiLineStringComponent`]].
 */
export interface MultiLineStringComponentProps extends ComponentProps {
  /** The GeoJSON MultiLineString */
  multiLineString: MultiLineString
}

/**
 * Render a GeoJSON MultiLineString.
 */
export default function MultiLineStringComponent({
  multiLineString,
  centers,
  zoom,
  bounds,
  tileSize,
  ...props
}: MultiLineStringComponentProps & SVGProps<SVGPathElement>) {
  const toScreenPoint = (point: Position, center: Coordinate) =>
    geoJsonPointToScreenPoint(point, center, zoom, bounds, tileSize)

  const toPath = (line: Position[], center: Coordinate) =>
    'M' +
    line
      .map(point => toScreenPoint(point, center))
      .reduce((a, point) => {
        return a + ' ' + point.x + ' ' + point.y
      }, '')

  return (
    <>
      {centers
        .flatMap(center => multiLineString.coordinates.map(line => toPath(line, center)))
        .map((d, i) => (
          <path key={i} className={classNames.multiLineString} d={d} {...props} />
        ))}
    </>
  )
}

import { SVGProps } from 'react'

import { LineString, Position } from 'geojson'

import { CLASS_NAMES } from '../../constants'
import { Coordinate } from '../../types'

import { ComponentProps } from './types'
import { geoJsonPointToScreenPoint } from './utils'

const classNames = {
  lineString: [
    CLASS_NAMES.primary,
    CLASS_NAMES.draggable,
    CLASS_NAMES.zoomable,
    CLASS_NAMES.clickable,
    'geojson',
    'line-string',
  ].join(' '),
}

/**
 * The prop type for a [[`LineStringComponent`]].
 */
export interface LineStringComponentProps extends ComponentProps {
  /** The GeoJSON LineString */
  lineString: LineString
}

/**
 * Render a GeoJSON LineString.
 */
export default function LineStringComponent({
  lineString,
  centers,
  zoom,
  bounds,
  tileSize,
  ...props
}: LineStringComponentProps & SVGProps<SVGPathElement>) {
  const toScreenPoint = (point: Position, center: Coordinate) =>
    geoJsonPointToScreenPoint(point, center, zoom, bounds, tileSize)

  const toPath = (lineString: LineString, center: Coordinate) =>
    'M' +
    lineString.coordinates
      .map(point => toScreenPoint(point, center))
      .reduce((a, point) => {
        return a + ' ' + point.x + ' ' + point.y
      }, '')

  return (
    <>
      {centers.map((center, i) => (
        <path key={i} className={classNames.lineString} d={toPath(lineString, center)} {...props} />
      ))}
    </>
  )
}

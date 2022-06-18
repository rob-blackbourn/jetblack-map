import { useContext, SVGProps } from 'react'

import { Feature, LineString } from 'geojson'

import { CLASS_NAMES } from '../../constants'

import MapContext from '../MapContext'

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
export interface LineStringComponentProps {
  /** The GeoJSON LineString */
  lineString: LineString
  feature: Feature
}

/**
 * Render a GeoJSON LineString.
 */
export default function LineStringComponent({
  lineString,
  ...props
}: LineStringComponentProps & SVGProps<SVGPathElement>) {
  const {
    center,
    zoom,
    bounds,
    tileProvider: { tileSize },
  } = useContext(MapContext)

  const path =
    'M' +
    lineString.coordinates
      .map(point => geoJsonPointToScreenPoint(point, center, zoom, bounds, tileSize))
      .reduce((a, point) => {
        return a + ' ' + point.x + ' ' + point.y
      }, '')

  return <path className={classNames.lineString} d={path} {...props} />
}

import { useContext, SVGProps } from 'react'

import { LineString } from 'geojson'

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

export interface LineStringComponentProps {
  lineString: LineString
}

export default function GeoJsonLineString({
  lineString,
  ...props
}: LineStringComponentProps & SVGProps<SVGPathElement>) {
  const {
    center,
    zoom,
    bounds: { width, height },
  } = useContext(MapContext)

  const path =
    'M' +
    lineString.coordinates
      .map(point =>
        geoJsonPointToScreenPoint(point, center, zoom, width, height)
      )
      .reduce((a, point) => {
        return a + ' ' + point.x + ' ' + point.y
      }, '')

  return <path className={classNames.lineString} d={path} {...props} />
}

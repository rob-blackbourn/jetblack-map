import { useContext, SVGProps } from 'react'

import { LineString } from 'geojson'

import MapContext from '../MapContext'

import { geoJsonPointToScreenPoint } from './utils'

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

  return <path d={path} {...props} />
}

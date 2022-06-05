import { Polygon } from 'geojson'
import { SVGProps, useContext } from 'react'
import MapContext from '../MapContext'
import { geoJsonPointToScreenPoint } from './utils'

export interface PolygonComponentProps {
  polygon: Polygon
}

export default function PolygonComponent({
  polygon,
  ...props
}: PolygonComponentProps & SVGProps<SVGPathElement>) {
  const {
    center,
    zoom,
    bounds: { width, height },
  } = useContext(MapContext)

  const p = polygon.coordinates.reduce(
    (a, part) =>
      a +
      ' M' +
      part
        .map(point =>
          geoJsonPointToScreenPoint(point, center, zoom, width, height)
        )
        .reduce((a, pixel) => a + ' ' + pixel.x + ' ' + pixel.y, '') +
      'Z',
    ''
  )

  return <path d={p} {...props} />
}

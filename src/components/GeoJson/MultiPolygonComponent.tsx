import { MultiPolygon } from 'geojson'
import { SVGProps, useContext } from 'react'
import MapContext from '../MapContext'

import { geoJsonPointToScreenPoint } from './utils'

export interface MultiPolygonComponentProps {
  multiPolygon: MultiPolygon
}

export default function MultiPolygonComponent({
  multiPolygon,
  ...props
}: MultiPolygonComponentProps & SVGProps<SVGPathElement>) {
  const {
    center,
    zoom,
    bounds: { width, height },
  } = useContext(MapContext)

  return (
    <>
      {multiPolygon.coordinates
        .map((polygon, i) =>
          polygon.reduce(
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
        )
        .map((d, i) => (
          <path key={`multi-polygon-${i}`} d={d} {...props} />
        ))}
    </>
  )
}

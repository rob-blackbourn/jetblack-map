import { SVGProps, useContext } from 'react'

import { geoJsonPointToScreenPoint } from './utils'
import MapContext from '../MapContext'
import { MultiLineString } from 'geojson'

export interface MultiLineStringComponentProps {
  multiLineString: MultiLineString
}
export default function MultiLineStringComponent({
  multiLineString,
  ...props
}: MultiLineStringComponentProps & SVGProps<SVGPathElement>) {
  const {
    center,
    zoom,
    bounds: { width, height },
  } = useContext(MapContext)

  return (
    <>
      {multiLineString.coordinates
        .map(
          line =>
            'M' +
            line
              .map(point =>
                geoJsonPointToScreenPoint(point, center, zoom, width, height)
              )
              .reduce((a, point) => {
                return a + ' ' + point.x + ' ' + point.y
              }, '')
        )
        .map((d, i) => (
          <path key={`multi-line-string-${i}`} d={d} {...props} />
        ))}
    </>
  )
}

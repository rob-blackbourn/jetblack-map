import { SVGProps, useContext } from 'react'

import { Point } from 'geojson'

import MapContext from '../MapContext'
import { geoJsonPointToScreenPoint } from './utils'

export interface PointComponentProps {
  point: Point
}

export default function PointComponent({
  point,
  ...props
}: PointComponentProps & SVGProps<SVGCircleElement>): JSX.Element {
  const {
    center,
    zoom,
    bounds: { width, height },
  } = useContext(MapContext)

  const screenPoint = geoJsonPointToScreenPoint(
    point.coordinates,
    center,
    zoom,
    width,
    height
  )

  return <circle cx={screenPoint.x} cy={screenPoint.y} {...props} />
}

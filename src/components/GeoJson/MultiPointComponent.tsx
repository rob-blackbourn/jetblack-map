import { SVGProps, useContext } from 'react'

import { MultiPoint } from 'geojson'

import MapContext from '../MapContext'
import { geoJsonPointToScreenPoint } from './utils'

export interface MultiPointComponentProps {
  multiPoint: MultiPoint
}

export default function MultiPointComponent({
  multiPoint,
  ...props
}: MultiPointComponentProps & SVGProps<SVGCircleElement>): JSX.Element {
  const {
    center,
    zoom,
    bounds: { width, height },
  } = useContext(MapContext)

  return (
    <>
      {multiPoint.coordinates
        .map(point =>
          geoJsonPointToScreenPoint(point, center, zoom, width, height)
        )
        .map((screenPoint, i) => (
          <circle
            key={`multi-point-${i}`}
            cx={screenPoint.x}
            cy={screenPoint.y}
            {...(props as SVGProps<SVGCircleElement>)}
          />
        ))}
    </>
  )
}

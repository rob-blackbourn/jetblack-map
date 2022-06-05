import { SVGProps, useContext } from 'react'

import { MultiPolygon } from 'geojson'

import { CLASS_NAMES } from '../../constants'

import MapContext from '../MapContext'

import { geoJsonPointToScreenPoint } from './utils'

const classNames = {
  multiPolygon: [
    CLASS_NAMES.primary,
    CLASS_NAMES.draggable,
    CLASS_NAMES.zoomable,
    CLASS_NAMES.clickable,
    'geojson',
    'multi-polygon',
  ].join(' '),
}

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
          <path
            className={classNames.multiPolygon}
            key={`multi-polygon-${i}`}
            d={d}
            {...props}
          />
        ))}
    </>
  )
}

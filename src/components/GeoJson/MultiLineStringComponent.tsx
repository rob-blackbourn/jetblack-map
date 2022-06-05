import { SVGProps, useContext } from 'react'

import { MultiLineString } from 'geojson'

import { CLASS_NAMES } from '../../constants'

import MapContext from '../MapContext'

import { geoJsonPointToScreenPoint } from './utils'

const classNames = {
  multiLineString: [
    CLASS_NAMES.primary,
    CLASS_NAMES.draggable,
    CLASS_NAMES.zoomable,
    CLASS_NAMES.clickable,
    'geojson',
    'multi-line-string',
  ].join(' '),
}

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
          <path
            className={classNames.multiLineString}
            key={`multi-line-string-${i}`}
            d={d}
            {...props}
          />
        ))}
    </>
  )
}

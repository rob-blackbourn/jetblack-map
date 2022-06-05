import { SVGProps, useContext } from 'react'

import { Point } from 'geojson'

import { CLASS_NAMES } from '../../constants'

import MapContext from '../MapContext'

import { geoJsonPointToScreenPoint } from './utils'

const classNames = {
  point: [
    CLASS_NAMES.primary,
    CLASS_NAMES.draggable,
    CLASS_NAMES.zoomable,
    CLASS_NAMES.clickable,
    'geojson',
    'point',
  ].join(' '),
}

/**
 * The prop type for a [[`PointComponent`]]
 */
export interface PointComponentProps {
  /** The GeoJSON Point */
  point: Point
}

/**
 * Render a GeoJSON Point.
 */
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

  return (
    <circle
      className={classNames.point}
      cx={screenPoint.x}
      cy={screenPoint.y}
      {...props}
    />
  )
}

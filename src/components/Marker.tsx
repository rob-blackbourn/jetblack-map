import React, { useContext } from 'react'

import { Coordinate, Point } from '../types'

import { CLASS_NAMES } from '../constants'
import { calcScaleInfo, coordinateToScreenPoint } from '../tileMath'

import MapContext from './MapContext'
import { createPoints } from './markerHelpers'

const classNames = { marker: [CLASS_NAMES.primary, 'marker'].join(' ') }

/**
 * The prop type of a [[`Marker`]] component.
 */
export interface MarkerProps {
  /** The coordinate of the marker */
  coordinate: Coordinate
  /** A function to render the marker */
  render: (point: Point) => React.ReactElement
}

/**
 * Render a marker component.
 */
export default function Marker({ coordinate, render }: MarkerProps) {
  const {
    center,
    zoom,
    bounds: { width, height },
  } = useContext(MapContext)

  // Get the screen coordinate of the point.
  const { roundedZoom, scale, scaleWidth } = calcScaleInfo(zoom, width, height)
  const markerPoint = coordinateToScreenPoint(
    coordinate,
    center,
    zoom,
    width,
    height
  )

  // If the screen is zoomed out the coordinate may appear many times as the display will wrap horizontally.
  const markerPoints = createPoints(markerPoint, roundedZoom, scale, scaleWidth)

  return (
    <>
      {markerPoints.map(point => (
        <div
          className={classNames.marker}
          key={`${point.x}-${point.y}`}
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            cursor: 'pointer',
            transform: `translate(${point.x}px, ${point.y}px)`,
          }}
        >
          {render(point)}
        </div>
      ))}
    </>
  )
}

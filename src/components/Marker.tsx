import React, { useContext } from 'react'

import { Coordinate, Point } from '../types'

import { CLASS_NAMES } from '../constants'
import {
  calcScaleInfo,
  createVisiblePoints,
  isCoordinateInWorldBounds,
  recenterScreenPoint,
} from '../mathUtils'

import MapContext from './MapContext'

const classNames = { marker: [CLASS_NAMES.primary, 'marker'].join(' ') }

/**
 * The prop type of a [[`Marker`]] component.
 *
 * @category Component
 */
export interface MarkerProps {
  /** The coordinate of the marker */
  coordinate: Coordinate
  /** A function to render the marker */
  render: (point: Point) => React.ReactElement
}

/**
 * Render a marker component.
 *
 * @param props The props.
 * @returns A map.
 *
 * @category Component
 */
export default function Marker({ coordinate, render }: MarkerProps) {
  const {
    center,
    zoom,
    bounds,
    worldBounds,
    tileProvider: { tileSize },
  } = useContext(MapContext)
  const toPoints = (coordinate: Coordinate) => {
    // Get the screen coordinate of the point.
    const { roundedZoom, scale } = calcScaleInfo(zoom, bounds)
    const markerPoint = recenterScreenPoint(coordinate, center, zoom, bounds, tileSize)

    // If the screen is zoomed out the coordinate may appear many times as the display will wrap horizontally.
    return createVisiblePoints(markerPoint, roundedZoom, scale, bounds.width, tileSize.width)
  }

  return (
    <>
      {isCoordinateInWorldBounds(coordinate, worldBounds) &&
        toPoints(coordinate).map(point => (
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

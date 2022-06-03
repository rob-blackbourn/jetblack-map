import React, { useContext } from 'react'

import { Coordinate, Point } from '../types'

import { calcScaleInfo, coordinateToScreenPoint } from '../tileMath'

import MapContext from './MapContext'

function createPoints(
  point: Point,
  roundedZoom: number,
  scale: number,
  scaleWidth: number
): Point[] {
  const maxTiles = 2 ** roundedZoom
  const expectedWidth = maxTiles * 256 * scale

  // If the screen is zoomed out the coordinate may appear many times as the display will wrap horizontally.
  const elementPoints: Point[] = [point]
  // Points to the left.
  for (
    let p = { x: point.x - expectedWidth, y: point.y };
    p.x >= 0;
    p = { x: p.x - expectedWidth, y: p.y }
  ) {
    elementPoints.push(p)
  }
  // Points to the right.
  for (
    let p = { x: point.x + expectedWidth, y: point.y };
    p.x < scaleWidth;
    p = { x: p.x + expectedWidth, y: p.y }
  ) {
    elementPoints.push(p)
  }

  return elementPoints
}

/**
 * The prop type of a [[`Marker]] component.
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
          className="jetblack-map-marker"
          key={`${point.x}-${point.y}`}
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            cursor: 'pointer',
          }}
        >
          {render(point)}
        </div>
      ))}
    </>
  )
}

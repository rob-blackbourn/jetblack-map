import React, { useContext } from 'react'

import { Point } from '../types'
import { MapContext } from './MapContext'

export interface PopupProps {
  /** The point in the screen coordinate system. */
  point: Point
  /** The amount to shift the popup left when on the right side of the map */
  leftShift?: number
  /** The amount to shift the popup right when on the left side of the map */
  rightShift?: number
  /** The amount to shift the popup up when on the bottom half of the map */
  upShift?: number
  /** The amount to shift the popup down when on the top half of the map */
  downShift?: number
  /** Styles to apply to the containing `div` element. */
  style?: React.CSSProperties
  /** The contents of the popup */
  children: React.ReactElement
}

/**
 * Render a popup.
 *
 * The popup will attempt to stay inside the map space by
 * checking if the point is in the left/right and top/bottom
 * of the screen and positioning the containing `div` appropriately.
 *
 * @param props The props.
 * @returns A popup near the point.
 *
 * @category Component
 */
export function Popup({
  point,
  leftShift = 0,
  rightShift = 0,
  upShift = 0,
  downShift = 0,
  style = {},
  children,
}: PopupProps) {
  // Discover the region on the screen that the point is in.
  const { bounds } = useContext(MapContext)
  const isTop = point.y < bounds.height / 2
  const isLeft = point.x < bounds.width / 2

  // Position the popup according to the screen region
  const left = isLeft ? 0 : undefined
  const right = isLeft ? undefined : 0
  const top = isTop ? 0 : undefined
  const bottom = isTop ? undefined : 0

  // Shift the popup away from the marker
  const x = isLeft ? rightShift : leftShift
  const y = isTop ? downShift : upShift

  return (
    <div
      style={{
        transform: `translate(${x}px, ${y}px)`,
        position: 'absolute',
        top,
        left,
        bottom,
        right,
        zIndex: 1,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

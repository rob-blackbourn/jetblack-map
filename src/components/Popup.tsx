import React, { useContext } from 'react'

import { Point, Size } from '../types'
import MapContext from './MapContext'

export interface PopupProps<T> {
  /** The point in the screen coordinate system. */
  point: Point
  /** Data for the popup */
  data: T
  leftShift?: number
  rightShift?: number
  upShift?: number
  downShift?: number
  /** A function called to render a popup when the mouse is over the pin */
  renderPopup: (data: T) => React.ReactElement
  style?: React.CSSProperties
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
export default function Popup<T = unknown>({
  point,
  data,
  leftShift = 0,
  rightShift = 0,
  upShift = 0,
  downShift = 0,
  renderPopup,
  style = {},
}: PopupProps<T>) {
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
      {renderPopup(data)}
    </div>
  )
}

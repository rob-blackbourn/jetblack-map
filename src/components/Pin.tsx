import React, { useCallback, useState } from 'react'

import { Point, Size } from '../types'

import { CLASS_NAMES } from '../constants'

const classNames = { pin: [CLASS_NAMES.primary, 'pin'].join(' ') }

/**
 * The prop type of an [[`Pin`]] component.
 */
export interface PinProps<T> {
  /** The point in the screen coordinate system. */
  point: Point
  /** Data for the pin */
  data?: T
  /** The size of the pin */
  size?: number
  /** The color of the pin */
  color?: string
  /** A function called to render a popup when the mouse is over the pin */
  renderPopup?: (point: Point, size: Size, data?: T) => React.ReactElement
  /** A function called when the mouse enters or leaves the pin */
  onHover?: (mouseOver: boolean, point: Point, size: Size, data?: T) => void
  /** A handler for click events */
  onClick?: (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    point: Point,
    size: Size,
    data?: T
  ) => void
  /** A handler for a context menu event */
  onContextMenu?: (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    point: Point,
    size: Size,
    data?: T
  ) => void
}

/**
 * Render a pin.
 *
 * @param props The props.
 * @returns A pin at the point.
 *
 * @category Component
 */
export default function Pin<T = unknown>({
  point,
  data,
  size = 1,
  color = '#2F4F4F',
  renderPopup,
  onHover,
  onClick,
  onContextMenu,
}: PinProps<T>) {
  const [mouseOver, setMouseOver] = useState(false)

  const width = 29 * size
  const height = 34 * size

  const handleMouseOver = useCallback(() => {
    setMouseOver(true)
    onHover && onHover(true, point, { width, height }, data)
  }, [setMouseOver, data, point, onHover])

  const handleMouseOut = useCallback(() => {
    setMouseOver(false)
    onHover && onHover(false, point, { width, height }, data)
  }, [])

  return (
    <div>
      <svg
        className={classNames.pin}
        width={width}
        height={height}
        viewBox="0 0 61 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `translate(${-width / 2}px, ${-(height - 1)}px)`,
          filter: mouseOver ? 'drop-shadow(0 0 4px rgba(0, 0, 0, .3))' : '',
        }}
      >
        <g
          style={{ pointerEvents: 'auto' }}
          onClick={event => onClick && onClick(event, point, { width, height }, data)}
          onContextMenu={event =>
            onContextMenu && onContextMenu(event, point, { width, height }, data)
          }
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <path
            d="M52 31.5C52 36.8395 49.18 42.314 45.0107 47.6094C40.8672 52.872 35.619 57.678 31.1763 61.6922C30.7916 62.0398 30.2084 62.0398 29.8237 61.6922C25.381 57.678 20.1328 52.872 15.9893 47.6094C11.82 42.314 9 36.8395 9 31.5C9 18.5709 18.6801 9 30.5 9C42.3199 9 52 18.5709 52 31.5Z"
            fill={color}
            stroke="white"
            strokeWidth="4"
          />
          <circle cx="30.5" cy="30.5" r="8.5" fill="white" opacity={mouseOver ? 0.98 : 0.6} />
        </g>
      </svg>
      {renderPopup && mouseOver && renderPopup(point, { width, height }, data)}
    </div>
  )
}

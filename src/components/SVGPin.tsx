import React, { useState } from 'react'

import { Point } from '../types'

import { CLASS_NAMES } from '../constants'

const classNames = { svgPin: [CLASS_NAMES.primary, 'svg-pin'].join(' ') }

/**
 * The prop type of an [[`SVGPin`]] component.
 */
export interface SVGPinProps {
  /** The point in the screen coordinate system. */
  point: Point
  /** The size of the pin */
  size?: number
  /** The color of the pin */
  color?: string
  /** A handler for mouse-out events */
  onMouseOut?: (event: React.MouseEvent<SVGElement, MouseEvent>) => void
  /** A handler for mouse-over events */
  onMouseOver?: (event: React.MouseEvent<SVGElement, MouseEvent>) => void
  /** A handler for click events */
  onClick?: (event: React.MouseEvent<SVGElement, MouseEvent>) => void
  /** A handler for a context menu event */
  onContextMenu?: (event: React.MouseEvent<SVGElement, MouseEvent>) => void
}

/**
 * Render an SVG pin.
 */
export default function SVGPin({
  size = 1,
  color = '#93C0D0',
  onMouseOut,
  onMouseOver,
  onClick,
  onContextMenu,
}: SVGPinProps) {
  const [hover, setHover] = useState(false)
  const width = 29 * size
  const height = 34 * size

  return (
    <svg
      className={classNames.svgPin}
      width={width}
      height={height}
      viewBox="0 0 61 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `translate(${-width / 2}px, ${-(height - 1)}px)`,
        filter: hover ? 'drop-shadow(0 0 4px rgba(0, 0, 0, .3))' : '',
      }}
    >
      <g
        style={{ pointerEvents: 'auto' }}
        onClick={event => onClick && onClick(event)}
        onContextMenu={event => onContextMenu && onContextMenu(event)}
        onMouseOver={event => {
          onMouseOver && onMouseOver(event)
          setHover(true)
        }}
        onMouseOut={event => {
          onMouseOut && onMouseOut(event)
          setHover(false)
        }}
      >
        <path
          d="M52 31.5C52 36.8395 49.18 42.314 45.0107 47.6094C40.8672 52.872 35.619 57.678 31.1763 61.6922C30.7916 62.0398 30.2084 62.0398 29.8237 61.6922C25.381 57.678 20.1328 52.872 15.9893 47.6094C11.82 42.314 9 36.8395 9 31.5C9 18.5709 18.6801 9 30.5 9C42.3199 9 52 18.5709 52 31.5Z"
          fill={color}
          stroke="white"
          strokeWidth="4"
        />
        <circle
          cx="30.5"
          cy="30.5"
          r="8.5"
          fill="white"
          opacity={hover ? 0.98 : 0.6}
        />
      </g>
    </svg>
  )
}

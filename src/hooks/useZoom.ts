import React, { useCallback, useEffect, useRef, useState } from 'react'

import { DEFAULTS } from '../constants'
import { limitValue } from '../utils'
import { isZoomable } from './utils'

/**
 * The prop type for the [[`useZoom`]] hook.
 */
export interface useZoomProps {
  /** A reference to the map component */
  ref: React.RefObject<HTMLDivElement>
  /** An optional default zoom level */
  defaultZoom?: number
  /** The minimum zoom level */
  minZoom?: number
  /** The maximum zoom level */
  maxZoom?: number
  /** The incremental value applied to each wheel event to the zoom level */
  zoomStep?: number
}

/**
 * A hook to integrate the zoom wheel with a map.
 */
export default function useZoom({
  ref,
  defaultZoom = DEFAULTS.zoom,
  minZoom = 0,
  maxZoom = 19,
  zoomStep = 0.1,
}: useZoomProps): [number, (zoom: number) => void] {
  const [zoom, setZoom] = useState(defaultZoom)

  const ignoreWheelUntil = useRef<number>()

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      const target = event.target as HTMLElement
      if (!(ref.current && target && isZoomable(target))) {
        return
      }

      // Throttle barrier
      if (ignoreWheelUntil.current && event.timeStamp < ignoreWheelUntil.current) {
        return
      }

      let delay = 33 + zoomStep * 166
      if (delay > 200) delay = 200
      ignoreWheelUntil.current = event.timeStamp + delay

      let newZoom = event.deltaY > 0 ? zoom - zoomStep : zoom + zoomStep
      newZoom = Math.round(newZoom * 100) / 100
      newZoom = limitValue(newZoom, minZoom, maxZoom)
      setZoom(newZoom)
    },
    [ref, zoom, setZoom, minZoom, maxZoom, zoomStep]
  )

  useEffect(() => {
    if (!ref.current) {
      return
    }
    const element = ref.current
    element.addEventListener('wheel', handleWheel)
    return () => element.removeEventListener('wheel', handleWheel)
  }, [ref, handleWheel])

  return [zoom, setZoom]
}

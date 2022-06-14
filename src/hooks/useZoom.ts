import React, { useCallback, useEffect, useRef, useState } from 'react'

import { DEFAULTS } from '../constants'
import { boundValue } from '../tileMath'
import { isZoomable } from './utils'

/**
 * The prop type for the [[`useZoom`]] hook.
 */
export interface useZoomProps {
  defaultZoom?: number
  minZoom?: number
  maxZoom?: number
  zoomStep?: number
  ref: React.RefObject<HTMLDivElement>
}

/**
 * A hook to integrate the zoom wheel with a map.
 */
export default function useZoom({
  defaultZoom = DEFAULTS.zoom,
  minZoom = 0,
  maxZoom = 19,
  zoomStep = 0.1,
  ref,
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
      newZoom = boundValue(minZoom, newZoom, maxZoom)
      setZoom(newZoom)
    },
    [zoom, setZoom, minZoom, maxZoom, zoomStep]
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

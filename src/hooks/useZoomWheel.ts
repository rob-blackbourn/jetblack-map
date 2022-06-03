import React, { useCallback, useEffect, useRef, useState } from 'react'

import { DEFAULT_ZOOM } from '../constants'
import { boundValue } from '../tileMath'

export interface useZoomWheelProps {
  defaultZoom?: number
  minZoom?: number
  maxZoom?: number
  zoomStep?: number
  ref: React.RefObject<HTMLDivElement>
}

export default function useZoomWheel({
  defaultZoom = DEFAULT_ZOOM,
  minZoom = 0,
  maxZoom = 19,
  zoomStep = 0.1,
  ref,
}: useZoomWheelProps): [
  number,
  React.RefObject<number>,
  (zoom: number) => void
] {
  const [zoom, _setZoom] = useState(defaultZoom)
  const zoomRef = useRef(zoom)

  const setZoom = useCallback((zoom: number) => {
    zoomRef.current = zoom
    _setZoom(zoom)
  }, [])

  const ignoreWheelUntil = useRef<number>()

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      // Throttle barrier
      if (
        ignoreWheelUntil.current &&
        event.timeStamp < ignoreWheelUntil.current
      ) {
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

  return [zoom, zoomRef, setZoom]
}

import React, { useRef } from 'react'

import {
  Coordinate,
  Map,
  Marker,
  OverlayLayer,
  Pin,
  Point,
  Popup,
  SVGPin,
  osmTileProvider,
  useDrag,
  useZoom,
  useClick,
  Size,
} from '../../../dist'

const places = {
  greenwichObservatory: {
    latitude: 51.47684676353231,
    longitude: -0.0005261695762532147,
  },
  buckinghamPalace: {
    latitude: 51.501200111998415,
    longitude: -0.14182556179982908,
  },
  arcDeTriomphe: {
    latitude: 48.87378957393155,
    longitude: 2.2950172762947645,
  },
  eiffelTower: {
    latitude: 48.85826418143489,
    longitude: 2.294514079300189,
  },
}

export interface CircleMarkerProps {
  point: Point
  radius?: number
  strokeWidth?: number
  color?: string
  onMouseOver?: React.MouseEventHandler<SVGElement>
  onMouseOut?: React.MouseEventHandler<SVGElement>
}

function CircleMarker({
  radius = 10,
  strokeWidth = 2,
  color = 'red',
  onMouseOver,
  onMouseOut,
}: CircleMarkerProps) {
  const size = radius * 2 + strokeWidth * 2

  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        pointerEvents: 'auto',
        transform: `translate(${-size / 2}px, ${-size / 2}px)`,
      }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <circle cx={size / 2} cy={size / 2} r={radius} stroke={color} strokeWidth={2} fill="none" />
    </svg>
  )
}

export default function App() {
  const ref = useRef<HTMLDivElement>(null)

  const [zoom, setZoom] = useZoom({ ref, defaultZoom: 6 })
  const [center, setCenter] = useDrag({
    ref,
    zoom,
    tileSize: osmTileProvider.tileSize,
  })

  useClick({
    ref,
    center,
    zoom,
    tileSize: osmTileProvider.tileSize,
    onClick: (coordinate: Coordinate, point: Point) => console.log('click', { coordinate, point }),
    onDoubleClick: (coordinate: Coordinate, point: Point) => {
      setCenter(coordinate)
      setZoom(zoom + 1)
    },
  })

  const handleRenderPopup = (point: Point, size: Size, data?: string) => {
    return (
      <Popup
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: 2,
          borderRadius: 5,
          fontSize: '75%',
        }}
        point={point}
        leftShift={-size.width}
        upShift={-size.height * 2}
      >
        <span>{data || 'Unknown'}</span>
      </Popup>
    )
  }

  return (
    <div>
      <div>
        <h2>OverlayLayer example</h2>

        <p>
          This example demonstrates the use of the <code>OverlayLayer</code>
          with <code>Marker</code>, <code>Pin</code>, and <code>Popup</code>
          components.
        </p>
      </div>

      <Map
        center={center}
        zoom={zoom}
        width={800}
        height={600}
        ref={ref}
        tileProvider={osmTileProvider}
      >
        <OverlayLayer>
          <Marker
            coordinate={places.greenwichObservatory}
            render={point => <SVGPin point={point} />}
          />

          <Marker
            coordinate={places.eiffelTower}
            render={point => (
              <Pin point={point} data="Eiffel Tower" renderPopup={handleRenderPopup} />
            )}
          />

          <Marker
            coordinate={places.buckinghamPalace}
            render={point => (
              <Pin
                point={point}
                size={1.25}
                renderPopup={(point, size) => (
                  <Popup
                    style={{
                      backgroundColor: 'black',
                      color: 'white',
                      padding: 2,
                      borderRadius: 5,
                      fontSize: '75%',
                    }}
                    point={point}
                    leftShift={-size.width}
                    upShift={-size.height * 2}
                  >
                    <span>Buckingham Palace</span>
                  </Popup>
                )}
              />
            )}
          />

          <Marker
            coordinate={places.arcDeTriomphe}
            render={point => <CircleMarker point={point} />}
          />
        </OverlayLayer>
      </Map>
    </div>
  )
}

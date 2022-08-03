import React, { useRef } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  Coordinate,
  Map,
  Marker,
  OverlayLayer,
  Point,
  SVGPin,
  osmTileProvider,
  useDrag,
  useZoom,
  useClick,
} from '..'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Overlay Layer',
  component: Map,
} as ComponentMeta<typeof Map>

const GREENWICH_OBSERVATORY: Coordinate = {
  latitude: 51.47684676353231,
  longitude: -0.0005261695762532147,
}

const BUCKINGHAM_PALACE: Coordinate = {
  latitude: 51.501200111998415,
  longitude: -0.14182556179982908,
}

const ARC_DE_TRIOMPHE = {
  latitude: 48.87378957393155,
  longitude: 2.2950172762947645,
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

const Template: ComponentStory<typeof Map> = args => {
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

  const handleRenderPopup = () => {
    return (
      <div
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: 2,
          borderRadius: 5,
          fontSize: '75%',
        }}
      >
        Arc De Triomphe
      </div>
    )
  }

  return (
    <Map
      center={center}
      zoom={zoom}
      width="1000px"
      height="600px"
      ref={ref}
      tileProvider={osmTileProvider}
    >
      <OverlayLayer>
        <Marker coordinate={GREENWICH_OBSERVATORY} render={point => <SVGPin point={point} />} />
        <Marker
          coordinate={BUCKINGHAM_PALACE}
          render={point => <SVGPin point={point} size={1.25} />}
        />
        <Marker coordinate={ARC_DE_TRIOMPHE} render={point => <CircleMarker point={point} />} />
      </OverlayLayer>
    </Map>
  )
}
export const OverlayMap = Template.bind({})

OverlayMap.args = {
  width: '600px',
  height: '400px',
  zoom: 11,
  center: BUCKINGHAM_PALACE,
}

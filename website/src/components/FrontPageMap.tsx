import React, { useEffect, useRef, useState, SVGProps } from 'react'

import { Feature } from 'geojson'

import {
  AttributionLayer,
  Coordinate,
  FeatureState,
  GeoJSONLayer,
  Map,
  Marker,
  OverlayLayer,
  Point,
  SVGPin,
  TileLayer,
  ZoomButton,
  useClick,
  useMouseEvents,
  useZoomWheel,
} from '@jetblack/map'

const GREENWICH_OBSERVATORY: Coordinate = {
  latitude: 51.47684676353231,
  longitude: -0.0005261695762532147,
}

const EMPIRE_STATE_BUILDING: Coordinate = {
  latitude: 40.748585815569854,
  longitude: -73.9856543574467,
}

export default function FrontPageMap() {
  const ref = useRef<HTMLDivElement>(null)

  const [zoom, zoomRef, setZoom] = useZoomWheel({ ref, defaultZoom: 0 })
  const [center, centerRef, setCenter] = useMouseEvents({
    ref,
    defaultCenter: GREENWICH_OBSERVATORY,
    zoomRef,
  })

  const handleClick = (coordinate: Coordinate, point: Point) => {
    console.log('click', { coordinate, point })
  }

  const handleDoubleClick = (coordinate: Coordinate, point: Point) => {
    console.log('doubleClick', { coordinate, point })
    setCenter(coordinate)
    setZoom(zoom + 1)
  }

  useClick({
    ref,
    centerRef,
    zoomRef,
    onClick: handleClick,
    onDoubleClick: handleDoubleClick,
  })

  const [data, setData] = useState<Feature>({} as Feature)

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/4_niedrig.geo.json'
    )
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  const handleRequestFeatureStyle = (
    feature: Feature,
    state: FeatureState
  ): SVGProps<SVGAElement> | null => {
    if (state.mouseOver) {
      return {
        fill: '#93c0d099',
        strokeWidth: '2',
        stroke: 'white',
        opacity: 0.5,
      }
    } else {
      return {
        fill: '#d4e6ec99',
        strokeWidth: '1',
        stroke: 'white',
        r: '20',
        opacity: 0.3,
      }
    }
  }

  const handleRenderFeature = (feature: Feature) => {
    if (!(feature && feature.properties)) {
      return null
    }

    return (
      <dl
        style={{
          width: '100%',
          overflow: 'hidden',
          padding: 0,
          margin: 0,
          fontFamily: 'sans-serif',
          fontSize: 'smaller',
        }}
      >
        {Object.entries(feature.properties).map(([key, value]) => (
          <>
            <dt
              style={{
                float: 'left',
                width: '25%',
                padding: 0,
                margin: 0,
                textAlign: 'left',
              }}
            >
              {key}
            </dt>
            <dd
              style={{
                float: 'left',
                width: '75%',
                padding: 0,
                margin: 0,
                textAlign: 'left',
              }}
            >
              {value}
            </dd>
          </>
        ))}
      </dl>
    )
  }

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <div style={{ margin: '0 auto' }}>
        <Map center={center} zoom={zoom} width="450px" height="150px" ref={ref}>
          <TileLayer />
          <OverlayLayer>
            <Marker
              coordinate={GREENWICH_OBSERVATORY}
              render={point => <SVGPin point={point} />}
            />
            <Marker
              coordinate={EMPIRE_STATE_BUILDING}
              render={point => <SVGPin point={point} />}
            />
          </OverlayLayer>
          <GeoJSONLayer
            data={data}
            requestFeatureStyle={handleRequestFeatureStyle}
            renderPopup={handleRenderFeature}
          />
          <AttributionLayer />
        </Map>
      </div>
    </div>
  )
}
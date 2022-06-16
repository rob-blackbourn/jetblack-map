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
  ZoomButton,
  useClick,
  useDrag,
  useZoom,
} from '@jetblack/map'

const places: { [name: string]: Coordinate } = {
  greenwichObservatory: {
    latitude: 51.47684676353231,
    longitude: -0.0005261695762532147,
  },
  empireStateBuilding: {
    latitude: 40.748585815569854,
    longitude: -73.9856543574467,
  },
}

const tileSize = { width: 256, height: 256 }

export default function FrontPageMap() {
  const ref = useRef<HTMLDivElement>(null)

  const [zoom, setZoom] = useZoom({ ref, defaultZoom: 4 })
  const [center, setCenter] = useDrag({
    ref,
    defaultCenter: places.greenwichObservatory,
    zoom,
    tileSize,
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
    center,
    zoom,
    tileSize,
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
    <Map center={center} zoom={zoom} width="600px" height="400px" ref={ref}>
      <OverlayLayer>
        <Marker
          coordinate={places.greenwichObservatory}
          render={point => <SVGPin point={point} />}
        />
        <Marker
          coordinate={places.empireStateBuilding}
          render={point => <SVGPin point={point} />}
        />
        <ZoomButton point={{ x: 10, y: 10 }} onChange={zoom => setZoom(zoom)} />
      </OverlayLayer>
      <GeoJSONLayer
        data={data}
        requestFeatureStyle={handleRequestFeatureStyle}
        renderPopup={handleRenderFeature}
      />
      <AttributionLayer />
    </Map>
  )
}

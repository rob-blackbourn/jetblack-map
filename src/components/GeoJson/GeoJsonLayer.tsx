import { Feature, FeatureCollection, GeoJSON } from 'geojson'
import { SVGProps, useContext } from 'react'
import MapContext from '../MapContext'
import { FeatureComponent } from './FeatureComponent'
import { CLASS_NAMES } from '../../constants'

const classNames = {
  geoJsonLayer: [
    CLASS_NAMES.primary,
    CLASS_NAMES.draggable,
    CLASS_NAMES.zoomable,
    CLASS_NAMES.clickable,
    'geojson-layer',
    'layer',
  ].join(' '),
}

/**
 * The prop type for the [[`GeoJSONLayer`]] component.
 */
export interface GeoJSONLayerProps {
  /** The GeoJSON data */
  data: GeoJSON
  /** A callback to request the SVG props for a feature */
  requestFeatureStyle?: (feature: Feature) => SVGProps<SVGElement> | null
}

/**
 * Render a GeoJSON layer.
 */
export default function GeoJSONLayer({
  data,
  requestFeatureStyle,
}: GeoJSONLayerProps) {
  const {
    bounds: { width, height },
  } = useContext(MapContext)

  const features = () => {
    if (data.type === 'Feature') {
      return (
        <FeatureComponent
          feature={data as Feature}
          requestFeatureStyle={requestFeatureStyle}
        />
      )
    } else if (data.type == 'FeatureCollection') {
      return (
        <>
          {(data as FeatureCollection).features.map((feature, i) => (
            <FeatureComponent
              key={`feature-${i}`}
              feature={feature}
              requestFeatureStyle={requestFeatureStyle}
            />
          ))}
        </>
      )
    } else {
      return null
    }
  }

  return (
    <div
      className={classNames.geoJsonLayer}
      style={{
        position: 'absolute',
        left: '0',
        top: '0',
        pointerEvents: 'none',
        cursor: 'pointer',
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
      >
        {features()}
      </svg>
    </div>
  )
}

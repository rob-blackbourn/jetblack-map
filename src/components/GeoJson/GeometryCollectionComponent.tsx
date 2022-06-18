import { SVGProps } from 'react'

import {
  Geometry,
  GeometryCollection,
  Point,
  MultiPoint,
  LineString,
  MultiLineString,
  Polygon,
  MultiPolygon,
  Feature,
} from 'geojson'

import PointComponent from './PointComponent'
import MultiPointComponent from './MultiPointComponent'
import LineStringComponent from './LineStringComponent'
import MultiLineStringComponent from './MultiLineStringComponent'
import PolygonComponent from './PolygonComponent'
import MultiPolygonComponent from './MultiPolygonComponent'
import { MarkerComponent } from './types'

/**
 * The prop type for a [[`GeometryCollectionComponent`]].
 */
export interface GeometryCollectionComponentProps {
  /** The GeoJSON geometry */
  geometry: Geometry
  feature: Feature
  markerComponent?: MarkerComponent
}

/**
 * Renders a GeoJSON GeometryCollection.
 */
export default function GeometryCollectionComponent({
  geometry,
  feature,
  markerComponent,
  ...props
}: GeometryCollectionComponentProps & SVGProps<SVGSVGElement>) {
  if (geometry.type === 'GeometryCollection') {
    const geometryCollection = geometry as GeometryCollection
    return (
      <>
        {geometryCollection.geometries.map((g, i) => (
          <GeometryCollectionComponent key={i} feature={feature} geometry={g} {...props} />
        ))}
      </>
    )
  } else if (geometry.type === 'Point') {
    return (
      <PointComponent
        point={geometry as Point}
        feature={feature}
        markerComponent={markerComponent}
        {...props}
      />
    )
  } else if (geometry.type === 'MultiPoint') {
    return (
      <MultiPointComponent
        multiPoint={geometry as MultiPoint}
        feature={feature}
        markerComponent={markerComponent}
        {...props}
      />
    )
  } else if (geometry.type === 'LineString') {
    return (
      <LineStringComponent
        lineString={geometry as LineString}
        feature={feature}
        {...(props as SVGProps<SVGPathElement>)}
      />
    )
  } else if (geometry.type === 'MultiLineString') {
    return (
      <MultiLineStringComponent
        multiLineString={geometry as MultiLineString}
        feature={feature}
        {...(props as SVGProps<SVGPathElement>)}
      />
    )
  } else if (geometry.type === 'Polygon') {
    return (
      <PolygonComponent
        polygon={geometry as Polygon}
        feature={feature}
        {...(props as SVGProps<SVGPathElement>)}
      />
    )
  } else if (geometry.type === 'MultiPolygon') {
    return (
      <MultiPolygonComponent
        multiPolygon={geometry as MultiPolygon}
        feature={feature}
        {...(props as SVGProps<SVGPathElement>)}
      />
    )
  } else {
    return null
  }
}

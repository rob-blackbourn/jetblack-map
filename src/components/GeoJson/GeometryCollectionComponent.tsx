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
import { ComponentProps, MarkerComponent } from './types'

/**
 * The prop type for a [[`GeometryCollectionComponent`]].
 */
export interface GeometryCollectionComponentProps extends ComponentProps {
  /** The GeoJSON geometry */
  geometry: Geometry
  /** The GeoJSON feature */
  feature: Feature
  /** The marker component */
  markerComponent?: MarkerComponent
}

/**
 * Renders a GeoJSON GeometryCollection.
 */
export default function GeometryCollectionComponent({
  geometry,
  feature,
  markerComponent,
  centers,
  zoom,
  bounds,
  tileSize,
  ...props
}: GeometryCollectionComponentProps & SVGProps<SVGSVGElement>) {
  if (geometry.type === 'GeometryCollection') {
    const geometryCollection = geometry as GeometryCollection
    return (
      <>
        {geometryCollection.geometries.map((g, i) => (
          <GeometryCollectionComponent
            key={i}
            feature={feature}
            geometry={g}
            centers={centers}
            zoom={zoom}
            bounds={bounds}
            tileSize={tileSize}
            {...props}
          />
        ))}
      </>
    )
  } else if (geometry.type === 'Point') {
    return (
      <PointComponent
        point={geometry as Point}
        feature={feature}
        markerComponent={markerComponent}
        centers={centers}
        zoom={zoom}
        bounds={bounds}
        tileSize={tileSize}
        {...props}
      />
    )
  } else if (geometry.type === 'MultiPoint') {
    return (
      <MultiPointComponent
        multiPoint={geometry as MultiPoint}
        feature={feature}
        markerComponent={markerComponent}
        centers={centers}
        zoom={zoom}
        bounds={bounds}
        tileSize={tileSize}
        {...props}
      />
    )
  } else if (geometry.type === 'LineString') {
    return (
      <LineStringComponent
        lineString={geometry as LineString}
        centers={centers}
        zoom={zoom}
        bounds={bounds}
        tileSize={tileSize}
        {...(props as SVGProps<SVGPathElement>)}
      />
    )
  } else if (geometry.type === 'MultiLineString') {
    return (
      <MultiLineStringComponent
        multiLineString={geometry as MultiLineString}
        centers={centers}
        zoom={zoom}
        bounds={bounds}
        tileSize={tileSize}
        {...(props as SVGProps<SVGPathElement>)}
      />
    )
  } else if (geometry.type === 'Polygon') {
    return (
      <PolygonComponent
        polygon={geometry as Polygon}
        centers={centers}
        zoom={zoom}
        bounds={bounds}
        tileSize={tileSize}
        {...(props as SVGProps<SVGPathElement>)}
      />
    )
  } else if (geometry.type === 'MultiPolygon') {
    return (
      <MultiPolygonComponent
        multiPolygon={geometry as MultiPolygon}
        centers={centers}
        zoom={zoom}
        bounds={bounds}
        tileSize={tileSize}
        {...(props as SVGProps<SVGPathElement>)}
      />
    )
  } else {
    return null
  }
}

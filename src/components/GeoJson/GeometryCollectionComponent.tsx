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
} from 'geojson'

import PointComponent from './PointComponent'
import MultiPointComponent from './MultiPointComponent'
import LineStringComponent from './LineStringComponent'
import MultiLineStringComponent from './MultiLineStringComponent'
import PolygonComponent from './PolygonComponent'
import MultiPolygonComponent from './MultiPolygonComponent'

export interface GeometryCollectionComponentProps {
  geometry: Geometry
}

export default function GeometryCollectionComponent({
  geometry,
  ...props
}: GeometryCollectionComponentProps & SVGProps<SVGElement>) {
  if (geometry.type === 'GeometryCollection') {
    const geometryCollection = geometry as GeometryCollection
    return (
      <>
        {geometryCollection.geometries.map((g, i) => (
          <GeometryCollectionComponent key={i} geometry={g} {...props} />
        ))}
      </>
    )
  } else if (geometry.type === 'Point') {
    return (
      <PointComponent
        point={geometry as Point}
        {...(props as SVGProps<SVGCircleElement>)}
      />
    )
  } else if (geometry.type === 'MultiPoint') {
    return (
      <MultiPointComponent
        multiPoint={geometry as MultiPoint}
        {...(props as SVGProps<SVGCircleElement>)}
      />
    )
  } else if (geometry.type === 'LineString') {
    return (
      <LineStringComponent
        lineString={geometry as LineString}
        {...(props as SVGProps<SVGPathElement>)}
      />
    )
  } else if (geometry.type === 'MultiLineString') {
    return (
      <MultiLineStringComponent
        multiLineString={geometry as MultiLineString}
        {...(props as SVGProps<SVGPathElement>)}
      />
    )
  } else if (geometry.type === 'Polygon') {
    return (
      <PolygonComponent
        polygon={geometry as Polygon}
        {...(props as SVGProps<SVGCircleElement>)}
      />
    )
  } else if (geometry.type === 'MultiPolygon') {
    return (
      <MultiPolygonComponent
        multiPolygon={geometry as MultiPolygon}
        {...(props as SVGProps<SVGCircleElement>)}
      />
    )
  } else {
    return null
  }
}
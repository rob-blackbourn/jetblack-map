import React, { SVGProps } from 'react'

import { Feature } from 'geojson'
import { Point } from '../../types'

export interface FeatureState {
  mouseOver: boolean
}

export type RequestFeatureStyleHandler = (
  feature: Feature,
  state: FeatureState
) => SVGProps<SVGSVGElement> | null

export interface MarkerComponentProps extends SVGProps<SVGSVGElement> {
  point: Point
  feature: Feature
}
export type MarkerComponent = React.FC<MarkerComponentProps>

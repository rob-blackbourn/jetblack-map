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

export interface MarkerPointComponentProps extends SVGProps<SVGSVGElement> {
  point: Point
}
export type MarkerPointComponent = React.FC<MarkerPointComponentProps>

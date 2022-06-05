import { SVGProps } from 'react'

import { Feature } from 'geojson'

export interface FeatureState {
  mouseOver: boolean
}

export type RequestFeatureStyleHandler = (
  feature: Feature,
  state: FeatureState
) => SVGProps<SVGElement>

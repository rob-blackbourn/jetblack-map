import { useContext } from 'react'

import { CLASS_NAMES } from '../constants'
import MapContext from './MapContext'

const classNames = {
  attributionLayer: [CLASS_NAMES.primary, 'attribution-layer'].join(' '),
}

/**
 * Render the attribution layer.
 *
 * @category Component
 */
export default function AttributionLayer() {
  const { tileProvider } = useContext(MapContext)

  return (
    <div
      className={classNames.attributionLayer}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        fontSize: '11px',
        padding: '2px 5px',
        background: 'rgba(255, 255, 255, 0.7)',
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        color: '#333',
      }}
    >
      {tileProvider.attribution}
    </div>
  )
}

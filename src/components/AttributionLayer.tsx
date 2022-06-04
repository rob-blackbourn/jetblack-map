import { osmTileProvider } from './TileProviders'

export interface AttributionLayerProps {
  attribution?: JSX.Element
}

export default function AttributionLayer({
  attribution = osmTileProvider.attribution,
}: AttributionLayerProps) {
  return (
    <div
      className="jetblack-map attribution"
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
      {attribution}
    </div>
  )
}

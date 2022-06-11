import { useContext } from 'react'

import { CLASS_NAMES } from '../constants'

import ImageTile from './ImageTile'
import MapContext from './MapContext'

import { calcTileInfo, calcImageTileProps } from './tileLayerHelpers'

const classNames = {
  tileLayer: [
    CLASS_NAMES.primary,
    CLASS_NAMES.draggable,
    CLASS_NAMES.zoomable,
    CLASS_NAMES.clickable,
    'tile-layer',
  ].join(' '),
  tile: [
    CLASS_NAMES.primary,
    CLASS_NAMES.draggable,
    CLASS_NAMES.zoomable,
    CLASS_NAMES.clickable,
    'tile',
  ].join(' '),
}

/**
 * Render a tile layer.
 *
 * @param props The props.
 * @returns A map.
 *
 * @category Component
 */
export default function TileLayer() {
  const {
    bounds: { width, height },
    center,
    zoom,
    tileProvider,
  } = useContext(MapContext)

  const {
    tileMin,
    tileMax,
    tileCenter,
    roundedZoom,
    scaleWidth,
    scaleHeight,
    scale,
  } = calcTileInfo(center, zoom, width, height)

  const imageTileProps = calcImageTileProps(
    tileMin,
    tileMax,
    roundedZoom,
    tileProvider
  )

  // Convert the top-left from tile coordinates to screen coordinates.
  const left = -((tileCenter.x - tileMin.x) * 256 - scaleWidth / 2)
  const top = -((tileCenter.y - tileMin.y) * 256 - scaleHeight / 2)

  return (
    <div
      className={classNames.tile}
      style={{
        width: scaleWidth,
        height: scaleHeight,
        position: 'absolute',
        top: `calc((100% - ${height}px) / 2)`,
        left: `calc((100% - ${width}px) / 2)`,
        overflow: 'hidden',
        willChange: 'transform',
        transform: `scale(${scale}, ${scale})`,
        transformOrigin: 'top left',
      }}
    >
      <div
        className={classNames.tile}
        style={{
          position: 'absolute',
          width: (tileMax.x - tileMin.x + 1) * 256,
          height: (tileMax.y - tileMin.y + 1) * 256,
          willChange: 'transform',
          transform: `translate(${left}px, ${top}px)`,
        }}
      >
        {imageTileProps.map(({ key, ...props }) => (
          <ImageTile key={key} {...props} />
        ))}
      </div>
    </div>
  )
}

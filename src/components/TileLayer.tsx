import { useContext } from 'react'

import { CLASS_NAMES } from '../constants'
import { tileToScreenPoint } from '../mathUtils'

import { ImageTile } from './ImageTile'
import { MapContext } from './MapContext'

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
 * @returns The tile layer.
 *
 * @category Component
 */
export function TileLayer() {
  const {
    bounds,
    center,
    zoom,
    tileProvider: { makeUrl, tileSize },
  } = useContext(MapContext)

  const { tileMin, tileMax, tileCenter, roundedZoom, scaledScreen, scale } = calcTileInfo(
    center,
    zoom,
    bounds,
    tileSize
  )

  const imageTileProps = calcImageTileProps(tileMin, tileMax, roundedZoom, makeUrl, tileSize)

  // Convert the top-left from tile coordinates to screen coordinates.
  const tileTopLeft = {
    x: tileCenter.x - tileMin.x,
    y: tileCenter.y - tileMin.y,
  }
  const screenTopLeft = tileToScreenPoint(tileTopLeft, tileSize)
  const left = -(screenTopLeft.x - scaledScreen.width / 2)
  const top = -(screenTopLeft.y - scaledScreen.height / 2)

  return (
    <div
      className={classNames.tileLayer}
      style={{
        width: scaledScreen.width,
        height: scaledScreen.height,
        position: 'absolute',
        top: `calc((100% - ${bounds.height}px) / 2)`,
        left: `calc((100% - ${bounds.width}px) / 2)`,
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
          width: (tileMax.x - tileMin.x + 1) * tileSize.width,
          height: (tileMax.y - tileMin.y + 1) * tileSize.height,
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

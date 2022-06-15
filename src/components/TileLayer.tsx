import { useContext } from 'react'

import { CLASS_NAMES } from '../constants'
import { tileToScreenPoint } from '../tileMath'

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
    tileProvider: { makeUrl, tileWidth, tileHeight },
  } = useContext(MapContext)

  const { tileMin, tileMax, tileCenter, roundedZoom, scaledScreen, scale } = calcTileInfo(
    center,
    zoom,
    width,
    height,
    tileWidth,
    tileHeight
  )

  const imageTileProps = calcImageTileProps(
    tileMin,
    tileMax,
    roundedZoom,
    makeUrl,
    tileWidth,
    tileHeight
  )

  // Convert the top-left from tile coordinates to screen coordinates.
  const tileTopLeft = {
    x: tileCenter.x - tileMin.x,
    y: tileCenter.y - tileMin.y,
  }
  const screenTopLeft = tileToScreenPoint(tileTopLeft, tileWidth, tileHeight)
  const left = -(screenTopLeft.x - scaledScreen.x / 2)
  const top = -(screenTopLeft.y - scaledScreen.y / 2)

  return (
    <div
      className={classNames.tile}
      style={{
        width: scaledScreen.x,
        height: scaledScreen.y,
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
          width: (tileMax.x - tileMin.x + 1) * tileWidth,
          height: (tileMax.y - tileMin.y + 1) * tileHeight,
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

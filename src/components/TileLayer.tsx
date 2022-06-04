import { useContext } from 'react'

import { ScaleInfo, TileProvider } from '../types'

import { CLASS_NAMES } from '../constants'

import ImageTile, { ImageTileProps } from './ImageTile'
import MapContext from './MapContext'

import { osmTileProvider } from './TileProviders'

import { srcSet, calcTileInfo } from './tileLayerHelpers'

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
 * The props type for [[`TileLayer`]]
 */
export interface TileLayerProps {
  /** The tile provider */
  tileProvider?: TileProvider
  /** Optional resolutions */
  dprs?: number[]
}

/**
 * Render a tile layer.
 */
export default function TileLayer({
  tileProvider = osmTileProvider,
  dprs = [],
}: TileLayerProps) {
  const {
    bounds: { width, height },
    center,
    zoom,
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

  const maxTiles = 2 ** roundedZoom

  const min = {
    x: tileMin.x,
    y: Math.max(tileMin.y, 0),
  }
  const max = {
    x: tileMax.x,
    y: Math.min(tileMax.y, maxTiles - 1),
  }

  const tiles: (ImageTileProps & { key: string })[] = []
  for (let x = min.x; x <= max.x; ++x) {
    for (let y = min.y; y <= max.y; ++y) {
      // The range of tiles is from 0 to 2 ** zoom.
      // When the space allows for more, wrap around.
      let tileX = x
      while (tileX < 0) {
        tileX += maxTiles
      }
      tileX %= maxTiles

      tiles.push({
        key: `${x}-${y}-${roundedZoom}`,
        url: tileProvider.makeUrl(tileX, y, roundedZoom),
        srcSet: srcSet(dprs, tileProvider, tileX, y, roundedZoom),
        left: (x - tileMin.x) * 256,
        top: (y - tileMin.y) * 256,
        width: 256,
        height: 256,
      })
    }
  }

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
        {tiles.map(({ key, ...props }) => (
          <ImageTile key={key} {...props} />
        ))}
      </div>
    </div>
  )
}

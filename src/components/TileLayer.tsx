import { useContext } from 'react'

import { Coordinate, Point, ScaleInfo, TileProvider } from '../types'

import { calcScaleInfo, coordinateToTilePoint } from '../tileMath'

import ImageTile, { ImageTileProps } from './ImageTile'
import MapContext from './MapContext'

import { osmTileProvider } from './providers'

function srcSet(
  dprs: number[],
  tileProvider: TileProvider,
  x: number,
  y: number,
  z: number
): string {
  if (dprs.length === 0) {
    return ''
  }
  const attr = dprs
    .map(dpr => tileProvider(x, y, z, dpr) + (dpr === 1 ? '' : ` ${dpr}x`))
    .join(', ')
  return attr
}

interface TileInfo extends ScaleInfo {
  tileMin: Point
  tileMax: Point
  tileCenter: Point
}

function calcTileInfo(
  center: Coordinate,
  zoom: number,
  width: number,
  height: number
): TileInfo {
  const { roundedZoom, scale, scaleWidth, scaleHeight } = calcScaleInfo(
    zoom,
    width,
    height
  )

  const tileCenter = coordinateToTilePoint(center, roundedZoom)

  const halfWidth = scaleWidth / 2 / 256
  const halfHeight = scaleHeight / 2 / 256

  const tileMin = {
    x: Math.floor(tileCenter.x - halfWidth),
    y: Math.floor(tileCenter.y - halfHeight),
  }
  const tileMax = {
    x: Math.floor(tileCenter.x + halfWidth),
    y: Math.floor(tileCenter.y + halfHeight),
  }

  return {
    tileMin,
    tileMax,
    tileCenter,
    roundedZoom,
    scaleWidth,
    scaleHeight,
    scale,
  }
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
        url: tileProvider(tileX, y, roundedZoom),
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
      className="jetblack-map-tiles"
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
        className="jetblack-map-tile"
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

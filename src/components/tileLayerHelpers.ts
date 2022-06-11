import { Coordinate, Point, ScaleInfo, TileProvider } from '../types'

import { calcScaleInfo, coordinateToTilePoint } from '../tileMath'
import { ImageTileProps } from './ImageTile'

export interface TileInfo extends ScaleInfo {
  tileMin: Point
  tileMax: Point
  tileCenter: Point
}

export function calcTileInfo(
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

export function calcImageTileProps(
  tileMin: Point,
  tileMax: Point,
  roundedZoom: number,
  tileProvider: TileProvider
): Array<ImageTileProps & { key: string }> {
  const maxTiles = 2 ** roundedZoom

  const min = {
    x: tileMin.x,
    y: Math.max(tileMin.y, 0),
  }
  const max = {
    x: tileMax.x,
    y: Math.min(tileMax.y, maxTiles - 1),
  }

  const imageTileProps: (ImageTileProps & { key: string })[] = []
  for (let x = min.x; x <= max.x; ++x) {
    for (let y = min.y; y <= max.y; ++y) {
      // The range of tiles is from 0 to 2 ** zoom.
      // When the space allows for more, wrap around.
      let tileX = x
      while (tileX < 0) {
        tileX += maxTiles
      }
      tileX %= maxTiles

      imageTileProps.push({
        key: `${x}-${y}-${roundedZoom}`,
        url: tileProvider.makeUrl(tileX, y, roundedZoom),
        left: (x - tileMin.x) * 256,
        top: (y - tileMin.y) * 256,
        width: 256,
        height: 256,
      })
    }
  }

  return imageTileProps
}

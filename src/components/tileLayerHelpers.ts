import { Coordinate, Point, ScaleInfo, TileUrlProvider } from '../types'

import { calcScaleInfo, coordinateToTilePoint, screenToTilePoint } from '../tileMath'
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
  height: number,
  tileWidth: number,
  tileHeight: number
): TileInfo {
  const { roundedZoom, scale, scaledScreen } = calcScaleInfo(zoom, width, height)

  const tileCenter = coordinateToTilePoint(center, roundedZoom)

  const scaledScreenCenter = {
    x: scaledScreen.x / 2,
    y: scaledScreen.y / 2,
  }
  const scaledTileCenter = screenToTilePoint(scaledScreenCenter, tileWidth, tileHeight)

  const tileMin = {
    x: Math.floor(tileCenter.x - scaledTileCenter.x),
    y: Math.floor(tileCenter.y - scaledTileCenter.y),
  }
  const tileMax = {
    x: Math.floor(tileCenter.x + scaledTileCenter.x),
    y: Math.floor(tileCenter.y + scaledTileCenter.y),
  }

  return {
    tileMin,
    tileMax,
    tileCenter,
    roundedZoom,
    scaledScreen,
    scale,
  }
}

export function calcImageTileProps(
  tileMin: Point,
  tileMax: Point,
  roundedZoom: number,
  makeUrl: TileUrlProvider,
  tileWidth: number,
  tileHeight: number
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
        url: makeUrl(tileX, y, roundedZoom),
        left: (x - tileMin.x) * tileWidth,
        top: (y - tileMin.y) * tileHeight,
        width: tileWidth,
        height: tileHeight,
      })
    }
  }

  return imageTileProps
}

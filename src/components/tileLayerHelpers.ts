import { Coordinate, Point, ScaleInfo, Size, TileUrlProvider } from '../types'

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
  screenSize: Size,
  tileSize: Size
): TileInfo {
  const { roundedZoom, scale, scaledScreen } = calcScaleInfo(zoom, screenSize)

  const tileCenter = coordinateToTilePoint(center, roundedZoom)

  const scaledScreenCenter = {
    x: scaledScreen.x / 2,
    y: scaledScreen.y / 2,
  }
  const scaledTileCenter = screenToTilePoint(scaledScreenCenter, tileSize)

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
  tileSize: Size
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
        left: (x - tileMin.x) * tileSize.width,
        top: (y - tileMin.y) * tileSize.height,
        width: tileSize.width,
        height: tileSize.height,
      })
    }
  }

  return imageTileProps
}

import { Coordinate, Point, ScaleInfo, TileProvider } from '../types'

import { calcScaleInfo, coordinateToTilePoint } from '../tileMath'

export function srcSet(
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

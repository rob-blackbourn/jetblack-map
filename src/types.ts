export interface Coordinate {
  latitude: number
  longitude: number
}

export type Point = {
  x: number
  y: number
}

export interface Tile {
  key: string
  url: string
  srcSet: string
  left: number
  top: number
  width: number
  height: number
  active: boolean
}

export interface ScaleInfo {
  roundedZoom: number
  scale: number
  scaleWidth: number
  scaleHeight: number
}
export interface TileInfo extends ScaleInfo {
  tileMin: Point
  tileMax: Point
  tileCenter: Point
}

export interface Bounds {
  top: number
  left: number
  width: number
  height: number
}

export type TileProvider = (x: number, y: number, z: number, dpr?: number) => string

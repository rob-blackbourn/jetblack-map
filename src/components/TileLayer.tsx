import { useContext } from 'react'

import { Tile, TileProvider } from '../types'

import { srcSet, calcTileInfo } from '../tileMath'

import ImageTile from './ImageTile'
import MapContext from './MapContext'

import { osmTileProvider } from './providers'

export interface TileLayerProps {
  tileProvider?: TileProvider
  dprs?: number[]
}

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

  const tiles: Tile[] = []
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
        active: true,
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
        {tiles.map(tile => (
          <ImageTile key={tile.key} tile={tile} />
        ))}
      </div>
    </div>
  )
}

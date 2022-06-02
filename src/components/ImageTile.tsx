import { Tile } from '../types'

export interface ImageTileProps {
  tile: Tile
}

export default function ImageTile({ tile }: ImageTileProps) {
  return (
    <img
      className="jetblack-map-image-tile"
      src={tile.url}
      srcSet={tile.srcSet}
      width={tile.width}
      height={tile.height}
      loading={'lazy'}
      alt={''}
      style={{
        position: 'absolute',
        left: tile.left,
        top: tile.top,
        willChange: 'transform',
        transformOrigin: 'top left',
        opacity: 1,
      }}
    />
  )
}

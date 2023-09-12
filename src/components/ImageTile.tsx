import { CLASS_NAMES } from '../constants'

const classNames = {
  imageTile: [
    CLASS_NAMES.primary,
    CLASS_NAMES.draggable,
    CLASS_NAMES.zoomable,
    CLASS_NAMES.clickable,
    'image-tile',
  ].join(' '),
}

/**
 * The props type of an [[`ImageTile`]] component.
 *
 * @category Component
 * @internal
 */
export interface ImageTileProps {
  /** The url or the tile image */
  url: string
  /** The left position on the screen */
  left: number
  /** The top position on the screen */
  top: number
  /** The width of the tile */
  width: number
  /** The height of the tile */
  height: number
}

/**
 * Render an image tile.
 *
 * @param props The props.
 * @returns An image tile.
 *
 * @category Component
 * @internal
 */
export function ImageTile({ url, left, top, width, height }: ImageTileProps) {
  return (
    <img
      className={classNames.imageTile}
      src={url}
      width={width}
      height={height}
      loading={'lazy'}
      alt={''}
      style={{
        position: 'absolute',
        left: left,
        top: top,
        willChange: 'transform',
        transformOrigin: 'top left',
        opacity: 1,
      }}
    />
  )
}

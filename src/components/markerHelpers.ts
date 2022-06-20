import { Point } from '../types'

/**
 * Find all the screen points.
 *
 * @param point The starting pointy.
 * @param roundedZoom The rounded zoom
 * @param scale The scale.
 * @param screenWidth The screen width.
 * @param tileWidth The tile width.
 * @returns A list of the points
 *
 * @ignore
 */
export function createPoints(
  point: Point,
  roundedZoom: number,
  scale: number,
  screenWidth: number,
  tileWidth: number
): Point[] {
  const maxTiles = 2 ** roundedZoom
  const expectedWidth = maxTiles * tileWidth * scale

  // If the screen is zoomed out the coordinate may appear many times as the display will wrap horizontally.
  const elementPoints: Point[] = [point]
  // Points to the left.
  for (
    let p = { x: point.x - expectedWidth, y: point.y };
    p.x >= 0;
    p = { x: p.x - expectedWidth, y: p.y }
  ) {
    elementPoints.push(p)
  }
  // Points to the right.
  for (
    let p = { x: point.x + expectedWidth, y: point.y };
    p.x < screenWidth;
    p = { x: p.x + expectedWidth, y: p.y }
  ) {
    elementPoints.push(p)
  }

  return elementPoints
}

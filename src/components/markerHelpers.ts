import { Point } from '../types'

export function createPoints(
  point: Point,
  roundedZoom: number,
  scale: number,
  scaleWidth: number
): Point[] {
  const maxTiles = 2 ** roundedZoom
  const expectedWidth = maxTiles * 256 * scale

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
    p.x < scaleWidth;
    p = { x: p.x + expectedWidth, y: p.y }
  ) {
    elementPoints.push(p)
  }

  return elementPoints
}
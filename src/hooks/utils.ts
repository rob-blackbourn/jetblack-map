import { Point } from '../types'
import { CLASS_NAMES } from '../constants'

function hasClassName(element: HTMLElement, classNames: string[]): boolean {
  // const elementClassNames = element.className.trim().split(/\s+/)
  const elementClassNames =
    element.getAttribute('class')?.trim().split(/\s+/) || []
  return classNames.every(className => elementClassNames.includes(className))
}

export function isDraggable(element: HTMLElement): boolean {
  return hasClassName(element, [CLASS_NAMES.primary, CLASS_NAMES.draggable])
}

export function isZoomable(element: HTMLElement): boolean {
  return hasClassName(element, [CLASS_NAMES.primary, CLASS_NAMES.zoomable])
}

export function isClickable(element: HTMLElement): boolean {
  return hasClassName(element, [CLASS_NAMES.primary, CLASS_NAMES.clickable])
}

export function getRelativeMousePoint(
  event: MouseEvent,
  div: HTMLDivElement
): Point {
  const { top, left } = div.getBoundingClientRect()
  const point: Point = {
    x: event.clientX - left,
    y: event.clientY - top,
  }
  return point
}

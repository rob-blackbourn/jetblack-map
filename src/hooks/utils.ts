import { CLASS_NAMES } from '../constants'

function hasClassName(element: HTMLElement, classNames: string[]): boolean {
  const elementClassNames = element.className.trim().split(/\s+/)
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

---
sidebar_position: 8
---

# Clicking

The primary function of the click hook is to translate the screen 
coordinate to a longitude and latitude. The built in hook also
detects double clicks which requires extra code, but this will
not be discussed here.

Here is some pseudo code from the `useClick` hook where it turns
the screen point into a coordinate. It's basically just a call to
`screenPointToCoordinate`. The primary input is the HTML
`event`. The `ref` from the map is also required to get the top/left
of the div, and the screen width and height. Finally the current 
center and zoom, must be known.

```ts
const mousePoint: Point = getRelativeMousePoint(event, ref.current)
const { screenWidth, screenHeight } = ref.current.getBoundingClientRect()
const coordinate = screenPointToCoordinate(
  mousePoint,
  center,
  zoom,
  screenWidth,
  screenHeight,
  tileWidth,
  tileHeight
)
```

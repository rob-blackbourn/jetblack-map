---
sidebar_position: 7
---

# Dragging

Dragging the map is achieved by changing the center coordinate. When
a drag happens the center moves from the last pointer location to the
current.

The built in hook deals with this as follows. It assumes the previous
mouse point (`lastPoint`) has been saved, the `currentPoint` is the
input, and the current `center` and 
`zoom` is available. 

```ts
  const screenDelta: Point = {
    x: (lastPoint.x - currentPoint.x),
    y: (lastPoint.y - currentPoint.y),
  }
  const tileDelta: Point = {
    x: screenDelta.x / tileWidth,
    y: screenDelta.y / tileHeight,
  }
  const tile = coordinateToTilePoint(center, zoom)
  const newTileCenter = {
    x: tile.x + tileDelta.x,
    y: tile.y + tileDelta.y,
  }
  const newCenter = tilePointToCoordinate(newTileCenter, zoom)
  lastPoint = currentPoint
  setCenter(newCenter)
```

This is pseudo code of the `useDrag` hook. The approach taken here
is to take the change in position in the screen coordinate system,
and convert it to the tile coordinate system. The current center is
also converted ot the tile coordinate system. The tile delta is then
added to the tile center to give a new tile center. Finally the new
tile center is converted to a longitude and latitude.

Other approaches could have been used, the important attribute is that
the pointer movement should be consistent to the change in longitude
and latitude.

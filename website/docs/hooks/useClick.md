---
sidebar_position: 4
---

# useClick

The click hook takes an object with the following props:

* ref: A reference to the map component,
* center: The current map center,
* zoom: The current zoom level,
* delay: An optional time to wait for a double click in milliseconds. Defaults to 150.
* tileSize: The size of a map tile,
* onClick: An optional function taking the earth coordinate and screen point, called when the map is clicked,
* onDoubleClick: An optional function taking the earth coordinate and screen point, called when the map is double clicked.

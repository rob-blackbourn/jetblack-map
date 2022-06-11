---
sidebar_position: 1
---

# Map

The map component contains all the map features. It has the following properties:

* `center`: The latitude and longitude of the center of the map. The
    `center` is an object like this:

    ```ts
    const GREENWICH_OBSERVATORY = {
        latitude: 51.47684676353231,
        longitude: -0.0005261695762532147,
    }
    ```

* `zoom`: The zoom is a number which specifies how "zoomed in" the map is.
    The farthest zoom is `0`. For *Open Street Maps* the closest is 19.

* `width`: This is the displayed width of the map. It might be an absolute
    number like `600px` or a relative value like `100%`.

    The default value is `600px`.

* `height`: This is the displayed height of the map. It might be an
    absolute number like `400px` or a relative value like `100%`.

    The default value is `600px`.

 * `tileProvider`: This is an object which provides the tiles for the
    tile layer, and also an attribution. Tile providers will be discussed
    later.
    
    If omitted the open street map tile provider will be used.

Movement around the map is achieved by changing the center and zoom
properties. Some basic hooks are provider for this which will be
discussed later.

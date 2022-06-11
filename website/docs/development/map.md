---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

    A "controlled" app uses this property to move the "view" of the map 
    around the world.

* `zoom`: The zoom is a number which specifies how "zoomed in" the map is.
    The farthest zoom is `0`. For *Open Street Maps* the closest is 19.

    A "controlled" street msp uses this property to zoom in and out of the map.

* `width`: This is the displayed width of the map. It might be an absolute
    number like `600px` or a relative value like `100%`.

* `height`: This is the displayed height of the map. It might be an
    absolute number like `400px` or a relative value like `100%`.
 
 * `tileProvider`: This is an object which provides the tiles for the
    tile layer, and also an attribution. Tile providers will be discussed
    later. If omitted the open street map provider will be used.

* `dprs`: This is a parameter required by some tile providers to determine
    tile resolution.
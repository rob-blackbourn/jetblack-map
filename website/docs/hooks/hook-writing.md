---
sidebar_position: 5
---

# Hook Writing

The hooks allow interaction to the map.

Controlling the zoom level is the most simple. The zoom level is a
floating point number which travels between a minimum and maximum 
level (e.g. 0 to 19). 

The drag hook needs to set the center of the map in terms of longitude and latitude. The events received are provided in terms
of pixel offsets on the map container `div` components. A 
transformation between these coordinate systems is required.

---
sidebar_position: 1
---

import DemoMap from '@site/src/components/DemoMap'

# Map

A map component for React.

## Overview

This package provides a tiled map component with support for interaction and markers.

The component has a few unique features:

* Is is built as a pure react component with no dependencies,
* When zoomed out the map can scroll continuously in the horizontal direction.
* It uses hooks to provide interaction with the map.

## Packages

There are two official packages:

* [@jetblack/map-geojson](https://github.com/rob-blackbourn/jetblack-map-geojson) - support for geojson
* [@jetblack/map-cluster-marker](https://github.com/rob-blackbourn/jetblack-map-cluster-marker) - cluster markers

## Demo

<DemoMap />

## Acknowledgements

This is largely a reworking of other libraries.

In particular much of the heavy lifting was done by [Pigeon Maps](https://github.com/mariusandra/pigeon-maps).

Another library which was a good source of ideas was [react-slippy-map](https://github.com/gaswelder/react-slippy-map).

## What Next ?

See {@page guide/getting-started.md}

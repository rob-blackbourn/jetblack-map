---
sidebar_position: 1
---

# Overview

Three hooks are provided for interaction.

* useDrag: binds mouse events to the `center` property,
* useZoom: binds the wheel event to the zoom property,
* useClick: binds mouse clicks to user provided callbacks.

The lack features such as physics-based responses. To
add these features would require either cannibalizing an existing package, or
adding a dependency which might clash with your package preference. Instead it
was decided to provide clearly written basic hooks, in the anticipation that
developers would create their own implementations.
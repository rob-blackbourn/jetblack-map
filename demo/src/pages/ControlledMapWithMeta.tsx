import React, { useRef } from 'react'

import { Coordinate, Map, Point, osmTileProvider, useClick, useDrag, useZoom } from '../../../dist'

export default function ControlledMapWithMeta() {
  const ref = useRef<HTMLDivElement>(null)

  const [zoom, setZoom] = useZoom({ ref, defaultZoom: 6, requireMeta: true })
  const [center, setCenter] = useDrag({
    ref,
    zoom,
    tileSize: osmTileProvider.tileSize,
  })

  useClick({
    ref,
    center,
    zoom,
    tileSize: osmTileProvider.tileSize,
    onClick: (coordinate: Coordinate, point: Point) => console.log('click', { coordinate, point }),
    onDoubleClick: (coordinate: Coordinate, point: Point) => {
      setCenter(coordinate)
      setZoom(zoom + 1)
    },
  })

  return (
    <div>
      <div>
        <h2>A controlled map with surrounding content</h2>

        <p>
          There is content around the map which causes the wheel event to be interpreted as scroll.
          To handle this we use the meta key.
        </p>

        <div>
          <p>The map uses the following hooks to control movement, zoom and clicks.</p>
          <ul>
            <li>
              <code>useZoom</code> for zooming with the mouse wheel,
            </li>
            <li>
              <code>useDrag</code> for dragging,
            </li>
            <li>
              <code>useClick</code> for handling single and double clicks.
            </li>
          </ul>
        </div>

        <p>
          Note the use of <code>useRef</code> to pass the reference to the map component to the
          hooks.
        </p>
      </div>

      <Map
        center={center}
        zoom={zoom}
        width={800}
        height={600}
        ref={ref}
        tileProvider={osmTileProvider}
      />

      <h3>Some content to make the page scrollable</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis lacinia
        sollicitudin. Vivamus a bibendum felis, ac venenatis urna. Phasellus id feugiat tellus,
        vitae luctus diam. Donec facilisis in justo ut sollicitudin. In est nulla, malesuada non
        tristique ac, porta eget magna. Etiam commodo magna viverra congue sagittis. Mauris in leo
        nec justo bibendum pretium sit amet nec augue. Quisque blandit a ex et viverra. In nec ex ut
        ipsum tempus convallis quis vel elit. Donec vulputate imperdiet nulla, et bibendum orci
        suscipit vitae. Nullam porttitor sapien vitae sodales cursus. Aliquam erat volutpat.
      </p>

      <p>
        Quisque volutpat diam ex, et mattis purus hendrerit ut. Praesent tempor arcu ipsum, sit amet
        consectetur est pellentesque tincidunt. Ut cursus magna ac ante rhoncus, at lobortis enim
        consectetur. Mauris ut nunc nec sem ultrices vehicula quis sit amet nisi. Sed eu tortor
        nulla. Praesent elementum nulla non auctor auctor. Mauris dui eros, molestie eu elit
        scelerisque, viverra volutpat diam. Curabitur dictum metus nec nulla tempor hendrerit.
        Vivamus pellentesque eleifend lectus, eget porta nunc accumsan eu. Nunc eget risus risus.
        Morbi malesuada quam a commodo maximus. Maecenas a magna lorem. Vivamus pellentesque purus
        nec sem dictum, vitae fermentum sapien semper.
      </p>

      <p>
        Proin rutrum aliquam sapien, et sagittis turpis tincidunt et. In suscipit id leo congue
        tristique. Nulla gravida molestie erat nec dapibus. Duis aliquet erat dolor, at gravida mi
        tincidunt eget. Etiam et arcu ac purus accumsan varius sed sit amet tellus. Sed id nisi
        ullamcorper, pellentesque dolor eget, pellentesque diam. In vel eros ac nisi varius commodo
        sit amet eget enim. Cras ornare imperdiet dolor vel hendrerit. Nam suscipit sem sit amet
        diam posuere, ac tincidunt ligula rutrum. Mauris eu gravida tellus. Ut vel gravida massa.
        Praesent at ipsum sed quam aliquet lacinia. Nam eu interdum magna, vel lobortis risus. Duis
        imperdiet elit at lacus rutrum, eget malesuada est malesuada. Pellentesque vel rutrum arcu.
        Suspendisse at risus quam.
      </p>

      <p>
        Vivamus sed sem at lectus scelerisque fermentum. Donec at velit pretium, tincidunt erat
        eleifend, lobortis mauris. Donec maximus magna sit amet faucibus finibus. In hac habitasse
        platea dictumst. Curabitur non cursus dui. Curabitur aliquam convallis semper. Pellentesque
        ultrices justo quis leo eleifend varius. In at tortor tempor, posuere massa eu, lobortis
        augue. Mauris ultrices quam nunc, non dapibus odio posuere ac. Aenean consectetur lectus eu
        libero ullamcorper condimentum. Etiam justo nunc, mattis vel convallis et, auctor id diam.
        Aenean ullamcorper libero sem, vel dignissim felis suscipit elementum.
      </p>

      <p>
        Praesent at tortor purus. Nullam congue vehicula sodales. Nunc laoreet condimentum egestas.
        Nulla nec eros facilisis, ultrices urna eu, pellentesque urna. Fusce varius, nisi in
        tincidunt porta, enim eros sodales tellus, at finibus ante lectus vitae orci. Etiam
        efficitur urna lorem, at ultricies eros volutpat vitae. Nam eu consectetur elit. Nam libero
        enim, condimentum a nisi id, tincidunt efficitur dolor. Nulla ut placerat quam. Duis
        condimentum elit sed sagittis ullamcorper. Sed ultrices, arcu vel pellentesque venenatis,
        dolor erat viverra justo, a feugiat urna justo eget magna. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque id consequat nisl, quis
        efficitur erat.
      </p>
    </div>
  )
}

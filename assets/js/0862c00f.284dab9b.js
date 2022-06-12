"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7950],{5035:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"release-0-1-0-alpha-12","metadata":{"permalink":"/jetblack-map/blog/release-0-1-0-alpha-12","editUrl":"https://github.com/rob-blackbourn/jetblack-map/tree/main/website/blog/2022-06-12-release-0-1-0-alpha-13.md","source":"@site/blog/2022-06-12-release-0-1-0-alpha-13.md","title":"Release 0.1.0-alpha.12","description":"This release made some changes to the hooks.","date":"2022-06-12T08:17:00.000Z","formattedDate":"June 12, 2022","tags":[{"label":"release","permalink":"/jetblack-map/blog/tags/release"}],"readingTime":0.795,"truncated":false,"authors":[{"name":"Rob Blackbourn","title":"Maintainer of @jetblack/map","url":"https://github.com/rob-blackbourn","imageURL":"https://github.com/rob-blackbourn.png","key":"rob-blackbourn"}],"frontMatter":{"slug":"release-0-1-0-alpha-12","title":"Release 0.1.0-alpha.12","authors":"rob-blackbourn","date":"2022-06-12T08:17:00.000Z","tags":["release"]},"nextItem":{"title":"Geolocation","permalink":"/jetblack-map/blog/geolocation"}},"content":"This release made some changes to the hooks.\\n\\nThe original implementation used refs to hold the center and zoom, which\\nproved unnecessary. The refs have been removed, and the api looks cleaner.\\n\\nCurrent:\\n\\n```tsx\\n  const [zoom, setZoom] = useZoomWheel({ ref, defaultZoom: 6 })\\n\\n  const [center, setCenter] = useMouseEvents({\\n    ref,\\n    defaultCenter: { latitude: 51.4768, longitude: -0.0005 },\\n    zoom,\\n  })\\n\\n  useClick({\\n    ref,\\n    center,\\n    zoom,\\n    onClick: (coordinate: Coordinate, point: Point)\\n      => console.log(\'click\', { coordinate, point }),\\n    onDoubleClick: (coordinate: Coordinate, point: Point) => {\\n      // Zoom in on the new coordinate.\\n      setCenter(coordinate)\\n      setZoom(zoom + 1)\\n    }\\n  })\\n```\\n\\nPrevious:\\n\\n```tsx\\n  const [zoom, zoomRef, setZoom] = useZoomWheel({ ref, defaultZoom: 6 })\\n\\n  const [center, centerRef, setCenter] = useMouseEvents({\\n    ref,\\n    defaultCenter: { latitude: 51.4768, longitude: -0.0005 },\\n    zoomRef,\\n  })\\n\\n  useClick({\\n    ref,\\n    centerRef,\\n    zoomRef,\\n    onClick: (coordinate: Coordinate, point: Point)\\n      => console.log(\'click\', { coordinate, point }),\\n    onDoubleClick: (coordinate: Coordinate, point: Point) => {\\n      // Zoom in on the new coordinate.\\n      setCenter(coordinate)\\n      setZoom(zoom + 1)\\n    }\\n  })\\n```\\n\\nRob"},{"id":"geolocation","metadata":{"permalink":"/jetblack-map/blog/geolocation","editUrl":"https://github.com/rob-blackbourn/jetblack-map/tree/main/website/blog/2022-06-11-geolocation.mdx","source":"@site/blog/2022-06-11-geolocation.mdx","title":"Geolocation","description":"I had a play using the browser geolocation api to center the map on the","date":"2022-06-11T15:15:00.000Z","formattedDate":"June 11, 2022","tags":[{"label":"play","permalink":"/jetblack-map/blog/tags/play"}],"readingTime":0.66,"truncated":false,"authors":[{"name":"Rob Blackbourn","title":"Maintainer of @jetblack/map","url":"https://github.com/rob-blackbourn","imageURL":"https://github.com/rob-blackbourn.png","key":"rob-blackbourn"}],"frontMatter":{"slug":"geolocation","title":"Geolocation","authors":"rob-blackbourn","date":"2022-06-11T15:15:00.000Z","tags":["play"]},"prevItem":{"title":"Release 0.1.0-alpha.12","permalink":"/jetblack-map/blog/release-0-1-0-alpha-12"},"nextItem":{"title":"Release 0.1.0-alpha.12","permalink":"/jetblack-map/blog/release-0-1-0-alpha-12"}},"content":"import Geolocation from \'@site/src/components/Geolocation\'\\n\\nimport { useEffect, useState } from \'react\'\\n\\nimport { Coordinate, Map, TileLayer } from \'@jetblack/map\'\\n\\n\\nI had a play using the browser geolocation api to center the map on the\\nlocation of the browser. You have to allow your browser to know your location for\\nthis to work.\\n\\n```tsx\\nimport { useEffect, useState } from \'react\'\\n\\nimport { Coordinate, Map, TileLayer } from \'@jetblack/map\'\\n\\nexport function Geolocation() {\\n  const [center, setCenter] = useState<Coordinate>({\\n    latitude: 51.47684676353231,\\n    longitude: -0.0005261695762532147,\\n  })\\n  useEffect(() => {\\n    navigator.geolocation.getCurrentPosition(\\n      ({ coords: { latitude, longitude } }) => setCenter({ latitude, longitude }),\\n      error => console.log(\'error\', error)\\n    )\\n  }, [])\\n\\n  return (\\n    <div style={{ textAlign: \'center\', marginTop: 50 }}>\\n      <div style={{ margin: \'0 auto\' }}>\\n        <Map center={center}>\\n          <TileLayer />\\n        </Map>\\n      </div>\\n    </div>\\n  )\\n}\\n```\\n\\n<Geolocation />"},{"id":"release-0-1-0-alpha-12","metadata":{"permalink":"/jetblack-map/blog/release-0-1-0-alpha-12","editUrl":"https://github.com/rob-blackbourn/jetblack-map/tree/main/website/blog/2022-06-11-release-0-1-0-alpha-12.md","source":"@site/blog/2022-06-11-release-0-1-0-alpha-12.md","title":"Release 0.1.0-alpha.12","description":"This release made some changes to the tile providers.","date":"2022-06-11T06:00:00.000Z","formattedDate":"June 11, 2022","tags":[{"label":"release","permalink":"/jetblack-map/blog/tags/release"}],"readingTime":0.33,"truncated":false,"authors":[{"name":"Rob Blackbourn","title":"Maintainer of @jetblack/map","url":"https://github.com/rob-blackbourn","imageURL":"https://github.com/rob-blackbourn.png","key":"rob-blackbourn"}],"frontMatter":{"slug":"release-0-1-0-alpha-12","title":"Release 0.1.0-alpha.12","authors":"rob-blackbourn","date":"2022-06-11T06:00:00.000Z","tags":["release"]},"prevItem":{"title":"Geolocation","permalink":"/jetblack-map/blog/geolocation"},"nextItem":{"title":"Release 0.1.0-alpha.11","permalink":"/jetblack-map/blog/release-0-1-0-alpha-11"}},"content":"This release made some changes to the tile providers.\\n\\nThe `dprs` property was removed, as I decided to follow the leaflet strategy of\\nchecking the resolution of the browser.\\n\\nI removed the MapTiler tile provider, as they appear to have significantly\\ndifferent url construction. I have added a story which demonstrates how to\\nuse different MapTiler tiles.\\n\\nSome more documentation on the components was added.\\n\\nRob"},{"id":"release-0-1-0-alpha-11","metadata":{"permalink":"/jetblack-map/blog/release-0-1-0-alpha-11","editUrl":"https://github.com/rob-blackbourn/jetblack-map/tree/main/website/blog/2022-06-08-release-0-1-0-alpha-11.md","source":"@site/blog/2022-06-08-release-0-1-0-alpha-11.md","title":"Release 0.1.0-alpha.11","description":"Most of the features are now working and I\'m thinking about an actual release.","date":"2022-06-08T00:00:00.000Z","formattedDate":"June 8, 2022","tags":[{"label":"release","permalink":"/jetblack-map/blog/tags/release"}],"readingTime":0.2,"truncated":false,"authors":[{"name":"Rob Blackbourn","title":"Maintainer of @jetblack/map","url":"https://github.com/rob-blackbourn","imageURL":"https://github.com/rob-blackbourn.png","key":"rob-blackbourn"}],"frontMatter":{"slug":"release-0-1-0-alpha-11","title":"Release 0.1.0-alpha.11","authors":"rob-blackbourn","tags":["release"]},"prevItem":{"title":"Release 0.1.0-alpha.12","permalink":"/jetblack-map/blog/release-0-1-0-alpha-12"}},"content":"Most of the features are now working and I\'m thinking about an actual release.\\n\\nThere are still some design choices that I\'d like to review before I commit to a major version release,\\nbut I think I\'m almost there.\\n\\nRob"}]}')}}]);
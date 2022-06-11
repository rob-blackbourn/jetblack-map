"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7597],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3519:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={id:"index",title:"@jetblack/map",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},p="@jetblack/map",c={unversionedId:"api/index",id:"api/index",title:"@jetblack/map",description:"A map component for React.",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/jetblack-map/docs/api/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@jetblack/map",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"AttributionLayer",permalink:"/jetblack-map/docs/components/attributionLayer"},next:{title:"Exports",permalink:"/jetblack-map/docs/api/modules"}},u={},s=[{value:"Demo",id:"demo",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Tile Layer",id:"tile-layer",level:3},{value:"Overlay Layer",id:"overlay-layer",level:3},{value:"Interaction",id:"interaction",level:3},{value:"Hooks",id:"hooks",level:3},{value:"Acknowledgements",id:"acknowledgements",level:2}],d={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jetblackmap"},"@jetblack/map"),(0,o.kt)("p",null,"A map component for React."),(0,o.kt)("p",null,"The component has a few unique features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Is is built as a pure react component with no dependencies,"),(0,o.kt)("li",{parentName:"ul"},"When zoomed out the map can scroll continuously in the horizontal direction."),(0,o.kt)("li",{parentName:"ul"},"It uses hooks to provide interaction with the map.")),(0,o.kt)("h2",{id:"demo"},"Demo"),(0,o.kt)("p",null,"You can see a demo of the map ",(0,o.kt)("a",{parentName:"p",href:"https://rob-blackbourn.github.io/jetblack-example-map/"},"here"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install from npmjs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @jetblack/map\n")),(0,o.kt)("p",null,"React is a peer dependency and will not be automatically installed."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"tile-layer"},"Tile Layer"),(0,o.kt)("p",null,"Here is a basic map with the tile layer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Map, TileLayer } from '@jetblack/map'\n\nexport default function App() {\n  return (\n    <Map width='600px' height='400px'>\n        <TileLayer />\n    </Map>\n  )\n}\n")),(0,o.kt)("p",null,"Typically we will want to specify the center of the map and the zoom level."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Map, TileLayer } from '@jetblack/map'\n\nconst GREENWICH_OBSERVATORY: Coordinate = {\n  latitude: 51.47684676353231,\n  longitude: -0.0005261695762532147,\n}\n\nexport default function App() {\n  return (\n    <Map\n        width='600px'\n        height='400px'\n        center={GREENWICH_OBSERVATORY}\n        zoom={12}\n    >\n        <TileLayer />\n    </Map>\n  )\n}\n")),(0,o.kt)("h3",{id:"overlay-layer"},"Overlay Layer"),(0,o.kt)("p",null,"An overlay layer can be added."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n    Map,\n    Marker,\n    OverlayLayer,\n    SVGPin,\n    TileLayer\n} from '@jetblack/map'\n\nconst GREENWICH_OBSERVATORY: Coordinate = {\n    latitude: 51.47684676353231,\n    longitude: -0.0005261695762532147,\n}\n\nconst BUCKINGHAM_PALACE: Coordinate = {\n    latitude: 51.501200111998415,\n    longitude: -0.14182556179982908,\n}\n\nexport default function App() {\n  return (\n    <Map\n        width='600px'\n        height='400px'\n        center={GREENWICH_OBSERVATORY}\n        zoom={11}\n    >\n        <TileLayer />\n        <OverlayLayer>\n            <Marker\n                coordinate={GREENWICH_OBSERVATORY}\n                render={point => <SVGPin point={point} />}\n            />\n            <Marker\n                coordinate={BUCKINGHAM_PALACE}\n                render={point => <SVGPin point={point} />}\n            />\n        </OverlayLayer>\n    </Map>\n  )\n}\n")),(0,o.kt)("h3",{id:"interaction"},"Interaction"),(0,o.kt)("p",null,"Hooks are provided for interaction with the map."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useRef } from 'react'\nimport {\n  Coordinate,\n  Map,\n  Marker,\n  OverlayLayer,\n  Point,\n  SVGPin,\n  TileLayer,\n  useClick,\n  useMouseEvents,\n  useZoomWheel,\n} from '@jetblack/map'\n\nconst GREENWICH_OBSERVATORY: Coordinate = {\n  latitude: 51.47684676353231,\n  longitude: -0.0005261695762532147,\n}\n\nconst EMPIRE_STATE_BUILDING: Coordinate = {\n  latitude: 40.748585815569854,\n  longitude: -73.9856543574467,\n}\n\nexport default function App() {\n  const ref = useRef<HTMLDivElement>(null)\n\n  const [zoom, zoomRef, setZoom] = useZoomWheel({ ref, defaultZoom: 6 })\n  const [center, centerRef, setCenter] = useMouseEvents({\n    ref,\n    defaultCenter: GREENWICH_OBSERVATORY,\n    zoomRef,\n  })\n\n  const handleClick = (coordinate: Coordinate, point: Point) => {\n    console.log('click', { coordinate, point })\n  }\n\n  const handleDoubleClick = (coordinate: Coordinate, point: Point) => {\n    console.log('doubleClick', { coordinate, point })\n    setCenter(coordinate)\n    setZoom(zoom + 1)\n  }\n\n  useClick({ ref, centerRef, zoomRef, onClick: handleClick, onDoubleClick: handleDoubleClick })\n\n  return (\n    <div style={{ textAlign: 'center', marginTop: 50 }}>\n      <div style={{ margin: '0 auto' }}>\n        <Map center={center} zoom={zoom} width=\"1000px\" height=\"600px\" ref={ref}>\n          <TileLayer />\n          <OverlayLayer>\n            <Marker coordinate={GREENWICH_OBSERVATORY} render={point => <SVGPin point={point} />} />\n            <Marker coordinate={EMPIRE_STATE_BUILDING} render={point => <SVGPin point={point} />} />\n          </OverlayLayer>\n        </Map>\n      </div>\n    </div>\n  )\n}\n")),(0,o.kt)("h3",{id:"hooks"},"Hooks"),(0,o.kt)("p",null,"As shown in the example above some hooks are provided for interacting with the map."),(0,o.kt)("p",null,"The hooks are intentionally primitive. There are a number of excellent packages\nwhich can achieve this."),(0,o.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,o.kt)("p",null,"This is largely a reworking of other libraries."),(0,o.kt)("p",null,"In particular much of the heavy lifting was done by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mariusandra/pigeon-maps"},"Pigeon Maps"),"."),(0,o.kt)("p",null,"Another library which was a good source of ideas was ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gaswelder/react-slippy-map"},"react-slippy-map"),"."))}m.isMDXComponent=!0}}]);
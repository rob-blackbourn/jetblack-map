"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6040],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2425:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7294),o=t(6010),a="tabItem__kUE";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:t},n)}},7986:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),o=t(7294),a=t(6010),i=t(2389),l=t(2398),u=t(4345),c=t(5944),s="tabList_fbd4",p="tabItem_v5XY";function m(e){var n,t,i=e.lazy,m=e.block,d=e.defaultValue,f=e.values,h=e.groupId,b=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,l.l)(k,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:v[0].props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),T=w.tabGroupChoices,E=w.setTabGroupChoices,C=(0,o.useState)(g),O=C[0],Z=C[1],j=[],x=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var N=T[h];null!=N&&N!==O&&k.some((function(e){return e.value===N}))&&Z(N)}var M=function(e){var n=e.currentTarget,t=j.indexOf(n),r=k[t].value;r!==O&&(x(n),Z(r),null!=h&&E(h,String(r)))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,o=j.indexOf(e.currentTarget)+1;t=null!=(r=j[o])?r:j[0];break;case"ArrowLeft":var a,i=j.indexOf(e.currentTarget)-1;t=null!=(a=j[i])?a:j[j.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",s)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":m},b)},k.map((function(e){var n=e.value,t=e.label,i=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return j.push(e)},onKeyDown:P,onFocus:M,onClick:M},i,{className:(0,a.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),i?(0,o.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function d(e){var n=(0,i.Z)();return o.createElement(m,(0,r.Z)({key:String(n)},e))}},9581:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=t(7986),l=t(2425),u=["components"],c={sidebar_position:6},s="Interaction",p={unversionedId:"tutorial/interaction",id:"tutorial/interaction",title:"Interaction",description:"Some simple hooks are provided to enable interaction with the map.",source:"@site/docs/tutorial/interaction.md",sourceDirName:"tutorial",slug:"/tutorial/interaction",permalink:"/jetblack-map/docs/tutorial/interaction",draft:!1,editUrl:"https://github.com/rob-blackbourn/jetblack-map/tree/main/website/docs/tutorial/interaction.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Overlay Layer",permalink:"/jetblack-map/docs/tutorial/overlay-layer"},next:{title:"GeoJSON Layer",permalink:"/jetblack-map/docs/tutorial/geojson-layer"}},m={},d=[],f={toc:d};function h(e){var n=e.components,t=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interaction"},"Interaction"),(0,a.kt)("p",null,"Some simple hooks are provided to enable interaction with the map."),(0,a.kt)("p",null,"The hooks are intentionally basic, as there are a large number of\ngreat event hook packages out there."),(0,a.kt)("p",null,"Three hooks are provided:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useMouseEvents"),": Handles dragging the map,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useZoomWheel"),": Updates the zoom level when the wheel moves."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useClick"),": Registers callbacks for single or double clicks on the mouse.")),(0,a.kt)("p",null,"A ref is used to bind the mouse events to the map elements."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"js",label:"JS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useRef } from 'react'\n\nimport {\n  Map,\n  TileLayer,\n  useClick,\n  useMouseEvents,\n  useZoomWheel,\n} from '@jetblack/map'\n\nexport default function App() {\n  // A ref is required to bind events to the map.\n  const ref = useRef(null)\n\n  const [zoom, setZoom] = useZoomWheel({ ref, defaultZoom: 6 })\n\n  const [center, setCenter] = useMouseEvents({\n    ref,\n    defaultCenter: { latitude: 51.4768, longitude: -0.0005 },\n    zoom,\n  })\n\n  useClick({\n    ref,\n    center,\n    zoom,\n    onClick: (coordinate, point) => console.log('click', { coordinate, point }),\n    onDoubleClick: (coordinate, point) => {\n      // Zoom in on the new coordinate.\n      setCenter(coordinate)\n      setZoom(zoom + 1)\n    }\n  })\n\n  return (\n    <Map\n      ref={ref}        // Bind the ref to the map component.\n      center={center}  // The useMouseEvents hook updates the center property.\n      zoom={zoom}      // The useZoomWheel hook updates the zoom property.\n      width=\"1000px\"\n      height=\"600px\"\n    >\n      <TileLayer />\n    </Map>\n  )\n}\n"))),(0,a.kt)(l.Z,{value:"ts",label:"TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRef } from 'react'\n\nimport {\n  Coordinate,\n  Map,\n  Point,\n  TileLayer,\n  useClick,\n  useMouseEvents,\n  useZoomWheel,\n} from '@jetblack/map'\n\nexport default function App() {\n  // A ref is required to bind events to the map.\n  const ref = useRef<HTMLDivElement>(null)\n\n  const [zoom, setZoom] = useZoomWheel({ ref, defaultZoom: 6 })\n\n  const [center, setCenter] = useMouseEvents({\n    ref,\n    defaultCenter: { latitude: 51.4768, longitude: -0.0005 },\n    zoom,\n  })\n\n  useClick({\n    ref,\n    center,\n    zoom,\n    onClick: (coordinate: Coordinate, point: Point)\n      => console.log('click', { coordinate, point }),\n    onDoubleClick: (coordinate: Coordinate, point: Point) => {\n      // Zoom in on the new coordinate.\n      setCenter(coordinate)\n      setZoom(zoom + 1)\n    }\n  })\n\n  return (\n    <Map\n      ref={ref}        // Bind the ref to the map component.\n      center={center}  // The useMouseEvents hook updates the center property.\n      zoom={zoom}      // The useZoomWheel hook updates the zoom property.\n      width=\"1000px\"\n      height=\"600px\"\n    >\n      <TileLayer />\n    </Map>\n  )\n}\n")))))}h.isMDXComponent=!0}}]);
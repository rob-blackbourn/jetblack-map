"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4153],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2425:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7294),a=t(6010),o="tabItem__kUE";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},7986:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(7462),a=t(7294),o=t(6010),i=t(2389),l=t(2398),s=t(4345),c=t(5944),u="tabList_fbd4",p="tabItem_v5XY";function d(e){var n,t,i=e.lazy,d=e.block,m=e.defaultValue,h=e.values,f=e.groupId,v=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,l.l)(b,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(n=null!=m?m:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:y[0].props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),x=w.tabGroupChoices,O=w.setTabGroupChoices,T=(0,a.useState)(g),M=T[0],N=T[1],P=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=x[f];null!=E&&E!==M&&b.some((function(e){return e.value===E}))&&N(E)}var j=function(e){var n=e.currentTarget,t=P.indexOf(n),r=b[t].value;r!==M&&(C(n),N(r),null!=f&&O(f,String(r)))},z=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=P.indexOf(e.currentTarget)+1;t=null!=(r=P[a])?r:P[0];break;case"ArrowLeft":var o,i=P.indexOf(e.currentTarget)-1;t=null!=(o=P[i])?o:P[P.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},b.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:M===n?0:-1,"aria-selected":M===n,key:n,ref:function(e){return P.push(e)},onKeyDown:z,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":M===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(y.filter((function(e){return e.props.value===M}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==M})}))))}function m(e){var n=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},7597:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(7986),l=t(2425),s=["components"],c={sidebar_position:5},u="Overlay Layer",p={unversionedId:"tutorial/overlay-layer",id:"tutorial/overlay-layer",title:"Overlay Layer",description:"An overlay layer can be added to display markers.",source:"@site/docs/tutorial/overlay-layer.md",sourceDirName:"tutorial",slug:"/tutorial/overlay-layer",permalink:"/jetblack-map/docs/tutorial/overlay-layer",draft:!1,editUrl:"https://github.com/rob-blackbourn/jetblack-map/tree/main/website/docs/tutorial/overlay-layer.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Attribution Layer",permalink:"/jetblack-map/docs/tutorial/attribution-layer"},next:{title:"Interaction",permalink:"/jetblack-map/docs/tutorial/interaction"}},d={},m=[{value:"Custom Markers",id:"custom-markers",level:2},{value:"Using the MapContext",id:"using-the-mapcontext",level:2}],h={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overlay-layer"},"Overlay Layer"),(0,o.kt)("p",null,"An overlay layer can be added to display markers."),(0,o.kt)("h1",{id:"marker"},"Marker"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Marker")," component creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"div"),", the top left corner\nof which is the screen point corresponding to the coordinate."),(0,o.kt)("p",null,"Markers have a render function which is used to display the\ndesired component. The library comes with a standard pin."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",label:"JS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import {\n    Map,\n    Marker,\n    OverlayLayer,\n    SVGPin,\n    TileLayer\n} from '@jetblack/map'\n\nconst places = {\n  greenwichObservatory: {\n    latitude: 51.47684676353231,\n    longitude: -0.0005261695762532147,\n  },\n  buckinghamPalace: {\n    latitude: 51.501200111998415,\n    longitude: -0.14182556179982908,\n  }\n}\n\nexport default function App() {\n  return (\n    <Map\n        width='600px'\n        height='400px'\n        center={places.greenwichObservatory}\n        zoom={11}\n    >\n        <TileLayer />\n        <OverlayLayer>\n            <Marker\n                coordinate={places.greenwichObservatory}\n                render={point => <SVGPin point={point} />}\n            />\n            <Marker\n                coordinate={places.buckinghamPalace}\n                render={point => <SVGPin point={point} />}\n            />\n        </OverlayLayer>\n    </Map>\n  )\n}\n"))),(0,o.kt)(l.Z,{value:"ts",label:"TS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n    Coordinate,\n    Map,\n    Marker,\n    OverlayLayer,\n    SVGPin,\n    TileLayer\n} from '@jetblack/map'\n\nconst places: { [ name: string ]: Coordinate } = {\n  greenwichObservatory: {\n    latitude: 51.47684676353231,\n    longitude: -0.0005261695762532147,\n  },\n  buckinghamPalace: {\n    latitude: 51.501200111998415,\n    longitude: -0.14182556179982908,\n  }\n}\n\nexport default function App() {\n  return (\n    <Map\n        width='600px'\n        height='400px'\n        center={places.greenwichObservatory}\n        zoom={11}\n    >\n        <TileLayer />\n        <OverlayLayer>\n            <Marker\n                coordinate={places.greenwichObservatory}\n                render={point => <SVGPin point={point} />}\n            />\n            <Marker\n                coordinate={places.buckinghamPalace}\n                render={point => <SVGPin point={point} />}\n            />\n        </OverlayLayer>\n    </Map>\n  )\n}\n")))),(0,o.kt)("h2",{id:"custom-markers"},"Custom Markers"),(0,o.kt)("p",null,"The following code demonstrates a custom marker of a circle centered around the\ncoordinate."),(0,o.kt)("p",null,"There are a couple of gotchas here."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"As the containing ",(0,o.kt)("inlineCode",{parentName:"li"},"div")," is centered around the top left of the coordinate,\nthe circle must be shifted up and left. This is done with the ",(0,o.kt)("inlineCode",{parentName:"li"},"transform"),"\nstyle."),(0,o.kt)("li",{parentName:"ol"},"Mouse events are consumed by the map to allow interaction. If the marker\nshould receive mouse events the ",(0,o.kt)("inlineCode",{parentName:"li"},"pointerEvents")," attribute should be set to\n",(0,o.kt)("inlineCode",{parentName:"li"},"auto"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export interface CustomMarkerProps {\n  point: Point\n  radius?: number\n  strokeWidth?: number\n  color?: string\n}\n\nfunction CircleMarker({\n  radius = 10,\n  strokeWidth = 2,\n  color = 'red'\n}: CustomMarkerProps) {\n  const size = radius * 2 + strokeWidth * 2\n\n  return (\n    <svg\n      width={size}\n      height={size}\n      xmlns=\"http://www.w3.org/2000/svg\"\n      style={{\n        pointerEvents: 'auto',\n        transform: `translate(${-size / 2}px, ${-size / 2}px)`,\n      }}\n    >\n      <circle\n        cx={size / 2}\n        cy={size / 2}\n        r={radius}\n        stroke={color}\n        strokeWidth={2}\n        fill=\"none\"\n      />\n    </svg>\n  )\n}\n")),(0,o.kt)("p",null,"This marker could be incorporated into the map as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<Map ref={ref} width="600px" height="400px" center={center} zoom={zoom}>\n    <TileLayer />\n    <OverlayLayer>\n    <Marker\n      coordinate={places.greenwichObservatory}\n      render={point => <CircleMarker point={point} />}\n    />\n    <Marker\n      coordinate={places.greenwichObservatory}\n      render={point => <CircleMarker point={point} radius={15} />}\n    />\n    </OverlayLayer>\n</Map>\n')),(0,o.kt)("h2",{id:"using-the-mapcontext"},"Using the MapContext"),(0,o.kt)("p",null,"All map children have access to the map context."),(0,o.kt)("p",null,"When there are a lot of markers the map gets very cluttered when\nzoomed out. The following example uses the map context to scale the circle\naccording to the zoom level. The farther out the map is zoomed the smaller the\ncircle is."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export interface ScaledMarkerProps {\n  point: Point\n  color?: string\n  radius?: number\n}\n\nfunction ScaledMarker({ radius = 5, color = 'red' }: ScaledMarkerProps) {\n  // Get zoom info from the context.\n  const {\n    zoom,\n    tileProvider: { minZoom, maxZoom },\n  } = useContext(MapContext)\n\n  // Calculate the scale and apply it to the radius of the circle.\n  const scale = (zoom - minZoom) / (maxZoom - minZoom)\n  const scaledRadius = radius + 20 * radius * scale\n\nconst strokeWidth = 2\n  const size = scaledRadius * 2 + strokeWidth * 2\n\n  return (\n    <svg\n      className={classNames.customMarker}\n      width={size}\n      height={size}\n      xmlns=\"http://www.w3.org/2000/svg\"\n      style={{\n        pointerEvents: 'auto',\n        transform: `translate(${-size / 2}px, ${-size / 2}px)`,\n      }}\n    >\n      <circle\n        cx={size / 2}\n        cy={size / 2}\n        r={scaledRadius}\n        stroke={color}\n        strokeWidth={2}\n        fill=\"none\"\n      />\n    </svg>\n  )\n}\n")))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4529],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),m=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=m(n),d=r,f=s["".concat(p,".").concat(d)]||s[d]||c[d]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},889:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"ZoomButtonPops",title:"Interface: ZoomButtonPops",sidebar_label:"ZoomButtonPops",sidebar_position:0,custom_edit_url:null},p=void 0,m={unversionedId:"api/interfaces/ZoomButtonPops",id:"api/interfaces/ZoomButtonPops",title:"Interface: ZoomButtonPops",description:"The prop type for a [[ZoomButton]] component.",source:"@site/docs/api/interfaces/ZoomButtonPops.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ZoomButtonPops",permalink:"/jetblack-map/docs/api/interfaces/ZoomButtonPops",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ZoomButtonPops",title:"Interface: ZoomButtonPops",sidebar_label:"ZoomButtonPops",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"TileLayerProps",permalink:"/jetblack-map/docs/api/interfaces/TileLayerProps"},next:{title:"useClickProps",permalink:"/jetblack-map/docs/api/interfaces/useClickProps"}},u={},c=[{value:"Properties",id:"properties",level:2},{value:"maxZoom",id:"maxzoom",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"minZoom",id:"minzoom",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"point",id:"point",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"zoomStep",id:"zoomstep",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods",level:2},{value:"onChange",id:"onchange",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-4",level:4}],s={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The prop type for a [","[",(0,a.kt)("inlineCode",{parentName:"p"},"ZoomButton"),"]","] component."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"maxzoom"},"maxZoom"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"maxZoom"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The maximum zoom level."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/0fa3bb0/src/components/ZoomButton.tsx#L28"},"components/ZoomButton.tsx:28")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"minzoom"},"minZoom"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"minZoom"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The minimum zoom level."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/0fa3bb0/src/components/ZoomButton.tsx#L26"},"components/ZoomButton.tsx:26")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"point"},"point"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"point"),": ",(0,a.kt)("a",{parentName:"p",href:"/jetblack-map/docs/api/modules#point"},(0,a.kt)("inlineCode",{parentName:"a"},"Point"))),(0,a.kt)("p",null,"The screen point where the button will be placed."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/0fa3bb0/src/components/ZoomButton.tsx#L24"},"components/ZoomButton.tsx:24")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"zoomstep"},"zoomStep"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"zoomStep"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The amount by which the zoom will be changed on each click."),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/0fa3bb0/src/components/ZoomButton.tsx#L30"},"components/ZoomButton.tsx:30")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"onchange"},"onChange"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"onChange"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"A callback with the requested zoom level."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"value")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/0fa3bb0/src/components/ZoomButton.tsx#L32"},"components/ZoomButton.tsx:32")))}d.isMDXComponent=!0}}]);
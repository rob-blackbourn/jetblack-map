"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9340],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9115:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],p={id:"MapContextProps",title:"Interface: MapContextProps",sidebar_label:"MapContextProps",sidebar_position:0,custom_edit_url:null},l=void 0,c={unversionedId:"api/interfaces/MapContextProps",id:"api/interfaces/MapContextProps",title:"Interface: MapContextProps",description:"The prop type of a [[MapContext]].",source:"@site/docs/api/interfaces/MapContextProps.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/MapContextProps",permalink:"/jetblack-map/docs/api/interfaces/MapContextProps",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"MapContextProps",title:"Interface: MapContextProps",sidebar_label:"MapContextProps",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ImageTileProps",permalink:"/jetblack-map/docs/api/interfaces/ImageTileProps"},next:{title:"MapProps",permalink:"/jetblack-map/docs/api/interfaces/MapProps"}},s={},u=[{value:"Properties",id:"properties",level:2},{value:"bounds",id:"bounds",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"center",id:"center",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"tileProvider",id:"tileprovider",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"zoom",id:"zoom",level:3},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The prop type of a [","[",(0,i.kt)("inlineCode",{parentName:"p"},"MapContext"),"]","]."),(0,i.kt)("p",null,"This is the information that children of the map will need."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"bounds"},"bounds"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"bounds"),": ",(0,i.kt)("a",{parentName:"p",href:"/jetblack-map/docs/api/interfaces/Bounds"},(0,i.kt)("inlineCode",{parentName:"a"},"Bounds"))),(0,i.kt)("p",null,"The bounds of the map in hte screen coordinate system"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/72f04e2/src/components/MapContext.ts#L18"},"components/MapContext.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"center"},"center"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"center"),": ",(0,i.kt)("a",{parentName:"p",href:"/jetblack-map/docs/api/interfaces/Coordinate"},(0,i.kt)("inlineCode",{parentName:"a"},"Coordinate"))),(0,i.kt)("p",null,"The latitude and longitude of the center of the map"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/72f04e2/src/components/MapContext.ts#L14"},"components/MapContext.ts:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tileprovider"},"tileProvider"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"tileProvider"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"TileProvider")),(0,i.kt)("p",null,"The tile provider"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/72f04e2/src/components/MapContext.ts#L20"},"components/MapContext.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"zoom"},"zoom"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"zoom"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The zoom level"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/72f04e2/src/components/MapContext.ts#L16"},"components/MapContext.ts:16")))}f.isMDXComponent=!0}}]);
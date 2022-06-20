"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7599],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,b=f["".concat(p,".").concat(d)]||f[d]||c[d]||i;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7066:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={id:"useDragProps",title:"Interface: useDragProps",sidebar_label:"useDragProps",sidebar_position:0,custom_edit_url:null},p=void 0,s={unversionedId:"api/interfaces/useDragProps",id:"api/interfaces/useDragProps",title:"Interface: useDragProps",description:"The prop type for the [[useDrag]] hook.",source:"@site/docs/api/interfaces/useDragProps.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/useDragProps",permalink:"/jetblack-map/docs/api/interfaces/useDragProps",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"useDragProps",title:"Interface: useDragProps",sidebar_label:"useDragProps",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"useClickProps",permalink:"/jetblack-map/docs/api/interfaces/useClickProps"},next:{title:"useZoomProps",permalink:"/jetblack-map/docs/api/interfaces/useZoomProps"}},u={},c=[{value:"Properties",id:"properties",level:2},{value:"defaultCenter",id:"defaultcenter",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"ref",id:"ref",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"tileSize",id:"tilesize",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"zoom",id:"zoom",level:3},{value:"Defined in",id:"defined-in-3",level:4}],f={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The prop type for the [","[",(0,i.kt)("inlineCode",{parentName:"p"},"useDrag"),"]","] hook."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"defaultcenter"},"defaultCenter"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"defaultCenter"),": ",(0,i.kt)("a",{parentName:"p",href:"/jetblack-map/docs/api/interfaces/Coordinate"},(0,i.kt)("inlineCode",{parentName:"a"},"Coordinate"))),(0,i.kt)("p",null,"An optional initial value for the center of the map"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/b3b8376/src/hooks/useDrag.ts#L16"},"src/hooks/useDrag.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ref"},"ref"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ref"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"RefObject"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLDivElement"),">"),(0,i.kt)("p",null,"A reference to the map component"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/b3b8376/src/hooks/useDrag.ts#L14"},"src/hooks/useDrag.ts:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tilesize"},"tileSize"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"tileSize"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Size")),(0,i.kt)("p",null,"The size of the tiles"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/b3b8376/src/hooks/useDrag.ts#L20"},"src/hooks/useDrag.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"zoom"},"zoom"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"zoom"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The current zoom level"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/b3b8376/src/hooks/useDrag.ts#L18"},"src/hooks/useDrag.ts:18")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6072],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return c}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,m=u["".concat(p,".").concat(c)]||u[c]||s[c]||a;return n?r.createElement(m,l(l({ref:t},k),{},{components:n})):r.createElement(m,l({ref:t},k))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3105:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={id:"useClickProps",title:"Interface: useClickProps",sidebar_label:"useClickProps",sidebar_position:0,custom_edit_url:null},p=void 0,d={unversionedId:"api/interfaces/useClickProps",id:"api/interfaces/useClickProps",title:"Interface: useClickProps",description:"The prop type for the [[useClick]] hook.",source:"@site/docs/api/interfaces/useClickProps.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/useClickProps",permalink:"/jetblack-map/docs/api/interfaces/useClickProps",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"useClickProps",title:"Interface: useClickProps",sidebar_label:"useClickProps",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ZoomButtonPops",permalink:"/jetblack-map/docs/api/interfaces/ZoomButtonPops"},next:{title:"useMouseEventsProps",permalink:"/jetblack-map/docs/api/interfaces/useMouseEventsProps"}},k={},s=[{value:"Properties",id:"properties",level:2},{value:"center",id:"center",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"delay",id:"delay",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"ref",id:"ref",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"tileHeight",id:"tileheight",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"tileWidth",id:"tilewidth",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"zoom",id:"zoom",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Methods",id:"methods",level:2},{value:"onClick",id:"onclick",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"onDoubleClick",id:"ondoubleclick",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-7",level:4}],u={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The prop type for the [","[",(0,a.kt)("inlineCode",{parentName:"p"},"useClick"),"]","] hook."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"center"},"center"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"center"),": ",(0,a.kt)("a",{parentName:"p",href:"/jetblack-map/docs/api/interfaces/Coordinate"},(0,a.kt)("inlineCode",{parentName:"a"},"Coordinate"))),(0,a.kt)("p",null,"The map center."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/d109576/src/hooks/useClick.ts#L14"},"hooks/useClick.ts:14")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"delay"},"delay"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"delay"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The time to wait in milliseconds for a double click."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/d109576/src/hooks/useClick.ts#L18"},"hooks/useClick.ts:18")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ref"},"ref"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ref"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"RefObject"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLDivElement"),">"),(0,a.kt)("p",null,"A reference to the map container."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/d109576/src/hooks/useClick.ts#L12"},"hooks/useClick.ts:12")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tileheight"},"tileHeight"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"tileHeight"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The height of a map tile"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/d109576/src/hooks/useClick.ts#L22"},"hooks/useClick.ts:22")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tilewidth"},"tileWidth"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"tileWidth"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The width of a map tile"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/d109576/src/hooks/useClick.ts#L20"},"hooks/useClick.ts:20")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"zoom"},"zoom"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"zoom"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The current zoom level"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/d109576/src/hooks/useClick.ts#L16"},"hooks/useClick.ts:16")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"onclick"},"onClick"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"onClick"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"coordinate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"point"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"The handler for a single click event."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"coordinate")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/jetblack-map/docs/api/interfaces/Coordinate"},(0,a.kt)("inlineCode",{parentName:"a"},"Coordinate")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"point")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/jetblack-map/docs/api/modules#point"},(0,a.kt)("inlineCode",{parentName:"a"},"Point")))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/d109576/src/hooks/useClick.ts#L24"},"hooks/useClick.ts:24")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ondoubleclick"},"onDoubleClick"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"onDoubleClick"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"coordinate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"point"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"The handler for a multi click event"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"coordinate")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/jetblack-map/docs/api/interfaces/Coordinate"},(0,a.kt)("inlineCode",{parentName:"a"},"Coordinate")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"point")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/jetblack-map/docs/api/modules#point"},(0,a.kt)("inlineCode",{parentName:"a"},"Point")))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/d109576/src/hooks/useClick.ts#L26"},"hooks/useClick.ts:26")))}c.isMDXComponent=!0}}]);
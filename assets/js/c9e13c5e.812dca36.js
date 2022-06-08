"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2605],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1876:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={id:"MarkerProps",title:"Interface: MarkerProps",sidebar_label:"MarkerProps",sidebar_position:0,custom_edit_url:null},l=void 0,c={unversionedId:"api/interfaces/MarkerProps",id:"api/interfaces/MarkerProps",title:"Interface: MarkerProps",description:"The prop type of a [[Marker]] component.",source:"@site/docs/api/interfaces/MarkerProps.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/MarkerProps",permalink:"/jetblack-map/docs/api/interfaces/MarkerProps",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"MarkerProps",title:"Interface: MarkerProps",sidebar_label:"MarkerProps",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"MapProps",permalink:"/jetblack-map/docs/api/interfaces/MapProps"},next:{title:"OverlayLayerProps",permalink:"/jetblack-map/docs/api/interfaces/OverlayLayerProps"}},s={},d=[{value:"Properties",id:"properties",level:2},{value:"coordinate",id:"coordinate",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"render",id:"render",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The prop type of a [","[",(0,o.kt)("inlineCode",{parentName:"p"},"Marker"),"]","] component."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"coordinate"},"coordinate"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"coordinate"),": ",(0,o.kt)("a",{parentName:"p",href:"/jetblack-map/docs/api/interfaces/Coordinate"},(0,o.kt)("inlineCode",{parentName:"a"},"Coordinate"))),(0,o.kt)("p",null,"The coordinate of the marker"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/d1c06ba/src/components/Marker.tsx#L20"},"components/Marker.tsx:20")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"render"},"render"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"render"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"point"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactElement"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"JSXElementConstructor"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,o.kt)("p",null,"A function to render the marker"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"point")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/jetblack-map/docs/api/modules#point"},(0,o.kt)("inlineCode",{parentName:"a"},"Point")))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ReactElement"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"JSXElementConstructor"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rob-blackbourn/jetblack-map/blob/d1c06ba/src/components/Marker.tsx#L22"},"components/Marker.tsx:22")))}m.isMDXComponent=!0}}]);
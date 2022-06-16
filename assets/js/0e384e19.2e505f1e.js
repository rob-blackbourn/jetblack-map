"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9671],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9965:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return g}});var r=n(7462),o=n(3366),i=n(7294),a=n(3905),l=n(1298),c={greenwichObservatory:{latitude:51.47684676353231,longitude:-.0005261695762532147},empireStateBuilding:{latitude:40.748585815569854,longitude:-73.9856543574467}},u={width:256,height:256};function p(){var e=(0,i.useRef)(null),t=(0,l.BO)({ref:e,defaultZoom:4}),n=t[0],r=t[1],o=(0,l.c0)({ref:e,defaultCenter:c.greenwichObservatory,zoom:n,tileSize:u}),a=o[0],p=o[1];(0,l.eS)({ref:e,center:a,zoom:n,tileSize:u,onClick:function(e,t){console.log("click",{coordinate:e,point:t})},onDoubleClick:function(e,t){console.log("doubleClick",{coordinate:e,point:t}),p(e),r(n+1)}});var s=(0,i.useState)({}),d=s[0],m=s[1];(0,i.useEffect)((function(){fetch("https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/4_niedrig.geo.json").then((function(e){return e.json()})).then((function(e){return m(e)}))}),[]);return i.createElement(l.D5,{center:a,zoom:n,width:"600px",height:"400px",ref:e},i.createElement(l.s2,null,i.createElement(l.Jx,{coordinate:c.greenwichObservatory,render:function(e){return i.createElement(l.FB,{point:e})}}),i.createElement(l.Jx,{coordinate:c.empireStateBuilding,render:function(e){return i.createElement(l.FB,{point:e})}}),i.createElement(l.uj,{point:{x:10,y:10},onChange:function(e){return r(e)}})),i.createElement(l.Wy,{data:d,requestFeatureStyle:function(e,t){return t.mouseOver?{fill:"#93c0d099",strokeWidth:"2",stroke:"white",opacity:.5}:{fill:"#d4e6ec99",strokeWidth:"1",stroke:"white",r:"20",opacity:.3}},renderPopup:function(e){return e&&e.properties?i.createElement("dl",{style:{width:"100%",overflow:"hidden",padding:0,margin:0,fontFamily:"sans-serif",fontSize:"smaller"}},Object.entries(e.properties).map((function(e){var t=e[0],n=e[1];return i.createElement(i.Fragment,null,i.createElement("dt",{style:{float:"left",width:"25%",padding:0,margin:0,textAlign:"left"}},t),i.createElement("dd",{style:{float:"left",width:"75%",padding:0,margin:0,textAlign:"left"}},n))}))):null}}),i.createElement(l.Ww,null))}var s=["components"],d={sidebar_position:1},m="Map",f={unversionedId:"intro",id:"intro",title:"Map",description:"A map component for React.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/jetblack-map/docs/intro",draft:!1,editUrl:"https://github.com/rob-blackbourn/jetblack-map/tree/main/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial",permalink:"/jetblack-map/docs/category/tutorial"}},h={},g=[{value:"Overview",id:"overview",level:2},{value:"Demo",id:"demo",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2},{value:"What Next ?",id:"what-next-",level:2}],y={toc:g};function b(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"map"},"Map"),(0,a.kt)("p",null,"A map component for React."),(0,a.kt)("p",null,"This is work in progress!"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This package provides a tiled map component with support for interaction and markers."),(0,a.kt)("p",null,"The component has a few unique features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Is is built as a pure react component with no dependencies,"),(0,a.kt)("li",{parentName:"ul"},"When zoomed out the map can scroll continuously in the horizontal direction."),(0,a.kt)("li",{parentName:"ul"},"It uses hooks to provide interaction with the map.")),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)(p,{mdxType:"DemoMap"}),(0,a.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,a.kt)("p",null,"This is largely a reworking of other libraries."),(0,a.kt)("p",null,"In particular much of the heavy lifting was done by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mariusandra/pigeon-maps"},"Pigeon Maps"),"."),(0,a.kt)("p",null,"Another library which was a good source of ideas was ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gaswelder/react-slippy-map"},"react-slippy-map"),"."),(0,a.kt)("h2",{id:"what-next-"},"What Next ?"),(0,a.kt)("p",null,"See {@page guide/getting-started.md}"))}b.isMDXComponent=!0}}]);
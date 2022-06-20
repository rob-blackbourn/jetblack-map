"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5604],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4783:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={sidebar_position:3},p="Tile Provider",c={unversionedId:"tutorial/tile-provider",id:"tutorial/tile-provider",title:"Tile Provider",description:"A number of tile providers are provided. The default is the Open Street Map provider: osmTileProvider.",source:"@site/docs/tutorial/tile-provider.md",sourceDirName:"tutorial",slug:"/tutorial/tile-provider",permalink:"/jetblack-map/docs/tutorial/tile-provider",draft:!1,editUrl:"https://github.com/rob-blackbourn/jetblack-map/tree/main/website/docs/tutorial/tile-provider.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Center and Zoom Level",permalink:"/jetblack-map/docs/tutorial/center-and-zoom-level"},next:{title:"Attribution Layer",permalink:"/jetblack-map/docs/tutorial/attribution-layer"}},u={},s=[],d={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tile-provider"},"Tile Provider"),(0,i.kt)("p",null,"A number of tile providers are provided. The default is the Open Street Map provider: ",(0,i.kt)("inlineCode",{parentName:"p"},"osmTileProvider"),"."),(0,i.kt)("p",null,"Some of the providers are presented as factories. This might be because they require an API token,\nor because they provide different types of maps."),(0,i.kt)("p",null,"The following example uses ",(0,i.kt)("a",{parentName:"p",href:"http://maps.stamen.com"},"Stamen")," ",(0,i.kt)("inlineCode",{parentName:"p"},"terrain")," tiles."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Map, stamenTileProviderFactory } from '@jetblack/map'\n\nexport default function TileProvider() {\n  const tileProvider = stamenTileProviderFactory('terrain')\n\n  return (\n    <Map\n      tileProvider={tileProvider}\n      width={600}\n      height={400}\n    />\n  )\n}\n")))}f.isMDXComponent=!0}}]);
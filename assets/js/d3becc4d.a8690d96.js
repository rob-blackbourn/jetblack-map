"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7706],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,b=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3714:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294),o=n(1298);function a(){var e=(0,r.useState)({latitude:51.47684676353231,longitude:-.0005261695762532147}),t=e[0],n=e[1];return(0,r.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,r=t.latitude,o=t.longitude;return n({latitude:r,longitude:o})}),(function(e){return console.log("error",e)}))}),[]),r.createElement("div",{style:{textAlign:"center",marginTop:50}},r.createElement("div",{style:{margin:"0 auto"}},r.createElement(o.D5,{center:t})))}},2022:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(3714),l=(n(1298),["components"]),c={slug:"geolocation",title:"Geolocation",authors:"rob-blackbourn",date:new Date("2022-06-11T15:15:00.000Z"),tags:["play"]},u="Geolocation",p={permalink:"/jetblack-map/blog/geolocation",editUrl:"https://github.com/rob-blackbourn/jetblack-map/tree/main/website/blog/2022-06-11-geolocation.mdx",source:"@site/blog/2022-06-11-geolocation.mdx",title:"Geolocation",description:"I had a play using the browser geolocation api to center the map on the",date:"2022-06-11T15:15:00.000Z",formattedDate:"June 11, 2022",tags:[{label:"play",permalink:"/jetblack-map/blog/tags/play"}],readingTime:.66,truncated:!1,authors:[{name:"Rob Blackbourn",title:"Maintainer of @jetblack/map",url:"https://github.com/rob-blackbourn",imageURL:"https://github.com/rob-blackbourn.png",key:"rob-blackbourn"}],frontMatter:{slug:"geolocation",title:"Geolocation",authors:"rob-blackbourn",date:"2022-06-11T15:15:00.000Z",tags:["play"]},prevItem:{title:"Release 0.1.0-alpha.13",permalink:"/jetblack-map/blog/release-0-1-0-alpha-13"},nextItem:{title:"Release 0.1.0-alpha.12",permalink:"/jetblack-map/blog/release-0-1-0-alpha-12"}},s={authorsImageUrls:[void 0]},f=[],m={toc:f};function b(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I had a play using the browser geolocation api to center the map on the\nlocation of the browser. You have to allow your browser to know your location for\nthis to work."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect, useState } from 'react'\n\nimport { Coordinate, Map, TileLayer } from '@jetblack/map'\n\nexport function Geolocation() {\n  const [center, setCenter] = useState<Coordinate>({\n    latitude: 51.47684676353231,\n    longitude: -0.0005261695762532147,\n  })\n  useEffect(() => {\n    navigator.geolocation.getCurrentPosition(\n      ({ coords: { latitude, longitude } }) => setCenter({ latitude, longitude }),\n      error => console.log('error', error)\n    )\n  }, [])\n\n  return (\n    <div style={{ textAlign: 'center', marginTop: 50 }}>\n      <div style={{ margin: '0 auto' }}>\n        <Map center={center}>\n          <TileLayer />\n        </Map>\n      </div>\n    </div>\n  )\n}\n")),(0,a.kt)(i.Z,{mdxType:"Geolocation"}))}b.isMDXComponent=!0}}]);
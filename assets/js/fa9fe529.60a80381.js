"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8141],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=r,b=m["".concat(i,".").concat(f)]||m[f]||p[f]||a;return n?o.createElement(b,l(l({ref:t},u),{},{components:n})):o.createElement(b,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},159:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],c={slug:"release-0-1-0-alpha-13",title:"Release 0.1.0-alpha.13",authors:"rob-blackbourn",date:new Date("2022-06-12T08:17:00.000Z"),tags:["release"]},i="Release 0.1.0-alpha.13",s={permalink:"/jetblack-map/blog/release-0-1-0-alpha-13",editUrl:"https://github.com/rob-blackbourn/jetblack-map/tree/main/website/blog/2022-06-12-release-0-1-0-alpha-13.md",source:"@site/blog/2022-06-12-release-0-1-0-alpha-13.md",title:"Release 0.1.0-alpha.13",description:"This release made some changes to the hooks.",date:"2022-06-12T08:17:00.000Z",formattedDate:"June 12, 2022",tags:[{label:"release",permalink:"/jetblack-map/blog/tags/release"}],readingTime:.795,truncated:!1,authors:[{name:"Rob Blackbourn",title:"Maintainer of @jetblack/map",url:"https://github.com/rob-blackbourn",imageURL:"https://github.com/rob-blackbourn.png",key:"rob-blackbourn"}],frontMatter:{slug:"release-0-1-0-alpha-13",title:"Release 0.1.0-alpha.13",authors:"rob-blackbourn",date:"2022-06-12T08:17:00.000Z",tags:["release"]},prevItem:{title:"Release 0.1.0-alpha.14",permalink:"/jetblack-map/blog/release-0-1-0-alpha-14"},nextItem:{title:"Geolocation",permalink:"/jetblack-map/blog/geolocation"}},u={authorsImageUrls:[void 0]},p=[],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This release made some changes to the hooks."),(0,a.kt)("p",null,"The original implementation used refs to hold the center and zoom, which\nproved unnecessary. The refs have been removed, and the api looks cleaner."),(0,a.kt)("p",null,"Current:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"  const [zoom, setZoom] = useZoomWheel({ ref, defaultZoom: 6 })\n\n  const [center, setCenter] = useMouseEvents({\n    ref,\n    defaultCenter: { latitude: 51.4768, longitude: -0.0005 },\n    zoom,\n  })\n\n  useClick({\n    ref,\n    center,\n    zoom,\n    onClick: (coordinate: Coordinate, point: Point)\n      => console.log('click', { coordinate, point }),\n    onDoubleClick: (coordinate: Coordinate, point: Point) => {\n      // Zoom in on the new coordinate.\n      setCenter(coordinate)\n      setZoom(zoom + 1)\n    }\n  })\n")),(0,a.kt)("p",null,"Previous:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"  const [zoom, zoomRef, setZoom] = useZoomWheel({ ref, defaultZoom: 6 })\n\n  const [center, centerRef, setCenter] = useMouseEvents({\n    ref,\n    defaultCenter: { latitude: 51.4768, longitude: -0.0005 },\n    zoomRef,\n  })\n\n  useClick({\n    ref,\n    centerRef,\n    zoomRef,\n    onClick: (coordinate: Coordinate, point: Point)\n      => console.log('click', { coordinate, point }),\n    onDoubleClick: (coordinate: Coordinate, point: Point) => {\n      // Zoom in on the new coordinate.\n      setCenter(coordinate)\n      setZoom(zoom + 1)\n    }\n  })\n")),(0,a.kt)("p",null,"Rob"))}f.isMDXComponent=!0}}]);
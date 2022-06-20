"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[470],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,b=m["".concat(p,".").concat(f)]||m[f]||l[f]||i;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9467:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=n(1298),c=["components"],p={sidebar_position:6},u="AttributionLayer",s={unversionedId:"components/attributionLayer",id:"components/attributionLayer",title:"AttributionLayer",description:"The attribution layer is a child of the map component, and renders",source:"@site/docs/components/attributionLayer.md",sourceDirName:"components",slug:"/components/attributionLayer",permalink:"/jetblack-map/docs/components/attributionLayer",draft:!1,editUrl:"https://github.com/rob-blackbourn/jetblack-map/tree/main/website/docs/components/attributionLayer.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"SVGPin",permalink:"/jetblack-map/docs/components/svgPin"},next:{title:"GeoJSONLayer",permalink:"/jetblack-map/docs/components/geojson-layer"}},l={},m=[],f={toc:m};function b(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"attributionlayer"},"AttributionLayer"),(0,i.kt)("p",null,"The attribution layer is a child of the map component, and renders\nattribution taken from the tile provider. It takes no properties,\nas it uses the map context."),(0,i.kt)(a.D5,{width:"600px",height:"400px",mdxType:"Map"},(0,i.kt)(a.Ww,{mdxType:"AttributionLayer"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { AttributionLayer, Map } from '@jetblack/map'\n\n<Map width='600px' height='400px'>\n  <AttributionLayer />\n</Map>\n")))}b.isMDXComponent=!0}}]);
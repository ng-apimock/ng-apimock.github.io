(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(9),a=(r(0),r(168)),c={id:"set-mocks-to-passThrough",title:"Set mocks to passThrough",sidebar_label:"Set mocks to passThrough"},s={id:"api/set-mocks-to-passThrough",isDocsHomePage:!1,title:"Set mocks to passThrough",description:"Makes sure that @ng-apimock/core will set all mocks to go to the actual backend.",source:"@site/docs/api/set-mocks-to-passThrough.md",permalink:"/docs/api/set-mocks-to-passThrough",editUrl:"https://github.com/ng-apimock/docs/master/docs/api/set-mocks-to-passThrough.md",lastUpdatedBy:"Mischa Dasberg",sidebar_label:"Set mocks to passThrough",sidebar:"docs",previous:{title:"Reset mocks to default",permalink:"/docs/api/reset-mocks-to-default"}},i=[{value:"Usage",id:"usage",children:[]}],p={rightToc:i};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Makes sure that ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ng-apimock/core"}),"@ng-apimock/core")," will set all mocks to go to the actual backend."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"setMocksToPassThrough();\n")),Object(a.b)("p",null,"Executing this will set all mocks to go to the actual backend."))}u.isMDXComponent=!0},168:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,f=l["".concat(c,".").concat(b)]||l[b]||m[b]||a;return r?o.a.createElement(f,s(s({ref:t},p),{},{components:r})):o.a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
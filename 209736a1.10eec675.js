(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(9),o=(n(0),n(170)),i={id:"variables",title:"Variables",sidebar_label:"Variables",description:"How do I use variables @ng-apimock?",keywords:["ng-apimock","mocks","variables","response","api"]},c={id:"variables",isDocsHomePage:!1,title:"Variables",description:"How do I use variables @ng-apimock?",source:"@site/docs/variables.md",permalink:"/docs/variables",editUrl:"https://github.com/ng-apimock/ng-apimock.github.io/tree/develop/docs/docs/variables.md",lastUpdatedBy:"Mischa Dasberg",sidebar_label:"Variables",sidebar:"docs",previous:{title:"Mocks",permalink:"/docs/mocks"},next:{title:"Presets",permalink:"/docs/presets"}},s=[{value:"Actions",id:"actions",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Response data can contain time sensitive information. For those cases, static mock data is not flexible enough.\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ng-apimock/core"}),"@ng-apimock/core")," can interpolate data for you. If you want to interpolate specific parts of your response data, you need to surround the part with ",Object(o.b)("inlineCode",{parentName:"p"},"%%")," like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    ...,\n    "responses" : {\n        "some response": {\n            "data": {\n                "creation-date": "%%today%%"\n            }\n        }\n    }\n}\n')),Object(o.b)("p",null,"In ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ng-apimock/core"}),"@ng-apimock/core")," this is called a variable. "),Object(o.b)("h3",{id:"actions"},"Actions"),Object(o.b)("p",null,"Adding, updating and deleting a variable can be done by using the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"plugins"}),"available clients"),"."))}l.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
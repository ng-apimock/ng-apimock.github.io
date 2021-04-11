(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(a),d=r,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return a?n.a.createElement(m,c(c({ref:t},b),{},{components:a})):n.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=a[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),i=(a(0),a(103)),l={id:"set-variables",title:"Set variables",sidebar_label:"Set variables",description:"How do I set variables?",custom_edit_url:"https://github.com/ng-apimock/core/edit/master/docs/api/set-variables.md",keywords:["ng-apimock","core","api","mocks","select","variable","variables"]},c={unversionedId:"api/set-variables",id:"api/set-variables",isDocsHomePage:!1,title:"Set variables",description:"How do I set variables?",source:"@site/docs/api/set-variables.md",slug:"/api/set-variables",permalink:"/docs/api/set-variables",editUrl:"https://github.com/ng-apimock/core/edit/master/docs/api/set-variables.md",version:"current",sidebar_label:"Set variables",sidebar:"docs",previous:{title:"Set variable",permalink:"/docs/api/set-variable"},next:{title:"Delete variable",permalink:"/docs/api/delete-variable"}},o=[{value:"Usage",id:"usage",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],b={toc:o};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Makes sure that ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ng-apimock/core"},"@ng-apimock/core")," will add or update the variables."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"setVariables(variables);\n")),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Details"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("code",null,Object(i.b)("var",null,"variables"))),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"the key/value object")))),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"setVariables({\n    now: new Date().getTime(), \n    hello: 'hi'\n});\n")),Object(i.b)("p",null,"Executing this will add the variables with:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"key ",Object(i.b)("inlineCode",{parentName:"li"},"now")," and value ",Object(i.b)("inlineCode",{parentName:"li"},"the current date time")),Object(i.b)("li",{parentName:"ul"},"key ",Object(i.b)("inlineCode",{parentName:"li"},"hello")," and value ",Object(i.b)("inlineCode",{parentName:"li"},"hi"))),Object(i.b)("p",null,"These variables will be used to interpolated with the mock response."))}p.isMDXComponent=!0}}]);
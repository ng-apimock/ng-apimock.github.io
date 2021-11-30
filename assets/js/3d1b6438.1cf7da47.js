"use strict";(self.webpackChunk_ng_apimock_docs=self.webpackChunk_ng_apimock_docs||[]).push([[66],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return r?a.createElement(k,i(i({ref:t},s),{},{components:r})):a.createElement(k,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},157:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=r(3117),n=r(102),l=(r(7294),r(3905)),i=["components"],o={id:"create-preset",title:"Create preset",sidebar_label:"Create preset",description:"How do I create a preset?",custom_edit_url:"https://github.com/ng-apimock/core/edit/master/docs/api/create-preset.md",keywords:["ng-apimock","core","api","select","create","preset","mocks","variables"]},c=void 0,p={unversionedId:"api/create-preset",id:"api/create-preset",isDocsHomePage:!1,title:"Create preset",description:"How do I create a preset?",source:"@site/docs/api/create-preset.md",sourceDirName:"api",slug:"/api/create-preset",permalink:"/docs/api/create-preset",editUrl:"https://github.com/ng-apimock/core/edit/master/docs/api/create-preset.md",tags:[],version:"current",lastUpdatedBy:"Mischa Dasberg",frontMatter:{id:"create-preset",title:"Create preset",sidebar_label:"Create preset",description:"How do I create a preset?",custom_edit_url:"https://github.com/ng-apimock/core/edit/master/docs/api/create-preset.md",keywords:["ng-apimock","core","api","select","create","preset","mocks","variables"]},sidebar:"docs",previous:{title:"Delete variable",permalink:"/docs/api/delete-variable"},next:{title:"Select preset",permalink:"/docs/api/select-preset"}},s=[{value:"Usage",id:"usage",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Makes sure that ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ng-apimock/core"},"@ng-apimock/core")," a new preset will be created."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"createPreset(name, includeMocks, includeVariables);\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Details"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("var",null,"name"))),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"name of the preset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("var",null,"includeMocks"))),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"include current mock state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("var",null,"includeVariables"))),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"include current variables")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"createPreset('awesome-flow', true, true); \n")),(0,l.kt)("p",null,"Executing this will create a preset ",(0,l.kt)("inlineCode",{parentName:"p"},"awesome-flow"),".\nWhen including mocks, the current state of the mocks will be used in the preset.\nWhen including variables, the current variables will be used in the preset."),(0,l.kt)("p",null,"You need to at least include mocks or variables, otherwise the preset will not be created."))}d.isMDXComponent=!0}}]);
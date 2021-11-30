"use strict";(self.webpackChunk_ng_apimock_docs=self.webpackChunk_ng_apimock_docs||[]).push([[600],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=i,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},363:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=t(3117),i=t(102),o=(t(7294),t(3905)),a=["components"],c={id:"custom-plugin",title:"Custom plugin",sidebar_label:"Custom plugin",description:"How do I create a custom plugin for @ng-apimock?",custom_edit_url:"https://github.com/ng-apimock/base-client/edit/master/docs/custom-plugin.md",keywords:["ng-apimock","core","api","custom","plugin"]},p=void 0,l={unversionedId:"plugins/custom-plugin",id:"plugins/custom-plugin",isDocsHomePage:!1,title:"Custom plugin",description:"How do I create a custom plugin for @ng-apimock?",source:"@site/docs/plugins/custom-plugin.md",sourceDirName:"plugins",slug:"/plugins/custom-plugin",permalink:"/docs/plugins/custom-plugin",editUrl:"https://github.com/ng-apimock/base-client/edit/master/docs/custom-plugin.md",tags:[],version:"current",lastUpdatedBy:"Mischa Dasberg",frontMatter:{id:"custom-plugin",title:"Custom plugin",sidebar_label:"Custom plugin",description:"How do I create a custom plugin for @ng-apimock?",custom_edit_url:"https://github.com/ng-apimock/base-client/edit/master/docs/custom-plugin.md",keywords:["ng-apimock","core","api","custom","plugin"]},sidebar:"docs",previous:{title:"Cypress plugin",permalink:"/docs/plugins/cypress-plugin"},next:{title:"Select scenario",permalink:"/docs/api/select-scenario"}},u=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Dependencies using npm / yarn",id:"dependencies-using-npm--yarn",children:[],level:2},{value:"Create your own plugin",id:"create-your-own-plugin",children:[],level:2},{value:"API",id:"api",children:[],level:2}],s={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can extend ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ng-apimock/core"},"@ng-apimock/core")," by creating your own plugin.\nIn order to do so you need to implement a client based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ng-apimock/base-client"},"@ng-apimock/base-client")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"see Ng-apimock ",(0,o.kt)("a",{parentName:"p",href:"/docs/#requirements"},"requirements")),(0,o.kt)("h2",{id:"dependencies-using-npm--yarn"},"Dependencies using npm / yarn"),(0,o.kt)("p",null,"In order to create a custom plugin, you need to extend the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ng-apimock/base-client"},"@ng-apimock/base-client"),".\nAdd the dependency to you project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ng-apimock/base-client --save\n")),(0,o.kt)("p",null,"or "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ng-apimock/base-client\n")),(0,o.kt)("h2",{id:"create-your-own-plugin"},"Create your own plugin"),(0,o.kt)("p",null,"Once the dependency has been installed, you can start by implementing the plugin."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseClient } from '@ng-apimock/base-client';\n\nexport class MyCustomClient extends BaseClient {\n    constructor(baseUrl: string) {\n        super(baseUrl);\n    }\n\n    /** {@inheritDoc}. */\n    async openUrl(url: string): Promise<any> {\n        // TODO implement how the http call to the given url will be processed\n    }\n\n    /** {@inheritDoc}. */\n    async setCookie(name: string, value: string): Promise<any> {\n        // TODO implement how the http cookie will be set  \n    }\n}\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/select-scenario"},"API")))}m.isMDXComponent=!0}}]);
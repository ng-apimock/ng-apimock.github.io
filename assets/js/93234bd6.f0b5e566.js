"use strict";(self.webpackChunk_ng_apimock_docs=self.webpackChunk_ng_apimock_docs||[]).push([[669],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(k,c(c({ref:t},l),{},{components:r})):n.createElement(k,c({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),c=["components"],i={id:"docker",title:"Docker",sidebar_label:"Docker",description:"How do I use @ng-apimock as a docker container?",custom_edit_url:"https://github.com/ng-apimock/core/edit/master/docs/docker.md",keywords:["ng-apimock","core","api","docker"]},p=void 0,s={unversionedId:"docker",id:"docker",isDocsHomePage:!1,title:"Docker",description:"How do I use @ng-apimock as a docker container?",source:"@site/docs/docker.md",sourceDirName:".",slug:"/docker",permalink:"/docs/docker",editUrl:"https://github.com/ng-apimock/core/edit/master/docs/docker.md",tags:[],version:"current",lastUpdatedBy:"Mischa Dasberg",frontMatter:{id:"docker",title:"Docker",sidebar_label:"Docker",description:"How do I use @ng-apimock as a docker container?",custom_edit_url:"https://github.com/ng-apimock/core/edit/master/docs/docker.md",keywords:["ng-apimock","core","api","docker"]},sidebar:"docs",previous:{title:"presets",permalink:"/docs/presets"},next:{title:"Debugging",permalink:"/docs/debug"}},l=[{value:"Running",id:"running",children:[],level:3},{value:"Urls",id:"urls",children:[],level:3}],u={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ng-apimock/core"},"@ng-apimock/core")," is also available as a ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/ngapimock/standalone"},"docker image")," in combination with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ng-apimock/dev-interface"},"@ng-apimock/dev-interface"),"."),(0,a.kt)("h3",{id:"running"},"Running"),(0,a.kt)("p",null,"You can start the docker container manually"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run --name my-mock-server -d ngapimock/standalone:latest -p 3000:3000 -v ./mocks:/opt/ngapimock/mocks\n")),(0,a.kt)("p",null,"or through docker-compose"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.3'\n\nservices:\n  ngapimock-standalone:\n    image: ngapimock/standalone:latest\n    restart: always\n    ports:\n      - '3000:3000'\n    expose:\n      - '3000'\n    volumes:\n      - ./mocks:/opt/ngapimock/mocks   // map your mocks\n")),(0,a.kt)("h3",{id:"urls"},"Urls"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ng-apimock/core"},"@ng-apimock/core")," is available under http://localhost:3000"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ng-apimock/dev-interface"},"@ng-apimock/dev-interface")," can be accessed under: http://localhost:3000/dev-interface")))}m.isMDXComponent=!0}}]);
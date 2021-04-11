(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{103:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return s}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b=o.a.createContext({}),l=function(e){var n=o.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(b.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,s=p["".concat(c,".").concat(d)]||p[d]||g[d]||a;return t?o.a.createElement(s,i(i({ref:n},b),{},{components:t})):o.a.createElement(s,i({ref:n},b))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<a;b++)c[b]=t[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(8),a=(t(0),t(103)),c={id:"debug",title:"Debugging",sidebar_label:"Debugging",description:"How do I debug @ng-apimock?",custom_edit_url:"https://github.com/ng-apimock/core/edit/master/docs/debug.md",keywords:["ng-apimock","core","api","getting started","mocks","variables","presets","debug"]},i={unversionedId:"debug",id:"debug",isDocsHomePage:!1,title:"Debugging",description:"How do I debug @ng-apimock?",source:"@site/docs/debug.md",slug:"/debug",permalink:"/docs/debug",editUrl:"https://github.com/ng-apimock/core/edit/master/docs/debug.md",version:"current",sidebar_label:"Debugging",sidebar:"docs",previous:{title:"Docker",permalink:"/docs/docker"},next:{title:"Plugin introduction",permalink:"/docs/plugins/plugin-introduction"}},u=[{value:"sidebar_label: Debugging",id:"sidebar_label-debugging",children:[{value:"Running",id:"running",children:[]}]}],b={toc:u};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("p",null,"id: debug\ntitle: Debugging"),Object(a.b)("h2",{id:"sidebar_label-debugging"},"sidebar_label: Debugging"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/ng-apimock/core"},"@ng-apimock/core")," is uses ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/debug"},"debug"),"."),Object(a.b)("h3",{id:"running"},"Running"),Object(a.b)("p",null,"You can debug the core by enabling it."),Object(a.b)("p",null,"For Windows:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"set DEBUG=ng-apimock:*\n")),Object(a.b)("p",null,"or macOS"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"export DEBUG=ng-apimock:*\n")),Object(a.b)("p",null,"Logging is now enabled. You can also make logging more specific, for instance:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"set DEBUG=ng-apimock:handler*\n")))}l.isMDXComponent=!0}}]);
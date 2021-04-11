(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{102:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),b=r,d=m["".concat(i,".").concat(b)]||m[b]||u[b]||a;return t?o.a.createElement(d,s(s({ref:n},l),{},{components:t})):o.a.createElement(d,s({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},85:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(8),a=(t(0),t(102)),i={id:"mocks",title:"Mocks",sidebar_label:"Mocks",description:"How do I write mocks?",custom_edit_url:"https://github.com/ng-apimock/core/edit/master/docs/mocks.md",keywords:["ng-apimock","core","api","mocks","variables","chaining","request","response"]},s={unversionedId:"mocks",id:"mocks",isDocsHomePage:!1,title:"Mocks",description:"How do I write mocks?",source:"@site/docs/mocks.md",slug:"/mocks",permalink:"/docs/mocks",editUrl:"https://github.com/ng-apimock/core/edit/master/docs/mocks.md",version:"current",sidebar_label:"Mocks",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"variables",permalink:"/docs/variables"}},c=[{value:"Writing a mock file",id:"writing-a-mock-file",children:[{value:"Advanced request matching",id:"advanced-request-matching",children:[]},{value:"Chaining responses",id:"chaining-responses",children:[]},{value:"Returning file data",id:"returning-file-data",children:[]}]},{value:"Actions",id:"actions",children:[]},{value:"JSON schema",id:"json-schema",children:[]}],l={toc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A mock in ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ng-apimock/core"},"@ng-apimock/core")," is represented in a json/js file that follows the request / response principle."),Object(a.b)("h2",{id:"writing-a-mock-file"},"Writing a mock file"),Object(a.b)("p",null,"Mocks in ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ng-apimock/core"},"@ng-apimock/core")," are written in json or javascript.\nThere are a few rules to follow when writing a mock file."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"It has a unique name"),Object(a.b)("li",{parentName:"ol"},"It has a request section that at least specifies a url and method"),Object(a.b)("li",{parentName:"ol"},"It has at least one response set to default: true")),Object(a.b)("p",null,"So writing a simple mock in json format could look like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "some mock",\n    "request": {\n        "url": "/some/thing",\n        "method": "GET"\n    },\n    "responses": {\n        "ok": {\n            "default": true,\n            "data": {\n                "some": "thing"\n            }\n        },\n        "internal_server_error": {\n            "status": 500\n        }\n    }   \n}\n')),Object(a.b)("p",null,"or in javascript format like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'const data = require(\'./data.json\');\n\nmodule.exports = {\n    "name": "some mock",\n    "request": {\n        "url": "/some/thing",\n        "method": "GET"\n    },\n    "responses": {\n        "ok": {\n            "default": true,\n            "data": {\n                "some": data.some\n            }   \n        },\n        "internal_server_error": {\n            "status": 500\n        }\n    }   \n};\n')),Object(a.b)("p",null,"Writing a mock should always follow the ",Object(a.b)("a",{parentName:"p",href:"#json-schema"},"json schema"),"."),Object(a.b)("h3",{id:"advanced-request-matching"},"Advanced request matching"),Object(a.b)("p",null,"When ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ng-apimock/core"},"@ng-apimock/core")," tries to match a request to a mock, it will always look at the required fields of the request.\nBut when the request is configured with the header and body, it will also use that information to match."),Object(a.b)("p",null,"Looking at the following request configuration"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "some mock",\n    "request": {\n        "url": "^/some/thing$",\n        "method": "POST",\n        "headers": {\n            "Content-Type": "application/json"\n        },\n        "body": {\n            "item": "^[a-zA-Z]{3,10}$"\n        }\n    },\n    "responses": {\n        "ok": {\n            "default": true\n        },\n        "internal_server_error": {\n            "status": 500\n        }\n    }\n}\n')),Object(a.b)("p",null,"the request will only match when the "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Content-type header is of type 'application/json'"),Object(a.b)("li",{parentName:"ul"},"The body contains an item that matches the regex")),Object(a.b)("h3",{id:"chaining-responses"},"Chaining responses"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/ng-apimock/core"},"@ng-apimock/core")," can also chain mock responses using then clauses.\nWhen a mock is called and a then clause is provided, the clause will be checked. When the clause matches the current state, it will update the mocks accordingly."),Object(a.b)("p",null,"Looking at the following response configuration"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "some mock",\n    "request": {\n        "url": "^/some/thing$",\n        "method": "POST",\n        "headers": {\n            "Content-Type": "application/json"\n        },\n        "body": {\n            "item": "^[a-zA-Z]{3,10}$"\n        }\n    },\n    "responses": {\n        "ok": {\n            "default": true,\n            "then": {\n                "mocks": [ { \n                    "name": "some-mock", // optional, defaults to the current mock\n                    "scenario": "internal_server_error"\n                }, { \n                    "name": "some-other-mock", \n                    "scenario": "some-scenario"\n                }],\n                "criteria": { // optional\n                    "times": 3\n                }\n            }\n        }\n    },\n    "internal_server_error": {\n        "status": 500\n    }\n}\n')),Object(a.b)("p",null,"When this mock is called 3 times, 2 things will happen for each mock in the list:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"the scenario will be selected."),Object(a.b)("li",{parentName:"ol"},"the counter will be reset to 0 ")),Object(a.b)("p",null,"So for:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"the mock with name ",Object(a.b)("inlineCode",{parentName:"li"},"some-mock")," the ",Object(a.b)("inlineCode",{parentName:"li"},"internal_server_error")," scenario will be selected."),Object(a.b)("li",{parentName:"ul"},"the mock with name ",Object(a.b)("inlineCode",{parentName:"li"},"some-other-mock")," the ",Object(a.b)("inlineCode",{parentName:"li"},"some-scenario")," scenario will be selected.")),Object(a.b)("h3",{id:"returning-file-data"},"Returning file data"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/ng-apimock/core"},"@ng-apimock/core")," also has the ability to return a file instead of data.\nThis can be very handy when you share files between mocks."),Object(a.b)("p",null,"Looking at the following response "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "some mock",\n    "request": {\n        "url": "/some/thing",\n        "method": "GET"\n    },\n    "responses": {\n        "ok": {\n            "default": true,\n            "file": "some.csv",\n            "headers": {\n                "Content-type": "text/plain",\n                "filename": "some.csv"\n            }\n        },\n        "internal_server_error": {\n            "status": 500\n        }\n    }   \n}\n')),Object(a.b)("p",null,"The response will return the csv file ",Object(a.b)("inlineCode",{parentName:"p"},"some.csv")," with the specified headers."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"The file will be resolved relative to the location of the mock file."))),Object(a.b)("h2",{id:"actions"},"Actions"),Object(a.b)("p",null,"Selecting a scenario, delaying a response or echoing a request can be done by using the ",Object(a.b)("a",{parentName:"p",href:"plugins"},"available clients"),"."),Object(a.b)("h2",{id:"json-schema"},"JSON schema"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "$schema": "http://json-schema.org/draft-07/schema#",\n    "description": "Mock.",\n    "properties": {\n        "name": {\n            "type": "string"\n        },\n        "isArray": {\n            "type": "boolean"\n        },\n        "delay": {\n            "type": "number"\n        },\n        "request": {\n            "$ref": "#/definitions/MockRequest"\n        },\n        "responses": {\n            "additionalProperties": {\n                "$ref": "#/definitions/MockResponse"\n            },\n            "type": "object"\n        }\n    },\n    "required": ["name", "request", "responses"],\n    "type": "object",\n    "definitions": {\n        "MockRequest": {\n            "description": "Mock request.",\n            "properties": {\n                "url": {\n                    "type": "string"\n                },\n                "method": {\n                    "enum": [\n                        "GET",\n                        "HEAD",\n                        "OPTIONS",\n                        "POST",\n                        "PUT",\n                        "DELETE"\n                    ],\n                    "type": "string"\n                },\n                "body": {\n                    "type": "object"\n                },\n                "headers": {\n                    "type": "object"\n                }\n            },\n            "required": ["url", "method"],\n            "type": "object"\n        },\n        "MockResponse": {\n            "description": "Mock response.",\n            "properties": {\n                "data": {\n                    "anyOf": [\n                        {\n                            "type": "object"\n                        },\n                        {\n                            "items": [\n                                {\n                                    "type": "object"\n                                }\n                            ],\n                            "minItems": 1,\n                            "type": "array"\n                        }\n                    ]\n                },\n                "default": {\n                    "type": "boolean"\n                },\n                "file": {\n                    "type": "string"\n                },\n                "headers": {\n                    "additionalProperties": {\n                        "type": "string"\n                    },\n                    "type": "object"\n                },\n                "status": {\n                    "type": "number"\n                },\n                "statusText": {\n                    "type": "string"\n                },\n                "then": {\n                    "$ref": "#/definitions/MockResponseThenClause"\n                }\n            },\n            "type": "object"\n        },\n        "MockResponseThenClause": {\n            "properties": {\n                "criteria": {\n                    "$ref": "#/definitions/MockResponseThenClauseCriteria"\n                },\n                "mocks": {\n                    "items": {\n                        "$ref": "#/definitions/MockResponseThenClauseMockSelection"\n                    },\n                    "minItems": 1,\n                    "type": "array"\n                }\n            },\n            "required": ["mocks"],\n            "type": "object"\n        },\n        "MockResponseThenClauseCriteria": {\n            "properties": {\n                "times": {\n                    "type": "number"\n                }\n            },\n            "required": ["times"],\n            "type": "object"\n        },\n        "MockResponseThenClauseMockSelection": {\n            "properties": {\n                "name": {\n                    "type": "string"\n                },\n                "scenario": {\n                    "type": "string"\n                }\n            },\n            "required": ["scenario"],\n            "type": "object"\n        }\n    }\n}\n')))}p.isMDXComponent=!0}}]);
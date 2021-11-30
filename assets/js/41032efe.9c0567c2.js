"use strict";(self.webpackChunk_ng_apimock_docs=self.webpackChunk_ng_apimock_docs||[]).push([[852],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return t?o.createElement(h,i(i({ref:n},p),{},{components:t})):o.createElement(h,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4574:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var o=t(3117),r=t(102),a=(t(7294),t(3905)),i=["components"],s={id:"mocks",title:"Mocks",sidebar_label:"Mocks",description:"How do I write mocks?",custom_edit_url:"https://github.com/ng-apimock/core/edit/master/docs/mocks.md",keywords:["ng-apimock","core","api","mocks","variables","chaining","request","response"]},l=void 0,c={unversionedId:"mocks",id:"mocks",isDocsHomePage:!1,title:"Mocks",description:"How do I write mocks?",source:"@site/docs/mocks.md",sourceDirName:".",slug:"/mocks",permalink:"/docs/mocks",editUrl:"https://github.com/ng-apimock/core/edit/master/docs/mocks.md",tags:[],version:"current",lastUpdatedBy:"Mischa Dasberg",frontMatter:{id:"mocks",title:"Mocks",sidebar_label:"Mocks",description:"How do I write mocks?",custom_edit_url:"https://github.com/ng-apimock/core/edit/master/docs/mocks.md",keywords:["ng-apimock","core","api","mocks","variables","chaining","request","response"]},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"variables",permalink:"/docs/variables"}},p=[{value:"Writing a mock file",id:"writing-a-mock-file",children:[{value:"Advanced request matching",id:"advanced-request-matching",children:[],level:3},{value:"Chaining responses",id:"chaining-responses",children:[],level:3},{value:"Returning file data",id:"returning-file-data",children:[],level:3}],level:2},{value:"Actions",id:"actions",children:[],level:2},{value:"JSON schema",id:"json-schema",children:[],level:2}],m={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A mock in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ng-apimock/core"},"@ng-apimock/core")," is represented in a json/js file that follows the request / response principle."),(0,a.kt)("h2",{id:"writing-a-mock-file"},"Writing a mock file"),(0,a.kt)("p",null,"Mocks in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ng-apimock/core"},"@ng-apimock/core")," are written in json or javascript.\nThere are a few rules to follow when writing a mock file."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It has a unique name"),(0,a.kt)("li",{parentName:"ol"},"It has a request section that at least specifies a url and method"),(0,a.kt)("li",{parentName:"ol"},"It has at least one response set to default: true")),(0,a.kt)("p",null,"So writing a simple mock in json format could look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "some mock",\n    "request": {\n        "url": "/some/thing",\n        "method": "GET"\n    },\n    "responses": {\n        "ok": {\n            "default": true,\n            "data": {\n                "some": "thing"\n            }\n        },\n        "internal_server_error": {\n            "status": 500\n        }\n    }   \n}\n')),(0,a.kt)("p",null,"or in javascript format like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const data = require(\'./data.json\');\n\nmodule.exports = {\n    "name": "some mock",\n    "request": {\n        "url": "/some/thing",\n        "method": "GET"\n    },\n    "responses": {\n        "ok": {\n            "default": true,\n            "data": {\n                "some": data.some\n            }   \n        },\n        "internal_server_error": {\n            "status": 500\n        }\n    }   \n};\n')),(0,a.kt)("p",null,"Writing a mock should always follow the ",(0,a.kt)("a",{parentName:"p",href:"#json-schema"},"json schema"),"."),(0,a.kt)("h3",{id:"advanced-request-matching"},"Advanced request matching"),(0,a.kt)("p",null,"When ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ng-apimock/core"},"@ng-apimock/core")," tries to match a request to a mock, it will always look at the required fields of the request.\nBut when the request is configured with the header and body, it will also use that information to match."),(0,a.kt)("p",null,"Looking at the following request configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "some mock",\n    "request": {\n        "url": "^/some/thing$",\n        "method": "POST",\n        "headers": {\n            "Content-Type": "application/json"\n        },\n        "body": {\n            "item": "^[a-zA-Z]{3,10}$"\n        }\n    },\n    "responses": {\n        "ok": {\n            "default": true\n        },\n        "internal_server_error": {\n            "status": 500\n        }\n    }\n}\n')),(0,a.kt)("p",null,"the request will only match when the "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Content-type header is of type 'application/json'"),(0,a.kt)("li",{parentName:"ul"},"The body contains an item that matches the regex")),(0,a.kt)("h3",{id:"chaining-responses"},"Chaining responses"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ng-apimock/core"},"@ng-apimock/core")," can also chain mock responses using then clauses.\nWhen a mock is called and a then clause is provided, the clause will be checked. When the clause matches the current state, it will update the mocks accordingly."),(0,a.kt)("p",null,"Looking at the following response configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "some mock",\n    "request": {\n        "url": "^/some/thing$",\n        "method": "POST",\n        "headers": {\n            "Content-Type": "application/json"\n        },\n        "body": {\n            "item": "^[a-zA-Z]{3,10}$"\n        }\n    },\n    "responses": {\n        "ok": {\n            "default": true,\n            "then": {\n                "mocks": [ { \n                    "name": "some-mock", // optional, defaults to the current mock\n                    "scenario": "internal_server_error"\n                }, { \n                    "name": "some-other-mock", \n                    "scenario": "some-scenario"\n                }],\n                "criteria": { // optional\n                    "times": 3\n                }\n            }\n        }\n    },\n    "internal_server_error": {\n        "status": 500\n    }\n}\n')),(0,a.kt)("p",null,"When this mock is called 3 times, 2 things will happen for each mock in the list:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the scenario will be selected."),(0,a.kt)("li",{parentName:"ol"},"the counter will be reset to 0 ")),(0,a.kt)("p",null,"So for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the mock with name ",(0,a.kt)("inlineCode",{parentName:"li"},"some-mock")," the ",(0,a.kt)("inlineCode",{parentName:"li"},"internal_server_error")," scenario will be selected."),(0,a.kt)("li",{parentName:"ul"},"the mock with name ",(0,a.kt)("inlineCode",{parentName:"li"},"some-other-mock")," the ",(0,a.kt)("inlineCode",{parentName:"li"},"some-scenario")," scenario will be selected.")),(0,a.kt)("h3",{id:"returning-file-data"},"Returning file data"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ng-apimock/core"},"@ng-apimock/core")," also has the ability to return a file instead of data.\nThis can be very handy when you share files between mocks."),(0,a.kt)("p",null,"Looking at the following response "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "some mock",\n    "request": {\n        "url": "/some/thing",\n        "method": "GET"\n    },\n    "responses": {\n        "ok": {\n            "default": true,\n            "file": "some.csv",\n            "headers": {\n                "Content-type": "text/plain",\n                "filename": "some.csv"\n            }\n        },\n        "internal_server_error": {\n            "status": 500\n        }\n    }   \n}\n')),(0,a.kt)("p",null,"The response will return the csv file ",(0,a.kt)("inlineCode",{parentName:"p"},"some.csv")," with the specified headers."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The file will be resolved relative to the location of the mock file."))),(0,a.kt)("h2",{id:"actions"},"Actions"),(0,a.kt)("p",null,"Selecting a scenario, delaying a response or echoing a request can be done by using the ",(0,a.kt)("a",{parentName:"p",href:"plugins"},"available clients"),"."),(0,a.kt)("h2",{id:"json-schema"},"JSON schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$schema": "http://json-schema.org/draft-07/schema#",\n    "description": "Mock.",\n    "properties": {\n        "name": {\n            "type": "string"\n        },\n        "isArray": {\n            "type": "boolean"\n        },\n        "delay": {\n            "type": "number"\n        },\n        "request": {\n            "$ref": "#/definitions/MockRequest"\n        },\n        "responses": {\n            "additionalProperties": {\n                "$ref": "#/definitions/MockResponse"\n            },\n            "type": "object"\n        }\n    },\n    "required": ["name", "request", "responses"],\n    "type": "object",\n    "definitions": {\n        "MockRequest": {\n            "description": "Mock request.",\n            "properties": {\n                "url": {\n                    "type": "string"\n                },\n                "method": {\n                    "enum": [\n                        "GET",\n                        "HEAD",\n                        "OPTIONS",\n                        "POST",\n                        "PUT",\n                        "DELETE"\n                    ],\n                    "type": "string"\n                },\n                "body": {\n                    "type": "object"\n                },\n                "headers": {\n                    "type": "object"\n                }\n            },\n            "required": ["url", "method"],\n            "type": "object"\n        },\n        "MockResponse": {\n            "description": "Mock response.",\n            "properties": {\n                "data": {\n                    "anyOf": [\n                        {\n                            "type": "object"\n                        },\n                        {\n                            "items": [\n                                {\n                                    "type": "object"\n                                }\n                            ],\n                            "minItems": 1,\n                            "type": "array"\n                        }\n                    ]\n                },\n                "default": {\n                    "type": "boolean"\n                },\n                "file": {\n                    "type": "string"\n                },\n                "headers": {\n                    "additionalProperties": {\n                        "type": "string"\n                    },\n                    "type": "object"\n                },\n                "status": {\n                    "type": "number"\n                },\n                "statusText": {\n                    "type": "string"\n                },\n                "then": {\n                    "$ref": "#/definitions/MockResponseThenClause"\n                }\n            },\n            "type": "object"\n        },\n        "MockResponseThenClause": {\n            "properties": {\n                "criteria": {\n                    "$ref": "#/definitions/MockResponseThenClauseCriteria"\n                },\n                "mocks": {\n                    "items": {\n                        "$ref": "#/definitions/MockResponseThenClauseMockSelection"\n                    },\n                    "minItems": 1,\n                    "type": "array"\n                }\n            },\n            "required": ["mocks"],\n            "type": "object"\n        },\n        "MockResponseThenClauseCriteria": {\n            "properties": {\n                "times": {\n                    "type": "number"\n                }\n            },\n            "required": ["times"],\n            "type": "object"\n        },\n        "MockResponseThenClauseMockSelection": {\n            "properties": {\n                "name": {\n                    "type": "string"\n                },\n                "scenario": {\n                    "type": "string"\n                }\n            },\n            "required": ["scenario"],\n            "type": "object"\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);
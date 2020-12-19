---
id: plugin-introduction
title: Plugin introduction
sidebar_label: Introduction
---
[@ng-apimock/core](https://github.com/ng-apimock/core) has multiple plugins that connect to the middleware and make all its features available.<br />
You can use these plugins for both:
 - local development
 - automated testing

### Local development
For local development you can use: 
- [dev-interface](dev-interface)

### Automated testing
For automated testing you can use:
- [protractor-plugin](protractor-plugin) 
- [wdio-ng-apimock-service](wdio-ng-apimock-service)
- [cypress-plugin](cypress-plugin)

:::important

When using [@ng-apimock/core](https://github.com/ng-apimock/core) for automated testing, parallel executed tests do not interfere with each other. Each session is fully isolated.

:::

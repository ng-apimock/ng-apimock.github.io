---
id: debug
title: Debugging
sidebar_label: Debugging
description: How do I debug @ng-apimock?
custom_edit_url: https://github.com/ng-apimock/core/edit/master/docs/debug.md
keywords:
 - ng-apimock
 - core
 - api
 - getting started
 - mocks
 - variables
 - presets
 - debug
---
[@ng-apimock/core](https://github.com/ng-apimock/core) is uses [debug](https://www.npmjs.com/package/debug).

### Running
You can debug the core by enabling it.

For Windows:
```bash
set DEBUG=ng-apimock:*
```
or macOS
```bash
export DEBUG=ng-apimock:*
```

Logging is now enabled. You can also make logging more specific, for instance:
```
set DEBUG=ng-apimock:handler*
```

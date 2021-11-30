---
id: echo-request
title: Echo request
sidebar_label: Echo request
description: How do I echo a request?
custom_edit_url: https://github.com/ng-apimock/core/edit/master/docs/api/echo-request.md
keywords:
 - ng-apimock
 - core
 - api
 - echo
 - request
---
Makes sure that [@ng-apimock/core](https://github.com/ng-apimock/core) will log the request to the console.

## Usage
```typescript
echoRequest(name, indicator);
```
 
## Parameters
| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>name</var></code> | string | name of the mock |
| <code><var>indicator</var></code> | boolean | indicator to echo |
 
## Example 
```typescript
echoRequest('my-mock', true);
```
Executing this will log the request to the console for the mock matching the name `my-mock`.

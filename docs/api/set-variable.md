---
id: set-variable
title: Set variable
sidebar_label: Set variable
description: How do I set a variable?
custom_edit_url: https://github.com/ng-apimock/core/edit/master/docs/api/set-variable.md
keywords:
 - ng-apimock
 - core
 - api
 - mocks
 - select
 - variable
---
Makes sure that [@ng-apimock/core](https://github.com/ng-apimock/core) will add or update the variable.

## Usage
```typescript
setVariable(key, value);
```
 
## Parameters
| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>key</var></code> | string | the key |
| <code><var>value</var></code> | any | the value |
 
## Example 
```typescript
setVariable('now', new Date().getTime());
```
Executing this will add a variable with key `now` and value `the current date time`.
This variable will be used to interpolated with the mock response.

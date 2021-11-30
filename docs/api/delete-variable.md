---
id: delete-variable
title: Delete variable
sidebar_label: Delete variable
description: How do I delete a variable?
custom_edit_url: https://github.com/ng-apimock/core/edit/master/docs/api/delete-variable.md
keywords:
 - ng-apimock
 - core
 - api
 - variable
 - delete
---
Makes sure that [@ng-apimock/core](https://github.com/ng-apimock/core) will delete the variable.

## Usage
```typescript
deleteVariable(key);
```
 
## Parameters
| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>key</var></code> | string | the key |
 
## Example 
```typescript
deleteVariable('now');
```
Executing this will delete the variable with key `now`.

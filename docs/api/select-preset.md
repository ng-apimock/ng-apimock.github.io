---
id: select-preset
title: Select preset
sidebar_label: Select preset
description: How do I select a preset?
custom_edit_url: https://github.com/ng-apimock/core/edit/master/docs/api/select-preset.md
keywords:
 - ng-apimock
 - core
 - api
 - select
 - preset
 - mocks
 - variables
---
Makes sure that [@ng-apimock/core](https://github.com/ng-apimock/core) preset is loaded.

## Usage
```typescript
selectPreset(name);
```

## Parameters
| Name | Type | Details |
| ---- | ---- | ------- |
| <code><var>name</var></code> | string | name of the preset |

## Example
```typescript
selectPreset('happy-flow'); 
```
Executing this will select preset `happy-flow`.
All the 
- mocks will be updated with the specified scenario's, delays and echo indicators.
- variables will be added / updated

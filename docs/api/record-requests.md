---
id: record-requests
title: Record requests/responses
sidebar_label: Record requests/responses
description: How do enable/disable recording requests/responses?
custom_edit_url: https://github.com/ng-apimock/core/edit/master/docs/api/record-requests.md
keywords:
 - ng-apimock
 - core
 - api
 - mocks
 - request
 - recordings
 - response
---
Enable / disable the recording of requests/responses that [@ng-apimock/core](https://github.com/ng-apimock/core) has made.

## Usage

```typescript
recordRequests(true); // default behaviour is false
```

## Example

```typescript
recordRequests(true);
```

Executing this will record the requests/responses. They can be retrieved using [get-recordings](get-recordings).

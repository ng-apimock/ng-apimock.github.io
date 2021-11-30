---
id: variables
title: variables
sidebar_label: variables
description: How do I write variables?
custom_edit_url: https://github.com/ng-apimock/core/edit/master/docs/variables.md
keywords:
 - ng-apimock
 - core
 - api
 - variables
 - mocks
 - variables
---
Response data can contain time sensitive information. For those cases, static mock data is not flexible enough. 
[@ng-apimock/core](https://github.com/ng-apimock/core) can interpolate data for you. If you want to interpolate specific parts of your response data, you need to surround the part with `%%` like this:

```json
{
    ...,
    "responses" : {
        "some response": {
            "data": {
                "creation-date": "%%today%%"
            }
        }
    }
}
```
In [@ng-apimock/core](https://github.com/ng-apimock/core) this is called a variable. 


### Actions
Adding, updating and deleting a variable can be done by using the [available clients](plugins).

---
id: cypress-plugin
title: Cypress plugin
sidebar_label: Cypress plugin
---
[![npm](https://img.shields.io/npm/v/@ng-apimock/cypress-plugin?color=brightgreen)](https://www.npmjs.com/package/ng-apimock/cypress-plugin) <br />
[@ng-apimock/cypress-plugin](https://github.com/ng-apimock/cypress-plugin) is the [cypress](https://www.cypress.io/) plugin for [@ng-apimock/core](https://github.com/ng-apimock/core).

This plugin connects to [@ng-apimock/core](https://github.com/ng-apimock/core) middelware and makes the all its features available in the tests.

## Requirements

see Ng-apimock [requirements](/docs/#requirements)

## Installing using npm / yarn
```bash
npm install @ng-apimock/cypress-plugin --save-dev
```
or 

```bash
yarn add @ng-apimock/cypress-plugin --dev
```

## Usage
Once the plugin has been installed, enable this plugin in your supports file

```js
require('@ng-apimock/cypress-plugin').load();
```

### Plugin configuration
Add environment variables to `cypress.json` configuration file

```json
{
  "env": {
    "NG_API_MOCK_BASE_URL": "http://localhost:3000", 
    "NG_API_MOCK_ENABLE_LOGS": "false" // optional: defaults to 'true'
  }
}
```

## Using in tests
Now you can use it.

```typescript
describe('Some test', () => {
    it('does something', () => 
        cy.selectScenario('my-mock-name', 'some-scenario'));
});
``` 

## API 
See [API](/docs/api/select-scenario)

---
id: dev-interface
title: Development interface
sidebar_label: Development interface
---
[@ng-apimock/dev-interface](https://github.com/ng-apimock/dev-interface) is the development interface for [@ng-apimock/core](https://github.com/ng-apimock/core).

The development interface is a small web application that connects to the [@ng-apimock/core](https://github.com/ng-apimock/core) middelware and exposes all its features in the ui.

![alt text][dev-interface]

[dev-interface]: /img/dev-interface.png "Development interface"

## Requirements

see Ng-apimock [requirements](/docs/#requirements)

## Installing using npm / yarn
```bash
npm install @ng-apimock/dev-interface --save-dev
```
or 

```bash
yarn add @ng-apimock/dev-interface --dev
```

## Usage
Once the plugin has been installed, you can require it with this line of JavaScript:

```js
const devInterface = require('@ng-apimock/dev-interface');
```

   
### Middleware
The final step to take is to register [@ng-apimock/core](https://github.com/ng-apimock/core) as middleware. It is compatible with both [Connect](https://www.npmjs.com/package/connect) and [Express](https://www.npmjs.com/package/express)

```js
const connect = require('connect');
const app = connect();

app.use('/dev-interface/', serveStatic(devInterface));
```

or 
```js
const express = require('express');
const app = express();

app.use('/dev-interface', express.static(devInterface));
```

### Minimal setup example 
This is a minimal setup example of how you can manually use @ng-apimock/core
```js
const apimock = require('@ng-apimock/core');
const devInterface = require('@ng-apimock/dev-interface');
const express = require('express');
const app = express();
app.set('port', 9999);

apimock.processor.process({
    src: 'mocks'
});

app.use(apimock.middleware);
app.use('/dev-interface', express.static(devInterface));

app.listen(app.get('port'), () => {
    console.log('@ng-apimock/core running on port', app.get('port'));
    console.log('@ng-apimock/dev-interface is available under /dev-interface');
});
```
To start up the script just type:  
```bash
node serve.js
```

The development interface can now be used by navigating to [http://localhost:9000/dev-interface](http://localhost:9000/dev-interface).

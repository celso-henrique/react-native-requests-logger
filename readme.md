React native requests logger
====================
[![npm version](https://badge.fury.io/js/react-native-requests-logger.svg)](https://badge.fury.io/js/react-native-requests-logger)
[![npm](https://img.shields.io/npm/dt/react-native-requests-logger.svg)]()

Component that logs all requests made in react native apps into chrome dev tools network tab.

# Install
```
npm install --save react-native-requests-logger 
```

# Usage
```js
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import {logRequests} from 'react-native-requests-logger';

class App extends Component {
  constructor() {
    logRequests();
  }
  
  render() {
    // Your app code... 
  }
}

AppRegistry.registerComponent('App', () => App);
```

# Or use it as a component
```js
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import RequestsLogger from 'react-native-requests-logger';

class App extends Component {
  render() {
    <RequestsLogger />
    // Your app code...
  }
}

AppRegistry.registerComponent('App', () => App);
```

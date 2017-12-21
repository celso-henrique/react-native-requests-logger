Component that logs all requests made in react native apps into chrome dev tools network tab.

# Install
```
npm install --save react-native-requests-logger 
```

# Usage
```js
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import RequestsLogger from 'react-native-requests-logger';

class App extends Component {
  render() {
    <RequestsLogger />
  }
}

AppRegistry.registerComponent('App', () => App);
```

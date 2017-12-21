import React, {Component} from 'react';

export const logRequests = () => {
  if (__DEV___) {
    // HTTP logger
    XMLHttpRequest = GLOBAL.originalXMLHttpRequest
      ? GLOBAL.originalXMLHttpRequest
      : GLOBAL.XMLHttpRequest;

    // Fetch logger
    global._fetch = fetch;
    global.fetch = function(uri, options, ...args) {
      return global._fetch(uri, options, ...args).then(response => {
        console.log('Fetch', {request: {uri, options, ...args}, response});
        return response;
      });
    };
  }
};

export default class RequestsLogger extends Component {
  constructor() {
    logRequests();
  }

  render() {
    return null;
  }
}

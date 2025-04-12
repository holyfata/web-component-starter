'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-afb472d0.js');

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.first = undefined;
    this.middle = undefined;
    this.last = undefined;
  }
  render() {
    return index.h("div", null, "Hello, World!");
  }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;

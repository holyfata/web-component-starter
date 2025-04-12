import { r as registerInstance, h } from './index-e0544da2.js';

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.first = undefined;
    this.middle = undefined;
    this.last = undefined;
  }
  render() {
    return h("div", null, "Hello, World!");
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };

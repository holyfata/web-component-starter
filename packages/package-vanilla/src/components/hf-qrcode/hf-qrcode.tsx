import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "hf-qrcode",
  styleUrl: "hf-qrcode.css",
  shadow: true,
})
export class HfQrcode {
  render() {
    return (
      <Host>
        Hello
        <slot></slot>
      </Host>
    );
  }
}

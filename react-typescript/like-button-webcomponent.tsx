import * as React from "react";
import * as ReactDOM from "react-dom";
import { LikeButton } from "./like-button";

export class LikeButtonWebComponent extends HTMLElement {
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    this.render();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.render();
  }

  static get observedAttributes() {
    return ["likedtext"];
  }

  render() {
    if (!this.shadowRoot) {
      return;
    }
    const attributeNames = this.getAttributeNames();
    const attributes = {} as any;
    for (const name of attributeNames) {
      attributes[name] = this.getAttribute(name);
    }
    const { likedtext, ...remainingProps } = attributes;

    ReactDOM.render(
      <LikeButton likedText={likedtext} {...remainingProps}></LikeButton>,
      this.shadowRoot
    );
  }
}

customElements.define("mc-like-button", LikeButtonWebComponent);

declare global {
  namespace JSX {
    interface IntrinisicElements {
      "mc-like-button": LikeButtonWebComponent;
    }
  }
}

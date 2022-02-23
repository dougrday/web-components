import { LikeButton, LikeButtonProps } from "./like-button";
import * as React from "react";
import * as ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

customElements.define(
  "mc-like-button-2",
  reactToWebComponent(LikeButton as any, React, ReactDOM, { shadow: true })
);

declare global {
  namespace JSX {
    interface IntrinisicElements {
      "mc-like-button-2": LikeButtonProps;
    }
  }
}

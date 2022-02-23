"use strict";

import { LikeButton } from "./like-button.mjs";
import reactToWebComponent from "https://unpkg.com/react-to-webcomponent@1.5.1/react-to-webcomponent.js";

customElements.define("mc-like-button-1", reactToWebComponent(LikeButton, React, ReactDOM, { shadow: true }));

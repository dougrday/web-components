import { defineCustomElement } from "vue";
import LikeButton from "./components/LikeButton.ce.vue";

const LikeButtonElement = defineCustomElement(LikeButton);
customElements.define("mc-like-button", LikeButtonElement);

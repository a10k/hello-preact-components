import "./index.js";
import { html } from "lit-html";

export default {
  parameters: {
    layout: "centered",
  },
};

export const story1 = () => html`<my-counter count="2"></my-counter> `;
export const story2 = () => html`<my-counter>
  <p slot="other">Hello</p>
</my-counter> `;
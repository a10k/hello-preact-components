import "../src/index.js";
import { html } from "lit-html";

export default {
  parameters: {
    layout: "centered",
  },
};

export const counter1 = () => html`<my-counter count="2"></my-counter> `;
export const counter2 = () => html`<my-counter>
  <p slot="other">Hello</p>
</my-counter> `;

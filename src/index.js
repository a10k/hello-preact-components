import define from "preact-custom-element";
import { html } from "htm/preact";
import { useState } from "preact/hooks";

const MyCounter = (props) => {
  var [count, _count] = useState(+props.count || 0);

  var inc = () => {
    _count(count + 1);
  };

  var dec = () => {
    _count(count - 1);
  };

  return html`
    <style>
      * {
        font-size: 200%;
      }

      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 4rem;
        height: 4rem;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }
      .main {
      }
    </style>
    <button onClick=${dec}>-</button>
    <span class="main">${count}</span>
    <button onClick=${inc}>+</button>
    ${props.other}
  `;
};

define(MyCounter, "my-counter", ["count"], { shadow: true });

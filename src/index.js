import define from "preact-custom-element";
import { html } from "htm/preact";
import { useState, useEffect, useRef } from "preact/hooks";

const MyCounter = (props) => {
  var r = useRef(null);
  var [count, _count] = useState(+props.count || 0);

  var inc = () => {
    _count(count + 1);
  };

  var dec = () => {
    _count(count - 1);
  };
  useEffect(() => {
    if (r && r.current) {
      r.current.getRootNode().host.value = count;
      r.current.getRootNode().host.dispatchEvent(new CustomEvent("input"));
    }
  }, [count]);

  return html`
    <span ref=${r}>
      <style>
        * {
          font-size: 200%;
        }
        .main {
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
      </style>
      <button onClick=${dec}>-</button>
      <span class="main">${count}</span>
      <button onClick=${inc}>+</button>
      ${props.other}
    </span>
  `;
};

define(MyCounter, "my-counter", ["count"], { shadow: true });

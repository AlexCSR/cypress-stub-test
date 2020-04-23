import React from "react";
import some from './some';
import "./styles.css";

if (window.Cypress) {
  window.some = some
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button type="button" onClick={() => some.func()}>Trigger!</button>
    </div>
  );
}

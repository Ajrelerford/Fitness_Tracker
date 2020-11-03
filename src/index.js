import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  return (
    <div id="app">
      <h1>Hello, World</h1>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
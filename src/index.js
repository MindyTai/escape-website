import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

window.$ = $;

registerServiceWorker();

$(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});

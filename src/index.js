import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
import App from './App';

window.$ = $

registerServiceWorker();

$(function(){
  //init react component
  ReactDOM.render(<App />,document.getElementById('root'))
})

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'styles/main.global.scss';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wired-card': any,
      'wired-button': any,
      'wired-image': any,
    }
  }
}

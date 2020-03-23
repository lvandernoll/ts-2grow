import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'wired-elements';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'styles/main.global.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wired-card': any,
      'wired-button': any,
      'wired-image': any,
      'wired-fab': any,
    }
  }
}

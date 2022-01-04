import * as ReactDOM from 'react-dom';
import * as React from 'react';
import '../scripts/modernizr.js';

import 'normalize.css';
import '../scss/critical.scss';
import '../scss/mobile.scss';
import '../scss/tablet.scss';
import '../scss/desktop.scss';

import { onDocumentLoad } from '../helpers/dom';

import App from '../components/App';

import { Provider } from 'react-redux'
import store from '../redux/store';

(async () => {
    await onDocumentLoad();
    const app = document.querySelector('#app');
    ReactDOM.render(<Provider store={store}><App/></Provider>,app);
})();

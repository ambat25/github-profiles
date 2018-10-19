import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'

import store from './store';
const profiles = store.getState()
ReactDOM.render(<Provider store={store}><App allProfiles={profiles} /></Provider>, document.getElementById('root'));

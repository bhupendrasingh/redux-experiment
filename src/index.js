import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import Counter from './components/Counter';
//import Counter as reducer from './Reducers/Counter';
import { createStore } from 'redux';
//import * as actions from '../Actions';
import counter from './Reducers/counter';


import registerServiceWorker from './registerServiceWorker';
const store =createStore(counter);
ReactDOM.render(
 <Provider store={store}>
	<div>
	<App />
	<Counter/>
	</div>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';

const application = 
	<BrowserRouter>
		<App />
	</BrowserRouter>

ReactDOM.render(application, document.querySelector('#root'));
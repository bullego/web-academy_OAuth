import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import { HashRouter } from 'react-router-dom';

const application = 
	<HashRouter>
		<App />
	</HashRouter>

ReactDOM.render(application, document.querySelector('#root'));
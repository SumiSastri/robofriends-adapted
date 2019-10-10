import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
	<div>
		<App />
	</div>,
	document.getElementById('root')
);
serviceWorker.register();

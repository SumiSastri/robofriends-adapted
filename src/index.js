import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
	<div>
		<App />
	</div>,
	document.getElementById('root')
);
serviceWorker.register();

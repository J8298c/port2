import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './components/portfolio';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Portfolio />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Header />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();

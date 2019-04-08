// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/app/App';
// import './index.css';

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

import store from './state';


ReactDOM.render(
    <store.Provider initialState={{}}>
        <App />
    </store.Provider>, document.getElementById('root'));
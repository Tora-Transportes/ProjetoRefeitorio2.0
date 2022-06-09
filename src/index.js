import React from 'react';
import ReactDOM from 'react-dom';
import { runWithAdal } from 'react-adal';
import { authContext } from './AdalConfig';
import App from './App';


runWithAdal(authContext, () => {
  ReactDOM.render(
    <App/>
    ,document.getElementById('root')
  );
});
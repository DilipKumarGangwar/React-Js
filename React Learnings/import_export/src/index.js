import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import name,{component1,component2,component3,component4} from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.Fragment>
    <p>My name is {name}</p>
    <p>{component1()}</p>    {/* component1 is a component and it is non-default */}
    <p>{component2()}</p>
    <p>{component3()}</p>
    <p>{component4()}</p>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

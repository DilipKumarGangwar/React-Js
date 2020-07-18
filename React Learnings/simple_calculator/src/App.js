import React from 'react';
import logo from './logo.svg';
import './App.css';
import {add,sub,mult,div} from './Calc'

function App() {
    return (
       <React.Fragment>
             <p>Add={add(5,15)}</p>
             <p>Sub={sub(5,15)}</p>
             <p>Mult={mult(5,15)}</p>
             <p>Div={div(5,15)}</p>
       </React.Fragment>  
    );
}

export default App;

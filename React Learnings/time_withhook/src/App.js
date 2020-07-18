import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () =>{
   
  const [date,newTime] = useState((new Date()).toLocaleTimeString());
   const IncNum =()=>{
       newTime((new Date()).toLocaleTimeString());

   }

  return(
    <>
    <div className="container">
     <h1 className="date">{date}</h1>
     <button className="btn" onClick= { IncNum}>Get Time</button>
     </div>
    </>
  );

}

export default App;

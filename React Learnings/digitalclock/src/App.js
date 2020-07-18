import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [time,newTime] = useState((new Date()).toLocaleTimeString());
   
  setInterval(()=>{

    newTime((new Date()).toLocaleTimeString());
     
  },1000)
   
  return(
    <>
    <div className="container">
     <h1 className="time">{time}</h1>
     
     </div>
    </>
  );
}

export default App;

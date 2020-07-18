import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const p="#8e44ad";
  const [oldColor,newBg] = useState(p);
  const BackGroundChange = ()=>{
     //console.log("kklk");
     newBg("blue");

  }


  return(
     <>
     <div style={{backgroundColor:oldColor}}>
        <button className="btn" onClick ={ BackGroundChange}>Click Me</button>

     </div>
     </>


  );
}

export default App;

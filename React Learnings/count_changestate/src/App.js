import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const App= () => {
  
  let [count,setNewValue]= useState(1);
 
  //console.log(`${count}`);
 

  const IncNum = ()=>{
    setNewValue(count+1);
    
    //console.log(count);
    // console.log("clicked" + ++count);

  }



   return(
     <>
     <div className="container">
      <h1 className="counter">{count}</h1>
      <button className="btn" onClick= { IncNum}>Click Me</button>
      </div>
     </>
   );


}

export default App;

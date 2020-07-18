import React from 'react'

function App(){
    let date= new Date();
    //let date= new Date(2020,5,5,1);
    date = date.getHours();

    let greeting = "";

    //css 

    const cssStyle ={

    };

    if(date >= 1 && date <= 11  ){
    greeting="Good Morning";
    cssStyle.color="green";
    
    }
    else if(date >= 12 && date <= 19  ){
    greeting="Good Afternoon";
    cssStyle.color="orange";

    }
    else{
    greeting="Good Night";
    cssStyle.color="gray";
    }

   return(
        <React.Fragment>
            <div>
            <h1>
                Hello, <span style={cssStyle}>{greeting}</span>
            </h1>
            </div>

       </React.Fragment>
    
  );
}


export default App
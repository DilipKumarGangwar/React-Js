function add(a,b){
    let sum=a+b;
    return sum;
}

function sub(a,b){
    let subt = a-b;
    return subt;
}


function mult(a,b){
    return a*b;
}


function div(a,b){
    if(b == 0)
      return "Not defined";
    else  
      return (a/b).toFixed(2);
}


export {add,sub,mult,div};
const name="Dilip"

function component1(){
    let x= "hello";
    return x;


}
function component2(){

  return "hello2";

}
  
function component3(){

  return "hello3";


}

function component4(){

  return "hello4";


}





export default name;
export {component1};   //non deafult things are put in braces
export {component2};
export {component3,component4};

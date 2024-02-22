
let operator;
let cleanVal;
let array=[];
let i=0;
let val="";
let x; 
let y;
let result;
let output = document.querySelector('#output');
let buttons = document.querySelector('#allButtons');
buttons.addEventListener('click', ({ target }) => {
    if (!target.hasAttribute('value')) {
      return;
    }
    if(val==="=" && (target.value!=="+"&&target.value!=="-"&&target.value!=="*"&&target.value!=="/")){
        output.textContent="";
        array=[];
        
    }
    if(target.value=="+" || target.value=="-" || target.value=="*" || target.value=="/"){
        
        let temp = val.replace(/[-*/+=]/,"");;
        console.log(temp);
        cleanVal = parseInt(temp);
        array.push(cleanVal);
        val="";
        if(array.length>=2){
             x=array[0];
             y=array[1];
             result = operate(x,y,operator);
             console.log(result);
             array=[result];
         }
         operator=target.value;
    }
    if(target.value=="="){
    let temp = val.replace(/[-*/+=]/,"");
        cleanVal = parseInt(temp);
        array.push(cleanVal);
        val="";
        x=array[0];
        y=array[1];
        if(x == 0 || y == 0 && operator == "/")alert("You can't do that press clear to retry");
        result = operate(x,y,operator);
        console.log(result);
        if(result==NaN)result="You cant use 0 in division!";
        
        
       
    }

    output.textContent += target.value;
    if(result!=undefined && target.value=="=")output.textContent+=Math.round(result * 1000)/1000;
    val+=target.value;
  
     if(target.value==='clear'){
        output.textContent="";
        val="";
        array=[];}
    
        
  });

  


function operate(a,b,c){
   if(c=="+"){
    return add(a,b);
   
   }
   else if(c==="-"){
    return subtract(a,b);
     
   }
   else if(c=="*"){
    return   multiply(a,b);
   }
   else if(c=="/"){
    return  divide(a,b);
   }
   
}

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function divide(a,b){
    return a/b;
}
function multiply(a,b){
    return a*b;
}

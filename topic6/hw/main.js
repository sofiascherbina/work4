import {add} from "./add.js";
import { divide } from "./divide.js";
import {subtract} from "./sub.js";
import {multiply} from "./multiply.js";



let resultTxt = document.querySelector('.result-txt');
let buttons = document.querySelector('.buttons');
let resultBtn = document.querySelector('.result-btn');
let operation;
let result;

buttons.addEventListener('click',(event)=>{
     if(event.target.nodeName !== 'BUTTON'){
        return;
    }
    operation = event.target.id;
});
resultBtn.addEventListener('click',()=>{
    let a = parseInt(document.querySelector('.a-number').value);
    let b = parseInt(document.querySelector('.b-number').value);
        switch(operation ){
        case'add':
        result = add(a,b);
        break;

        case'divide':
        result = divide(a,b);
        break;

        case'multiply':
        result = multiply(a,b)
        break;

        case'subtract':
        result =subtract(a,b)
        break;
    }
    resultTxt.textContent = result;
})

// import {nanoid} from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
// const id = nanoid();
// console.log(id);
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', ()=>{
//     PNotify.alert({text:'it works',type:'success', delay:2000, addClass:'alert'});
// });

import {nanoid} from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
let id;
let input = document.querySelector('#taskInput');
const Addbtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');

function addTask(){
    if(input.value.length > 0){
        let task = document.createElement('li');
        task.innerHTML = `
        <p>${input.value}</p>
        <button class="delete-btn">delete</button>
        <button class="task-done">task done</button>`
        taskList.prepend(task);

        input.value = ''; 

        id = nanoid();
        console.log(id);
    }
    else{
        PNotify.alert({text:'type sth pls',type:'info', delay:2000});
    }
}
Addbtn.addEventListener('click', ()=>{
    addTask();
});
taskList.addEventListener('click', (event)=>{
    if(event.target.classList.contains('delete-btn')){
        event.target.closest('li').remove();
        console.log(`task ${id} was deleted`);
    }
    else if(event.target.classList.contains('task-done')){
        event.target.closest('li').querySelector('p').classList.add('done');
    }
});




// console.log('hello');
// const validator = require("validator");


// const validateEmail = email => {
//  return validator.isEmail(email);
// };


// console.log(
//  "Is mango@mail.com a valid email?: ",
//  validateEmail("mango@mail.com")
// );


// console.log(
//  "Is Mangozedog.com a valid email?: ",
//  validateEmail("Mangozedog.com")
// );
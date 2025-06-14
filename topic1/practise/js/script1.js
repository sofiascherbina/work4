// let parent = document.querySelector('.parent');
// let child = document.querySelector('.child');
// let descendant = document.querySelector('.descendant');

// parent.addEventListener('click', ()=>{
//     alert('parent click');
// });
// child.addEventListener('click', ()=>{
//     alert('child click');
// });
// descendant.addEventListener('click', ()=>{
//     alert('descendant click');
// });


let colorPalette = document.querySelector('.color-palette');
let outPut = document.querySelector('.output');

colorPalette.addEventListener('click', (event)=>{
    if(event.target.nodeName !== 'BUTTON'){
        return;
    }
    let selectedColor = event.target.dataset.color;
    outPut.textContent = `selected color : ${selectedColor}`
});
function renderColorPalette(){
    let items=[];
    for(let i = 0; i < 100; i++){
        const color = getRandomColor();
        const item = document.createElement('button');
        item.dataset.color = color;
        item.style.backgroundColor = color;
        item.classList.add('item');
        items.push(item);
          
    }
    colorPalette.append(...items);
}
function getRandomHex(){
    let randomNumber = Math.round(Math.random() * 256);
    return randomNumber.toString(16);
}

function getRandomColor(){
    return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}
renderColorPalette();

// const userList = document.getElementById('userList');

// function deleteUser(event) {
//     if(event.target.classList.contains('deleteButton')){
//         const li = event.target.closest('li');
//         if(li){
//             li.remove();
//         }
//     }
// }
//  userList.addEventListener('click', deleteUser);



// let taskList = document.querySelector('#taskList');
// let addTask = document.querySelector('#addTask');
// let newTask = document.querySelector('#newTask');
// let form = document.querySelector('form');

// function addNewTask(event){
//     event.preventDefault();
//     let text = newTask.value;
//     let li = document.createElement('li');
//         li.innerHTML = `<input type="checkbox"><p>${text}</p><button class ="delete">delete</button>`
//         taskList.append(li); 
//         li.value = '';
// }
// form.addEventListener('submit', addNewTask);

// taskList.addEventListener('click', (event)=>{
//     if(event.target.classList.contains('delete')){
//          event.target.closest('li').remove();
//     }
// })


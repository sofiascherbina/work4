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



let taskList = document.querySelector('#taskList');
let addTask = document.querySelector('#addTask');
let newTask = document.querySelector('#newTask');
let form = document.querySelector('form');

function addNewTask(event){
    event.preventDefault();
    let text = newTask.value;
    let li = document.createElement('li');
        li.innerHTML = `<input type="checkbox"><p>${text}</p><button class ="delete">delete</button>`
        taskList.append(li); 
        li.value = '';
}
form.addEventListener('submit', addNewTask);

taskList.addEventListener('click', (event)=>{
    if(event.target.classList.contains('delete')){
         event.target.closest('li').remove();
    }
})


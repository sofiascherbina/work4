// let input = document.querySelector('#bookmarkInput');
// let addBtn= document.querySelector('#addBookmarkBtn');
// let list = document.querySelector('#bookmarkList');
// let deleteBtn = document.querySelector('.detele');
// const obj = {
//     url : input.value
// }
// addBtn.addEventListener('click', ()=>{
//     const obj = {
//         url : input.value
//     }
    
//      let li = document.createElement('li');
//         li.innerHTML = `<a href ="#">${input.value}</a><button class ="delete">X</button>`
//         list.append(li); 
//         localStorage.setItem('obj', JSON.stringify(obj))
//         li.value = '';
// });
//  list.addEventListener('click', (event)=>{
//     if(event.target.classList.contains('delete')){
//          event.target.closest('li').remove();
//          localStorage.removeItem('obj')
//     }
// })


let userName = document.querySelector('#username');
let password = document.querySelector('#password');
let btn = document.querySelector('#saveBtn');

btn.addEventListener('click', ()=>{
    const obj ={
        userName : userName.value,
        password : password.value
    }
    localStorage.setItem('obj', JSON.stringify(obj))
});
function getInformation (){
    let data = localStorage.getItem('obj');
    let info = JSON.parse(data);
    userName.value = info.userName;
    password.value = info.password;
}
 getInformation ();
//  localStorage.clear();
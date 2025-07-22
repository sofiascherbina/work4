// const input= document.querySelector('#name').value;
// const btn = document.querySelector('#btn');
// const checkBtn = document.querySelector('#check');
// let data ={};
// btn.addEventListener("click", ()=>{
// data = {
//     name : input
// }
// const dataJSON = JSON.stringify(data);
// const blob = new Blob([dataJSON], { type: "application/json" });
//       const url = URL.createObjectURL(blob);

//       const a = document.createElement("a");
//       a.href = url;
//       a.download = "script.json";
//       a.click();

//       URL.revokeObjectURL(url);
// });
// let obj = {
//     theme : 'dark',
//     options: [1,2,3]
// };
// let user = {
//     name : 'sofia',
//     age : 16
// }
// btn.addEventListener('click', ()=>{
//     localStorage.setItem('obj', JSON.stringify(obj));
//     localStorage.setItem('user', JSON.stringify(user));
//     alert('saved');
// });
// checkBtn.addEventListener('click', ()=>{
//     if(localStorage.getItem('obj') || localStorage.getItem('user') ){
//         alert('found')
//     }
//     else{
//         alert('there`s nothing');
//     }
// })
// console.log(localStorage.getItem('obj'));
// console.log(localStorage.getItem('user'));
// localStorage.removeItem('obj');
// localStorage.clear();


// const text = document.querySelector('#text');
// text.addEventListener('input', ()=>{
//     const obj = {
//         text : text.value
//     }
//     localStorage.setItem('obj', JSON.stringify(obj));
// });
// function showText (){
//     const data = localStorage.getItem('obj');
//     let info = JSON.parse(data);
//     text.value = info.text;
// }
// showText ();

const form =document.querySelector('#form');
const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const userComment = document.querySelector('#comment');
const clearBtn = document.querySelector('#clear-btn');
const updateBtn = document.querySelector('#update-btn');
form.addEventListener('input', (event)=>{
    event.preventDefault();
     if(event.target.nodeName !== 'INPUT' && event.target.nodeName !== 'TEXTAREA'){
        return;
    }
    else{
        const user = {
            name : userName.value,
            email : userEmail.value,
            coment : userComment.value
        }
    localStorage.setItem('user', JSON.stringify(user));
    }
});
clearBtn.addEventListener('click',()=>{
    localStorage.removeItem('user');
})
function showInfo (){
    const data = localStorage.getItem('user');
    let information = JSON.parse(data);
    userName.value = information.name;
    userEmail.value = information.email;
    userComment.value = information.coment;
}
updateBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    showInfo ();
});
// showInfo ();
// localStorage.clear();
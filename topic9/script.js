const input= document.querySelector('#name').value;
const btn = document.querySelector('#btn');
const checkBtn = document.querySelector('#check');
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
let obj = {
    theme : 'dark',
    options: [1,2,3]
};
let user = {
    name : 'sofia',
    age : 16
}
btn.addEventListener('click', ()=>{
    localStorage.setItem('obj', JSON.stringify(obj));
    localStorage.setItem('user', JSON.stringify(user));
    alert('saved');
});
checkBtn.addEventListener('click', ()=>{
    if(localStorage.getItem('obj') || localStorage.getItem('user') ){
        alert('found')
    }
    else{
        alert('there`s nothing');
    }
})
console.log(localStorage.getItem('obj'));
console.log(localStorage.getItem('user'));
// localStorage.removeItem('obj');
// localStorage.clear();



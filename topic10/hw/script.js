// let counter = 0;
// let interval = setInterval(()=>{
//     console.log('u`ve got pretty eyes');
//     if(counter === 4){
//         clearInterval(interval);
//     }
//      counter++;
// }, 1000);


// let list = document.querySelectorAll('.box-list_it div');
// function getRandomHex(){
//     let randomNumber = Math.round(Math.random() * 256);
//     return randomNumber.toString(16);
// }
// function getRandomColor(){
//     return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// list.forEach(it=>{
//     let width = parseInt(it.style.width);
//     let height = parseInt(it.style.height);
//     setInterval(()=>{
//         const color = getRandomColor();
//         it.style.backgroundColor = color;
//         width+=10;
//         height+=10;
//         it.style.width = `${width}px`;
//         it.style.height = `${height}px`;
//     }, 1000)
// });


// let box = document.querySelector('#box');
// let scoreTxt = document.querySelector('#score');
// let score = 0;
// scoreTxt.textContent = score;
// box.addEventListener('click',()=>{
//     score++;
//     scoreTxt.textContent = score;
// })
// setInterval(()=>{
//     if(box.classList.contains('dissapeared')){
//         score = 0;
//         scoreTxt.textContent = score;
//     }
//    box.classList.toggle('dissapeared');
// },4000);

// let sec = document.querySelector('#time');
// sec.addEventListener('input',() =>{
//     let time = parseInt(sec.value)* 1000;
//     setTimeout(()=>{
//     alert('nice try? it`s working');
// },time);
// });

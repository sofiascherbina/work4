// let timeTxt = document.querySelector('#time');
// let startBtn= document.querySelector('#start-btn');
// let stopBtn = document.querySelector('#stop-btn');
// let timer;
// let hour = 1;
// let min = 0;
// let sec = 0;
// timeTxt.textContent = `${hour}:${min}:${sec}`;
// startBtn.addEventListener('click', () => {
//     timer = setInterval(() => {
//         sec--;
//         if (hour === 0 && min === 0 && sec < 1) {
//             clearInterval(timer);
//         }
//       else if(min < 0){
//                 hour--;
//                 min = 59;
//                 sec = 59;
//         }
//         else if( sec< 0){
//             min--;
//             sec = 59; 
//         }
//         else if (hour === 0 && min === 30 && sec === 0) {
//             alert('Залишилось менше половини часу');
//         }
//         timeTxt.textContent = `${hour}:${min}:${sec}`;
//     }, 0.1);
// });
// stopBtn.addEventListener('click',()=>{
//     clearInterval(timer);
// });

let timeTxt = document.querySelector('#time');
let startBtn= document.querySelector('#start-btn');
let stopBtn = document.querySelector('#stop-btn');
let timer;
let sec = 30;
timeTxt.textContent = `${sec}`;
startBtn.addEventListener('click',()=>{
    startBtn.style.backgroundColor = 'grey';
    startBtn.disabled  = true;
    timer = setInterval(()=>{
        if(sec === 10){
            startBtn.classList.add('animated');
            startBtn.style.backgroundColor = 'red';
        }
        else if(sec === 1){
            clearInterval(timer);
            startBtn.style.backgroundColor = 'green';
            startBtn.classList.remove('animated');
             startBtn.disabled  = false;
        }
        sec--;
        timeTxt.textContent = `${sec}`;
    },1000)
})
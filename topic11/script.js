// let sec = 0;
// let timer = setInterval(()=>{
//     sec++;
//     console.log(sec);
// },1000);

// let sec= 10;
// let counter = setInterval(()=>{
//     console.log(sec);
//     sec--;
//     if(sec === 0){
//         clearInterval(counter);
//     }
// },1000);

// let timeTxt = document.querySelector('#time');
// let time = 10;
// let counter = setInterval(()=>{
//     if(time === 0){
//         clearInterval(counter);
//         alert("Час вийшов!");
//     }
//      timeTxt.textContent = time;
//     time--;
// },1000);

// let timeTxt = document.querySelector('#time');
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let clearBtn = document.querySelector('#clear');
// let msec = 0;
// let sec = 0;
// let min = 0;
// let hour = 0;
// let timer;
// timeTxt.textContent = `${hour}:${min}:${sec}:${msec}`;
// startBtn.addEventListener('click',()=>{
//    timer = setInterval(()=>{
//     msec+=10;
//     if( msec === 1000){
//         sec++;
//         msec=0;
//     }
//     else if( sec === 60){
//         min++;
//     }
//     else if( min === 60){
//         hour++;
//     }
//     timeTxt.textContent = `${hour}:${min}:${sec}:${msec}`
// }, 10)
// }) 

// stopBtn.addEventListener('click',()=>{
//     clearInterval(timer);
// });
// clearBtn.addEventListener('click',()=>{
//     clearInterval(timer);
//     msec = 0;
//     sec = 0;
//     min = 0;
//     hour = 0;
//     timeTxt.textContent = `${hour}:${min}:${sec}:${msec}`
// });

// let timeTxt = document.querySelector('#time');
// let min = 5;
// let sec = 0;
// let timer;
//  timeTxt.textContent = `${min}:${sec}`;

// startBtn.addEventListener('click',()=>{
//     timer = setInterval(()=>{
//     timeTxt.textContent = `${min}:${sec}`;
//     if(min === 0 && sec === 0){
//         clearInterval(timer);
//     }
//      else if(sec === 0){
//         min--;
//         sec = 60;
//     }
//     sec--;
// }, 100);
// });
// stopBtn.addEventListener('click',()=>{
//     clearInterval(timer);
// });
// clearBtn.addEventListener('click',()=>{
//     clearInterval(timer);
//     sec = 0;
//     min = 0;
//     timeTxt.textContent = `${min}:${sec}`
// });
 
// let timeTxt = document.querySelector('#time');
// let time = 3;
// timeTxt.textContent = time;
// let counter;
// startBtn.addEventListener('click', ()=>{
//    counter = setInterval(()=>{
//     if(time === 0){
//         clearInterval(counter);
//         alert("Пройшло 3 секунди!");
//         timeTxt.textContent = time;
//     }
//     timeTxt.textContent = time;
//      time--;
//     },1000)
//  });

// let timeTxt = document.querySelector('#time');
// let time = 10;
// timeTxt.textContent = time;
// let counter;
// function timer(){
//     counter = setInterval(()=>{
//     if(time === 0){
//         clearInterval(counter);
//         alert("Раунд завершено!");
//         timeTxt.textContent = time;
//          setTimeout(()=>{
//                 time = 10;
//                 timer();
//         },5000)
//     }
//      timeTxt.textContent = time;
//     time--;
// },1000);
// }
// startBtn.addEventListener('click',()=>{
//     timer();
// });

let redRound = document.querySelector('#red');
let yellowRound = document.querySelector('#yellow');
let greenRound = document.querySelector('#green');
let timeTxt = document.querySelector('#time');
let time = 0;
timeTxt.textContent = time;
function changer(){
            switch (time){
        case 0 :
            redRound.style.backgroundColor = 'red';
            setTimeout(()=>{
                time++;
                changer();
            },3000)
            break

        case 1 :
            redRound.style.backgroundColor = 'white';
            yellowRound.style.backgroundColor = 'yellow';
            setTimeout(()=>{
                time++;
                changer();
            },1000)
            break

       case 2 :
            redRound.style.backgroundColor = 'white';
            yellowRound.style.backgroundColor = 'white';
            greenRound.style.backgroundColor = 'green';
            setTimeout(()=>{
                time++;
                changer();
            },2000);
            break

        case 3 :
            greenRound.style.backgroundColor = 'white';
            time = 0;
             setTimeout(()=>{
                changer();
            },1000);
            break
        }
    timeTxt.textContent = time;
   }
// startBtn.addEventListener('click',changer);
changer();
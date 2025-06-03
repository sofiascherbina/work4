// const result = _.add(2,3);
// console.log(result);


// window.addEventListener('scroll', ()=>{
//     console.log('worked');
// });

// window.addEventListener('scroll', _.throttle(()=>{
//     console.log('1111');
// }, 10000));

// function throttle(func, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     const now = Date.now();
//     if (now - lastCall >= delay) {
//       lastCall = now;
//       func.apply(this, args);
//     }
//   };
// }
// window.addEventListener('scroll', throttle(()=>{
//     console.log('worked');
// }, 3000));


// let text = document.querySelector('.text');
// let btn = document.querySelector('.btn');

// btn.addEventListener('click', _.throttle(()=>{
//     console.log(text.value);
// }, 3000));


// let textarea = document.querySelector('.text');
// let body = document.querySelector('body');
// let showedText = document.createElement('p');

// function saveDraft(){
//     let text = textarea.value;
//     showedText.textContent = text;
//     body.append(showedText) ;
// }

// textarea.addEventListener('input', _.throttle(()=>{
//    saveDraft()
// }, 1000));


// function send (event){
//     console.log('Відправлено', event.target.value);
// };
// let debounce =_.debounce(send, 1000);
// text.addEventListener('input', debounce);

// function send (){
//     alert('Відправлено');
// };
// document.addEventListener('mousemove', debounce);


// let div = document.querySelector('#graph');
// let point = document.querySelector('#point');
// let coord = document.querySelector('#coord');


//  function mouseMove(e){
//     let x = e.offsetX;
//     let y = e.offsetY;

//     point.setAttribute('cx', x);
//     point.setAttribute('cy', y);
//     coord.textContent = `x${x}, y${y}`;
//  }

// div.addEventListener('mousemove', _.throttle(mouseMove, 50));



let text = document.querySelector('.text');
let usedLogins = [];

function sentLogin (event){
   let usedLogin = event.target.value;
   if(usedLogins.includes(usedLogin)){
      alert('Логін зайнятий')
   }
   else if( event.target.value.length > 0 ){
      console.log(usedLogin);
      usedLogins.push(usedLogin);
   }
}

let debounce = _.debounce(sentLogin, 1000);
text.addEventListener('input', debounce );
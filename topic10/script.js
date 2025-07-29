// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 2000)
// console.log("3");
// console.log("4");

// let num = 0;
// setInterval(() =>{
//     num++;
//     console.log(num);
// }, 1000);

// function getRandomHex(){
//     let randomNumber = Math.round(Math.random() * 256);
//     return randomNumber.toString(16);
// }
// function getRandomColor(){
//     return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }


// let box = document.querySelector('#box');
// setInterval(() =>{
//     const color = getRandomColor();
//     box.style.backgroundColor = color;
// }, 3000);

// let text = document.querySelector('#text');
// let value = ['marin','miku','zoro'];
//     let i = 0;
// setInterval(() =>{
//     text.textContent = value[i];
//     if( i === value.length - 1){
//         i = 0;
//     }
//     else{
//         i++;
//     }
// }, 2000);

// let num = 0;
// setTimeout(() => alert(num), 100); // ?
// // припустимо, що час виконання цієї функції > 100 мс
// for(let i = 0; i < 100000000; i += 1) {
//   num+=1;
// }

// let notification = 'welcome to this page';
// setTimeout(()=>{
//     alert(notification);
// }, 2000);



// let num1 = document.querySelector('#first-num');
// let num2 = document.querySelector('#second-num');

// function printNumbers(from, to) {
//     if (isNaN(from) || isNaN(to)) {
//         console.log("Будь ласка, введи правильні числа");
//         return;
//     }

//     let number = from;
//     let interval = setInterval(() => {
//         console.log(number);
//         if (number === to) {
//             clearInterval(interval);
//         }
//         number++;
//     }, 1000);
// }

// let from = parseInt(num1.value);
// let to = parseInt(num2.value);
// printNumbers(from, to);



// function printNumbers() {
// 	const from = parseFloat(prompt('Введіть початкове число (from):'))
// 	const to = parseFloat(prompt('Введіть кінцеве число (to):'))

// 	if (isNaN(from) || isNaN(to) || from > to) {
// 		alert("Некоректні дані! Переконайтеся, що вводите числа, і 'from' <= 'to'.")
// 		return
// 	}

// 	let current = from
// 	const intervalId = setInterval(() => {
// 		console.log(current)
// 		if (current === to) {
// 			clearInterval(intervalId)
// 			alert('Вивід чисел завершено!')
// 		}
// 		current++
// 	}, 1000)
// }
// printNumbers()


// let box = document.querySelector('#box');
// setInterval(() =>{
//     box.style.backgroundColor = 'yellow';
// }, 3000);

// let currentPhoto = document.querySelector('#currentPhoto');
// let current = 0;
// let links = [
//     './img/завантаження (10).jfif',
//     './img/завантаження (11).jfif',
//     './img/завантаження (9).jfif'
// ];
//  currentPhoto.src = links[current];
//     setInterval(() => {
//         if(current > links.length - 1){
//             current = 0; 
//         }
//         else{
//             currentPhoto.src = links[current];
//             current++;
//         }
//     }, 1000);

// document.addEventListener('DOMContentLoaded',()=>{
//     let btn = document.querySelector('#downloadBtn');
//     let result = document.querySelector('#result');

//     btn.addEventListener('click',()=>{
//         fetch('data.txt')
//         .then(response => response.text())

//         .then(fetchResult =>{
//             result.innerHTML = fetchResult;
//         })
//     })

// });


// document.addEventListener('DOMContentLoaded',()=>{
//     let btn = document.querySelector('#downloadBtn');
//     let result = document.querySelector('#result');

//     btn.addEventListener('click',()=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(fetchResult =>{
//             result.innerHTML = fetchResult
//             fetchResult.forEach(element => {
//                 console.log(element.name);
//             });
//         })
//     })
// });


// document.addEventListener('DOMContentLoaded',()=>{
//         fetch('data.txt')
//         .then(response => response.text())
//         .then(data=>{
//             if(data === ''){
//                 throw new Error('файл порожній');
//             }
//         })
//         .catch(error =>{
//                 console.error('error', error.message);
//         })
// });


// const url = new URL("https://site.com/search?query=js&lang=uk");
// const params = new URLSearchParams(url.search);
// console.log(params.get('query'));
// console.log(params.get('lang'));


// const headers = new Headers({
//     'Content-type':'application/json',
//     'X-Custom-Header':'example'
// });
// console.log(headers.get('Content-type'));
// console.log(headers.has('X-Custom-Header'));
// console.log(headers.set('X-Custom-Header', 'prikolna'));

// const form = document.querySelector('.js-search-form');
// const div = document.querySelector('.js-card-container');
// let template = null;

// // функція рендеру
// function renderPokemon(data) {
//   div.innerHTML = template(data);
// }

// // завантаження шаблону
// let templateReady = fetch('pokemon.hbs')
//   .then(response => response.text())
//   .then(text => {
//     template = Handlebars.compile(text);
//   });

// // обробка форми
// form.addEventListener('submit', event => {
//   event.preventDefault();
//   let formVal = form.query.value.trim().toLowerCase(); // ім’я покемона
//   form.reset();

//   if (!formVal) return;

//   templateReady.then(() => {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${formVal}`);
//   })
//   .then(response => {
//     if (!response.ok) throw new Error(response.status);
//     return response.json();
//   })
//   .then(data => {
//     renderPokemon(data);
//   })
//   .catch(error => {
//     div.innerHTML =` <p style="color:red">Покемона не знайдено: ${error.message}</p>`;
//   });
// });
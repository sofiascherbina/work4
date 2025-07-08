// const pattern = document.querySelector('.menu-template').innerHTML;
// const template = Handlebars.compile(pattern);
// const data = {
//     title: 'big three',
//     items:['one piece', 'naruto', 'bleach']
// }
// const html = template(data);
// document.body.insertAdjacentHTML("beforeend", html);

import data from './countries.js';
const pattern = document.querySelector('.menu-template').innerHTML;
const template = Handlebars.compile(pattern);

const html = template(data);
document.body.insertAdjacentHTML("beforeend", html);
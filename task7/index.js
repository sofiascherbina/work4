import {data} from "./countries.js";
// import {template} from "./countries.hbs"
const pattern = document.querySelector('.menu-template').innerHTML;
const template = Handlebars.compile(pattern);
const html = template(data);
document.body.insertAdjacentHTML("beforeend", html);
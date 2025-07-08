import  {products} from './datascript.js';
const pattern = document.querySelector('.menu-template').innerHTML;
const template = Handlebars.compile(pattern);

const html = template(products);
document.body.insertAdjacentHTML("beforeend", html);
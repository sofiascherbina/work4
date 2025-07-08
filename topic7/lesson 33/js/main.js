import heroes from './heroes.js';

const templateSource = document.getElementById('hero-template').innerHTML;
const template = Handlebars.compile(templateSource);
const markup = template(heroes);

document.body.insertAdjacentHTML('beforeend', markup);



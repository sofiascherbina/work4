const pattern = document.querySelector('.menu-template').innerHTML;
const template = Handlebars.compile(pattern);
const data = {
    title: 'big three',
    items:['one piece', 'naruto', 'bleach']
}
const html = template(data);
document.body.insertAdjacentHTML("beforeend", html);
// let btn = document.querySelector('#search');
// let input = document.querySelector('#input');
// let form = document.querySelector('.js-search-form');
// let articleCont = document.querySelector('.article-container');
// // let template = null;
// let renderItem = null; 

// const ARTICLES = [
// {
// url: "https://example.com/posts/js-performance",
// imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
// imageAlt: "Лаптоп, код та чашка кави",
// title: "Оптимізація продуктивності JavaScript",
// author: "Iryna Dev",
// summary: "Практичні поради та патерни для швидших веб-додатків.",
// },
// {
// url: "https://example.com/posts/css-tricks",
// imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop",
// imageAlt: "Кольорові панелі та дизайн-сітка",
// title: "10 CSS трюків для щоденної роботи",
// author: "Andrii Front",
// summary: "Колекція невеликих, але корисних прийомів, що економлять час.",
// },
// {
// url: "https://example.com/posts/handlebars-guide",
// imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
// imageAlt: "Код на екрані ноутбука",
// title: "Шаблонізатор Handlebars: короткий гайд",
// author: "Oleksii Mark",
// summary: "Як організувати компоненти інтерфейсу за допомогою часткових шаблонів.",
// },
// ];
// function filterArticles(query) {
//   const q = (query || '').trim().toLowerCase();
//   if (!q) return ARTICLES; // якщо хочеш ПРИ ПУСТОМУ запиті показувати нічого — поверни []
//   return ARTICLES.filter(a =>
//     [a.title, a.author, a.summary]
//       .filter(Boolean)
//       .some(v => v.toLowerCase().includes(q))
//   );
// }

// // функція рендеру
// function renderArticle(items) {
//     filterArticles()
//    articleCont.innerHTML = items.map(el => renderItem(el)).join('');
// }

// fetch('article.hbs')
//   .then(response => response.text())
//   .then(template => {filterArticles();renderItem = Handlebars.compile(template); renderArticle(ARTICLES);});

// input.addEventListener('input',(event)=>{
//     event.preventDefault();
//     filterArticles()
//     renderArticle(event.target.value)
// });
// btn.addEventListener('click',(event)=>{
//      event.preventDefault();
//      filterArticles()
//      renderArticle(input.value)
// });

let list = document.querySelector('.users-list');
let btn = document.querySelector('.load-more');
let page = 1;
let perPage = 10;

btn.addEventListener('click',()=>{
     fetchFunction(page,perPage)
     .then(post => renderUser(post))
     page++;
});
function fetchFunction(page,perPage){
    const params = new URLSearchParams({
    _limit: perPage,
    _page: page
  })
  const url = new URL('https://jsonplaceholder.typicode.com/posts')
  url.search = params.toString()
  return fetch(url)
  .then(response=> response.json())
};
function renderUser(posts) {
  const markup = posts
    .map(({ userId, id, title, body, }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join("");
  list.insertAdjacentHTML("beforeend", markup);
}
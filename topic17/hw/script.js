let list = document.querySelector('.list');
let btn = document.querySelector('.btn');
let page = 1;
let perPage = 12;

btn.addEventListener('click',()=>{
    fetchFunction(page,perPage)
     .then(post => renderPic(post))
     page++;
});
function fetchFunction(page,perPage){
    const params = new URLSearchParams({
    key:'52031155-91d48f629b7cc6501a4f300a5',
    limit: perPage,
    page: page
  });
    const url = new URL('https://pixabay.com/api/')
    url.search = params.toString()
    return fetch(url)
    .then(response=> response.json())
}
function renderPic(picture){
    const markup = picture.hits
    .map(({webformatURL, tags })=>{
        return `<li>
            <img src="${webformatURL}" alt="${tags}" width="400" height="400">
        </li>`
    })
    .join("");
    list.insertAdjacentHTML('beforeend',markup);
}
// let dataCont = document.querySelector('.data-cont');
// let pageCont = document.querySelector('.page-cont');
// let currentPage = 1;
// let perPage = 8;
// let data = [];


// fetch('data.json')
//     .then(response => response.json())
//     .then(json =>{
//       data = json;
//       build()
//   });
// function build() {
//     renderList(); 
//     renderPager();
// };
// function countPage(){
//   return Math.ceil(data.length/perPage);
// }
// function setPage(page){
//   if(page < 1 || page > countPage())return;
//   currentPage = page;
//   build();
// }

// function renderList(){
//   const start = (currentPage - 1) * perPage;
//   const end = start + perPage;
//   const pageData = data.slice(start,end);
//   dataCont.innerHTML = pageData
//   .map((item) => `<div>${item.name}</div>`)
//   .join("");
// }

// function renderPager() {
//   pageCont.innerHTML = "";
//   for (let i = 0; i < countPage(); i++) {
//     let butt = document.createElement("button");
//     butt.textContent = i + 1;
//     butt.className = "number-page";
//     butt.onclick = () => setPage(i + 1);
//     pageCont.appendChild(butt);
//   }

//   const previous = document.createElement("button");
//   previous.innerText = "< previous";
//   previous.onclick = () => setPage(currentPage - 1);
//   pageCont.appendChild(previous);

//   const next = document.createElement("button");
//   next.innerText = "next >";
//   next.onclick = () => setPage(currentPage + 1);
//   pageCont.appendChild(next);
// }


let modalDiv = document.querySelector('.modal-div');
let list = document.querySelector('.list');
let btn = document.querySelector('.load-more');
let btnOpnen = document.querySelector('.open-modal');
let btnClose = document.querySelector('.close-modal');
let page = 1;
let perPage = 7;
let data = [];
let loadRound = document.querySelector('.load-round');

fetch('elem.json')
    .then(response => response.json())
    .then(json =>{
      data = json;
      renderElem();
  });
function renderElem(){
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const pageData = data.slice(start,end);
  let listTemp = pageData
    .map((item) => `<li>${item.text}</li>`)
    .join("");
  list.insertAdjacentHTML("beforeend", listTemp);
}  
btn.addEventListener('click',()=>{
  loadRound.style.display = 'block'; 
  setTimeout(()=>{
      page++;
      renderElem();
      loadRound.style.display = 'none';
  },1000)
});
btnOpnen.addEventListener('click',()=>{
  modalDiv.classList.add('active');
  btnOpnen.style.display = 'none';
});
btnClose.addEventListener('click',()=>{
  modalDiv.classList.remove('active');
  btnOpnen.style.display = 'block';
});

let showBtn = document.querySelectorAll('.img-list-li');
// document.addEventListener('DOMContentLoaded',()=>{
// let img = document.querySelectorAll('.lazy-img');
// let observer = new IntersectionObserver((entries, observer)=>{
//     entries.forEach(entry=>{
//         if(entry.isIntersecting){
//             entry.target.src = entry.target.dataset.src;
//             entry.target.classList.add('animated');
//             observer.unobserveobserve(entry);
//         }
//     })
// },{
//     threshold: 0.5
// })

// img.forEach(pic=>{
//     observer.observe(pic);
// })
// });

//зображення будуть з'являтись або коли до них дійде черга при прокрутці або коли натиснути на кнопку

// showBtn.forEach(el=>{
//     el.addEventListener('click', (event)=>{
//     if(event.target.nodeName !== 'BUTTON'){
//         return;
//     }
//     let img = event.currentTarget.querySelector('img');
//     img.src = img.dataset.src;
//     img.classList.add('animated');
// })
// })

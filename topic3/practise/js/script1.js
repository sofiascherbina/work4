// const box = document.querySelector('.box');
// let observer = new IntersectionObserver((entries, observer)=>{
//     entries.forEach(item =>{
//         if(item.isIntersecting){
//             box.classList.add('visible');
//             console.log('box is visible');
//         }
//     })
// }, {
//     threshold:0.5
// })  
// observer.observe(box);
// observer.unobserve(box);

// document.addEventListener('DOMContentLoaded',()=>{
// const fruits = document.querySelectorAll('.fruits-list li');
// let observer = new IntersectionObserver((entries, observer)=>{
//     entries.forEach(item =>{
//         if(item.isIntersecting){
//             item.target.classList.add('visible');
//         }
//         else{
//             item.target.classList.remove('visible');
//              item.target.classList.add('visible-changed');
//         }
//     })
// }, {
//     threshold:0.5
// }) ;

// fruits.forEach(item =>{
//     observer.observe(item);
// }) 
// console.log('working');

// })

document.addEventListener('DOMContentLoaded',()=>{
const imgLi = document.querySelectorAll('.img-list-li');
let observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(item =>{
        let img = item.target.querySelector('.lazy-img');
        if(item.isIntersecting){
            img.src = img.dataset.src;
        }
    })
}, {
    threshold:0.5
}) ;

imgLi.forEach(item =>{
    observer.observe(item);
}) 
});
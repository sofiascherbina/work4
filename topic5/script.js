// const data = {
//     labels:["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
//     datasets:[{
//         label:'temperature',
//         data:[1,2,3,4,5,6,7,8,9,10],
//         tension:0.1,
//         boderColor:'red'
//     }]
// }
// const config ={
//     type:'line',
//     data:data,
//     options:{},
// }
// const graphic = new Chart(
//     document.querySelector('#charge'),
//     config
// )
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', ()=>{
//     basicLightbox.create('<h1>modal window</h1>').show()
// })
const gallery = document.querySelector('.gallery');
let images = ['https://images.pexels.com/photos/10905331/pexels-photo-10905331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/11895469/pexels-photo-11895469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/16286379/pexels-photo-16286379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
let imgIndex = 0;
gallery.addEventListener('click', (event)=>{
    let currentSrc = event.target.src;
    let shownImg = basicLightbox.create(`<li class="shown-img"><a href="#"><img src="${currentSrc}"></a></li>`);
    if(event.target.nodeName !== 'IMG'){
        return
    }
    else{
        shownImg.show()
    }
    document.addEventListener('keydown', (event) =>{
     if (event.key === 'ArrowRight' && imgIndex < images.length - 1){
       imgIndex++;
        let img = shownImg.element().querySelector('img');
        let currentSrc = images[imgIndex];
        img.src = currentSrc;
    }
      else if (event.key === 'ArrowLeft' && imgIndex > 0){
       imgIndex--;
        let img = shownImg.element().querySelector('img');
        let currentSrc = images[imgIndex];
        img.src = currentSrc;
    }
});
});



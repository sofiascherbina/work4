const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

let picList = document.querySelector('.js-gallery');
let lightBox = document.querySelector('.js-lightbox');
let fullImage= document.querySelector('.lightbox__image');
let closeBtn= document.querySelector('.lightbox__button');
let imgIndex = 0;
let linkList = galleryItems.map(el => el.original);

galleryItems.forEach(it =>{
    let li = document.createElement('li');
    li.classList.add('gallery__item');
        li.innerHTML = `
        <a
          class="gallery__link"
          href="${it.original}"
        >
          <img
            class="gallery__image"
            src="${it.preview}"
            data-source="${it.original}"
            alt="${it.description}"
          />
        </a>`
      picList.append(li);

});

picList.addEventListener('click', (event) =>{
   if(event.target.nodeName !== 'IMG'){
        return;
    }
    event.preventDefault();
    lightBox.classList.add('is-open');

    fullImage.alt = event.target.alt;
    let fullImageSrc = event.target.dataset.source;

    imgIndex = linkList.indexOf(fullImageSrc);
    fullImage.src = fullImageSrc;

});

function closeLightbox(){
    lightBox.classList.remove('is-open');
    fullImage.src = '';
}
closeBtn.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (event) =>{
    if(event.key === 'Escape'){
        closeLightbox();
    }
     else if (event.key === 'ArrowRight' && imgIndex < linkList.length - 1){
       imgIndex++;
      fullImage.src = linkList[imgIndex];
    }
      else if (event.key === 'ArrowLeft' && imgIndex > 0){
       imgIndex--;
      fullImage.src = linkList[imgIndex];
    }
});
console.log('JS OK!');

const NUM_IMAGES = 5;
const CHANGE_IMAGE_DELAY = 5;


const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

console.log(images);




let activeIndex = 0;
buildCarousel(images, activeIndex);

let direction = true;

let idInterval = setInterval(automaticImageChange, CHANGE_IMAGE_DELAY * 1000);

const leftArrowButton = document.getElementById('left-arrow');
const rightArrowButton = document.getElementById('right-arrow');
const invertDirectionButton = document.querySelector('.invert-direction-btn button');

leftArrowButton.addEventListener('click', moveCarouselPrevious);

rightArrowButton.addEventListener('click', moveCarouselForward);

invertDirectionButton.addEventListener('click', invertDirection);



function automaticImageChange() {
    if (direction) {
        moveCarouselForward();
    } else {
        moveCarouselPrevious();
    }
}

function invertDirection() {
    direction = !direction;
    manageTimeInterval();
}

function moveCarouselForward() {
    // se l'indice si trova in fondo allora lo riposizione all'inizio dell'array
    activeIndex = activeIndex < images.length - 1 ? activeIndex + 1 : 0;
    buildCarousel(images, activeIndex);
    manageTimeInterval();
}

function moveCarouselPrevious() {
    // se l'indice è in prima posizione si valorizza all'ultima posizione dell'array
    activeIndex = activeIndex > 0 ? activeIndex - 1 : images.length - 1;
    buildCarousel(images, activeIndex);
    manageTimeInterval();
}

function manageTimeInterval() {
    clearInterval(idInterval);
    idInterval = setInterval(automaticImageChange, CHANGE_IMAGE_DELAY * 1000);

}


function buildCarousel(places, activeIndex) {
    const carouselImages = document.querySelector('.carousel-images');
    const carouselThumbs = document.querySelector('.carousel-thumbs');
    const activeImageTitleElement = document.querySelector('.active-images-title');
    let content = '';
    let activeTitle = '';
    /*
    for (let i = 0; i < places.length; i++) {
        const place = places[i];
        let imageClass = 'carousel-img';
        if (i === activeIndex) {
            activeTitle = place.title;
            imageClass += ' active';
        }
        content += `<img class="${imageClass}" src="${place}" alt="${place.description}" />`;
    }
    */

    places.forEach((place, i) => {
        let imageClass = 'carousel-img';
        if (i === activeIndex) {
            activeTitle = place.title;
            imageClass += ' active';
        }
        content += `<img class = '${imageClass}' src = '${place.url}' alt = '${place.description}' />`
    });

    // console.log({content});

    console.log({ activeTitle });
    activeImageTitleElement.innerHTML = activeTitle;
    carouselImages.innerHTML = content;
    carouselThumbs.innerHTML = content;
}


function createImageArray(numImages) {
    const images = [];
    for (let i = 1; i <= numImages; i++) {
        const fileName = i < 10 ? '0' + i : i;
        const url = 'img/' + fileName + '.jpg';
        images.push(url);
    }

    return images;
}
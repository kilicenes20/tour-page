const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slide');
const numberSlides = slides.length;
let slidesNumber = 0;

nextBtn.addEventListener('click',()=>{
    slides.forEach((slide) =>{
        slide.classList.remove('active');
    })
    slidesNumber ++;
    if (slidesNumber > numberSlides -1) {
        slidesNumber = 0;
    }
    slides[slidesNumber].classList.add('active');
})

prevBtn.addEventListener('click',()=>{
    slides.forEach((slide) =>{
        slide.classList.remove('active');
    })
    slidesNumber--;
    if (slidesNumber < 0) {
        slidesNumber = numberSlides - 1;
    }
    slides[slidesNumber].classList.add('active');
})
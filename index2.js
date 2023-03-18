const slider = document.querySelectorAll('.slider')
const btnPrev = document.getElementById('prev-button')
const btnNext = document.getElementById('next-button')

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentSlide].classList.add('on')
}

function nextImage() {
    hideSlider()
    if(currentSlide === slider.length -1){
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlider()
}

function prevImage() {
    hideSlider()
    if(currentSlide === 0){
       currentSlide = slider.length -1
    } else {
        currentSlide-- 
    }
    showSlider()
}

btnNext.addEventListener('click', nextImage)
btnPrev.addEventListener('click', prevImage)


const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > navbar.offsetHeight + 150) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
}

// Carousel Logic
const nextDom = document.getElementById('next');
const prevDom = document.getElementById('prev');
const carouselDom = document.querySelector('.carousel');
const SliderDom = carouselDom.querySelector('.carousel .list');

nextDom.onclick = function() {
    showSlider('next');
}

prevDom.onclick = function() {
    showSlider('prev');
}

function showSlider(type) {
    const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    }
}

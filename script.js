const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", fixNav);
window.addEventListener("resize", fixNav);

fixNav();

function fixNav() {
  if (window.innerWidth <= 800 || window.scrollY > navbar.offsetHeight + 150) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
}

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';

}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';

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

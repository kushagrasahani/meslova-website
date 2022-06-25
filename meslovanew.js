
let count = 0;
showSlide();
function showSlide() {
    let i;
    let slides = document.getElementsByClassName("Slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    count++;
    if (count > slides.length) { count = 1 }
    slides[count - 1].style.display = "block";
    setTimeout(showSlide, 4000);
}
let slideIndex = 1;
showSlide(slideIndex);
function plusSlides(n) {
    showSlide(slideIndex += n);
}
function currentSlide(n) {
    showSlide(slideIndex = n);
}
window.onscroll = function () {
    scrollFunction()
};
const body = document.querySelector('body');
const nav = document.querySelector('.navbar');
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.classList.add('fixed');
        nav.classList.add('shrink');
        nav.classList.add('fixed-top');
        body.classList.add('scroll');
    }
};
const loader = document.querySelector(".loader");
window.addEventListener("load", function () {
    loader.className += " hidden";
});
const rel = document.querySelector('.logo img');
rel.addEventListener('click', () => {
    window.addEventListener("load", function () {
        rel.className += " hidden";
    });
    window.location.reload(true);
});
const homerel = document.querySelector('.item');
homerel.addEventListener('click', () => {
    setTimeout(() => {
        window.addEventListener("load", function () {
            homerel.className += " hidden";
        })
        window.location.reload(true);
    }, 500);
});
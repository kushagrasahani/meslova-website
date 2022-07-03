const btnTop = document.querySelector("#btnScrollTop");
btnTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
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
setTimeout(() => {
    window.addEventListener("load", function () {
        loader.className += " hidden";
    })
}, 400);
const rel = document.querySelector('.logo img');
rel.addEventListener('click', () => {
    setTimeout(() => {
        window.addEventListener("load", function () {
            rel.className += " hidden";
        })
        window.location.reload(true);
    }, 400);

});
const homerel = document.querySelector('.item');
homerel.addEventListener('click', () => {
    setTimeout(() => {
        window.addEventListener("load", function () {
            homerel.className += " hidden";
        })
        window.location.reload(true);
    }, 400);
});
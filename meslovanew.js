
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
// const aud = document.getElementsByClassName("audli");
// for (const audio of aud) {
//     audio.addEventListener('click', function onClick() {
//         audio.classList.add('act');
//     })
// }
// let anch = document.querySelectorAll(".audli a");
// let panel = document.querySelectorAll(".tabpanel");
// aud.addEventListener('click', function () {
//     aud.classList.add('.act');
// anch.classList.add('.active');
// panel.classList.add('.in');
// panel.classList.add('.show');
// });
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
const up = document.querySelector(".lefticon a");
up.addEventListener('click', function () {
    if (up.innerHTML === '+') {
        up.innerHTML = '-';
    }
    else {
        up.innerHTML = '+'
    }

})
const showchat = document.querySelector(".right1");
const chat = document.querySelector(".chatcont")
showchat.addEventListener('click', function showhide() {
    if (chat.style.display !== "none") {
        chat.style.display = "none";
    }
    else {
        chat.style.display = "block";

    }
})

const focusgrp = document.querySelectorAll(".group");
for (let i = 0; i < focusgrp.length; i++) {
    focusgrp[i].addEventListener("click", function () {
        focusgrp[i].classList.toggle("isfocus");
    });
}
// const chatbtn = document.querySelector(".msgbtn");
// const inpts = document.querySelectorAll(".fchat");
// const cspan = document.querySelector(".chatspan")
// chatbtn.disabled = true;
// inpts.addEventListener("change", handle());
// function handle() {
//     if (document.querySelectorAll(".fchat").value === "") {
//         chatbtn.disabled = true;
//         cspan.style.display = "block";
//     }
//     else {
//         chatbtn.disabled = false;
//     }

// }
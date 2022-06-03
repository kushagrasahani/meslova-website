
// const loading = window.addEventListener("load", function () {
//     const loader = document.querySelector(".loader")
//     loader.className += " hidden";
// });
const loader = document.querySelector(".loader");
window.addEventListener("load", function () {
    loader.className += " hidden";
});

const rel = document.querySelector('.navbar-brand');
rel.addEventListener('click', () => {
    window.addEventListener("load", function () {
        rel.className += " hidden";
    });
    window.location.reload(true);
});

//used for for reloading the homepage on clicking the meslova icon
const homerel = document.querySelector('.nav-item');
homerel.addEventListener('click', () => {
    setTimeout(() => {
        window.addEventListener("load", function () {
            homerel.className += " hidden";
        })
        window.location.reload(true);
    }, 500);
});
let count = 0;
showSlide();
function showSlide() {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    count++;
    if (count > slides.length) { count = 1 }
    slides[count - 1].style.display = "block";
    setTimeout(showSlide, 4000);
}
// var img = document.getElementById("imgs");
// var imgArr = ['https://meslovawebsite-static.s3.amazonaws.com/img/demo/Home_Img_1.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/SensorData.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/Text_to_data.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/Audio_Text_1.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/Satellite_img.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/LargeImages.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/Data_image.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/FiberOptics.jpg']
// function setImage(obj) {
//     var value = obj.value;
//     img.src = imgArr[value];

// }
// var mytimer = setInterval(setImage, 3000);

// $('.carousel').carousel({

//     interval: 5000
// });
// // document.querySelector(document).ready(function () {
//     document.querySelector('.carousel').carousel({
//         interval: 3100,
//         pause: null
// document.querySelector('.carousel').carousel({
//     interval: 3000
// });
// document.querySelector('.carousel').carousel('cycle');
//used for relaoding the homepage on clicking the home icon
// const img = document.getElementById("imgs")
// const imgArr = ['https://meslovawebsite-static.s3.amazonaws.com/img/demo/Home_Img_1.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/SensorData.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/Text_to_data.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/Audio_Text_1.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/Satellite_img.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/LargeImages.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/Data_image.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/FiberOptics.jpg']
// let counter = 0;
// function setImage() {
    // for (let counter = 0; counter < imgArr.length; counter++) {
    //     img.src = imgArr[counter];
    // }
//     if (counter = imgArr.length) {
//         counter = 0;
//     }
//     img.src = imgArr[counter];
//     counter++;
// }

// }
// //     let counter = 0;


// const mytimer = setInterval(setImage, 3000);

// document.querySelector('.carousel').carousel({ interval: 3000 });
// $('.carousel').carousel({ interval: 3000 });
// $('.carousel').carousel({
//     interval: true,
// });
//this code is used for setting the image slider time
// jsjbx]ebee 
// else
// else.
// e
// dhdsjsj
// sjsjsnddndc

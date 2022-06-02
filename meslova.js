
const loader = document.querySelector(".loader");
window.addEventListener("load", function () {
    loader.className += " hidden";
});
//to add preloading event on clickong the reloading button
const rel = document.querySelector('.navbar-brand');
rel.addEventListener('click', () => {
    window.addEventListener("load", function () {
        rel.className += " hidden";
    });
    window.location.reload(true);
});
//to reload the webpage on clicking meslova
const homerel = document.querySelector('.nav-item');
homerel.addEventListener('click', () => {
    setTimeout(() => {
        window.addEventListener("load", function () {
            homerel.className += " hidden";
        })
        window.location.reload(true);
    }, 500);
});
//to reload the webpage on clicking home
// document.querySelector('.carousel').carousel({
//     interval: 3000
// });
// document.querySelector('.carousel').carousel('cycle');
//event for moving image slider
//observed that this code only runs when we click on next icon on the first image still figuring that out.

// const img = document.querySelectorAll('img')
// const imgArr = ['https://meslovawebsite-static.s3.amazonaws.com/img/demo/Home_Img_1.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/SensorData.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/Text_to_data.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/Audio_Text_1.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/Satellite_img.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/LargeImages.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/Data_image.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/FiberOptics.jpg']
// const counter = 0;
// function setImage() {
//     for (let counter = 0; counter < imgArr.length; counter++) {
//         img.src = imgArr[counter];
//     }
// const mytimer = setInterval(setImage, 3000);






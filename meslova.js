const rel = document.querySelector('.navbar-brand');
rel.addEventListener('click', () => {
    window.location.reload(true);
});
//used for for reloading the homepage on clicking the meslova icon
const homerel = document.querySelector('.nav-item');
homerel.addEventListener('click', () => {
    setTimeout(() => {
        window.location.reload(true)
    }, 500);
});
//used for relaoding the homepage on clicking the home icon
// const img = document.querySelectorAll('img')
// const imgArr = ['https://meslovawebsite-static.s3.amazonaws.com/img/demo/Home_Img_1.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/SensorData.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/Text_to_data.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/Audio_Text_1.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/Satellite_img.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/LargeImages.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/Data_image.jpg', 'https://meslovawebsite-static.s3.amazonaws.com/img/demo/FiberOptics.jpg']
// const counter = 0;
// function setImage() {
//     if (counter > imgArr.length) {
//         counter = 0;
//     }
//     img.src = imgArr[counter];
//     counter++;
// }
// const mytimer = setInterval(setImage, 3000);
//this code is used for setting the image slider time
document.querySelector('.carousel').carousel({ interval: 3000 });

window.addEventListener('DOMContentLoaded', function() {
    //slider 
    "use strict";
    let sliderImages = document.querySelectorAll('.solution__slider_item'),
        prev = document.querySelector('.arrow-left'),
        next = document.querySelector('.arrow-right'),
        sliderPos = 1;

    function showSlide() {
        if (sliderPos > sliderImages.length) {
            sliderPos = 1
        }
        if (sliderPos < 1) {
            sliderPos = sliderImages.length
        }

        sliderImages.forEach((item) => item.style.display = 'none');

        sliderImages[sliderPos - 1].style.display = 'block';
    }

    showSlide();

    function changeImg(num) {
        showSlide(sliderPos+=num);
    }

    prev.addEventListener('click', function() {
        changeImg(-1);
    });

    next.addEventListener('click', function() {
        changeImg(-1);
    });

    console.log(sliderImages)
 
});
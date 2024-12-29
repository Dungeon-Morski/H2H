'use strict';


$(document).ready(function() {
    
let slider = $('.slider');
slider.slick({
infinite: true,           
LazyLoad: 'ondemand',
slidesToShow: 3,          
centerMode: true,
pauseOnHover: true,
slidesToScroll: 3,        
arrows: false,            
dots: false,             
autoplay: true,           
autoplaySpeed: 2500,      
adaptiveHeight: true,     
centerMode: true,         
responsive: [
{
breakpoint: 768, 
settings: {
slidesToShow: 1,
slidesToScroll: 1,
dots: true, 
}
},
{
breakpoint: 1024, 
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
}
]
});
$('.prev').on('click', function() {
slider.slick('slickPrev');  // Переключить на предыдущий слайд
});

$('.next').on('click', function() {
slider.slick('slickNext');  // Переключить на следующий слайд
});
});




// Скрываем прелоадер, когда страница загружена
window.addEventListener('load', function() {
    // Добавляем задержку 3 секунды перед скрытием прелоадера
    const preloader = document.getElementById('preloader');
    
    setTimeout(function() {
        preloader.style.animation = "fadeOut 1s linear 1 forwards";
    },1500)

    setTimeout(function() {
        
        // Скрываем прелоадер
        document.getElementById('preloader').style.display = 'none';

        // Показываем контент страницы
        document.getElementById('site').style.display = 'block';
    }, 3000);  // 3000 миллисекунд = 3 секунды
});
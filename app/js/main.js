$(function(){
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: 3000,
    });

    $('.product__btn').on('click', function() {
        $('.product__btn').removeClass('product__btn--active'); // Убираем класс у всех кнопок
        $(this).addClass('product__btn--active'); // Добавляем класс только к нажатой кнопке
    });

    $('.new-product__btn').on('click', function() {
        $('.new-product__btn').removeClass('new-product__btn--active'); // Убираем класс у всех кнопок
        $(this).addClass('new-product__btn--active'); // Добавляем класс только к нажатой кнопке
    });

    var mixer = mixitup('.product__items');
    var mixer = mixitup('.new-product__items');
});
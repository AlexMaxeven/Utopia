import $ from "jquery";


// $(document).ready(function(){

//     $('.button__menu').click(function(event){
//         $('.button__menu', '.menu').toggleClass('active');
//     }); 

// });

$(function () {
    $('.button__menu').on('click', function () {
        $('.button__menu').toggleClass('active');
    });
    $('.button__menu').on('click', function () {
        $('.menu').toggleClass('active');
    });
    // $('body').toggleClass('lock');
    
});
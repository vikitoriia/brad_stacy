import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

import './lib/slick.min.js';

$(document).foundation();

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".bs-header").style.top = "0";
    } else {
        document.querySelector(".bs-header").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
};



$(".bs-main-menu").on("click", function(e){
    $("li.bs-menu-links").removeClass("active");
    $(this).addClass("active");
});



$('.slider').slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    dots: true,
    customPaging: function(slider, i) {
        return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '<i class="fa fa-sort-asc"></i></button>';
    },
});

$('.slider-customers').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    autoplay: true,
    prevArrow: '.arrowPrev',
    nextArrow: '.arrowNext',
    pauseOnHover: true,
    cssEase: 'linear',
});


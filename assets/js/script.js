// Nav menu if scroll is change background
window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY || window.pageYOffset;
    const navMenu = document.getElementById("navmenu");
  
    // console.log(verticalScrollPx > 500);
    if (verticalScrollPx > 10) {
      navMenu.classList.add("kc-nav-bgchange");
      // document.body.style.backgroundColor = 'red';
    } else {
      navMenu.classList.remove("kc-nav-bgchange");
    }
});


// Hiden - Show | kc-sc02
const kc02Menu = document.querySelectorAll(".kc-sc02-btn");
const kc02List = document.querySelectorAll(".kc-sc02-items");

function clearActiveKc02() {
  Array.from(kc02Menu).map(function(ele, index) {
    ele.classList.remove("kc-sc02-active");
  });
  Array.from(kc02List).map(function(ele, index) {
    ele.classList.remove("kc-sc02-items-show");
  });
}

Array.from(kc02Menu).map(function(ele, index) {
  ele.addEventListener('click', function() {
    clearActiveKc02();
    ele.classList.add('kc-sc02-active');
    const kc02Tag = document.querySelectorAll(ele.dataset.menulist);;

    Array.from(kc02Tag).map(function(ele, index) {
      ele.classList.add('kc-sc02-items-show');
    });
  });
});


// Hiden - Show | kc-sc04
const kc04Click = document.querySelectorAll(".kc-sc04-menu");
const kc04Show = document.querySelectorAll(".kc-sc04-show");

function clearActiveKc04() {
  Array.from(kc04Click).map(function(ele, index) {
    ele.classList.remove("kc-sc04-menu-active");
  });
  Array.from(kc04Show).map(function(ele, index) {
    ele.classList.remove('kc-sc04-show-active');
  });
}
Array.from(kc04Click).map(function(ele, index) {
  ele.addEventListener('click', function() {
    clearActiveKc04();
    ele.classList.add("kc-sc04-menu-active");
    console.log(ele);
    console.log(document.getElementById(ele.dataset.tag));
    document.getElementById(ele.dataset.tag).classList.add('kc-sc04-show-active');
  });
});


// Hiden - Show | kc-sc06
const kc06Info = document.querySelectorAll(".kc-sc06-info");
const kc06Click = document.querySelectorAll(".kc-sc06-click");
const kc06List = document.querySelectorAll(".kc-sc06-list");

function clearActiveKc06() {
  Array.from(kc06Click).map(function(ele, index) {
    ele.classList.remove("kc-sc06-menu-active");
  });
  Array.from(kc06List).map(function(ele, index) {
    ele.classList.remove("kc-sc06-list-show");
  });
}
Array.from(kc06Info).map(function(ele, index) {
  ele.addEventListener('click', function() {
    ele.classList.toggle("kc-sc06-info-active");
  });
});

Array.from(kc06Click).map(function(ele, index) {
  ele.addEventListener('click', function() {
    clearActiveKc06();
    ele.classList.add("kc-sc06-menu-active");
    var kc06GetTag = document.querySelectorAll(ele.dataset.tagque);

    Array.from(kc06GetTag).map(function(ele, index) {
      ele.classList.add('kc-sc06-list-show');
    });
  });
});


// function clearActive () {
//   Array.from(kc04Click).map(function(ele, index) {
//     ele.classList.remove("kc-sc04-menu-active");
//   });
//   Array.from(kc04Show).map(function(ele, index) {
//     ele.style.display = 'none';
//   });
// }
// Array.from(kc04Click).map(function(ele, index) {
//   ele.addEventListener('click', function() {
//     clearActive();
//     ele.classList.toggle("kc-sc04-menu-active");
//     document.getElementById(ele.dataset.tag).style.display = 'block';
//   });
// });

// SlickJS 
$(document).ready(function(){

  // Slider Section 05 
  $('.kc-sc05-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1084,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 774,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

  // $('.es-gallery-slider .slick-prev').html('<i class="fa-solid fa-angle-left"></i>');
  // $('.es-gallery-slider .slick-next').html('<i class="fa-solid fa-angle-right"></i>');

});
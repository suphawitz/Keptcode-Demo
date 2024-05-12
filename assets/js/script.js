// // ===============================
// // ------ Responsive Navbar ------
// // ===============================

// // Toggle to show and hide navbar menu
// let navbarMenu = document.getElementById("menu");
// let navbarMenuCon = document.getElementById("menu-contact");
// let burgerMenu = document.getElementById("burger");

// burgerMenu.addEventListener("click", () => {
//   navbarMenu.classList.toggle("dp-nav-active");
// //   navbarMenuCon.classList.toggle("dp-nav-active");
//   burgerMenu.classList.toggle("dp-nav-active");
// });

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
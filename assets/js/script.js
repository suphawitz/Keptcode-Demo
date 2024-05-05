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
const hamburgerMenu = document.querySelector(".hamburger") 
const mobileNav = document.querySelector(".popOutMenu")
hamburgerMenu.addEventListener("click", function() {
    hamburgerMenu.classList.toggle("isActive")
    mobileNav.classList.toggle("mobileNav")
});

// window.onscroll = function() {stickyScroll};

// var navBar = document.querySelector(".navBar");

// var sticky = navBar.offsetTop;
// ;
// function stickyScroll() {
//     if(window.pageYOffset>= sticky) {
//         navBar.classList.add("sticky")
//         alert("hi")
//     } else {
//         navBar.classList.remove("sticky")
//     }

// }
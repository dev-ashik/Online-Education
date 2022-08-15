const faBars = document.querySelector(".fa-bars");
const navbar = document.querySelector(".navbar");
const header = document.querySelector("header");
const section = document.querySelector("section");

faBars.addEventListener("click", function () {
  faBars.classList.toggle("fa-xmark");
  // add className "fa-xmark" when click on fa-bars class
  navbar.classList.toggle("nav-toggle");
  // add className "nav-toggle" when click on fa-bars
});

// remove class on scroll
window.addEventListener("scroll", function () {
  faBars.classList.remove("fa-xmark");
  navbar.classList.remove("nav-toggle");

  if (window.scrollY > 30) {
    header.classList.add("header-active");
  } else {
    header.classList.remove("header-active");
  }
});

// remove class on load
window.addEventListener("load", function () {
  faBars.classList.remove("fa-xmark");
  navbar.classList.remove("nav-toggle");
});

const faBars = document.querySelector(".fa-bars");
const navbar = document.querySelector(".navbar");


faBars.addEventListener("click", function() {
    faBars.classList.toggle("fa-xmark");
    // add className "fa-xmark" when click on fa-bars class
    navbar.classList.toggle("nav-toggle");
    // add className "nav-toggle" when click on fa-bars
})


// remove class on scroll
window.addEventListener('scroll', function() {
    faBars.classList.remove("fa-xmark");
    navbar.classList.remove("nav-toggle");
})

// remove class on load
window.addEventListener('load', function() {
    faBars.classList.remove("fa-xmark");
    navbar.classList.remove("nav-toggle");
})
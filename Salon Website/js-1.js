document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = navMenu.querySelectorAll("a");

    // Toggle menu open/close
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });

    // Close menu after clicking any link
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("show");
        });
    });

});

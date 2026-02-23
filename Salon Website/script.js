document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = navMenu.querySelectorAll("a");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("show");

            function confirmBooking() {
            alert("✅ Your booking has been successfully submitted!\n\nWe will contact you shortly. Thank you for choosing Helena Glam's 💖");
            }
        });
    });

});



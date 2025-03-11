document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    
    hamburger.addEventListener("click", function () {
        navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll(".slider img");
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }
    
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {

    const navBtn = document.querySelector(".mobile__wrapper");
    const navMenu = document.querySelector(".home__nav");
    navBtn.addEventListener('click', function () {
        navBtn.classList.toggle('change');
        navMenu.classList.toggle('change__menu');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
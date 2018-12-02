const navBtn = document.querySelector(".mobile__wrapper");
const navMenu = document.querySelector(".home__nav");
navBtn.addEventListener('click', function () {
    navBtn.classList.toggle('change');
    navMenu.classList.toggle('change__menu');
});
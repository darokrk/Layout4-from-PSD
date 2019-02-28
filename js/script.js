document.addEventListener("DOMContentLoaded", () => {
  const navBtn = document.querySelector(".mobile__wrapper");
  const navMenu = document.querySelector(".home__nav");
  navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("change");
    navMenu.classList.toggle("mobile__menu--active");
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  const forwardIcon = document.querySelector(".design-icons__wrapper")
    .children[1];
  const reverseIcon = document.querySelector(".design-icons__wrapper")
    .children[0];
  const iphoneImage = document.querySelector(".design-phone__wrapper")
    .children[0];
  const phoneCount = document.querySelector(".design__numbers");

  const photos = [
    "./images/phone-blue.png",
    "./images/phone-red.png",
    "./images/phone-green.png",
    "./images/phone-yellow.png",
    "./images/phone-white.png"
  ];

  let index = 0;

  nextImage = i => {
    if (i === photos.length) {
      index = 0;
      phoneCount.textContent = `0${index + 1}/05`;
      return photos[0];
    } else {
      phoneCount.textContent = `0${i + 1}/05`;
      return photos[i];
    }
  };

  previousImage = i => {
    if (i < 0) {
      index = photos.length - 1;
      phoneCount.textContent = `0${index + 1}/05`;
      return photos[photos.length - 1];
    } else {
      phoneCount.textContent = `0${i + 1}/05`;
      return photos[i];
    }
  };

  forwardIcon.addEventListener("click", e => {
    e.preventDefault();

    iphoneImage.setAttribute("src", nextImage(++index));
  });

  reverseIcon.addEventListener("click", e => {
    e.preventDefault();

    iphoneImage.setAttribute("src", previousImage(--index));
  });
});

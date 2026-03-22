document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".site-navbar");
  const contactForm = document.querySelector(".needs-validation");

  if (navbar) {
    let lastScrollY = window.scrollY;
    let ticking = false;
    const hideOffset = 140;
    const delta = 8;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;

      if (currentScrollY > 10) {
        navbar.classList.add("nav-scrolled");
      } else {
        navbar.classList.remove("nav-scrolled");
      }

      if (Math.abs(scrollDifference) >= delta) {
        if (scrollDifference > 0 && currentScrollY > hideOffset) {
          navbar.classList.add("nav-hidden");
        } else if (scrollDifference < 0) {
          navbar.classList.remove("nav-hidden");
        }

        lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
      }

      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      if (!contactForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      contactForm.classList.add("was-validated");
    });
  }
});
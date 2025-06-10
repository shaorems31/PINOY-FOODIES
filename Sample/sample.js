document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".main-nav a");
    navLinks.forEach((link) => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });
  });
  
function initPage() {
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".post-card");
  }

  // open sidebar
  document.querySelectorAll(".sidebar-toggle").forEach(el => {
    el.onclick = function() {
      document
        .querySelector(".sidebar-toggle .hamburger")
        .classList.toggle("is-active");
      document.querySelector(".container").classList.toggle("sidebar-open");
    };
  });

  window.addEventListener(
    "scroll",
    debounce(function() {
      const curTop = window.scrollY;
      const goUp = document.querySelector("#go-up");
      if (curTop > 64 && !goUp.style.opacity) {
        goUp.classList.add("show");
      } else {
        goUp.classList.remove("show");
      }
    }, 200),
    {
      passive: true
    }
  );
}

document.addEventListener("DOMContentLoaded", initPage);

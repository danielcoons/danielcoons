/* =========================
   IMAGE LOAD (blur effect)
========================= */

document.querySelectorAll("img").forEach(img => {
  if (img.complete) {
    img.classList.add("loaded");
  } else {
    img.onload = () => img.classList.add("loaded");
  }
});

/* =========================
   CAROUSEL
========================= */

document.querySelectorAll(".carousel").forEach(carousel => {
  const images = carousel.querySelectorAll(".carousel-image");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");
  const dotsContainer = carousel.querySelector(".carousel-dots");

  if (!images.length) return;

  let index = 0;
  let interval = null;

  /* Create dots */
  images.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      index = i;
      update();
      restartInterval();
    });

    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("span");

  function update() {
    images.forEach(img => img.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    images[index].classList.add("active");
    dots[index].classList.add("active");
  }

  function next() {
    index = (index + 1) % images.length;
    update();
  }

  function prev() {
    index = (index - 1 + images.length) % images.length;
    update();
  }

  /* Buttons */
  prevBtn?.addEventListener("click", () => {
    prev();
    restartInterval();
  });

  nextBtn?.addEventListener("click", () => {
    next();
    restartInterval();
  });

  /* Interval control (SAFE) */
  function startInterval() {
    if (interval) return; // 🔥 prevents stacking

    interval = setInterval(() => {
      next();
    }, 4000);
  }

  function stopInterval() {
    clearInterval(interval);
    interval = null;
  }

  function restartInterval() {
    stopInterval();
    startInterval();
  }

  /* Start once */
  startInterval();

  /* Hover behavior */
  carousel.addEventListener("mouseenter", stopInterval);
  carousel.addEventListener("mouseleave", startInterval);
});

/* =========================
   STAGGER ANIMATIONS
========================= */

document.querySelectorAll(".fade-in").forEach((el, i) => {
  el.style.animationDelay = `${i * 0.06}s`;
});

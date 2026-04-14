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
  let interval;

  /* dots */
  images.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      index = i;
      update();
      reset();
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

  nextBtn?.addEventListener("click", () => { next(); reset(); });
  prevBtn?.addEventListener("click", () => { prev(); reset(); });

  function start() {
    interval = setInterval(next, 4000);
  }

  function reset() {
    clearInterval(interval);
    start();
  }

  start();

  carousel.addEventListener("mouseenter", () => clearInterval(interval));
  carousel.addEventListener("mouseleave", start);
});
/* =========================
   STAGGER ANIMATIONS
========================= */

document.querySelectorAll(".fade-in").forEach((el, i) => {
  el.style.animationDelay = `${i * 0.06}s`;
});

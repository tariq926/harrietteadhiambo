const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const closeMobile = document.getElementById("close-mobile");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => mobileNav.classList.add("is-open"));
}

if (closeMobile && mobileNav) {
  closeMobile.addEventListener("click", () => mobileNav.classList.remove("is-open"));
}

document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => mobileNav?.classList.remove("is-open"));
});

const header = document.querySelector(".site-header");
const onScroll = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const counters = document.querySelectorAll("[data-count]");
const animateCounter = (el) => {
  const target = Number(el.dataset.count);
  const duration = 1400;
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased).toLocaleString();
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

if (counters.length) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((el) => observer.observe(el));
}

document.querySelectorAll("[data-map-target]").forEach((hotspot) => {
  hotspot.addEventListener("mouseenter", () => {
    document
      .querySelectorAll(".map-note")
      .forEach((note) => note.classList.toggle("is-active", note.dataset.note === hotspot.dataset.mapTarget));
  });
});

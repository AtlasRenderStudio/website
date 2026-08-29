// Ahmad Rashid — Portfolio interactions
// Vanilla JS, no dependencies. Safe to paste into any static host.

document.addEventListener("DOMContentLoaded", () => {
  /* ---- footer year ---- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- nav: solid background after scrolling ---- */
  const nav = document.getElementById("nav");
  const onScroll = () => {
    if (window.scrollY > 12) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- mobile nav toggle ---- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- scroll reveal ---- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }

  /* ---- cursor glow (desktop / fine pointers only) ---- */
  const glow = document.getElementById("cursorGlow");
  if (glow && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener(
      "pointermove",
      (e) => {
        glow.style.setProperty("--x", `${e.clientX}px`);
        glow.style.setProperty("--y", `${e.clientY}px`);
        glow.classList.add("active");
      },
      { passive: true }
    );
    document.addEventListener("mouseleave", () => glow.classList.remove("active"));
  }

  /* ---- work videos: play on hover/tap ---- */
  document.querySelectorAll(".work-card .work-video").forEach((video) => {
    const card = video.closest(".work-card");

    const play = () => {
      video.play().catch(() => {});
      card.classList.add("is-playing");
    };
    const pause = () => {
      video.pause();
      video.currentTime = 0;
      card.classList.remove("is-playing");
    };

    // Desktop: hover
    card.addEventListener("mouseenter", play);
    card.addEventListener("mouseleave", pause);

    // Touch: tap to toggle
    card.addEventListener(
      "touchstart",
      () => {
        if (video.paused) {
          play();
        } else {
          pause();
        }
      },
      { passive: true }
    );
  });
});

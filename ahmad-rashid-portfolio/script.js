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

  /* ---- work videos: hover preview (desktop) ---- */
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;

  document.querySelectorAll(".work-media").forEach((media) => {
    const video = media.querySelector(".work-video");
    if (!video) return; // "Next project" placeholder tiles have no video

    const card = media.closest(".work-card");

    // Skip cards whose video isn't actually available yet (e.g. Slake,
    // shown as a "Video pending" placeholder until the real file is added).
    if (media.classList.contains("work-media--pending")) return;

    if (isFinePointer) {
      const play = () => {
        video.play().catch(() => {});
        card.classList.add("is-playing");
      };
      const pause = () => {
        video.pause();
        video.currentTime = 0;
        card.classList.remove("is-playing");
      };
      card.addEventListener("mouseenter", play);
      card.addEventListener("mouseleave", pause);
    }
  });

  /* ---- click a Work video to open it fullscreen ---- */
  const lightbox = document.getElementById("videoLightbox");
  const lightboxVideo = document.getElementById("lightboxVideo");
  const lightboxSource = lightboxVideo ? lightboxVideo.querySelector("source") : null;
  const lightboxClose = document.getElementById("lightboxClose");
  let lastFocused = null;

  const openLightbox = (src, poster) => {
    if (!lightbox || !lightboxVideo || !lightboxSource || !src) return;
    lastFocused = document.activeElement;
    lightboxSource.setAttribute("src", src);
    if (poster) lightboxVideo.setAttribute("poster", poster);
    lightboxVideo.load();
    lightbox.classList.add("open");
    document.body.classList.add("no-scroll");
    lightboxVideo.play().catch(() => {});
    lightboxClose.focus();
  };

  const closeLightbox = () => {
    if (!lightbox || !lightboxVideo || !lightboxSource) return;
    lightbox.classList.remove("open");
    document.body.classList.remove("no-scroll");
    lightboxVideo.pause();
    lightboxSource.setAttribute("src", "");
    lightboxVideo.removeAttribute("poster");
    lightboxVideo.load();
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  };

  document.querySelectorAll(".work-media").forEach((media) => {
    const video = media.querySelector(".work-video");
    if (!video) return;
    if (media.classList.contains("work-media--pending")) return;

    const source = video.querySelector("source");
    const src = source ? source.getAttribute("src") : null;
    const poster = video.getAttribute("poster");

    media.classList.add("is-expandable");
    media.addEventListener("click", () => openLightbox(src, poster));
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
});

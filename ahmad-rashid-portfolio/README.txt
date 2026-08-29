AHMAD RASHID — PORTFOLIO SITE
==============================

WHAT'S HERE
-----------
index.html   The whole page (structure + content)
styles.css   All styling (dark, AI/motion aesthetic, animations)
script.js    Scroll reveal animations, mobile menu, video hover-play,
             click-to-fullscreen lightbox, cursor glow

No build step, no dependencies — just static files. Upload all three to your
existing site's root (or a subfolder) and it works as-is.

YOUR VIDEOS
-----------
- assets/sonara_tech.mp4 is wired up as the first Work card
  ("Sonara — 360° Spatial Audio", tagged Tech), with a poster frame at
  assets/sonara_tech-poster.jpg so it looks good before anyone hovers it.
- assets/slake_beverage.mp4 is wired up as the second Work card ("Slake",
  tagged Beverage). It doesn't have a poster frame yet — see below for how
  to add one — so until the video loads, visitors briefly see a plain dark
  tile instead of a thumbnail.
- On desktop, hovering a card autoplays a small muted preview inline.
  Clicking a card (on any device — desktop, tablet, or mobile) opens it
  fullscreen in a lightbox with normal video controls, so visitors can
  watch it larger and unmute it. Keep file sizes reasonable (a few MB,
  ideally under ~10MB, H.264 .mp4) so they load fast — Sonara's file is
  ~17MB/15s, which is fine but worth compressing further if you want a
  snappier hover/load response.
- To make a poster frame for a video yourself (needs ffmpeg installed):
    ffmpeg -ss 2 -i your-video.mp4 -frames:v 1 -update 1 -q:v 3 poster.jpg
- Two extra "Next project" placeholder tiles are included in the Work grid
  so the section doesn't look sparse — swap them for real project cards
  later by copying the pattern of the Sonara/Slake <article class="work-card">
  blocks.

THINGS YOU'LL PROBABLY WANT TO EDIT
------------------------------------
- Project titles/descriptions in the Work section (currently "Project Title
  One/Two" placeholders).
- The About section copy (search for "Add a bit more here...").
- Add social links: in index.html, search for "social-row" — there's a
  commented-out example block ready to uncomment and fill in.
- Client / case-study names: none are included since you didn't share any
  yet — feel free to add a "Clients" strip or mention brands by name once
  you're ready (I'm happy to add this back in for you).

RESPONSIVE / AUTO-SCALING
--------------------------
The whole site is fluid, not fixed-width:
- Headlines and section titles scale smoothly with the browser width
  (CSS clamp()), rather than jumping between fixed sizes.
- The Work grid, Services grid, and About layout reflow from multi-column
  to a single column on narrow screens (see the @media rules near the
  bottom of styles.css).
- The fullscreen video lightbox scales the video to fit any screen size
  or orientation while always preserving its aspect ratio (never cropped,
  never distorted, never overflowing the screen).
Tested from a 320px-wide phone up to a 1920px ultra-wide monitor, portrait
and landscape.

CUSTOMIZING THE LOOK
---------------------
All colors live at the top of styles.css under ":root" — e.g.:
  --grad-1, --grad-2, --grad-3   the purple/cyan/pink gradient used in
                                  headings, buttons, and the hero glow
  --tech / --beverage             the two tag colors used to color-code
                                  Tech vs Beverage work

NOTES
-----
- Uses Google Fonts (Space Grotesk, Inter, JetBrains Mono) loaded via
  <link> tags — this needs the page to be served with internet access
  (normal for any live website).
- Fully responsive (desktop, tablet, mobile) with a mobile hamburger menu.
- Respects prefers-reduced-motion for accessibility.
- Domain used in the page's meta tags: ahmadrash.id — update the
  <meta property="og:url"> tag in index.html if that changes.

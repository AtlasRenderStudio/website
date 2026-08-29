AHMAD RASHID — PORTFOLIO SITE
==============================

WHAT'S HERE
-----------
index.html   The whole page (structure + content)
styles.css   All styling (dark, AI/motion aesthetic, animations)
script.js    Scroll reveal animations, mobile menu, video hover-play, cursor glow

No build step, no dependencies — just static files. Upload all three to your
existing site's root (or a subfolder) and it works as-is.

ADDING YOUR TWO VIDEOS
-----------------------
1. Create a folder named "assets" next to index.html.
2. Put your video files in it, e.g.:
     assets/video-1.mp4   (currently tagged "Tech" in the Work section)
     assets/video-2.mp4   (currently tagged "Beverage")
3. If you want different filenames, open index.html and search for
   "assets/video-1.mp4" and "assets/video-2.mp4" — update the <source src="...">
   paths to match.
4. Videos autoplay muted+looped when a visitor hovers a card (or taps, on
   mobile). Keep file sizes reasonable (a few MB, ideally under ~10MB each,
   H.264 .mp4) so they load fast.
5. Two extra "Next project" placeholder tiles are included in the Work grid
   so the section doesn't look sparse — swap them for real project cards
   later by copying the pattern of the first two <article class="work-card">
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

AHMAD RASHID — COMMERCIAL & MOTION DESIGN STUDIO
==================================================
(Agency site — rebuilt from the personal portfolio version)

WHAT'S HERE
-----------
index.html   The whole page (structure + content)
styles.css   All styling (dark, premium studio aesthetic, animations)
script.js    Scroll reveal, mobile menu, video hover-preview,
             click-to-fullscreen lightbox, FAQ accordion, contact form

No build step, no dependencies — just static files. Upload all three
(plus the assets folder) to your host and it works as-is.

WHAT CHANGED FROM THE OLD SITE
--------------------------------
This is a full content and structure rebuild around your new positioning:
a commercial and motion-design studio selling product ads to brands
(beverage, tech, consumer products, beauty, launches, e-commerce), NOT
a personal AI portfolio. Every section follows the structure you gave:
Hero -> Work/Proof -> Process -> Benefits -> Why Us -> FAQ -> Contact,
with a repeating "Get a free banner ad for your business" CTA after
each major block. There is no mention of AI anywhere in the copy.

The visual style (dark background, gradient glow, glass cards, grain
texture, smooth reveal animations, click-to-fullscreen video lightbox)
carries over from the previous build, since it already fit the "premium,
cinematic, sophisticated" brief.

YOUR VIDEOS
-----------
- assets/sonara_tech.mp4 is featured under "Tech & Electronics"
  (with its poster frame at assets/sonara_tech-poster.jpg).
- assets/slake_beverage.mp4 is featured under "Beverage Commercials".
- Four more portfolio tiles are placeholders ("More work coming soon")
  for: Consumer Products, Beauty & Personal Care, Product Launches, and
  Motion Design Ads. Swap any of them for a real video by copying the
  markup pattern of the Sonara/Slake <article class="work-card"> blocks
  (search index.html for "Real sample" comments) and pointing the
  <source src="..."> at your new file.

THE CONTACT FORM
-----------------
The "Get a free banner ad for your business" CTA scrolls to a form
(Business/brand name, Website, Product, Email, Type of ad). Since this
is a static site with no backend, submitting the form opens the
visitor's own email app with all their answers pre-filled, addressed to
ahmadrashid2026@outlook.com. No account or service needed — but it does
rely on the visitor having an email client configured on their device.

If you'd rather have submissions land straight in your inbox without
opening the visitor's email app (a more polished experience, especially
on mobile), sign up for a free Formspree account (formspree.io), and
I can wire the form's action to post there directly instead — just say
the word once you have an endpoint.

CUSTOMIZING THE LOOK
---------------------
All colors live at the top of styles.css under ":root":
  --grad-1, --grad-2, --grad-3   the purple/cyan/pink accent gradient
                                  used in headings, buttons, and glows

CTA TEXT
--------
The exact CTA "Get a free banner ad for your business" is used
consistently everywhere per your brief: the hero, all four CTA bands,
and the FAQ's last answer (6 buttons total). The nav button shortens it
to "Get a free banner ad" to fit, and the contact section's heading
reuses the same wording split across a headline. If you ever change the
offer wording, search index.html for "Get a free banner ad" to find and
update every occurrence at once so it stays consistent site-wide.

NOTES
-----
- Uses Google Fonts (Space Grotesk, Inter, JetBrains Mono) via <link>
  tags — needs the page to be served with internet access (normal for
  any live site).
- Fully responsive (desktop, tablet, mobile) with a mobile hamburger
  menu, and the fullscreen video lightbox scales to any screen size.
- Respects prefers-reduced-motion for accessibility.
- Domain in the page's meta tags: ahmadrash.id.
- Repo note: remember your GitHub repo needs a .nojekyll file at the
  root (already added) for GitHub Pages to serve this correctly — see
  earlier conversation if this ever needs re-explaining to someone else
  working on the repo.

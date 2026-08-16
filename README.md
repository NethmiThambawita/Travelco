# Serendib Trails

A homepage for **Serendib Trails**, a fictional Sri Lankan travel agency offering
round tours, day trips, wildlife safaris, hill-country rail journeys, airport
transfers, private transportation and custom itineraries.

Built as a standalone React + Tailwind site so it has no dependency on any
backend, database or auth system — it's a static, deployable homepage.

## Stack

- React 19 + Vite 8
- Tailwind CSS 3
- No backend — the enquiry form validates and confirms client-side (see
  Limitations below)

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # serve the production build locally
```

## Design decisions

- **Brand**: "Serendib" is the historic Arabic/Persian name for Sri Lanka and
  the root of the word *serendipity* — a distinctive, ownable name for a
  travel brand with a built-in story.
- **Palette & type**: Poppins, a dark ink heading colour (`#0b2727`) and a
  sky-blue accent (`#41a4ff`), matching the palette already used elsewhere in
  this workspace's Travelco project, plus a warm gold accent for Sri Lankan
  warmth.
- **Photography**: all photos are real, free-to-use stock photography
  (Pexels License — free for commercial use, no attribution required),
  hand-picked and verified to actually depict the named Sri Lankan locations
  (Sigiriya, Ella's Nine Arches Bridge, Yala, Mirissa, Galle Fort, Kandy).
  Images are compressed and served at sized widths to keep the page light.
- **Sections**: header/nav, hero, about, 6 tour/day-tour packages + a
  services strip (airport transfers / private transport / custom
  itineraries), a "why choose us" grid, a photo-and-video gallery, 3
  traveller testimonials, and a booking/enquiry form — matching the
  assessment's required homepage sections.
- **Motion**: a looping aerial video (verified Sri Lanka footage, Pexels
  License) plays behind the hero text with a Ken Burns-zoomed photo as an
  instant-paint fallback underneath, plus scroll-triggered fade-up reveals
  across every section. Everything respects `prefers-reduced-motion` — the
  video isn't even mounted, and reveals just render fully visible.
- **Live Sri Lanka clock** in the hero (`Intl.DateTimeFormat` on
  `Asia/Colombo`, ticking every second) — a small, honest touch for
  travellers checking what time it is on the ground; marked `aria-live="off"`
  so screen readers aren't interrupted every second.
- **Gallery**: a uniform photo grid with two looping video tiles mixed in
  (verified Colombo footage — an aerial skyline shot and a night tuk-tuk
  ride, both Pexels License), marked with a small play-icon badge so it's
  clear which tiles are motion.
- **Footer**: restructured after reddottours.com's layout — a serif
  newsletter strip, a 3-column body (logo / explore / contact+social with
  circular icon buttons), a trust blurb, and a bottom bar with copyright +
  back-to-top. Real regulatory badges from that reference (ATOL, ABTOT,
  TripAdvisor Travellers' Choice) were deliberately **not** copied — those
  assert actual UK travel-protection accreditation this fictional business
  doesn't hold, so displaying them would misrepresent it.

## Known limitations

- **Logo**: the mark currently in `src/components/Logo.jsx` is a
  code-drawn SVG placeholder, not an AI-generated logo. This project has no
  image-generation tool available, so it couldn't produce the raster/AI logo
  the brief asks for. Swap in a real AI-generated logo (e.g. via ChatGPT
  Images, Midjourney or an AI logo generator) and update `Logo.jsx` before
  final submission.
- **Enquiry form**: validates on the client and shows a success state, but
  does not actually send an email anywhere (no backend is wired up). Hooking
  it to a form endpoint (e.g. Formspree) or a real backend would be the next
  step for production use.
- **Phone/email/address** in the footer and contact section are placeholder
  fictional details for this fictional business.
- **Video weight**: the hero video plus the two gallery video tiles total
  ~15MB, all self-hosted (`src/assets/videos/`) so the page doesn't depend
  on Pexels staying up. Every video is `loading`-deferred until its section
  scrolls into view except the hero, so nothing loads until it's needed —
  fine on broadband, but a production build would want smaller/adaptive
  sources for slow connections.

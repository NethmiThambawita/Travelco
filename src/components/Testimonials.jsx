import charlotteImg from "../assets/images/avatar-charlotte.jpg";
import jamesImg from "../assets/images/avatar-james.jpg";
import margaretImg from "../assets/images/avatar-margaret.jpg";
import Reveal from "./Reveal";

const reviews = [
  {
    img: charlotteImg,
    name: "Charlotte B.",
    place: "United Kingdom",
    quote:
      "Our driver knew every viewpoint that wasn't in the guidebook. Nine days, zero stress, and the Yala safari alone was worth the trip.",
  },
  {
    img: jamesImg,
    name: "James W.",
    place: "Australia",
    quote:
      "Booked the hill country rail package two weeks out and they still built a private itinerary around it. Ella to Kandy by train was the highlight of our year.",
  },
  {
    img: margaretImg,
    name: "Margaret O.",
    place: "Ireland",
    quote:
      "Travelling at 68 I wanted comfort without losing the adventure. They paced every day perfectly and checked in constantly by WhatsApp.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 text-spice-400" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 1.5l2.6 5.5 6 .6-4.5 4 1.3 5.9L10 14.8l-5.4 2.7L6 11.6 1.5 7.6l6-.6z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-400">
            Traveller reviews
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            What it's like to travel with us
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-7">
          {reviews.map((r, i) => (
            <Reveal
              key={r.name}
              as="figure"
              delay={i * 100}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-7"
            >
              <Stars />
              <blockquote className="mt-4 text-white/85 leading-relaxed text-sm">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={r.img}
                  alt=""
                  width="44"
                  height="44"
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-white/60">{r.place}</p>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

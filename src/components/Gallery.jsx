import pidurangalaImg from "../assets/images/gallery-pidurangala.jpg";
import palmImg from "../assets/images/gallery-palm.jpg";
import sunsetImg from "../assets/images/gallery-sunset.jpg";
import ninearchImg from "../assets/images/gallery-ninearch.jpg";
import gallestreetImg from "../assets/images/gallery-gallestreet.jpg";
import Reveal from "./Reveal";

const photos = [
  { img: pidurangalaImg, alt: "View of Sigiriya Rock from Pidurangala, Sri Lanka", w: 800, h: 1067 },
  { img: ninearchImg, alt: "The Nine Arches railway bridge surrounded by jungle near Ella", w: 800, h: 533 },
  { img: palmImg, alt: "A single coconut palm leaning over the Indian Ocean on Sri Lanka's coast", w: 800, h: 1067 },
  { img: gallestreetImg, alt: "A quiet street of colonial shopfronts inside Galle Fort", w: 800, h: 1067 },
  { img: sunsetImg, alt: "Two travellers watching the sunset over the sea in Sri Lanka", w: 800, h: 1067 },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-700">
            Gallery
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink">
            A few places we send people back to
          </h2>
        </Reveal>

        <div className="mt-12 columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {photos.map((photo, i) => (
            <Reveal
              key={photo.alt}
              delay={(i % 3) * 90}
              className="mb-4 break-inside-avoid overflow-hidden rounded-2xl"
            >
              <img
                src={photo.img}
                alt={photo.alt}
                loading="lazy"
                width={photo.w}
                height={photo.h}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

import Image from "next/image";

const IMAGES = [
  {
    src: "/images/giacca-mohair-lana/additional-01-back-detail.webp",
    alt: "Giacca — dettaglio posteriore",
  },
  {
    src: "/images/giacca-mohair-lana/additional-02-side-detail.webp",
    alt: "Giacca — dettaglio laterale",
  },
  {
    src: "/images/giacca-mohair-lana/additional-03-fabric-full.webp",
    alt: "Giacca — dettaglio tessuto",
  },
];

export function AdditionalImages() {
  return (
    <section className="grid grid-cols-3">
      {IMAGES.map((image) => (
        <div key={image.src} className="relative aspect-square overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="33vw"
            className="object-cover"
          />
        </div>
      ))}
    </section>
  );
}

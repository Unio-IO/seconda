import Image from "next/image";
import type { GalleryImage } from "@/types/product";

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/giacca-mohair-lana/gallery-01-front.webp",
    alt: "Giacca in mohair e lana — vista frontale",
  },
  {
    src: "/images/giacca-mohair-lana/gallery-02-side.webp",
    alt: "Giacca in mohair e lana — vista laterale",
  },
  {
    src: "/images/giacca-mohair-lana/gallery-03-back.webp",
    alt: "Giacca in mohair e lana — vista posteriore",
  },
  {
    src: "/images/giacca-mohair-lana/gallery-04-lapel-detail.webp",
    alt: "Giacca in mohair e lana — dettaglio revers Intrecciato",
  },
];

export function ProductGallery() {
  return (
    <div className="relative w-full">
      <ul className="flex h-[110vh] w-full flex-nowrap overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
        {GALLERY_IMAGES.map((image) => (
          <li
            key={image.src}
            className="relative h-full flex-[0_0_50%] overflow-hidden max-[768px]:flex-[0_0_100%]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

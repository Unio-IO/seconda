import Image from "next/image";

export function AdditionalImages() {
  return (
    <section>
      <div className="flex w-full">
        <div className="relative aspect-square w-1/2 overflow-hidden">
          <Image
            src="/images/giacca-mohair-lana/additional-01-back-detail.webp"
            alt="Giacca — dettaglio posteriore"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square w-1/2 overflow-hidden">
          <Image
            src="/images/giacca-mohair-lana/additional-02-side-detail.webp"
            alt="Giacca — dettaglio laterale"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="relative h-[140vh] w-full overflow-hidden max-[768px]:h-auto max-[768px]:aspect-video">
        <Image
          src="/images/giacca-mohair-lana/additional-03-fabric-full.webp"
          alt="Giacca — dettaglio tessuto"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}

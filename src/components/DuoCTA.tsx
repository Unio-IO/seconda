import { notoSans } from "@/lib/fonts";

export function DuoCTA() {
  return (
    <section
      className={`${notoSans.className} fixed right-[120px] bottom-[120px] z-[400] flex aspect-[2/1] h-[166px] w-full max-w-[332px]`}
    >
      <div className="flex aspect-square w-1/2 flex-col items-start overflow-clip border border-black bg-white p-3 text-[12px] leading-[16.8px] text-black">
        <div>Completa il look</div>
      </div>
      <div className="flex aspect-square w-1/2 flex-col items-start overflow-clip border border-black bg-black p-3 text-[12px] leading-[16.8px] text-white">
        <div>Aggiungi al Carrello</div>
        <div>3.600€</div>
      </div>
    </section>
  );
}

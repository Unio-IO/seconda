import { notoSans } from "@/lib/fonts";
import { ChevronDownIcon } from "@/components/icons";
import type { AccordionEntry } from "@/types/product";

const ACCORDION_ITEMS: AccordionEntry[] = [
  { label: "Dettagli prodotto" },
  { label: "Spedizione e resi" },
  { label: "Confezione regalo" },
  { label: "Scopri in negozio" },
];

export function ProductInfo() {
  return (
    <section className="flex justify-center px-4">
      <div className={`${notoSans.className} w-full max-w-[460px] py-10 pb-6`}>
        <span className="block text-sm">Novità</span>
        <h2 className="text-sm font-normal">Giacca in mohair e lana</h2>
        <p className="mt-1 text-sm">4200 €</p>
        <p className="mt-6 mb-4 text-sm">Colore: Double black</p>

        <button className="flex w-full items-center justify-between border-0 border-b border-black bg-transparent py-3 text-sm">
          <span>Seleziona la taglia</span>
          <ChevronDownIcon />
        </button>
        <a
          href="#"
          className="mt-2 inline-block text-sm underline underline-offset-2"
        >
          Tabella taglie
        </a>

        <button className="mt-6 block h-12 w-full bg-black text-sm text-white">
          Pre-ordina
        </button>
        <button className="mt-3 block h-12 w-full border border-black bg-white text-sm text-black">
          Scopri il look
        </button>

        <p className="mt-5 text-sm text-[#6d7882]">
          Data di spedizione stimata a partire dal 18 settembre
        </p>
        <p className="mt-8 text-sm leading-[22px]">
          Giacca in tela di lana e morbido mohair, con revers in seta motivo
          Intrecciato.
        </p>

        <div className="mt-4">
          {ACCORDION_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-[#e0e0e0]">
              <button className="flex w-full items-center justify-between border-0 bg-none py-4 text-left text-sm">
                <span>{item.label}</span>
                <span>＋</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { RecentlyViewedItem } from "@/types/product";

const ITEMS: RecentlyViewedItem[] = [
  { name: "Gonna in pelle", price: "2500 €", background: "#f0ede8" },
  { name: "Pantaloni in mohair", price: "1200 €", background: "#e8e5e0" },
  { name: "Camicia in seta", price: "980 €", background: "#ebe8e3" },
  { name: "Cintura Intrecciato", price: "650 €", background: "#e3e0db" },
];

export function RecentlyViewed() {
  return (
    <section className="px-8 pt-14 pb-8">
      <div className="mb-8 flex gap-6 border-b border-[#e0e0e0] pb-6">
        <button className="cursor-pointer border-0 bg-transparent p-0 text-sm text-black underline underline-offset-[10px]">
          Visti di recente
        </button>
        <button className="cursor-pointer border-0 bg-transparent p-0 text-sm text-[#6d7882]">
          Potrebbe piacerti anche…
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {ITEMS.map((item) => (
          <div key={item.name} className="cursor-pointer">
            <div
              className="aspect-[3/4] w-full"
              style={{ background: item.background }}
            />
            <p className="mt-3 text-sm">{item.name}</p>
            <p className="text-sm text-[#6d7882]">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

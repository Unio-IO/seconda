import { notoSans } from "@/lib/fonts";

export function StickyBar() {
  return (
    <div
      className={`${notoSans.className} fixed inset-x-0 bottom-0 z-40 flex h-16 w-full items-center justify-between border-t border-[#e0e0e0] bg-white px-4`}
    >
      <span className="flex-1 overflow-hidden text-sm text-ellipsis whitespace-nowrap uppercase">
        Giacca in mohair e lana
      </span>
      <span className="mx-8 shrink-0 text-sm whitespace-nowrap">4200 €</span>
      <button className="h-10 shrink-0 border-0 bg-black px-6 text-sm text-white">
        Pre-ordina
      </button>
    </div>
  );
}

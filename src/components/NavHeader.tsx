"use client";

import { useEffect, useState } from "react";
import { AccountIcon, CartIcon, SearchIcon } from "@/components/icons";

export function NavHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    function update() {
      const y = window.scrollY;
      setScrolled(y > 12);
      const delta = y - lastY;
      if (y > 80 && delta > 4) {
        setHidden(true);
      } else if (delta < -4 || y <= 80) {
        setHidden(false);
      }
      lastY = y;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-[background,box-shadow,transform] duration-[0.25s,0.25s,0.3s] ease-in-out will-change-transform ${
        scrolled ? "bg-white shadow-[0_1px_0_#e0e0e0]" : "bg-transparent"
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="relative flex h-[62px] w-full items-center justify-between gap-[30px] px-5">
        <a
          href="#"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12.5px] whitespace-nowrap tracking-[0.14em]"
        >
          FEMMINA PRIME
        </a>
        <nav className="max-[640px]:invisible">
          <ul className="flex gap-6 overflow-hidden max-[1100px]:gap-4">
            <li>
              <a href="#" className="text-sm whitespace-nowrap max-[1100px]:text-[13px]">
                Articoli
              </a>
            </li>
            <li>
              <a href="#" className="text-sm whitespace-nowrap max-[1100px]:text-[13px]">
                Attività
              </a>
            </li>
            <li>
              <a href="#" className="text-sm whitespace-nowrap max-[1100px]:text-[13px]">
                Scopri
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-4">
          <SearchIcon />
          <AccountIcon />
          <CartIcon />
        </div>
      </div>
    </header>
  );
}

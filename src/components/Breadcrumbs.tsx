export function Breadcrumbs() {
  return (
    <nav className="flex items-center gap-1 px-4 py-6 text-sm">
      <a href="#">Home</a>
      <span className="text-[#6d7882]">&gt;</span>
      <a href="#">Uomo</a>
      <span className="text-[#6d7882]">&gt;</span>
      <span>Abbigliamento</span>
    </nav>
  );
}

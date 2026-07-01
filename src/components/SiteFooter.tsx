import { MailArrowIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e0e0e0] px-4 pt-10 pb-15">
      <div className="mb-10 grid grid-cols-2 gap-10 border-b border-[#e0e0e0] pb-10">
        <div>
          <h3 className="mb-4 text-xs tracking-[0.04em] uppercase">
            Store Locator
          </h3>
          <p className="mb-4 text-sm leading-[22px]">
            Trova il negozio Bottega Veneta più vicino a te e scopri le ultime
            collezioni.
          </p>
          <a href="#" className="text-sm underline underline-offset-2">
            Trova negozio
          </a>
        </div>
        <div>
          <h3 className="mb-4 text-xs tracking-[0.04em] uppercase">
            Iscriviti alla newsletter
          </h3>
          <p className="text-sm leading-[22px]">
            Iscriviti per ricevere aggiornamenti esclusivi sulle collezioni e
            le sfilate.
          </p>
          <div className="mt-4 flex items-center gap-2 border-b border-black pb-1">
            <input
              type="email"
              placeholder="E-mail*"
              className="flex-1 border-0 bg-transparent text-sm text-[#6d7882] outline-none"
            />
            <MailArrowIcon />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div>
          <h4 className="mb-4 text-xs tracking-[0.04em] uppercase">
            Possiamo aiutarti?
          </h4>
          <ul>
            <li>
              <a href="#" className="block text-sm leading-7">
                Servizio clienti
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm leading-7">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm leading-7">
                Il mio ordine
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm leading-7">
                Resi
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm leading-7">
                Cambi
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs tracking-[0.04em] uppercase">
            Bottega for you
          </h4>
          <ul>
            <li>
              <a href="#" className="block text-sm leading-7">
                I Nostri Servizi
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm leading-7">
                Appuntamento in negozio
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm leading-7">
                Certificate of Craft
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs tracking-[0.04em] uppercase">
            Inside Bottega
          </h4>
          <ul>
            <li>
              <a href="#" className="block text-sm leading-7">
                Sostenibilità
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm leading-7">
                Careers
              </a>
            </li>
          </ul>
          <h4 className="mt-6 mb-4 text-xs tracking-[0.04em] uppercase">
            Connect
          </h4>
          <ul>
            <li>
              <a href="#" className="block text-sm leading-7">
                Youtube
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs tracking-[0.04em] uppercase">
            Area legale e cookie
          </h4>
          <ul>
            <li>
              <a href="#" className="block text-sm leading-7">
                Area Legale
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm leading-7">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm leading-7">
                Gestione dei cookie
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm leading-7">
                Impostazioni cookie
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm leading-7">
                Mappa del sito
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-[#e0e0e0] pt-10 text-center text-sm leading-7">
        <p>
          Spedire in: <a href="#" className="underline underline-offset-2">Italia</a>
        </p>
        <p>
          Lingua: <a href="#" className="underline underline-offset-2">Italiano</a>
        </p>
      </div>
    </footer>
  );
}

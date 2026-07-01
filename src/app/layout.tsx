import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Giacca in mohair e lana — Double black · Bottega Veneta",
  description:
    "Giacca in tela di lana e morbido mohair, con revers in seta motivo Intrecciato.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white pb-16 text-[14px] leading-[22px] text-black [font-family:Helvetica,Arial,sans-serif]">
        {children}
      </body>
    </html>
  );
}

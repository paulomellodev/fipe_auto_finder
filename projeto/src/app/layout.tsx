import { Providers } from "@/providers";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MobiAuto - Descubra o preço do seu carro",
  description: "Teste técnico para a empresa Mobiauto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </Providers>
  );
}

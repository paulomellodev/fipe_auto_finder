import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MobiAuto - Resultado da pesquisa",
  description: "Teste técnico para a empresa Mobiauto",
};

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main style={{ height: "100vh", width: "100vw", background: "#dcf5f2" }}>
      {children}
    </main>
  );
}

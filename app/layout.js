import "./globals.css";

export const metadata = {
  title: "Meu Crochê — Organize seus projetos com carinho",
  description:
    "Um espaço para organizar seus projetos de crochê, cuidar dos seus materiais e acompanhar cada criação com carinho.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

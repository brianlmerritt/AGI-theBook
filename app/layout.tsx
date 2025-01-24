import type { Metadata } from "next";
import "./styles/globals.css";


export const metadata: Metadata = {
  title: "AGI:theBook",
  description: "The newest AI book by Brian.L.Merritt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

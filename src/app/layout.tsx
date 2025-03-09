import "./globals.css";
import { Turret_Road } from "next/font/google";

const turretRoad = Turret_Road({
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${turretRoad.className} antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPECTRUM Next Project",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="copyright" id="copyright">
          &copy;
          <script>
            document .getElementById("copyright")
            .appendChild(document.createTextNode(new Date().getFullYear()));
          </script>
          Developed By FANGPLAY SIRIRAK All rights reserved.
        </div>
      </body>
    </html>
  );
}

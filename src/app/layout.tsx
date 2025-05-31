import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Topbar } from "./components/topNav";
import { SideNav } from "./components/sideNav";
import { QueryProvider } from "./components/queryProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Akinia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <QueryProvider>
          <Topbar />
          <div className="min-h-screen w-full flex flex-row justify-between">
            <SideNav />
            <main className="flex-1 ml-[200px] mt-[47px]">{children}</main>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}

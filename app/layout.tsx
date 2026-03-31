import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const ibmSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-sans",
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-mono",
  display: "swap",
});

export const metadata = {
  title: "Muhammad Risto Abrar",
  description: "Personal website — full-stack & Web3 developer",
};

const themeInitScript = `(function(){try{var d=document.documentElement;var t=localStorage.getItem("theme");var dark=t==="dark"||!t&&window.matchMedia("(prefers-color-scheme: dark)").matches;if(dark)d.classList.add("dark");else d.classList.remove("dark");}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ibmSans.variable} ${ibmMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-zinc-50 font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "MUHAMMAD RISTO ABRAR",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-black">
        {children}
      </body>
    </html>
  );
}
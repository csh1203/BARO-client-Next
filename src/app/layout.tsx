import Nav from "@/components/common/Nav";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}

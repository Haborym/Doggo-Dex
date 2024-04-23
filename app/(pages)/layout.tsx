import { Navbar } from "@/components/navbar";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container py-5 mx-auto justify-between text-center">
      <Navbar />
      {children}
    </main>
  );
}

import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarConditional from "./SidebarConditional";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EduLearn Platform",
  description: "Education portal for students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider>
          <SidebarConditional /> {/* Include the SidebarConditional */}
          <main className="flex min-h-screen w-full">
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}

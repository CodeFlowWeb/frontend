import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ServiceWorkerProvider } from "@/components/service-worker-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Code Flow",
  description: "Code flow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ServiceWorkerProvider />
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}

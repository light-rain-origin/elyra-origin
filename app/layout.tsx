import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Elyra Research Institute - AI研究与虚拟角色实验",
    template: "%s | Elyra",
  },
  description: "Elyra Research Institute - 探索人工智能的边界，构建智能代理系统，创造虚拟角色，构建数字艺术空间",
  keywords: ["AI", "人工智能", "虚拟角色", "艾丽娅", "Elyra", "研究实验室", "数字世界", "虚拟实验"],
  authors: [{ name: "Elyra Team" }],
  openGraph: {
    title: "Elyra Research Institute",
    description: "探索人工智能的边界，构建智能代理系统，创造虚拟角色，构建数字艺术空间",
    url: "https://www.elyra.cn",
    siteName: "Elyra Research Institute",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elyra Research Institute",
    description: "探索人工智能的边界，构建智能代理系统，创造虚拟角色，构建数字艺术空间",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-brand-primary relative overflow-hidden">
            {/* Noise texture overlay */}
            <div className="noise-overlay" />

            {/* Radial glow effects */}
            <div className="radial-glow-purple" />
            <div className="radial-glow-cyan" />

            <Navbar />
            <main className="relative z-10">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

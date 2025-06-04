import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "asset App",
  description: "NEXT.jsの家計簿アプリ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h1>家計簿アプリ</h1>
        <ul>
          <li>
            <Link href='/'>ホーム</Link>
          </li>
          <li>
            <Link href='/form'>現金で払った</Link>
          </li>
          <li>
            <Link href='/realtime'>リアタイ支出</Link>
          </li>
          <li>
            <Link href='/monthly'>月別収支管理</Link>
          </li>
          <li>
            <Link href='/asset'>資産分析</Link>
          </li>
          <li>
            <Link href='/future'>将来予測</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "찐이지 실행전쟁 1기 | 4주 실행 강제 프로그램",
  description: "콘텐츠를 해야 하는 건 알지만 실행하지 못하는 원장님을 위한 4주 실행 강제 프로그램. 완벽이 아니라 업로드가 목표입니다.",
  keywords: "콘텐츠 마케팅, 실행 프로그램, 원장님, 뷰티 마케팅, 콘텐츠 제작",
  openGraph: {
    title: "찐이지 실행전쟁 1기",
    description: "4주 실행 강제 프로그램 - 완벽이 아니라 업로드가 목표",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}

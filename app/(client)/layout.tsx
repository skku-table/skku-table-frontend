//하단배너
// app/(client)/layout.tsx
import Link from "next/link";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <main className="flex-grow">{children}</main>

      {/* 하단 네비게이션 */}
      <nav className="h-16 bottom-0 w-full bg-white flex justify-around items-center shadow-2xl fixed">
        <Link href="/">홈</Link>
        <Link href="/search">검색</Link>
        <Link href="/reservation">예약</Link>
        <Link href="/myprofile">내 프로필</Link>
      </nav>
    </div>
  );
}
//하단배너
// app/(client)/layout.tsx
import Link from "next/link";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>

      {/* 하단 네비게이션 */}
      <nav className="h-16 bg-gray-100 flex justify-around items-center border-t">
        <Link href="/">홈</Link>
        <Link href="/search">검색</Link>
        <Link href="/reservation">예약</Link>
        <Link href="/myprofile">내 프로필</Link>
      </nav>
    </div>
  );
}
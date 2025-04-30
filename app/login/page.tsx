'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { mockUsers } from '@/src/mock/login'; // 방금 만든 파일 import

export default function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    const user = mockUsers.find(
      (u) => u.id === id && u.password === password
    );

    if (user) {
      // 로그인 성공: 토큰은 없지만 userRole 저장
      localStorage.setItem('userRole', user.userRole);

      if (user.userRole === 'admin') {
        router.push('/admin');
      } else {
        router.push('/');
      }
    } else {
      alert('로그인 실패! 아이디 또는 비밀번호가 틀렸습니다.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">로그인</h1>
      <input
        className="border p-2 mb-2"
        type="text"
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        className="border p-2 mb-2"
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleLogin}
      >
        로그인
      </button>
    </div>
  );
}

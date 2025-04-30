'use client';

import { IoHeart } from 'react-icons/io5';
import Image from 'next/image';
import DetailLayout from '@/components/DetailLayout';

type Props = {
  params: {
    festivalId: string;
    boothId: string;
  };
};

// Mock 데이터 (나중엔 fetch로 대체 가능)
const mockBooth = {
  pubId: 1,
  festivalId: 1,
  name: '다같이 추억 숲으로',
  host: '기계공학과',
  location: '삼성학술정보관 앞 잔디밭 3번 부스',
  description: '시원한 생맥주와 안주를 즐길 수 있는 주점입니다.',
  openTime: '17:00',
  closeTime: '23:00',
  startDate: '2025-05-16',
  endDate: '2025-05-17',
  likeCount: 24,
  posterUrl: '/festival1poster.png',
  eventImageUrl: '/images/booth-event.png',
};

export default function BoothDetailPage({ params }: Props) {
  const booth = mockBooth;

  return (
    <DetailLayout
      title="성균관대학교"
      footer={
        <button className="w-full py-3 bg-green-600 text-white font-semibold text-lg rounded-lg">
          예약하기
        </button>
      }
    >
      {/* 포스터 이미지 */}
      <img
        src={booth.posterUrl}
        alt="축제 포스터"
        className="w-full rounded-lg shadow"
      />

      {/* 부스 기본 정보 (축제 페이지와 동일하게 구성) */}
      <div>
        <h2 className="text-xl font-semibold mt-4">{booth.description}</h2>
        <p className="mt-1">📅 {booth.startDate} ~ {booth.endDate}</p>
        <p>📍 {booth.location}</p>
      </div>

      {/* 제목 + 좋아요 */}
      <div className="flex justify-between items-center border-t pt-4">
        <h1 className="text-xl font-semibold">{booth.name}</h1>
        <div className="flex items-center text-red-500">
          <IoHeart size={20} className="mr-1" />
          <span>{booth.likeCount}</span>
        </div>
      </div>

      {/* 상세 정보 */}
      <div className="text-sm space-y-1">
        <h2 className="font-semibold text-base mb-1">상세 정보</h2>
        <p>1인 입장 가능</p>
        <p>최대 4명까지 예약 가능</p>
        <p>선입금 2만원</p>
      </div>

      {/* 이벤트 배너 이미지 */}
      <Image
        src={booth.eventImageUrl}
        alt="이벤트"
        width={500}
        height={300}
        className="w-full object-cover rounded-lg"
      />
    </DetailLayout>
  );
}

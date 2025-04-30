// app/(client)/(main)/[festivalId]/page.tsx

import Header from "@/components/Headers";

type Props = {
    params: {
        festivalId: string;
    };
};

type Boothtype= {
    boothId:number;
    posterImageUrl: string;
}
  
// 하드코딩된 mock 데이터
const mockFestivalDetail = {
    festivalId: 1,
    posterImageUrl: '/festival1poster.png',
    name: "2025 성균관대 대동제",
    startDate: "2025-05-15",
    endDate: "2025-05-16",
    location: "율전 캠퍼스",
    description: "율전대동제",
    LikeCount: 40,
    booths: [
        {
        boothId: 101,
        posterImageUrl: "/booth1.png",
        },
        {
        boothId: 102,
        posterImageUrl: "/booth2.png",
        },
        {
        boothId: 103,
        posterImageUrl: "/booth3.png",
        },
    ],
    mapImageUrl: "/festivalmap.png",
};

export default function FestivalDetailPage({ params }: Props) {

    //const {festivalId}=params;
    //let festival;
    // try {
    //     const res= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/festivals/${festivalId}`);
    //     if (!res.ok) throw new Error('api error');
    //     const data=await res.json();
    //     festival=data;
    // }catch (err) {
    //     festival = mockFestivalDetail;
    // }
    const festival = mockFestivalDetail;

    return (
        <>
            <Header isBackButton={true} title={festival.name}/>
            <div className="relative p-4 pt-16 space-y-6">
                {/* 뒤로가기 & 제목 */}
                

                {/* 포스터 */}
                <img
                    src={festival.posterImageUrl}
                    alt="축제 포스터"
                    className="w-full rounded-lg shadow"
                />

                {/* 간단 정보 */}
                <div>
                    <h2 className="text-xl font-semibold mt-4">{festival.description}</h2>
                    <p className="mt-1">📅 {festival.startDate} ~ {festival.endDate}</p>
                    <p>📍 {festival.location}</p>
                </div>

                {/* 부스 목록 */}
                <div>
                    <h3 className="font-semibold mb-2">부스</h3>
                    <div className="flex space-x-3 overflow-x-auto">
                    {festival.booths.map((booth: Boothtype) => (
                        <img
                        key={booth.boothId}
                        src={booth.posterImageUrl}
                        alt={`부스 ${booth.boothId}`}
                        className="w-32 h-32 object-cover rounded"
                        />
                    ))}
                    </div>
                </div>

                {/* 지도 */}
                <div>
                    <h3 className="font-semibold mb-2">지도</h3>
                    <img
                    src={festival.mapImageUrl}
                    alt="지도 이미지"
                    className="w-full rounded-lg shadow"
                    />
                </div>
            </div>
        </>
    );
}

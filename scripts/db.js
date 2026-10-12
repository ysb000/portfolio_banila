//db.js 

//4 베스트
const best_products = [
    {
        id: 1,
        image: "images/4/4-1.jpg",
        hoverImage: "images/4/4-1-2.jpg",
        name: "[크림 글레이즈 에디션] 커버리셔스 얼티밋 화이트 쿠션 + 파우치 키링",
        description: "크림 글레이즈 에디션 팩트 본품 증정!",
        originalPrice: 46800,
        salePrice: 35900,
        discountRate: 30
    },
    {
        id: 2,
        image: "images/4/4-2.jpg",
        hoverImage: "images/4/4-2-2.jpg",
        name: "[정한 Pick] 클린 잇 제로 아나스타티카 클렌징밤 리밸런싱 100ml",
        description: "클렌징부터 피부 장벽 개선까지! 프리미엄 클렌징 밤",
        originalPrice: null,
        salePrice: 50000,
        discountRate: null
    },
    {
        id: 3,
        image: "images/4/4-3.jpg",
        hoverImage: null,
        name: "[올인원 클렌징밤] 클린 잇 제로 클렌징밤 기획 SET",
        description: "180ml + 100ml + 트래블 키트 구성 오리지널/포어/카밍 3종 택1",
        originalPrice: 61500,
        salePrice: 40000,
        discountRate: 35
    },
    {
        id: 4,
        image: "images/4/4-4.jpg",
        hoverImage: null,
        name: "[포어SET] 클린 잇 제로 포어 클렌징밤 180ml + 팩 클렌저 + 클레이 마스크",
        description: "바닐라코 추천하는 번들 클렌징 루틴",
        originalPrice: 70200,
        salePrice: 40000,
        discountRate: 43
    },
    {
        id: 5,
        image: "images/4/4-5.jpg",
        hoverImage: "images/4/4-5-2.jpg",
        name: "스머징 립 펜슬 (12colors)",
        description: "NEW 컬러 출시! SNS에서 소문난 오버립 펜슬!",
        originalPrice: null,
        salePrice: 14000,
        discountRate: null
    },
    {
        id: 6,
        image: "images/4/4-6.jpg",
        hoverImage: null,
        name: "[바닐라코 입문 SET] 브라이트 트래블 키트 + 화이트 어 에어 쿠션 + 프라이머",
        description: "바닐라코 BEST 클렌징 & 베이스 SET",
        originalPrice: 65600,
        salePrice: 40000,
        discountRate: 39
    },
    {
        id: 7,
        image: "images/4/4-7.jpg",
        hoverImage: "images/4/4-7-2.jpg",
        name: "[정한 PICK] 무드 온 라인 앤 블렌드 아이라이너 (10colors)",
        description: "곰손도 쉽게 빠르게 완성하는 아이라인",
        originalPrice: null,
        salePrice: 12000,
        discountRate: null
    },
    {
        id: 8,
        image: "images/4/4-8.jpg",
        hoverImage: "images/4/4-8-2.jpg",
        name: "[품절재입고] 화이트 쿠션 에어 미니 (2colors)",
        description: "1만개 판매대란! 미니 쿠션 재입고",
        originalPrice: 16000,
        salePrice: 12800,
        discountRate: 20
    }
];

//6-1 온라인 온리 - 클렌징
const online_cleansing_products = [
    {
        id: 1,
        image: "images/6-1/6-1.jpg",
        hoverImage: "images/6-1/6-1-2.jpg",
        name: "[1+1] 클린 잇 제로 클렌징밤 트래블 키트 3ml*15개입",
        description: "간편하게 챙기는 멀티 트래블 키트",
        originalPrice: 19800,
        salePrice: 13800,
        discountRate: 30
    },
    {
        id: 2,
        image: "images/6-1/6-2.jpg",
        hoverImage: "images/6-1/6-2-2.jpg",
        name: "[1+1] 클린 잇 제로 클렌징밤 100ml",
        description: "부드럽고 촉촉한 밀착 클렌징",
        originalPrice: 42000,
        salePrice: 35900,
        discountRate: 15
    },
    {
        id: 3,
        image: "images/6-1/6-3.jpg",
        hoverImage: null,
        name: "[3종 코디 샵덕] 클렌징 제로 클렌징밤 대용량 3개 골라담기 SET",
        description: "피부따라 골라쓰는 클렌징",
        originalPrice: 81000,
        salePrice: 59900,
        discountRate: 26
    },
    {
        id: 4,
        image: "images/6-1/6-4.jpg",
        hoverImage: "images/6-1/6-4-2.jpg",
        name: "[웹사이트 단독특가 SET] 클렌징 제로 클렌징밤 대용량 3개 SET",
        description: "피부 위 더 완벽한 피부",
        originalPrice: 56700,
        salePrice: 54055,
        discountRate: 5
    },
    {
        id: 5,
        image: "images/6-1/6-5.jpg",
        hoverImage: "images/6-1/6-5-2.jpg",
        name: "클렌징 제로포 원픽 클렌징폼 대용량 3개 SET",
        description: "마무리감 1위 클렌징폼",
        originalPrice: 83400,
        salePrice: 59900,
        discountRate: 28
    },
    {
        id: 6,
        image: "images/6-1/6-6.jpg",
        hoverImage: "images/6-1/6-6-2.jpg",
        name: "클린 잇 제로 코어 클렌징밤 대용량 3개 SET",
        description: "예민한 피부 완벽 관리 클렌징밤",
        originalPrice: 83400,
        salePrice: 59900,
        discountRate: 28
    },
    {
        id: 7,
        image: "images/6-1/6-7.jpg",
        hoverImage: "images/6-1/6-7-2.jpg",
        name: "클린 잇 제로 세비 클렌징밤 대용량 3개 SET",
        description: "산뜻한 강조 수분 클렌징밤",
        originalPrice: 84400,
        salePrice: 59900,
        discountRate: 29
    },
    {
        id: 8,
        image: "images/6-1/6-8.jpg",
        hoverImage: null,
        name: "[단독 SET] 클린 잇 제로 멀티 폼베리어 SET",
        description: "클렌징폼 150ml + 150ml + 트래블 킷 + 파우치 묵사",
        originalPrice: 51900,
        salePrice: 49305,
        discountRate: 5
    },
    {
        id: 9,
        image: "images/6-1/6-9.jpg",
        hoverImage: null,
        name: "[무이자 할부] 클린 잇 제로 로지 포 리미티드",
        description: "클렌징밤 180ml + 로지토닉 리프레싱 미니페달 가스크 트래블 키트",
        originalPrice: 67800,
        salePrice: 40000,
        discountRate: 41
    },
    {
        id: 10,
        image: "images/6-1/6-10.jpg",
        hoverImage: null,
        name: "[보이셋] 클렌징 잇 제로 클렌징밤 180ml + 석 클렌저 + 클레이 마스크",
        description: "바닐라코가 추천하는 세준경 클렌징 루틴",
        originalPrice: 73300,
        salePrice: 40000,
        discountRate: 45
    },
    {
        id: 11,
        image: "images/6-1/6-11.jpg",
        hoverImage: null,
        name: "[자유 참가] 클렌징 잇 제로 크림 셋!",
        description: "클렌징밤 180ml + 리가스 포밍 곽 클렌저 + 수딩 시카 숨케밍 개스크 트래블 키트",
        originalPrice: 67800,
        salePrice: 40000,
        discountRate: 41
    },
    {
        id: 12,
        image: "images/6-1/6-12.jpg",
        hoverImage: null,
        name: "[올인원 클렌징용] 클린 잇 제로 트래블 킷 1호",
        description: "180ml + 100ml + 트래블 킷 구성 유리미니세이프키밍 3종 팩 1",
        originalPrice: 67800,
        salePrice: 40000,
        discountRate: 35
    }
];

//6-2 온라인 온리 - 세트
const online_makeup_products = [
    {
        id: 1,
        image: "images/6-2/6-13.jpg",
        hoverImage: null,
        name: "[공식몰 단독 SET] 커버리셔스 얼티밋 화이트 쿠션 세트 + 리필 + 미니 파우치 + 퍼프 5p 증정",
        description: "피부 위에 가득 채우는 바닐라코",
        originalPrice: 64000,
        salePrice: 41500,
        discountRate: 35
    },
    {
        id: 2,
        image: "images/6-2/6-14.jpg",
        hoverImage: null,
        name: "[바닐라코 듀오 SET] 프라임 쿠션 키트 + 클린 잇 제로 쿠션 + 프라이머 클래식 세트(클렌징밤트래블키트)",
        description: "올인원 클렌징루틴패스",
        originalPrice: 54000,
        salePrice: 40000,
        discountRate: 26
    },
    {
        id: 3,
        image: "images/6-2/6-15.jpg",
        hoverImage: null,
        name: "[플랜 SET] 오더 쿠션 데이 - 21N + 달팡05 + 컬러 00 + 클렌징 스틱",
        description: "세트로 구매로 일석 이조의 메이크업 완성!",
        originalPrice: 58000,
        salePrice: 40000,
        discountRate: 31
    },
    {
        id: 4,
        image: "images/6-2/6-16.jpg",
        hoverImage: null,
        name: "[플랜 SET] 오더 쿠션 데이 - 시 21C + 릴렉싱 PK05 + 컬러 탕 00 + 클렌징 스틱",
        description: "세트로 구매로 일석 이조의 메이크업 완성!",
        originalPrice: 58000,
        salePrice: 40000,
        discountRate: 31
    },
    {
        id: 5,
        image: "images/6-2/6-17.jpg",
        hoverImage: null,
        name: "[세티아런치] 마이스 쿠션/에어 + 토이밍 크리에어 틱서더너",
        description: "메이크업 강력 극장",
        originalPrice: 42000,
        salePrice: 26900,
        discountRate: 36
    },
    {
        id: 6,
        image: "images/6-2/6-18.jpg",
        hoverImage: null,
        name: "[브램베티져] 마이스 쿠션/에어 + 드라밍 트리머와 파우더 미니",
        description: "보송 메이크업 완성",
        originalPrice: 42000,
        salePrice: 26900,
        discountRate: 36
    }
];

//6-3 온라인 온리 - 미니
const online_mini_products = [
    {
        id: 1,
        image: "images/6-3/6-19.jpg",
        hoverImage: null,
        name: "[속초] 메이크업 쿠션 파운데이션 + 누에벨 쿠션",
        description: "뽀송하게 꼭 들어가는 바닐라코",
        originalPrice: 36000,
        salePrice: 24900,
        discountRate: 31
    },
    {
        id: 2,
        image: "images/6-3/6-20.jpg",
        hoverImage: null,
        name: "[무시서 SET] 화이트 쿠션 마이 테이 K + 샤이 벨벳 틴트 파니",
        description: "타우지 필수 수머니 패키지",
        originalPrice: 27000,
        salePrice: 18900,
        discountRate: 30
    },
    {
        id: 3,
        image: "images/6-3/6-21.jpg",
        hoverImage: "images/6-3/6-21-2.jpg",
        name: "[화이트컴팩트] 화이트 쿠션 메가키트 (5colors)",
        description: "1단계 래커스웨이 미니 구성 재입고",
        originalPrice: 36000,
        salePrice: 12900,
        discountRate: 20
    }
];
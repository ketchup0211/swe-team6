// API Base URL
export const API_BASE_URL = 'https://budding-orga.onrender.com';

// API Endpoints
export const API_ENDPOINTS = {
  // Item 관련 엔드포인트 (목록 조회, 생성, 구매, 수정, 사용자 보유 아이템 조회)
  ITEM: {
    LIST: '/item', // GET: 모든 아이템 조회
    CREATE: '/item', // POST: 아이템 생성
    BUY: '/item/buy', // POST: 아이템 구매
    UPDATE: (itemId) => `/item/${itemId}`, // PATCH: 아이템 변경
    LIST_BY_USER: (userId) => `/item/user/${userId}/items`, // GET: 유저 보유 아이템
  },

  // Friendship 관련 엔드포인트 (친구 추가, 내 친구 보기)
  FRIENDSHIP: {
    CREATE: '/friendships', // POST
    LIST_BY_USER: (userId) => `/friendships/${userId}`, // GET
  },

  // Check-in 관련 엔드포인트 (출석 확인/생성)
  CHECKIN: {
    GET: (userId) => `/checkIns/${userId}`, // GET: 오늘 출석 했는지 확인
    CREATE: (userId) => `/checkIns/${userId}`, // POST: 출석 체크
  },

  // Challenge 관련 엔드포인트 (내 챌린지 확인/생성, 인증업로드, 참가자 리스트/카운트)
  CHALLENGE: {
    GET_BY_USER: (userId) => `/challenges/user/${userId}`, // GET: 사용자의 챌린지 목록
    GET_DETAIL: (challengeId) => `/challenges/${challengeId}`, // GET: 챌린지 상세 정보
    CREATE_FOR_USER: (userId) => `/challenges/${userId}`, // POST
    CREATE_CERTIFICATION: (challengeId) => `/challenges/${challengeId}/certifications`, // POST
    GET_PARTICIPANTS_LIST: (challengeId) => `/challenges/${challengeId}/participants/List`, // GET
    GET_PARTICIPANTS_COUNT: (challengeId) => `/challenges/${challengeId}/participants/count`, // GET
  },

  // Avatar 관련 엔드포인트 (아바타 설정/조회)
  AVATAR: {
    SET: (userId) => `/avatars/${userId}/setAvatar`, // POST
    GET: (userId) => `/avatars/${userId}/getAvatar`, // GET
  },

  // Auth 관련 엔드포인트 (회원가입/로그인)
  AUTH: {
    REGISTER: '/auth/register', // POST
    LOGIN: '/auth/login', // POST
  },

  // Point 관련 엔드포인트 (유저 포인트 조회)
  POINT: {
    GET_BY_USER: (userId) => `/points/${userId}`, // GET
  },

  // Hello 엔드포인트
  HELLO: '/', // GET: 인사하세요!
};

// API 요청 생성 함수
export const createApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

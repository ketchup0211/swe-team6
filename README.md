# Budding Frontend

> 건강 챌린지 기반 커뮤니티 플랫폼

## 📋 프로젝트 소개

친구들과 함께 건강 챌린지를 생성하고, 캐릭터를 키우며 목표를 달성하는 게이미피케이션 서비스입니다.

## 🛠 기술 스택

- **React** 19.1.1
- **Vite** 7.1.7
- **React Router** 7.9.4
- **Redux Toolkit** 2.9.0
- **React Query** 5.90.2
- **Axios** 1.12.2
- **CSS Modules**

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

### 린트

```bash
npm run lint
```

## 📁 프로젝트 구조

```
src/
├── assets/          # 이미지, 아이콘
├── components/      # 재사용 컴포넌트
│   ├── character/
│   ├── create-challenge/
│   ├── home/
│   ├── layout/
│   ├── my-challenge/
│   └── ui/
├── pages/           # 페이지 컴포넌트
│   ├── home/
│   ├── character/
│   ├── my-challenge/
│   ├── create-challenge/
│   ├── shop/
│   └── profile/
└── shared/          # 라우팅 등 공통 설정
```

## 🎯 주요 기능

- 🏃‍♂️ **챌린지 생성**: 친구들과 함께 건강 챌린지 시작
- 🎨 **캐릭터 커스터마이징**: 포인트로 캐릭터 꾸미기
- 🏆 **랭킹 시스템**: 실시간 참여자 순위 확인
- 📸 **인증 시스템**: 사진으로 챌린지 인증
- 🎁 **포인트샵**: 챌린지 완료 시 보상 획득

## 🌐 페이지 구성

- `/` - 홈 (챌린지 현황)
- `/character` - 캐릭터 페이지
- `/my-challenge` - 진행중인 챌린지 목록
- `/create-challenge` - 챌린지 생성
- `/profile` - 마이페이지

## 📄 라이선스

MIT

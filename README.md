# 감정 일기장

React를 활용한 감정 일기장 웹 애플리케이션입니다. 일상의 감정을 기록하고 관리할 수 있습니다.

## 주요 기능

### 1. 일기 작성
- 날짜 선택
- 5가지 감정 선택 (매우 좋음, 좋음, 그럭저럭, 나쁨, 끔찍함)
- 일기 내용 작성

### 2. 일기 목록 조회
- 월별 일기 목록 조회
- 최신순/오래된순 정렬
- 감정별 필터링 (전체, 좋은 감정만, 안 좋은 감정만)

### 3. 일기 수정 및 삭제
- 작성한 일기 수정
- 일기 삭제

### 4. 일기 상세 조회
- 개별 일기 상세 내용 확인

## 기술 스택

- **React** 19.1.1
- **React Router DOM** 7.9.4
- **Vite** 7.1.7
- **ESLint** 9.36.0

## 프로젝트 구조

```
src/
├── App.jsx                    # 메인 앱 컴포넌트, Context API 설정
├── main.jsx                   # 애플리케이션 진입점
├── util.jsx                   # 유틸리티 함수
├── pages/
│   ├── Home.jsx              # 홈 페이지 (일기 목록)
│   ├── New.jsx               # 새 일기 작성 페이지
│   ├── Edit.jsx              # 일기 수정 페이지
│   └── Diary.jsx             # 일기 상세 페이지
└── component/
    ├── Button.jsx            # 공통 버튼 컴포넌트
    ├── Header.jsx            # 페이지 헤더 컴포넌트
    ├── Editor.jsx            # 일기 편집기 컴포넌트
    ├── EmotionItem.jsx       # 감정 선택 아이템
    └── DiaryList.jsx         # 일기 목록 컴포넌트
```

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 실행되면 브라우저에서 `http://localhost:5173`으로 접속할 수 있습니다.

### 빌드

```bash
npm run build
```

### 프리뷰

```bash
npm run preview
```

## 주요 컴포넌트 설명

### App.jsx
- Context API를 사용한 전역 상태 관리
- `DiaryStateContext`: 일기 데이터 상태
- `DiaryDispatchContext`: 일기 CRUD 함수들
- `useReducer`를 통한 상태 관리 (CREATE, UPDATE, DELETE, INIT)

### DiaryList.jsx (src/component/DiaryList.jsx:18-29)
- 일기 목록을 정렬하고 표시
- 최신순/오래된순 정렬 기능
- 감정별 필터링 기능

### Editor.jsx
- 일기 작성/수정을 위한 폼 컴포넌트
- 날짜, 감정, 내용 입력 관리

## 라우팅

- `/` - 홈 페이지 (일기 목록)
- `/new` - 새 일기 작성
- `/diary/:id` - 일기 상세 보기
- `/edit/:id` - 일기 수정

## 라이선스

Private

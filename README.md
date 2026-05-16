<div align="center">
<h2> 머뭇 </h2>
<img width="1920" height="3558" alt="image" src="https://github.com/user-attachments/assets/1743adf8-bb86-4e64-bdd1-b246481d1a24" />

<p>부모와 자녀가 서로에게 머뭇거리던 말을 꺼내는 공간</p>
</div>

<h2> ✨ 머뭇 주요 기능 </h2>

<h3> 1️⃣ 질문 카드 </h3>
<div><strong>AI 큐레이션 질문</strong> "어릴 때 꿈이 뭐였어요?", "나한테 가장 해주고 싶은 말은?" 처럼 평소엔 맥락이 없어서 못 물어보던 20개의 대화 주제를 카드 형태로 제공합니다. 질문이 먼저 주어지면 꺼내는 부담이 사라집니다. <br/></div>

<h3> 2️⃣ 영상 · 음성 답변 </h3>
<div><strong>온기의 보존</strong> 텍스트가 아닌 영상과 음성으로 답변을 남깁니다. 부모님의 목소리, 표정, 말하다 잠깐 멈추는 그 순간까지 — 글로는 담을 수 없는 것들이 기록됩니다. <br/></div>

<h3> 3️⃣ 링크 초대 </h3>
<div><strong>앱 설치 없이</strong> 자녀가 링크를 생성해 공유하면, 부모님은 클릭 한 번으로 바로 웹으로 접속할 수 있습니다. 대화를 시작하는 모든 문턱을 낮춥니다. <br/></div>

<h2> 👥 Team </h2>
<table align="center">
    <tr align="center">
      <td style="min-width: 150px;">
            <a href="https://github.com/haeni82">
              <img src="https://github.com/haeni82.png" width="200">
              <br />
              <b>haeni82</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/pwc2002">
              <img src="https://github.com/pwc2002.png" width="200">
              <br />
              <b>pwc2002</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/hdg0116">
              <img src="https://github.com/hdg0116.png" width="200">
              <br />
              <b>hdg0116</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/seojin15">
              <img src="https://github.com/seojin15.png" width="200">
              <br />
              <b>seojin15</b>
            </a>
        </td>
    </tr>
    <tr align="center">
       <td>👑 이해니 <br/></td>
       <td>박우찬 <br/></td>
       <td>한다경 <br/></td>
       <td>황서진 <br/></td>
    </tr>
    <tr align="center">
   <td>레포지토리 생성 및 eslint & prettier 설정 <br/> 폴더구조 세팅 <br/> API 연결</td>
   <td>서비스 배포 <br/> 비디오 Presigned URL 구현</td>
   <td>이슈/PR 템플릿 설정<br/> PR 라벨링 및 리뷰어/Assign 지정 자동화 설정 <br/> 뷰 조립</td>
   <td>tailwind 설정 및 디자인 시스템 세팅 <br/> 공통 컴포넌트 구현</td>
</tr>
</table>

<h2> 🛠 기술스택 </h2>

```
- React
- TypeScript
- Vite
- React Router DOM
- ESLint & Prettier
- tailwind css
- axios
```

<br/>

<h2> 📄 컨벤션 및 브랜치 전략 </h2>

<h3> 커밋 컨벤션 </h3>

| 커밋 유형 | 의미 |
| --------- | ---- |
| init | 프로젝트 초기 세팅 |
| feat | 새로운 기능 추가 |
| fix | 버그 수정 |
| hotfix | 급하게 치명적인 버그를 고쳐야 하는 경우 |
| style | 스타일 코드 변경 |
| refactor | 코드 리팩토링 |
| chore | 패키지 매니저 수정, 기타 수정 (ex. .gitignore) |
| docs | 문서 수정 |
| build | 빌드 시스템 또는 외부 종속성 변경 |
| ci | CI 설정 파일 및 스크립트 수정 |
| asset | svg, 이미지 등 디자인 파일 추가 |
| type | 타입 수정 |
| rename | 파일 또는 폴더명 수정/이동 |
| remove | 파일 삭제 |
| revert | 이전 커밋 되돌리기 |
| perf | 성능 개선 |
| test | 테스트 코드 추가 |

<h3> 브랜치 전략 </h3>

| 브랜치 | 용도 |
| ------ | ---- |
| `main` | 배포 가능한 브랜치, 모든 작업 완료 후 최종 merge |
| `develop` | 기능 브랜치들을 merge하는 통합 브랜치 |
| `init/기능명/#issue` | 초기 세팅 브랜치 |
| `feat/기능명/#issue` | 새로운 기능 개발 브랜치 |
| `fix/기능명/#issue` | 버그 수정 브랜치 |
| `refactor/기능명/#issue` | 리팩토링 브랜치 |

> 💡 기능명은 케밥 케이스 사용 / merge한 브랜치는 꼭 삭제하기 !

<br/>

<h2> 📁 프로젝트 구조 </h2>

```
src/
├── app/                              # 앱 전역 설정
│   ├── App.tsx                       # 최상위 App 컴포넌트 (RouterProvider)
│   └── main.tsx                      # React 앱 진입점
│
├── pages/                            # 페이지 단위 화면 관리
│   ├── home/                         # 홈 - 오늘의 질문 + 지난 답변 4개
│   │   ├── api/                      # 홈 관련 API (질문, 최근 답변 조회)
│   │   │   └── index.ts
│   │   ├── components/               # 홈 전용 컴포넌트 (질문 카드, 답변 미리보기)
│   │   │   └── index.ts
│   │   ├── hooks/                    # 홈 전용 커스텀 훅
│   │   │   └── index.ts
│   │   └── home.tsx                  # 홈 페이지 컴포넌트
│   │
│   ├── archive/                      # 기록 - 답변 아카이브
│   │   ├── api/                      # 기록 관련 API (전체 답변 기록 조회)
│   │   │   └── index.ts
│   │   ├── components/               # 기록 전용 컴포넌트 (기록 리스트, 카드)
│   │   │   └── index.ts
│   │   ├── hooks/                    # 기록 전용 커스텀 훅
│   │   │   └── index.ts
│   │   └── archive.tsx               # 기록 페이지 컴포넌트
│   │
│   ├── answer/                       # 답변하기 - 동영상 업로드
│   │   ├── api/                      # 답변 관련 API (답변 업로드, 동영상 처리)
│   │   │   └── index.ts
│   │   ├── components/               # 답변 전용 컴포넌트 (동영상 업로드, 녹화)
│   │   │   └── index.ts
│   │   ├── hooks/                    # 답변 전용 커스텀 훅 (녹화, 업로드 상태)
│   │   │   └── index.ts
│   │   └── answer.tsx                # 답변하기 페이지 컴포넌트
│   │
│   └── answer-detail/                # 답변 상세보기
│       ├── api/                      # 답변 상세 API (특정 답변 조회)
│       │   └── index.ts
│       ├── components/               # 답변 상세 컴포넌트 (동영상 플레이어, 정보)
│       │   └── index.ts
│       ├── hooks/                    # 답변 상세 커스텀 훅
│       │   └── index.ts
│       └── answer-detail.tsx         # 답변 상세 페이지 컴포넌트
│
├── routes/                           # 라우팅 경로 설정
│   ├── index.tsx                     # 라우터 설정 (createBrowserRouter)
│   ├── layout.tsx                    # Layout 컴포넌트 (Outlet)
│   └── path.ts                       # 라우트 경로 상수
│
└── shared/                           # 전역 공통 레이어
    ├── api/                          # axios 인스턴스 및 공통 API 설정
    │   └── index.ts
    ├── assets/                       # 이미지, 아이콘 등 정적 리소스
    ├── constants/                    # 공통 상수 (API 엔드포인트, 앱 설정)
    │   └── index.ts
    ├── hooks/                        # 공통 커스텀 훅
    │   └── index.ts
    ├── styles/                       # 전역 스타일
    │   ├── App.css
    │   └── index.css
    ├── types/                        # 공통 타입 (Question, Answer, ApiResponse)
    │   └── index.ts
    ├── ui/                           # 공통 UI 컴포넌트
    │   └── index.ts
    └── utils/                        # 공통 유틸 함수
        └── index.ts

```

<br/>

<h2> 🫶 우리 조 그라운드 룰 </h2>
<div><strong>규칙 1</strong> 질문하는 걸 겁내지 않기! <br/></div>
<div><strong>규칙 2</strong> 말투는 언제나 둥글둥글하게! <br/></div>
<div><strong>규칙 3</strong> 내 의견을 타 파트에 전달할 때 근거있게 말하기 <br/></div>
<div><strong>규칙 4</strong> 상대방 배려하면서 행동하기~ <br/></div>
<div><strong>규칙 5</strong> 남는건 추억뿐! 낭만 솝커톤하기 <br/></div>

<br/>

<h2>🏡 웹왔니팟 Before and After</h2>
<h3>Before</h3>
<img width="5712" height="4284" alt="before" src="https://github.com/user-attachments/assets/5dda3a4b-bbee-45e4-9106-28d1524eb029" />

<h3>After</h3>
<img width="2044" height="3222" alt="image" src="https://github.com/user-attachments/assets/9eb5b194-0607-4c1c-9e98-cd9e455366a1" />


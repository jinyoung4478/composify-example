# composify-example

`@composify/react`의 **Renderer/Editor**를 이용해 “컴포넌트 기반 페이지(문자열 소스)”를 렌더링하고, 웹에서 편집해 저장하는 예제 프로젝트입니다.

## 주요 기능

- **페이지 렌더링**: 저장된 `source`(JSX-like 문자열)를 `Renderer`로 렌더링
- **비주얼 에디터**: `Editor`에서 Catalog에 등록된 컴포넌트를 드래그/설정 후 저장
- **컴포넌트 카탈로그**: `Catalog.register()`로 요소/레이아웃/폰트 컴포넌트를 분류해 제공
- **목 API 기반 저장**: `http://localhost:9000`의 간단한 REST API로 페이지 컨텐츠 저장/조회

## 사전 요구사항

- **Node.js**: 20 이상 권장
- **패키지 매니저**: npm (이 레포는 `package-lock.json`을 포함합니다)

## 빠른 시작 (개발)

이 프로젝트는 **서버 2개**가 필요합니다.

### 1) 목 API 서버 실행 (포트 9000)

이 레포에는 DB로 사용할 `src/database.json`이 포함되어 있으며, 아래처럼 `json-server`로 띄우면 됩니다.

```bash
npx json-server@latest --watch src/database.json --port 9000
```

### 2) 프론트 개발 서버 실행

```bash
npm install
npm run dev
```

이후 브라우저에서 Vite dev 서버 주소로 접속합니다(기본값은 보통 `http://localhost:5173`).

## 라우팅

- **`/`**: 간단한 환영 화면(Renderer 예시)
- **`/:slug`**: 페이지 렌더링 (예: `/foo`, `/bar`)
- **`/:slug/edit`**: 페이지 편집기 (예: `/foo/edit`)

> 샘플 페이지는 `src/database.json`의 `page` 배열에 `foo`, `bar`로 들어있습니다.

## 데이터 & API 규약 (목 서버)

프론트는 아래 API를 사용합니다.

- **GET** `/page/:slug`: `{ id, content }` 형태로 페이지 컨텐츠를 읽습니다.
- **DELETE** `/page/:slug`: 저장 전 기존 페이지를 삭제합니다.
- **POST** `/page`: `{ id: slug, content: string }`로 페이지를 저장합니다.

`content`는 아래처럼 **문자열 소스**입니다.

```txt
<VStack>
  <Heading level={1}>Hello</Heading>
  <Button variant="default" size="md" contents={{ asChild: false, text: "Button" }} />
</VStack>
```

## 컴포넌트(카탈로그) 추가 방법

에디터에서 사용할 컴포넌트는 **Catalog 등록**이 필요합니다.

### 흐름 요약

- **컴포넌트 구현**: `src/components/**` 아래에 컴포넌트 작성
- **Catalog 등록 파일 작성**: `*.catalog.tsx`에서 `Catalog.register('Name', ...)`
- **Catalog 엔트리에서 import**: `src/components/catalog.tsx`에 등록 파일을 import

예)

- 구현: `src/components/elements/button.tsx`
- 등록: `src/components/elements/button.catalog.tsx`
- 엔트리: `src/components/catalog.tsx`에서 `./elements/button.catalog` import

## 개발 스크립트

```bash
npm run dev      # Vite 개발 서버
npm run build    # 타입체크 + 프로덕션 빌드 (dist/)
npm run preview  # 빌드 결과 미리보기
npm run lint     # ESLint
```

## 디렉터리 구조 (핵심)

- `src/routes.ts`: 라우터 정의
- `src/routes/page.tsx`: 페이지 렌더링(`/ :slug`)
- `src/routes/editor.tsx`: 에디터(`/ :slug/edit`) + 저장 로직
- `src/components/catalog.tsx`: 카탈로그 등록 엔트리(여기서 `*.catalog` 파일들을 import)
- `src/database.json`: 목 데이터(json-server용)

## 참고

- 경로 별칭: Vite 설정에서 `@`는 `src`를 가리킵니다. (예: `@/components/catalog`)

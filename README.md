# hyochae-wedding-270327

React + Vite 모바일 청첩장 초기 프로젝트입니다. 현재 화면은 공개용 준비 안내입니다.

## 로컬 실행

Node.js 24 사용을 권장합니다 (`nvm use`).

```sh
npm ci
npm run dev
npm run build
```

## Cloudflare Pages / GitHub 연결

- 프로젝트명: `hyochae-wedding-270327`
- Production branch: `main`
- Framework preset: React (Vite)
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: 저장소 루트 (비워 둠)
- Build environment variable: `NODE_VERSION=24`
- 목표 URL: `https://hyochae-wedding-270327.pages.dev`

목표 URL은 실제 프로젝트 생성 및 배포 성공 전까지 예약되거나 확정된 주소가 아닙니다.
Git 연동 Pages 프로젝트로 생성하고, GitHub 저장소 접근 권한은 이 저장소만 선택합니다.
배포 후 Pages에 표시되는 production 주소가 목표 URL과 정확히 같은지 확인합니다.

## URL 및 QR 검증

배포 성공 후 `npm run verify:production`을 실행합니다.
검증은 HTTPS 응답, 이 프로젝트의 식별 정보, JS/CSS 파일 응답을 확인합니다.
QR은 검증 성공한 production URL만 사용하며, 임시 preview 주소를 사용하지 않습니다.
인쇄 전 휴대전화로 QR을 읽어 접속을 확인하세요.

프로젝트를 삭제하거나 이름을 변경하지 않고 같은 프로젝트의 main 브랜치에 변경을 배포하면 기존 주소로 업데이트할 수 있습니다. 서비스 및 계정 상태에 따른 가용성은 별도이며 영구 보장을 의미하지 않습니다.

## 이후 구현

사진 갤러리, 지도, 계좌 복사, 방명록, 참석 응답 저장은 아직 구현되지 않았습니다.
공개 준비 중에는 검색 노출을 제한합니다 (`robots.txt`, noindex). 정식 공개 시 검토하세요.

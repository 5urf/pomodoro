# 🍅 Pomodoro Timer

React와 TypeScript로 구현한 뽀모도로 타이머 앱입니다. 집중력 향상을 위한 25분 작업 + 휴식 사이클을 관리할 수 있습니다.

## 📋 Requirements

- The app should have a timer that counts down from 25 minutes.
- The timer should display the current time in MM:SS format (i.e. 25:00, 24:59, 24:58, etc).
- The timer should have a play and pause button.
- Use Motion to animate the play and pause button.
- Use Motion to animate the numbers.
- Use state management to manage the timer state.
- The app should keep track of how many times the user has completed a round.
- Four rounds should equal one goal.
- When the timer reaches 00:00, reset the time, and increase the number of rounds completed by 1.
- When the user completes 4 rounds, increase the number of goals counter and reset the rounds counter.

## 🛠 Tech Stack

- **Frontend**: React 19, TypeScript
- **State Management**: Zustand
- **Styling**: Styled-Components
- **Animation**: Framer-Motion
- **Form Management**: React-Hook-Form, Zod
- **Build Tool**: Vite

## ✨ 주요 기능

- **25분 카운트다운 타이머**: MM:SS 형식으로 시간 표시
- **Play/Pause 제어**: 부드러운 애니메이션과 함께 타이머 제어
- **라운드 및 목표 추적**: 4라운드 = 1목표 시스템
- **설정 기능**: 목표, 라운드, 시간 커스터마이징
- **완료 알림**: 목표 달성 시 축하 모달

## 🚀 설치 및 실행

```bash
# 프로젝트 클론
git clone https://github.com/5urf/pomodoro.git
cd pomodoro

# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build
```

## 🌐 Demo

<a href="https://5urf.github.io/pomodoro/" target="_blank" rel="noopener noreferrer">Live Demo</a>

---

_집중력 향상을 위한 간단하고 효과적인 뽀모도로 타이머_ ⏰

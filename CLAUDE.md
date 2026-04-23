# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Local React 18 + TypeScript + Vite quiz app for Azure AI-102 certification prep. No backend, no database, no routing library — all state is in-memory (plus `localStorage` for session history via `useQuizStorage`). UI is in Chinese.

## Commands

```bash
npm run dev          # Vite dev server (http://localhost:5173)
npm run build        # tsc type-check then vite build → dist/
npm run preview      # Preview the production build
npm run parse-quiz   # Regenerate src/data/sortedQuestions.json from questions.md
```

There is no test runner, linter, or formatter configured. `npm run build` is the only static check (TypeScript).

## Architecture

Screen flow is driven by the `Screen` union in [src/types/quiz.ts](src/types/quiz.ts) (`'mode-select' | 'quiz' | 'result' | 'history'`). All quiz-flow state and handlers live in [src/hooks/useQuizFlow.ts](src/hooks/useQuizFlow.ts); [src/App.tsx](src/App.tsx) is just a screen dispatcher. Do **not** introduce a routing library.

**Strict hook/component split:**
- `src/hooks/` owns business logic: `useQuizFlow` (screen/mode/handlers, calls `saveSession` at the result transition), `useQuizSession` (shuffle + current index), `useScoreTracker` (validation & scoring), `useQuizStorage` (localStorage), `useCurrentAnswer` (per-question answer state; auto-resets on question-id change), `useQuestionFilter` (by-type & keyword filter; type filter wired into `ModeSelection`), `useCountdown` (generic ticker; used for simulation-mode timer).
- `src/components/` is purely presentational — receives props, emits events. Components are grouped: `components/layout/` (frames like `QuizCard`, `ExplanationPanel`), `components/questions/` (one per `QuestionType`).

**Question model ([src/types/quiz.ts](src/types/quiz.ts)):**
Four types — `single`, `multiple`, `sort`, `truefalse`. **User answer state is always `string[]`** regardless of type:
- single → `['A']`
- multiple → `['A', 'C']`
- sort → `['1', '2', '3']` (order-sensitive)
- truefalse → `['true']` / `['false']`

**Answer validation ([src/hooks/useScoreTracker.ts](src/hooks/useScoreTracker.ts) `isAnswerCorrect`):** single / multiple / truefalse use set comparison; `sort` requires exact sequence match. When adding a new `QuestionType`, update types → add a component under `components/questions/` → add a branch in `isAnswerCorrect`.

**Question data pipeline:** Authoring happens in [src/data/questions.md](src/data/questions.md) (markdown, Chinese, format documented in the file header). The [scripts/parseQuestions.mjs](scripts/parseQuestions.mjs) Node script parses it into [src/data/sortedQuestions.json](src/data/sortedQuestions.json), which is the runtime import in `App.tsx`. After editing `questions.md`, run `npm run parse-quiz` and restart the dev server — the JSON file is the source of truth at runtime, not the markdown.

**Modes:** `practice` uses all questions; `simulation` picks a fixed random 30 at mode-select time (see [src/utils/selectRandomQuestions.ts](src/utils/selectRandomQuestions.ts), called from `useQuizFlow.startMode`) — do not re-randomize mid-session.

## Conventions

- Keep files under ~150 lines; split when larger.
- Don't add a backend, database, or routing library.
- Styling is plain global CSS in [src/index.css](src/index.css) — no Tailwind, no CSS-in-JS.
- `saveSession` is called explicitly inside `useQuizFlow.finishQuiz` at the moment of transition to `'result'`. Do not reintroduce a `useEffect([currentScreen])`-driven save — the dep array is easy to get wrong and stale closures will silently corrupt history entries.

## Related

- [AGENT.md](AGENT.md) — agent-oriented quick reference with task → file mapping.
- [.github/copilot-instructions.md](.github/copilot-instructions.md) — same rules in Copilot format.
- [.github/skills/md-to-json-quiz/](.github/skills/md-to-json-quiz) — skill for the md → json conversion.

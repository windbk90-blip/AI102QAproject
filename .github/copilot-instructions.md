This is a local React + TypeScript quiz app.
- Question types: single, multiple, sort, truefalse
- All types defined in src/types/quiz.ts
- Hooks handle logic; components handle rendering only
- Answer state is always string[] regardless of question type
- Do not add routing libraries; use simple state-based screen switching

## Architecture Rules
- Hooks store all business logic (state management, validations, calculations)
- Components are purely presentational (receive props, emit events)
- All questions loaded from src/data/sortedQuestions.json
- No backend or database — all state in-memory
- Keep files under 150 lines; split if larger

## Quick Reference
- Types: src/types/quiz.ts
- Questions: src/data/questions.md (markdown format, Chinese)
- Hooks: src/hooks/* (useQuizSession, useScoreTracker)
- Components: src/components/* (organized by question type in questions/)
- Main app: src/App.tsx (uses state-based screen switching: 'quiz' | 'result')

## Common Patterns
- Answer validation in useScoreTracker.ts: single/multiple/truefalse use set comparison; sort requires exact order
- Question parsing: src/data/parseQuiz.ts reads questions.md and generates sortedQuestions.json
- Screen transitions: Update Screen type and manage state in App.tsx
- Adding new question type: Update types → add component → add validation in useScoreTracker
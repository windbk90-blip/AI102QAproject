# AI-102 Quiz App — Agent Quick Start

**For comprehensive architecture details, see [Repository Guide](/memories/repo/ai-102-quiz-app-guide.md).**

## Quick Commands
```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
```

## First Things to Know
1. **Read first**: [src/types/quiz.ts](src/types/quiz.ts) — all question types defined here
2. **Question format**: [src/data/questions.md](src/data/questions.md) — markdown-based quiz database (Chinese)
3. **Architecture**: Hooks do logic (`src/hooks/`), components render only
4. **Answer state**: Always `string[]` regardless of question type:
   - single → `['A']`
   - multiple → `['A', 'C']`
   - sort → `['1', '2', '3']`
   - truefalse → `['true']` or `['false']`

## Key Files by Task
| Task | File | Purpose |
|------|------|---------|
| Add new question | [src/data/questions.md](src/data/questions.md) | Markdown format (header explains structure) |
| Parse questions | [src/data/parseQuiz.ts](src/data/parseQuiz.ts) | Converts markdown → JSON |
| Track scores | [src/hooks/useScoreTracker.ts](src/hooks/useScoreTracker.ts) | Validates answers & calculates stats |
| Manage quiz flow | [src/hooks/useQuizSession.ts](src/hooks/useQuizSession.ts) | Shuffles questions & tracks progress |
| Build UI | [src/components/](src/components/) | Question components & layouts |
| App state | [src/App.tsx](src/App.tsx) | Screen switching (quiz/result) |

## Architecture Rules (Non-Negotiable)
- ✋ **No routing libraries** — Use state-based screen switching (enum/flags)
- 🪝 **Logic in hooks, rendering in components** — Keep separation strict
- 📦 **File size < 150 lines** — Split larger files
- 🔤 **Answer state always `string[]`** — Normalize all types
- 🚫 **No backend/database** — All state in-memory

## Common Tasks

### Add a new question
1. Edit [src/data/questions.md](src/data/questions.md) (format explained in file header)
2. Run question parser: `npm run parse-quiz` (generates `sortedQuestions.json`)
3. Restart dev server

### Verify answer validation logic
Check [src/hooks/useScoreTracker.ts](src/hooks/useScoreTracker.ts) `isAnswerCorrect()` function:
- **single/multiple/truefalse** → Set comparison (order doesn't matter)
- **sort** → Exact sequence match (order matters)

### Extend the app
- Add new screen? Update `Screen` type in [src/App.tsx](src/App.tsx) and implement logic
- Add new question type? Extend `QuestionType` in [src/types/quiz.ts](src/types/quiz.ts), add component, add validation
- Add scoring feature? Enhance `useScoreTracker.ts` hook

## Debugging Checklist
- [ ] Question parsed correctly? Check [src/data/sortedQuestions.json](src/data/sortedQuestions.json) format
- [ ] Answer comparison failing? Verify answer state is `string[]` (not mixing types)
- [ ] Component prop types wrong? Check types in [src/types/quiz.ts](src/types/quiz.ts)
- [ ] Style issues? Tailwind classes in components (CSS in [src/index.css](src/index.css))

## Related Skills
- **quiz2json**: Automate markdown-to-JSON parsing. See [.github/skills/quiz2json/SKILL.md](.github/skills/quiz2json/SKILL.md)
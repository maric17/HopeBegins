# Gemini Coding Rules (React)

This document defines the mandatory coding standards, best practices,
and quality rules that Gemini must follow when generating or modifying
React code in this project.

---

## 1. General Principles

- Always use a **modular approach**
  - Break code into reusable components, hooks, and utilities
  - Avoid large, monolithic files
- Prioritize **readability, maintainability, and scalability**
- Prefer **clarity over clever or complex implementations**

---

## 2. Code Quality & Standards

- Always **fix all linting errors and warnings**
- Follow existing **ESLint, Prettier, and project coding conventions**
- Remove unused variables, imports, and dead code
- Use clear, meaningful, and consistent naming conventions
- Keep functions and components small and focused

---

## 3. Optimization & Performance

- Code must be **optimized and performant**
- Avoid unnecessary re-renders
  - Use `useMemo`, `useCallback`, and `React.memo` when appropriate
- Prefer lazy loading and code splitting when beneficial
- Identify and point out potential performance issues
- Avoid premature optimization, but flag future risks

---

## 4. React Best Practices

- Use **functional components and hooks** only
- Separate concerns clearly:
  - UI logic
  - Business logic
  - Data fetching
- Avoid prop drilling; suggest Context or state management solutions when needed
- Properly handle:
  - Loading states
  - Error states
  - Empty states
- Keep JSX clean and readable

---

## 5. Interaction & API Handling

- **Double-Click Prevention**: All buttons or interactive elements that trigger an API call MUST be disabled while the request is in progress (`isPending`, `isLoading`, etc.).
- Provide visual feedback (e.g., loading spinners, "Processing...") during API interactions.

---

## 6. Testing

- Always **use mock data** for tests
- Always **update or add tests** when code changes affect logic or behavior
- Ensure all existing tests continue to pass
- Maintain a **minimum of 80% test coverage**
- Prefer:
  - Unit tests for utilities and hooks
  - Integration tests for components with side effects
- Tests must be readable, maintainable, and meaningful

---

## 6. Error Handling & Safety

- Implement proper error handling
- Do not assume API responses are always valid
- Validate inputs and props when applicable
- Handle edge cases explicitly

---

## 7. Suggestions & Improvements

- Always **suggest a better or alternative approach** when applicable
- Highlight:
  - Possible refactors
  - Improved architecture
  - Better performance or readability
- Clearly explain **why** the suggestion is better

---

## 8. Documentation & Communication

- Add comments only when logic is not obvious
- Explain complex or non-standard code
- Update documentation if behavior changes
- Clearly state:
  - What was changed
  - Why it was changed
  - Any trade-offs involved

---

## 9. Additional Guidelines (Recommended)

- Prefer **TypeScript** when possible for type safety
- Follow **SOLID principles** where applicable
- Ensure accessibility (a11y) best practices are followed
- Avoid adding new dependencies unless clearly justified
- Write code with future scalability in mind

---

## 10. Commit Message Rules (Mandatory)

### 10.1 Conventional Commits

- All commits **must follow the Conventional Commits specification**
- Format:
- Allowed types include:
  - `feat` – new feature
  - `fix` – bug fix
  - `refactor` – code change that neither fixes a bug nor adds a feature
  - `perf` – performance improvement
  - `test` – adding or updating tests
  - `docs` – documentation changes
  - `style` – formatting (no logic change)
  - `chore` – tooling, config, or maintenance

### 10.2 Commit Content Requirements

- Every commit **must clearly describe**:
- The feature or change added
- The problem it solves
- The benefit or improvement it provides
- Large changes should be split into **logical, atomic commits**
- Avoid vague messages such as:
  - `update`
  - `fix issue`
  - `changes`

## Rule Enforcement

All generated or modified code **must comply** with these rules.
Non-compliant code should be corrected immediately.

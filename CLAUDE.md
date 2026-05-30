# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Angular Fundamentals Quiz — a quiz application built with Angular. The project has not yet been scaffolded; no `package.json` or `angular.json` exists yet.

## Expected Commands (once Angular is scaffolded)

```bash
npm install          # Install dependencies
ng serve             # Dev server at http://localhost:4200
ng build             # Production build (output: dist/)
ng test              # Run unit tests via Karma
ng test --include="**/foo.spec.ts"  # Run a single test file
ng lint              # Lint via ESLint
```

## Architecture Intent

- Angular standalone components or NgModule-based structure (TBD at scaffold time)
- Quiz feature: questions, answer choices, scoring, and result feedback

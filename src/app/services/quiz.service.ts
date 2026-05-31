import { Injectable, computed, signal } from '@angular/core';
import { QUESTIONS } from '../data/questions';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private readonly _currentIndex = signal(0);
  private readonly _answers = signal<(number | null)[]>(
    new Array(QUESTIONS.length).fill(null),
  );

  readonly questions = QUESTIONS;

  readonly currentIndex = this._currentIndex.asReadonly();
  readonly answers = this._answers.asReadonly();

  readonly currentQuestion = computed(() => QUESTIONS[this._currentIndex()]);

  readonly currentAnswer = computed(() => this._answers()[this._currentIndex()]);

  readonly isLastQuestion = computed(() => this._currentIndex() === QUESTIONS.length - 1);

  readonly score = computed(
    () => this._answers().filter((answer, i) => answer === QUESTIONS[i].correctIndex).length,
  );

  readonly progress = computed(() => ({
    current: this._currentIndex() + 1,
    total: QUESTIONS.length,
  }));

  submitAnswer(optionIndex: number): void {
    this._answers.update((answers) => {
      const next = [...answers];
      next[this._currentIndex()] = optionIndex;
      return next;
    });
  }

  goNext(): void {
    if (!this.isLastQuestion()) {
      this._currentIndex.update((i) => i + 1);
    }
  }

  reset(): void {
    this._currentIndex.set(0);
    this._answers.set(new Array(QUESTIONS.length).fill(null));
  }
}

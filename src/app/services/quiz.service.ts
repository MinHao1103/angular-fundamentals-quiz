import { Injectable, computed, signal } from '@angular/core';
import { Question, QUESTIONS } from '../data/questions';

function shuffle(arr: readonly Question[]): Question[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

@Injectable({ providedIn: 'root' })
export class QuizService {
  private readonly _questions = signal<Question[]>(shuffle(QUESTIONS));
  private readonly _currentIndex = signal(0);
  private readonly _answers = signal<(number | null)[]>(
    new Array(QUESTIONS.length).fill(null),
  );

  readonly questions = this._questions.asReadonly();

  readonly currentIndex = this._currentIndex.asReadonly();
  readonly answers = this._answers.asReadonly();

  readonly currentQuestion = computed(() => this._questions()[this._currentIndex()]);

  readonly currentAnswer = computed(() => this._answers()[this._currentIndex()]);

  readonly isFirstQuestion = computed(() => this._currentIndex() === 0);

  readonly isLastQuestion = computed(
    () => this._currentIndex() === this._questions().length - 1,
  );

  readonly score = computed(
    () =>
      this._answers().filter((answer, i) => answer === this._questions()[i].correctIndex).length,
  );

  readonly progress = computed(() => ({
    current: this._currentIndex() + 1,
    total: this._questions().length,
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

  goPrev(): void {
    if (!this.isFirstQuestion()) {
      this._currentIndex.update((i) => i - 1);
    }
  }

  reset(): void {
    this._questions.set(shuffle(QUESTIONS));
    this._currentIndex.set(0);
    this._answers.set(new Array(QUESTIONS.length).fill(null));
  }
}

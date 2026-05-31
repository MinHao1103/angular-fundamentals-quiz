import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { PRACTICE_QUESTIONS } from '../../data/practice-questions';
import { Question } from '../../data/questions';

function shuffle(arr: readonly Question[]): Question[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

@Component({
  selector: 'app-practice',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="practice">
      <div class="practice-header">
        <p class="counter">已練習 {{ doneCount() }} 題</p>
        <button type="button" class="exit-btn" (click)="exit()">離開練習</button>
      </div>

      <h1 id="question-label">{{ currentQuestion().question }}</h1>

      <fieldset class="options" aria-labelledby="question-label">
        <legend class="sr-only">請選擇答案</legend>
        @for (option of currentQuestion().options; track $index) {
          <button
            type="button"
            class="option"
            [class.is-correct]="isAnswered() && $index === currentQuestion().correctIndex"
            [class.is-wrong]="isAnswered() && selectedAnswer() === $index && $index !== currentQuestion().correctIndex"
            [disabled]="isAnswered()"
            [attr.aria-pressed]="selectedAnswer() === $index"
            (click)="select($index)"
          >
            <div class="option-header">
              <span class="option-text">{{ option }}</span>
              @if (isAnswered() && $index === currentQuestion().correctIndex) {
                <span aria-label="正確答案">✓</span>
              }
              @if (isAnswered() && selectedAnswer() === $index && $index !== currentQuestion().correctIndex) {
                <span aria-label="錯誤">✗</span>
              }
            </div>
            @if (isAnswered()) {
              <p class="option-explanation">{{ currentQuestion().optionExplanations[$index] }}</p>
            }
          </button>
        }
      </fieldset>

      @if (isAnswered()) {
        <div class="result-banner" [class.correct]="isCorrect()" [class.wrong]="!isCorrect()" role="status">
          {{ isCorrect() ? '答對了！' : '答錯了，看看解析再繼續吧' }}
        </div>

        <button type="button" class="next-btn" (click)="next()">下一題</button>
      }
    </main>
  `,
  styles: `
    .practice {
      max-width: 640px;
      margin: 0 auto;
      padding: 2rem;
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .practice-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .counter {
      margin: 0;
      font-size: 0.875rem;
      color: #666;
    }

    .exit-btn {
      padding: 0.35rem 0.875rem;
      background: transparent;
      color: #888;
      border: 1px solid #ccc;
      border-radius: 100px;
      font-size: 0.8rem;
      cursor: pointer;
      transition: background 0.15s;
    }

    .exit-btn:hover {
      background: #f5f5f5;
    }

    h1 {
      font-size: 1.25rem;
      line-height: 1.6;
      margin: 0;
    }

    .options {
      border: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .option {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
      padding: 1rem;
      background: #fff;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-size: 1rem;
      text-align: left;
      cursor: pointer;
      transition: border-color 0.15s, background 0.15s;
    }

    .option:hover:not(:disabled) {
      border-color: #6750a4;
      background: #faf8ff;
    }

    .option:disabled {
      cursor: default;
    }

    .option.is-correct {
      border-color: #2e7d32;
      background: #f1f8f1;
    }

    .option.is-wrong {
      border-color: #c62828;
      background: #fff5f5;
    }

    .option-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }

    .option.is-correct .option-header span:last-child {
      color: #2e7d32;
      font-weight: 700;
    }

    .option.is-wrong .option-header span:last-child {
      color: #c62828;
      font-weight: 700;
    }

    .option-explanation {
      margin: 0;
      padding: 0.5rem 0.75rem;
      font-size: 0.825rem;
      line-height: 1.6;
      color: #444;
      background: rgba(0, 0, 0, 0.04);
      border-radius: 4px;
      border-left: 3px solid #ccc;
      text-align: left;
    }

    .option.is-correct .option-explanation {
      border-left-color: #2e7d32;
      background: rgba(46, 125, 50, 0.06);
    }

    .option.is-wrong .option-explanation {
      border-left-color: #c62828;
      background: rgba(198, 40, 40, 0.06);
    }

    .result-banner {
      padding: 0.875rem 1.25rem;
      border-radius: 8px;
      font-weight: 600;
      text-align: center;
    }

    .result-banner.correct {
      background: #f1f8f1;
      color: #2e7d32;
    }

    .result-banner.wrong {
      background: #fff5f5;
      color: #c62828;
    }

    .next-btn {
      align-self: flex-end;
      padding: 0.75rem 2rem;
      background: #6750a4;
      color: #fff;
      border: none;
      border-radius: 100px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.15s;
    }

    .next-btn:hover {
      background: #5a3d94;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  `,
})
export class PracticeComponent {
  private readonly router = inject(Router);

  private readonly _queue = signal<Question[]>(shuffle(PRACTICE_QUESTIONS));
  private readonly _currentIndex = signal(0);
  private readonly _doneCount = signal(0);

  readonly selectedAnswer = signal<number | null>(null);

  readonly currentQuestion = computed(() => this._queue()[this._currentIndex()]);
  readonly isAnswered = computed(() => this.selectedAnswer() !== null);
  readonly isCorrect = computed(
    () => this.selectedAnswer() === this.currentQuestion().correctIndex,
  );
  readonly doneCount = this._doneCount.asReadonly();

  select(index: number): void {
    if (this.isAnswered()) return;
    this.selectedAnswer.set(index);
    this._doneCount.update((n) => n + 1);
  }

  next(): void {
    const nextIndex = this._currentIndex() + 1;
    if (nextIndex >= this._queue().length) {
      this._queue.set(shuffle(PRACTICE_QUESTIONS));
      this._currentIndex.set(0);
    } else {
      this._currentIndex.update((i) => i + 1);
    }
    this.selectedAnswer.set(null);
  }

  exit(): void {
    this.router.navigate(['/']);
  }
}

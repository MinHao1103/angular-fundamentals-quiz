import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="quiz">
      <p class="progress" aria-live="polite">
        第 {{ progress().current }} 題，共 {{ progress().total }} 題
      </p>

      <h1 id="question-label">{{ currentQuestion().question }}</h1>

      <fieldset class="options" aria-labelledby="question-label">
        <legend class="sr-only">請選擇答案</legend>
        @for (option of currentQuestion().options; track $index) {
          <label
            class="option"
            [class.selected]="currentAnswer() === $index"
            [class.correct]="showAnswer() && currentQuestion().correctIndex === $index"
          >
            <input
              type="radio"
              [name]="'question-' + currentIndex()"
              [value]="$index"
              [checked]="currentAnswer() === $index"
              (change)="selectAnswer($index)"
            />
            {{ option }}
            @if (showAnswer() && currentQuestion().correctIndex === $index) {
              <span class="correct-badge" aria-label="正確答案">✓</span>
            }
          </label>
        }
      </fieldset>

      <div class="actions">
        <div class="actions-left">
          @if (!isFirstQuestion()) {
            <button type="button" class="secondary-btn" (click)="prev()">上一題</button>
          }
        </div>
        <div class="actions-right">
          <button
            type="button"
            class="hint-btn"
            [attr.aria-pressed]="showAnswer()"
            (click)="toggleAnswer()"
          >
            {{ showAnswer() ? '隱藏答案' : '顯示答案' }}
          </button>
          <button
            type="button"
            class="next-btn"
            [disabled]="currentAnswer() === null"
            (click)="next()"
          >
            {{ isLastQuestion() ? '查看結果' : '下一題' }}
          </button>
        </div>
      </div>
    </main>
  `,
  styles: `
    .quiz {
      max-width: 640px;
      margin: 0 auto;
      padding: 2rem;
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .progress {
      font-size: 0.875rem;
      color: #666;
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
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      cursor: pointer;
      transition: border-color 0.15s;
    }

    .option:hover {
      border-color: #6750a4;
    }

    .option.selected {
      border-color: #6750a4;
      background: #f3eeff;
    }

    .option input[type='radio'] {
      accent-color: #6750a4;
      width: 1.1rem;
      height: 1.1rem;
      flex-shrink: 0;
    }

    .option.correct {
      border-color: #2e7d32;
      background: #f1f8f1;
    }

    .correct-badge {
      margin-left: auto;
      color: #2e7d32;
      font-weight: 700;
    }

    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .actions-left,
    .actions-right {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .secondary-btn {
      padding: 0.75rem 1.5rem;
      background: transparent;
      color: #555;
      border: 1px solid #ccc;
      border-radius: 100px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.15s;
    }

    .secondary-btn:hover {
      background: #f5f5f5;
    }

    .hint-btn {
      padding: 0.4rem 1rem;
      background: transparent;
      color: #6750a4;
      border: 1px solid #6750a4;
      border-radius: 100px;
      font-size: 0.875rem;
      cursor: pointer;
      transition: background 0.15s;
    }

    .hint-btn:hover {
      background: #f3eeff;
    }

    .next-btn {
      padding: 0.75rem 2rem;
      background: #6750a4;
      color: #fff;
      border: none;
      border-radius: 100px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.15s;
    }

    .next-btn:hover:not(:disabled) {
      background: #5a3d94;
    }

    .next-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
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
export class QuizComponent {
  private readonly quizService = inject(QuizService);
  private readonly router = inject(Router);
  private readonly el = inject(ElementRef);

  readonly currentQuestion = this.quizService.currentQuestion;
  readonly currentAnswer = this.quizService.currentAnswer;
  readonly isFirstQuestion = this.quizService.isFirstQuestion;
  readonly isLastQuestion = this.quizService.isLastQuestion;
  readonly progress = this.quizService.progress;
  readonly currentIndex = this.quizService.currentIndex;

  readonly showAnswer = signal(false);

  selectAnswer(index: number): void {
    this.quizService.submitAnswer(index);
  }

  toggleAnswer(): void {
    this.showAnswer.update((v) => !v);
  }

  prev(): void {
    this.quizService.goPrev();
    this.showAnswer.set(false);
    setTimeout(() => {
      (this.el.nativeElement as HTMLElement)
        .querySelector<HTMLInputElement>('input[type="radio"]')
        ?.focus();
    });
  }

  next(): void {
    if (this.isLastQuestion()) {
      this.router.navigate(['/result']);
    } else {
      this.quizService.goNext();
      this.showAnswer.set(false);
      setTimeout(() => {
        (this.el.nativeElement as HTMLElement)
          .querySelector<HTMLInputElement>('input[type="radio"]')
          ?.focus();
      });
    }
  }
}

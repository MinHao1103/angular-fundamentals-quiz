import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-result',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="result">
      <h1>測驗完成</h1>

      <div class="score-card" aria-label="測驗分數">
        <span class="score-number">{{ score() }}</span>
        <span class="score-divider">/</span>
        <span class="score-total">{{ total }}</span>
        <p class="score-label">答對題數</p>
      </div>

      <ol class="summary" aria-label="各題作答結果">
        @for (item of summary(); track $index) {
          <li class="summary-item" [class.correct]="item.isCorrect" [class.wrong]="!item.isCorrect">
            <span class="status-icon" [attr.aria-label]="item.isCorrect ? '答對' : '答錯'">
              {{ item.isCorrect ? '✓' : '✗' }}
            </span>
            <div class="summary-content">
              <p class="summary-question">{{ item.question }}</p>
              @if (!item.isCorrect) {
                <p class="summary-detail wrong-answer">你的答案：{{ item.userAnswer }}</p>
                <p class="summary-detail correct-answer">正確答案：{{ item.correctAnswer }}</p>
              }
            </div>
          </li>
        }
      </ol>

      <button type="button" class="retry-btn" (click)="retry()">再試一次</button>
    </main>
  `,
  styles: `
    .result {
      max-width: 640px;
      margin: 0 auto;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    h1 {
      font-size: 1.75rem;
      text-align: center;
      margin: 0;
    }

    .score-card {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: baseline;
      gap: 0.25rem;
      padding: 2rem;
      background: #f3eeff;
      border-radius: 16px;
      text-align: center;
    }

    .score-number {
      font-size: 4rem;
      font-weight: 700;
      color: #6750a4;
      line-height: 1;
    }

    .score-divider {
      font-size: 2.5rem;
      color: #999;
    }

    .score-total {
      font-size: 2.5rem;
      color: #555;
    }

    .score-label {
      width: 100%;
      margin: 0.5rem 0 0;
      font-size: 0.875rem;
      color: #666;
    }

    .summary {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .summary-item {
      display: flex;
      gap: 0.75rem;
      padding: 1rem;
      border-radius: 8px;
      border: 2px solid #e0e0e0;
    }

    .summary-item.correct {
      border-color: #2e7d32;
      background: #f1f8f1;
    }

    .summary-item.wrong {
      border-color: #c62828;
      background: #fff5f5;
    }

    .status-icon {
      font-size: 1.1rem;
      font-weight: 700;
      flex-shrink: 0;
      margin-top: 0.1rem;
    }

    .summary-item.correct .status-icon {
      color: #2e7d32;
    }

    .summary-item.wrong .status-icon {
      color: #c62828;
    }

    .summary-content {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .summary-question {
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .summary-detail {
      margin: 0;
      font-size: 0.8rem;
    }

    .wrong-answer {
      color: #c62828;
    }

    .correct-answer {
      color: #2e7d32;
    }

    .retry-btn {
      align-self: center;
      padding: 0.75rem 2.5rem;
      background: #6750a4;
      color: #fff;
      border: none;
      border-radius: 100px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.15s;
    }

    .retry-btn:hover {
      background: #5a3d94;
    }
  `,
})
export class ResultComponent {
  private readonly quizService = inject(QuizService);
  private readonly router = inject(Router);

  readonly total = this.quizService.questions.length;
  readonly score = this.quizService.score;

  readonly summary = computed(() =>
    this.quizService.questions.map((q, i) => ({
      question: q.question,
      isCorrect: this.quizService.answers()[i] === q.correctIndex,
      userAnswer: q.options[this.quizService.answers()[i] ?? -1] ?? '未作答',
      correctAnswer: q.options[q.correctIndex],
    })),
  );

  retry(): void {
    this.quizService.reset();
    this.router.navigate(['/quiz']);
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="quiz">
      <h1>測驗進行中</h1>
      <p>題目區域（階段 4 實作）</p>
    </main>
  `,
  styles: `
    .quiz {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100dvh;
      gap: 1.5rem;
      padding: 2rem;
    }
  `,
})
export class QuizComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-result',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="result">
      <h1>測驗結果</h1>
      <p>結算畫面（階段 5 實作）</p>
    </main>
  `,
  styles: `
    .result {
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
export class ResultComponent {}

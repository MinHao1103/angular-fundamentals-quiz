import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="home">
      <h1>Angular 基礎知識測驗</h1>
      <p class="subtitle">測試你對 Angular 核心概念的掌握程度</p>

      <div class="actions">
        <button type="button" class="primary-btn" (click)="startQuiz()">
          開始測驗
          <span class="btn-hint">10 題，有計分</span>
        </button>
        <button type="button" class="secondary-btn" (click)="startPractice()">
          練習模式
          <span class="btn-hint">隨機題目，馬上看答案</span>
        </button>
      </div>
    </main>
  `,
  styles: `
    .home {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100dvh;
      gap: 1.5rem;
      padding: 2rem;
      text-align: center;
    }

    h1 {
      margin: 0;
      font-size: 2rem;
    }

    .subtitle {
      margin: 0;
      color: #666;
    }

    .actions {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      max-width: 320px;
      margin-top: 1rem;
    }

    .primary-btn,
    .secondary-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
      width: 100%;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.15s, transform 0.1s;
      border: 2px solid transparent;
    }

    .primary-btn:hover,
    .secondary-btn:hover {
      transform: translateY(-1px);
    }

    .primary-btn {
      background: #6750a4;
      color: #fff;
      border-color: #6750a4;
    }

    .primary-btn:hover {
      background: #5a3d94;
    }

    .secondary-btn {
      background: #fff;
      color: #6750a4;
      border-color: #6750a4;
    }

    .secondary-btn:hover {
      background: #f3eeff;
    }

    .btn-hint {
      font-size: 0.775rem;
      font-weight: 400;
      opacity: 0.8;
    }
  `,
})
export class HomeComponent {
  private readonly router = inject(Router);

  startQuiz(): void {
    this.router.navigate(['/quiz']);
  }

  startPractice(): void {
    this.router.navigate(['/practice']);
  }
}

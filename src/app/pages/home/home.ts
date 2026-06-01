import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="home">
      <h1>Angular 基礎知識練習</h1>
      <p class="subtitle">隨機題目，馬上看答案</p>

      <button type="button" class="primary-btn" (click)="startPractice()">開始練習</button>
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

    .primary-btn {
      padding: 1rem 2.5rem;
      border-radius: 12px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      border: 2px solid #6750a4;
      background: #6750a4;
      color: #fff;
      transition: background 0.15s, transform 0.1s;
      margin-top: 1rem;
    }

    .primary-btn:hover {
      background: #5a3d94;
      transform: translateY(-1px);
    }
  `,
})
export class HomeComponent {
  private readonly router = inject(Router);

  startPractice(): void {
    this.router.navigate(['/practice']);
  }
}

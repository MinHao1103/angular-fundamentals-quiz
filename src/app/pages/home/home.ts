import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="home">
      <h1>Angular 基礎知識測驗</h1>
      <p>測試你對 Angular 核心概念的掌握程度</p>
      <button type="button" (click)="startQuiz()">開始測驗</button>
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
  `,
})
export class HomeComponent {
  private readonly router = inject(Router);

  startQuiz(): void {
    this.router.navigate(['/quiz']);
  }
}

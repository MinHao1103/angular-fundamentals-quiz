import { Question } from './questions';

export const PRACTICE_QUESTIONS: readonly Question[] = [
  {
    question: '一個 Angular 元件完整的檔案組成，以下哪個組合正確？',
    options: [
      '只需要一個 .ts 檔即可',
      '.ts（邏輯）、.html（模板）、.css（樣式）、.spec.ts（測試）',
      '.ts、.html、.json、.spec.ts',
      '一定要有獨立的 .html 和 .css 檔，否則無法運作',
    ],
    correctIndex: 1,
    category: '元件基礎',
    optionExplanations: [
      '技術上可行（使用 inline template 和 styles），但不是標準的完整組成，缺少模板、樣式、測試的獨立檔案。',
      '正確。這四個檔案各司其職，是 ng generate component 預設產出的完整結構。實際開發中也可以把模板和樣式寫成 inline，但完整組成包含這四個。',
      'Angular 元件沒有 .json 設定檔，路由或環境設定才會用到 JSON。',
      '錯誤。.html 和 .css 可以改用 inline template 和 styles 寫在 .ts 檔內，並非必要的獨立檔案。',
    ],
    correctAnswerCode: `card/
├── card.ts          // 元件類別與裝飾器
├── card.html        // 模板（或 inline template）
├── card.css         // 樣式（或 inline styles）
└── card.spec.ts     // 單元測試`,
  },
  {
    question: '以下是一個 Angular 元件的宣告，何者敘述正確？',
    options: [
      '這個元件缺少 standalone: true，無法正常運作',
      'imports 陣列應該放在 class 內部，不是裝飾器裡',
      'Angular v20+ 預設 standalone，不需要明確寫 standalone: true',
      'template 必須改用 templateUrl 才能載入 HTML',
    ],
    correctIndex: 2,
    category: '元件基礎',
    optionExplanations: [
      '錯誤。Angular v20+ 預設所有元件都是 standalone，不需要明確宣告 standalone: true。',
      '錯誤。imports 是 @Component 裝飾器的設定，告訴 Angular 這個元件的模板用到哪些指令或元件。',
      '正確。舊版 Angular 需要寫 standalone: true，Angular v20+ 已將其設為預設值，不需要再明確宣告。',
      '錯誤。template inline 完全合法，適合模板內容簡短的情況；templateUrl 是選擇性的外部檔案寫法。',
    ],
    correctAnswerCode: `// Angular v20+ 以前需要明確宣告
@Component({ standalone: true, ... })

// Angular v20+ 不需要，預設就是 standalone
@Component({ ... })`,
  },
  {
    question: 'Angular 開發時，執行 ng serve 後，預設可以在哪個網址看到畫面？',
    options: [
      'http://localhost:3000',
      'http://localhost:8080',
      'http://localhost:4200',
      'http://localhost:5000',
    ],
    correctIndex: 2,
    category: '元件基礎',
    optionExplanations: [
      '3000 是 Node.js / Express 常用的 port，不是 Angular 的預設值。',
      '8080 是 Java / Tomcat 常用的 port，不是 Angular 的預設值。',
      '正確。Angular CLI 預設使用 port 4200，這是 Angular 專屬的慣例，可透過 ng serve --port 變更。',
      '5000 是 .NET / Python Flask 常用的 port，不是 Angular 的預設值。',
    ],
    correctAnswerCode: `ng serve
# 啟動後開啟瀏覽器前往：
# http://localhost:4200`,
  },
  {
    question: 'Angular CLI 中，哪個指令用來建立一個新的元件？',
    options: [
      'ng build component',
      'ng create component',
      'ng generate component',
      'ng new component',
    ],
    correctIndex: 2,
    category: '元件基礎',
    optionExplanations: [
      'ng build 是用來編譯打包整個應用程式，不是建立元件。',
      'ng create 不存在於 Angular CLI 指令中。',
      '正確。ng generate component 會自動建立元件所需的 .ts、.html、.css、.spec.ts 四個檔案，可縮寫為 ng g c。',
      'ng new 是用來建立全新的 Angular 專案，不是建立元件。',
    ],
    correctAnswerCode: `ng generate component card
# 縮寫：
ng g c card

# 會產生：
# src/app/card/card.ts
# src/app/card/card.html
# src/app/card/card.css
# src/app/card/card.spec.ts`,
  },
  {
    question: '在 @Component 裝飾器中，selector 屬性的用途是什麼？',
    options: [
      '定義元件的 CSS 樣式類別名稱',
      '指定元件在 HTML 模板中使用的標籤名稱',
      '選取要注入到元件的服務',
      '決定元件的變更偵測策略',
    ],
    correctIndex: 1,
    category: '元件基礎',
    optionExplanations: [
      'CSS 樣式是由 styles 或 styleUrl 屬性定義，selector 與樣式無關。',
      '正確。selector 告訴 Angular 這個元件對應哪個 HTML 標籤，例如 selector: \'app-card\'，就能在其他元件的模板中用 <app-card> 來插入它。',
      '服務注入是透過 inject() 函式完成，與 selector 無關。',
      '變更偵測策略是由 changeDetection 屬性控制，例如 ChangeDetectionStrategy.OnPush。',
    ],
    correctAnswerCode: `@Component({
  selector: 'app-card',
  template: \`...\`,
})
export class CardComponent {}

// 在其他元件的模板中插入：
// <app-card></app-card>`,
  },
  {
    question: '在 Angular 模板中，要根據條件顯示或隱藏元素，Angular v17+ 推薦使用哪種寫法？',
    options: [
      '<div *ngIf="isVisible">內容</div>',
      '<div [hidden]="!isVisible">內容</div>',
      '@if (isVisible) { <div>內容</div> }',
      '<div v-if="isVisible">內容</div>',
    ],
    correctIndex: 2,
    category: '基礎語法',
    optionExplanations: [
      '*ngIf 是舊版結構指令語法，Angular v17+ 推薦改用內建控制流程 @if，舊語法仍可用但非首選。',
      '[hidden] 只是在 DOM 上套用 display: none，元素仍存在於頁面中；條件渲染應讓元素完全不出現在 DOM 裡。',
      '正確。Angular v17+ 引入內建控制流程，@if 語法不需 import CommonModule，可讀性更接近 TypeScript，是目前官方推薦寫法。',
      'v-if 是 Vue.js 的語法，Angular 沒有這個指令。',
    ],
    correctAnswerCode: `// Angular v17+ 推薦寫法
@if (isLoggedIn) {
  <p>歡迎回來！</p>
} @else {
  <p>請先登入</p>
}

// 舊版寫法（仍可用）
// <p *ngIf="isLoggedIn">歡迎回來！</p>`,
  },
  {
    question: '在 Angular 模板中，要將陣列資料重複渲染成清單，Angular v17+ 推薦使用哪種寫法？',
    options: [
      '<li *ngFor="let item of items">{{ item }}</li>',
      '@for (item of items) { <li>{{ item }}</li> }',
      '@for (item of items; track item) { <li>{{ item }}</li> }',
      '<li v-for="item in items">{{ item }}</li>',
    ],
    correctIndex: 2,
    category: '基礎語法',
    optionExplanations: [
      '*ngFor 是舊版結構指令語法，Angular v17+ 推薦改用內建控制流程 @for，舊語法仍可用但非首選。',
      '語法接近正確，但缺少必填的 track，Angular v17+ 的 @for 強制要求 track 來追蹤每個項目、優化重新渲染。',
      '正確。@for 是 Angular v17+ 推薦的迴圈語法，track 為必填，告訴 Angular 如何識別每個項目以避免不必要的 DOM 重建。',
      'v-for 是 Vue.js 的語法，Angular 沒有這個指令。',
    ],
    correctAnswerCode: `// Angular v17+ 推薦寫法（track 為必填）
@for (user of users; track user.id) {
  <li>{{ user.name }}</li>
}

// 若項目沒有唯一 id，可用內建變數 $index
@for (item of items; track $index) {
  <li>{{ item }}</li>
}

// 舊版寫法（仍可用）
// <li *ngFor="let user of users">{{ user.name }}</li>`,
  },
  {
    question: '在 Angular 模板中，要動態綁定 DOM 屬性（例如根據條件停用按鈕），應使用哪種語法？',
    options: [
      '<button disabled="isDisabled">送出</button>',
      '<button (disabled)="isDisabled">送出</button>',
      '<button [disabled]="isDisabled">送出</button>',
      '<button {{disabled}}="isDisabled">送出</button>',
    ],
    correctIndex: 2,
    category: '基礎語法',
    optionExplanations: [
      '這是靜態 HTML 屬性寫法，會把字串 "isDisabled" 當作值傳入，無法動態綁定元件的變數。',
      '() 是事件綁定語法，用來監聽 DOM 事件（如 click、input），不是用來設定屬性值。',
      '正確。[] 是 Angular 的屬性綁定語法，會將右側運算式的結果綁定到 DOM property，isDisabled 為 true 時按鈕停用，false 時恢復。',
      '{{ }} 是插值語法，只能用在模板的文字節點中顯示值，不能放在 HTML 屬性位置。',
    ],
    correctAnswerCode: `// 屬性綁定：[] 包住 DOM property 名稱
<button [disabled]="isSubmitting">送出</button>
<img [src]="avatarUrl" alt="頭像" />
<div [class.active]="isActive">內容</div>

// 對比：靜態寫法（不會隨變數變化）
// <button disabled>送出</button>`,
  },
];

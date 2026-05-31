import { Question } from './questions';

export const PRACTICE_QUESTIONS: readonly Question[] = [
  {
    question: 'Angular 模板中，{{ value }} 的用途是？',
    options: [
      '宣告一個新的 JavaScript 變數',
      '將元件屬性的值渲染到 HTML 中',
      '監聽 DOM 事件',
      '設定元素的 CSS 樣式',
    ],
    correctIndex: 1,
    optionExplanations: [
      '宣告變數是 JavaScript/TypeScript 的語法（let/const），不是模板語法。',
      '正確。插值語法讀取元件類別中的屬性值，轉為字串顯示在 HTML，值改變時自動更新。',
      '監聽 DOM 事件應使用事件綁定語法 (event)="handler()"。',
      '設定樣式應使用 [style.property]="value" 或 class 綁定。',
    ],
  },
  {
    question: '<img [src]="imageUrl"> 中，方括號 [] 的作用是？',
    options: [
      '把 imageUrl 當純文字字串設定給 src',
      '將元件屬性的值動態綁定到 HTML 屬性',
      '監聽 src 屬性的變更事件',
      '宣告 imageUrl 是必填的輸入屬性',
    ],
    correctIndex: 1,
    optionExplanations: [
      '若不加方括號，寫成 src="imageUrl"，Angular 會把 "imageUrl" 當成純字串，而非變數名稱。',
      '正確。[] 是屬性綁定語法，等號右側當作 TypeScript 表達式求值，結果動態設定到 DOM 屬性上。',
      '監聽事件應使用圓括號 (event)="handler()"，方括號是單向資料流（元件 → DOM）。',
      '宣告輸入屬性應在元件類別中使用 input() 或 @Input()，與模板語法無關。',
    ],
  },
  {
    question: '<button (click)="save()"> 中，圓括號 () 的作用是？',
    options: [
      '呼叫 save() 並把回傳值顯示在按鈕上',
      '監聽 DOM 事件，觸發時執行對應的處理函式',
      '將 save() 的結果綁定到按鈕屬性',
      '宣告 save 是一個輸出事件',
    ],
    correctIndex: 1,
    optionExplanations: [
      '顯示值應使用插值 {{ }}，但不建議在模板中直接呼叫函式。',
      '正確。() 是事件綁定語法，當指定的 DOM 事件觸發時，執行等號右側的表達式，資料流方向是 DOM → 元件。',
      '綁定屬性應使用方括號 [property]="value"，方向與 () 相反。',
      '宣告輸出事件應在元件類別中使用 output() 或 @Output() 裝飾器。',
    ],
  },
  {
    question: '[(ngModel)] 的作用是？',
    options: [
      '只讀取表單欄位的值，不更新畫面',
      '只將屬性顯示到畫面，不監聽使用者輸入',
      '同時將屬性顯示到輸入框，並在輸入時同步更新元件屬性',
      '驗證表單欄位是否符合格式',
    ],
    correctIndex: 2,
    optionExplanations: [
      '只讀取值不更新畫面，描述的是單向事件綁定 (ngModelChange)。',
      '只顯示到畫面不監聽輸入，描述的是單向屬性綁定 [ngModel]。',
      '正確。[()] 是「香蕉在盒子」語法，結合 [ngModel]（屬性綁定）和 (ngModelChange)（事件綁定），實現雙向同步。需匯入 FormsModule。',
      '驗證應使用 Validators 搭配 ReactiveFormsModule。',
    ],
  },
  {
    question: '@Component({ selector: \'app-card\' }) 中，selector 的用途是？',
    options: [
      '定義元件的 CSS 選擇器，用於套用樣式',
      '指定元件在其他模板中使用時的 HTML 標籤名稱',
      '選擇要載入哪個外部模板檔案',
      '設定元件的路由路徑',
    ],
    correctIndex: 1,
    optionExplanations: [
      'selector 雖然語法類似 CSS 選擇器，但用途是定義 HTML 標籤名稱，與套用樣式無關。',
      '正確。其他模板寫 <app-card> 時，Angular 就會渲染這個元件。',
      '外部模板檔案使用 templateUrl 屬性指定，與 selector 無關。',
      '路由路徑在 app.routes.ts 中的 path 屬性定義，與 selector 無關。',
    ],
  },
  {
    question: '以下關於 ngOnInit 和 constructor 的敘述，何者正確？',
    options: [
      '兩者完全相同，可以互換使用',
      'constructor 用來接收 @Input()，ngOnInit 用來注入依賴',
      'constructor 用來注入依賴，ngOnInit 在 Angular 完成輸入屬性初始化後執行',
      'ngOnInit 只在元件有 @Input() 時才會被呼叫',
    ],
    correctIndex: 2,
    optionExplanations: [
      '兩者執行時機不同，不可互換。constructor 是 JavaScript 類別初始化，ngOnInit 是 Angular 生命週期鉤子。',
      '說反了。依賴注入在 constructor 中進行（或用 inject()），@Input() 的值在 ngOnInit 時才可靠地取得。',
      '正確。constructor 執行時 Angular 尚未設定 @Input() 的值，ngOnInit 執行時已完成輸入屬性的初始化，適合放初始資料載入邏輯。',
      'ngOnInit 是所有元件的生命週期鉤子，不論有無 @Input() 都會執行。',
    ],
  },
  {
    question: 'Angular 中 Pipe（管道）的主要用途是？',
    options: [
      '在元件之間傳遞資料',
      '攔截 HTTP 請求並修改回應',
      '在模板中轉換資料的顯示格式',
      '處理路由導航的權限控制',
    ],
    correctIndex: 2,
    optionExplanations: [
      '元件之間傳遞資料應使用 @Input()/@Output() 或 Service。',
      '攔截 HTTP 請求應使用 HttpInterceptor。',
      '正確。Pipe 用於模板中轉換格式，例如 {{ price | currency }}、{{ date | date:"yyyy/MM/dd" }}，不改變原始資料。',
      '路由權限控制應使用路由 Guard（如 CanActivate）。',
    ],
  },
  {
    question: 'Angular 17+ 的 @if 相較於 *ngIf 的優點是？',
    options: [
      '@if 支援雙向綁定，*ngIf 不支援',
      '@if 是原生語法，不需匯入模組，且支援 @else if',
      '@if 效能比 *ngIf 慢，但語法更簡潔',
      '@if 只能用在 standalone 元件中',
    ],
    correctIndex: 1,
    optionExplanations: [
      '雙向綁定與控制流語法無關，兩者都不涉及雙向綁定。',
      '正確。@if 是編譯器原生支援的語法，不需 CommonModule，且支援 @else if 鏈，舊版 *ngIf 的 else 需搭配 ng-template。',
      '@if 的效能與 *ngIf 相同或更好，是編譯器層級的最佳化。',
      '@if 可在所有元件中使用，不限於 standalone 元件。',
    ],
  },
  {
    question: 'readonly title = input<string>() 的用途是？',
    options: [
      '建立響應式的本地狀態',
      '宣告可接收父元件傳入值的輸入屬性',
      '建立從其他 signal 衍生的計算值',
      '宣告可發出事件給父元件的輸出屬性',
    ],
    correctIndex: 1,
    optionExplanations: [
      '建立本地響應式狀態應使用 signal()。',
      '正確。input() 是 Angular 17+ 的函式式 API，等同舊版 @Input() 裝飾器，回傳值是 Signal，可響應式讀取。',
      '從其他 signal 衍生計算值應使用 computed()。',
      '宣告輸出事件應使用 output()，對應舊版的 @Output() + EventEmitter。',
    ],
  },
  {
    question: 'readonly clicked = output<string>() 宣告後，如何在元件內部發出事件？',
    options: [
      'this.clicked.next("value")',
      'this.clicked.emit("value")',
      'this.clicked.set("value")',
      'this.clicked.dispatch("value")',
    ],
    correctIndex: 1,
    optionExplanations: [
      '.next() 是 RxJS Subject 的方法，output() 回傳的是 OutputEmitterRef，不使用 .next()。',
      '正確。output() 回傳 OutputEmitterRef，呼叫 .emit() 發出事件，父元件可用 (clicked)="handler($event)" 監聽。',
      '.set() 是 signal() 的方法，用於設定響應式狀態值，與事件發射無關。',
      '.dispatch() 不存在於 Angular OutputEmitterRef API 中。',
    ],
  },
  {
    question: '<router-outlet> 在 Angular 中的用途是？',
    options: [
      '宣告應用程式的路由設定',
      '標記路由匹配的元件要渲染的位置',
      '建立頁面間的超連結',
      '保護路由不被未授權使用者存取',
    ],
    correctIndex: 1,
    optionExplanations: [
      '路由設定在 app.routes.ts 中的 Routes 陣列定義，與 <router-outlet> 無關。',
      '正確。<router-outlet> 是佔位元素，Angular Router 根據當前 URL 將匹配到的元件渲染在此位置。',
      '建立超連結應使用 <a routerLink="/path">，或程式導航用 router.navigate()。',
      '路由保護應使用路由 Guard，如 CanActivate。',
    ],
  },
  {
    question: '<a routerLink="/about"> 與 <a href="/about"> 的差別是？',
    options: [
      'routerLink 會開新分頁，href 在同分頁開啟',
      '兩者完全相同，可以互換使用',
      'routerLink 透過 Angular Router 進行 SPA 導航，不重新載入整個頁面',
      'routerLink 只能用於有 @Input() 的元件',
    ],
    correctIndex: 2,
    optionExplanations: [
      '兩者預設都在同分頁開啟，routerLink 不改變這個行為。',
      '使用 href 會造成整頁重新載入，失去 SPA 的優勢，兩者行為不同。',
      '正確。routerLink 使用 History API 切換 URL，Angular 更新視圖，不觸發完整頁面重載，保留應用程式狀態。',
      'routerLink 是一個指令，可用在任何匯入了 RouterLink 的元件中。',
    ],
  },
  {
    question: '<input #nameInput> 中，#nameInput 的用途是？',
    options: [
      '宣告一個名為 nameInput 的 CSS class',
      '在模板中建立一個指向該 DOM 元素的參照變數',
      '將 nameInput 元件的屬性綁定到這個 input',
      '設定 input 的 id 屬性為 nameInput',
    ],
    correctIndex: 1,
    optionExplanations: [
      '宣告 CSS class 應使用 class="nameInput"，# 是模板參照變數的語法。',
      '正確。# 建立模板參照變數，可在同一模板中存取此元素，例如 {{ nameInput.value }} 或傳給函式 (click)="submit(nameInput.value)"。',
      '屬性綁定應使用 [] 語法，# 是模板參照，不涉及屬性綁定。',
      '設定 id 應使用 id="nameInput"，# 模板參照變數只在模板作用域內有效，不影響 HTML 屬性。',
    ],
  },
];

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
    category: '基礎語法',
    optionExplanations: [
      '宣告變數是 JavaScript/TypeScript 的語法（let/const），不是模板語法。',
      '正確。插值語法讀取元件類別中的屬性值，轉為字串顯示在 HTML，值改變時自動更新。',
      '監聽 DOM 事件應使用事件綁定語法 (event)="handler()"。',
      '設定樣式應使用 [style.property]="value" 或 class 綁定。',
    ],
    correctAnswerCode: `<p>{{ username }}</p>
<!-- 元件類別：username = 'Angular' -->`,
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
    category: '基礎語法',
    optionExplanations: [
      '若不加方括號，寫成 src="imageUrl"，Angular 會把 "imageUrl" 當成純字串，而非變數名稱。',
      '正確。[] 是屬性綁定語法，等號右側當作 TypeScript 表達式求值，結果動態設定到 DOM 屬性上。',
      '監聽事件應使用圓括號 (event)="handler()"，方括號是單向資料流（元件 → DOM）。',
      '宣告輸入屬性應在元件類別中使用 input() 或 @Input()，與模板語法無關。',
    ],
    correctAnswerCode: `<img [src]="imageUrl" />
<!-- 不加 [] 時，imageUrl 會被當成純字串 -->`,
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
    category: '基礎語法',
    optionExplanations: [
      '顯示值應使用插值 {{ }}，但不建議在模板中直接呼叫函式。',
      '正確。() 是事件綁定語法，當指定的 DOM 事件觸發時，執行等號右側的表達式，資料流方向是 DOM → 元件。',
      '綁定屬性應使用方括號 [property]="value"，方向與 () 相反。',
      '宣告輸出事件應在元件類別中使用 output() 或 @Output() 裝飾器。',
    ],
    correctAnswerCode: `<button (click)="save()">儲存</button>
<input (input)="onInput($event)" />`,
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
    category: '基礎語法',
    optionExplanations: [
      '只讀取值不更新畫面，描述的是單向事件綁定 (ngModelChange)。',
      '只顯示到畫面不監聽輸入，描述的是單向屬性綁定 [ngModel]。',
      '正確。[()] 是「香蕉在盒子」語法，結合 [ngModel]（屬性綁定）和 (ngModelChange)（事件綁定），實現雙向同步。需匯入 FormsModule。',
      '驗證應使用 Validators 搭配 ReactiveFormsModule。',
    ],
    correctAnswerCode: `<input [(ngModel)]="username" />
<p>{{ username }}</p>
<!-- 輸入時畫面自動同步 -->`,
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
    category: '基礎語法',
    optionExplanations: [
      'selector 雖然語法類似 CSS 選擇器，但用途是定義 HTML 標籤名稱，與套用樣式無關。',
      '正確。其他模板寫 <app-card> 時，Angular 就會渲染這個元件。',
      '外部模板檔案使用 templateUrl 屬性指定，與 selector 無關。',
      '路由路徑在 app.routes.ts 中的 path 屬性定義，與 selector 無關。',
    ],
    correctAnswerCode: `@Component({ selector: 'app-card' })
export class CardComponent {}
// 使用：<app-card></app-card>`,
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
    category: '基礎語法',
    optionExplanations: [
      '兩者執行時機不同，不可互換。constructor 是 JavaScript 類別初始化，ngOnInit 是 Angular 生命週期鉤子。',
      '說反了。依賴注入在 constructor 中進行（或用 inject()），@Input() 的值在 ngOnInit 時才可靠地取得。',
      '正確。constructor 執行時 Angular 尚未設定 @Input() 的值，ngOnInit 執行時已完成輸入屬性的初始化，適合放初始資料載入邏輯。',
      'ngOnInit 是所有元件的生命週期鉤子，不論有無 @Input() 都會執行。',
    ],
    correctAnswerCode: `ngOnInit() {
  // ✓ @Input() 已就緒，適合載入初始資料
  this.items = this.dataService.getItems();
}`,
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
    category: '基礎語法',
    optionExplanations: [
      '元件之間傳遞資料應使用 @Input()/@Output() 或 Service。',
      '攔截 HTTP 請求應使用 HttpInterceptor。',
      '正確。Pipe 用於模板中轉換格式，例如 {{ price | currency }}、{{ date | date:"yyyy/MM/dd" }}，不改變原始資料。',
      '路由權限控制應使用路由 Guard（如 CanActivate）。',
    ],
    correctAnswerCode: `{{ 1234567 | number }}        <!-- 1,234,567 -->
{{ price | currency:'TWD' }}  <!-- NT$100 -->
{{ name | uppercase }}        <!-- ANGULAR -->`,
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
    category: '基礎語法',
    optionExplanations: [
      '雙向綁定與控制流語法無關，兩者都不涉及雙向綁定。',
      '正確。@if 是編譯器原生支援的語法，不需 CommonModule，且支援 @else if 鏈，舊版 *ngIf 的 else 需搭配 ng-template。',
      '@if 的效能與 *ngIf 相同或更好，是編譯器層級的最佳化。',
      '@if 可在所有元件中使用，不限於 standalone 元件。',
    ],
    correctAnswerCode: `@if (isLoggedIn) {
  <p>歡迎回來</p>
} @else if (isGuest) {
  <p>訪客模式</p>
} @else {
  <p>請登入</p>
}`,
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
    category: '基礎語法',
    optionExplanations: [
      '建立本地響應式狀態應使用 signal()。',
      '正確。input() 是 Angular 17+ 的函式式 API，等同舊版 @Input() 裝飾器，回傳值是 Signal，可響應式讀取。',
      '從其他 signal 衍生計算值應使用 computed()。',
      '宣告輸出事件應使用 output()，對應舊版的 @Output() + EventEmitter。',
    ],
    correctAnswerCode: `export class CardComponent {
  readonly title = input<string>();
  readonly count = input(0); // 有預設值
}
// 使用：<app-card [title]="'Hello'" />`,
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
    category: '基礎語法',
    optionExplanations: [
      '.next() 是 RxJS Subject 的方法，output() 回傳的是 OutputEmitterRef，不使用 .next()。',
      '正確。output() 回傳 OutputEmitterRef，呼叫 .emit() 發出事件，父元件可用 (clicked)="handler($event)" 監聽。',
      '.set() 是 signal() 的方法，用於設定響應式狀態值，與事件發射無關。',
      '.dispatch() 不存在於 Angular OutputEmitterRef API 中。',
    ],
    correctAnswerCode: `readonly clicked = output<string>();

handleClick() {
  this.clicked.emit('clicked!');
}`,
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
    category: '基礎語法',
    optionExplanations: [
      '路由設定在 app.routes.ts 中的 Routes 陣列定義，與 <router-outlet> 無關。',
      '正確。<router-outlet> 是佔位元素，Angular Router 根據當前 URL 將匹配到的元件渲染在此位置。',
      '建立超連結應使用 <a routerLink="/path">，或程式導航用 router.navigate()。',
      '路由保護應使用路由 Guard，如 CanActivate。',
    ],
    correctAnswerCode: `<nav>...</nav>
<router-outlet />
<!-- 路由匹配的元件渲染在這裡 -->`,
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
    category: '基礎語法',
    optionExplanations: [
      '兩者預設都在同分頁開啟，routerLink 不改變這個行為。',
      '使用 href 會造成整頁重新載入，失去 SPA 的優勢，兩者行為不同。',
      '正確。routerLink 使用 History API 切換 URL，Angular 更新視圖，不觸發完整頁面重載，保留應用程式狀態。',
      'routerLink 是一個指令，可用在任何匯入了 RouterLink 的元件中。',
    ],
    correctAnswerCode: `<!-- ✓ SPA 導航，不重新載入頁面 -->
<a routerLink="/about">關於</a>

<!-- ✗ 整頁重載，失去 SPA 優勢 -->
<a href="/about">關於</a>`,
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
    category: '基礎語法',
    optionExplanations: [
      '宣告 CSS class 應使用 class="nameInput"，# 是模板參照變數的語法。',
      '正確。# 建立模板參照變數，可在同一模板中存取此元素，例如 {{ nameInput.value }} 或傳給函式 (click)="submit(nameInput.value)"。',
      '屬性綁定應使用 [] 語法，# 是模板參照，不涉及屬性綁定。',
      '設定 id 應使用 id="nameInput"，# 模板參照變數只在模板作用域內有效，不影響 HTML 屬性。',
    ],
    correctAnswerCode: `<input #nameInput type="text" />
<button (click)="greet(nameInput.value)">打招呼</button>`,
  },

  // 生命週期
  {
    question: '以下哪個是 Angular 生命週期鉤子的正確執行順序？',
    options: [
      'ngOnInit → ngOnChanges → ngAfterViewInit → ngOnDestroy',
      'ngOnChanges → ngOnInit → ngAfterViewInit → ngOnDestroy',
      'ngOnInit → ngAfterViewInit → ngOnChanges → ngOnDestroy',
      'ngAfterViewInit → ngOnInit → ngOnChanges → ngOnDestroy',
    ],
    correctIndex: 1,
    category: '生命週期',
    optionExplanations: [
      'ngOnChanges 必須在 ngOnInit 之前，因為它負責接收初始的 @Input() 值，ngOnInit 執行時才能安全使用這些值。',
      '正確。ngOnChanges 在每次 @Input() 變更時觸發（包含第一次），ngOnInit 只執行一次，ngAfterViewInit 在視圖建立後執行，ngOnDestroy 在銷毀前執行。',
      'ngOnChanges 不可能在 ngOnInit 之後，因為 ngOnInit 需要依賴 @Input() 的初始值。',
      'ngAfterViewInit 必須在視圖建立後才執行，不可能排在最前面。',
    ],
    correctAnswerCode: `ngOnChanges()      // @Input() 變更時（含首次）
ngOnInit()         // 初始化一次
ngAfterViewInit()  // 視圖建立完成
ngOnDestroy()      // 元件銷毀前`,
  },
  {
    question: 'ngOnChanges 什麼時候會被呼叫？',
    options: [
      '元件初始化時執行一次，之後不再執行',
      '每次 @Input() 的值（參照）發生變更時',
      '元件視圖渲染完成後',
      '元件銷毀前',
    ],
    correctIndex: 1,
    category: '生命週期',
    optionExplanations: [
      'ngOnChanges 不只執行一次，每次 @Input() 參照改變都會觸發，包含第一次初始化。',
      '正確。首次設定 @Input() 以及後續每次值改變都會觸發。若元件沒有任何 @Input()，則永遠不會被呼叫。',
      '視圖渲染完成後執行的是 ngAfterViewInit，不是 ngOnChanges。',
      '元件銷毀前執行的是 ngOnDestroy。',
    ],
    correctAnswerCode: `ngOnChanges(changes: SimpleChanges) {
  console.log(changes['title'].currentValue);
}`,
  },
  {
    question: 'ngOnChanges(changes: ???) 的參數型別是？',
    options: [
      'InputChanges',
      'ChangeDetectorRef',
      'SimpleChanges',
      'Record<string, any>',
    ],
    correctIndex: 2,
    category: '生命週期',
    optionExplanations: [
      'InputChanges 並不存在於 Angular API 中。',
      'ChangeDetectorRef 是用來手動控制變更偵測的服務，與 ngOnChanges 的參數無關。',
      '正確。SimpleChanges 是一個物件，key 是 @Input() 屬性名稱，value 是 SimpleChange，包含 currentValue、previousValue、firstChange 三個欄位。',
      'Angular 有明確的型別定義，使用 SimpleChanges 而非泛型 Record。',
    ],
    correctAnswerCode: `ngOnChanges(changes: SimpleChanges) {
  const { currentValue, previousValue, firstChange }
    = changes['title'];
}`,
  },
  {
    question: '以下哪種情況 ngOnChanges 不會被呼叫？',
    options: [
      '@Input() 從 "hello" 變為 "world"',
      '@Input() 從 null 變為一個新物件',
      '@Input() 物件的內部屬性被修改，但物件參照未改變',
      '元件第一次初始化，@Input() 收到初始值',
    ],
    correctIndex: 2,
    category: '生命週期',
    optionExplanations: [
      '字串是原始值，"hello" 和 "world" 是不同的值，Angular 可以偵測到變更，會觸發 ngOnChanges。',
      '從 null 變為新物件，參照確實改變，Angular 可以偵測到，會觸發 ngOnChanges。',
      '正確。Angular 以參照比較（===）判斷 @Input() 是否變更。修改物件內部屬性不改變參照，Angular 偵測不到，ngOnChanges 不會觸發。',
      '第一次初始化時 Angular 會呼叫 ngOnChanges，SimpleChange 的 firstChange 屬性為 true。',
    ],
    correctAnswerCode: `// ✗ 不觸發（同一個物件參照）
this.user.name = 'new name';

// ✓ 觸發（新參照）
this.user = { ...this.user, name: 'new name' };`,
  },
  {
    question: '以下哪個操作應放在 ngAfterViewInit 而非 ngOnInit？',
    options: [
      '呼叫 API 取得初始資料',
      '初始化表單的預設值',
      '存取 @ViewChild 取得的 DOM 元素並操作它',
      '訂閱路由參數的變更',
    ],
    correctIndex: 2,
    category: '生命週期',
    optionExplanations: [
      'API 呼叫放在 ngOnInit 即可，此時依賴注入和 @Input() 都已就緒，不需要等到視圖建立。',
      '表單初始化放在 ngOnInit 即可，不依賴 DOM 元素的存在。',
      '正確。@ViewChild 在 ngOnInit 執行時尚未渲染，值為 undefined。ngAfterViewInit 執行時視圖已建立完成，才能安全存取 DOM 元素或子元件。',
      '路由參數訂閱放在 ngOnInit 即可，與視圖是否建立無關。',
    ],
    correctAnswerCode: `@ViewChild('myInput') input!: ElementRef;

ngAfterViewInit() {
  this.input.nativeElement.focus(); // ✓ 視圖已就緒
  // ngOnInit() 中 this.input 為 undefined
}`,
  },
  {
    question: 'ngOnDestroy 的主要用途是？',
    options: [
      '初始化元件資料',
      '在視圖更新後執行額外邏輯',
      '接收父元件傳入的初始 @Input() 值',
      '清除訂閱、計時器等資源，防止記憶體洩漏',
    ],
    correctIndex: 3,
    category: '生命週期',
    optionExplanations: [
      '初始化元件資料應在 ngOnInit 中進行。',
      '視圖更新後執行邏輯應在 ngAfterViewChecked 中進行。',
      '@Input() 的初始值在 ngOnChanges 和 ngOnInit 中處理，ngOnDestroy 是元件銷毀前的最後鉤子。',
      '正確。未清除的 Observable 訂閱和 setInterval 在元件銷毀後仍會繼續執行，造成記憶體洩漏。現代 Angular 可用 takeUntilDestroyed() 自動處理。',
    ],
    correctAnswerCode: `this.service.data$.pipe(
  takeUntilDestroyed() // 元件銷毀時自動取消
).subscribe(data => this.data = data);`,
  },
  {
    question: '元件使用 ChangeDetectionStrategy.OnPush，ngOnChanges 何時仍會被呼叫？',
    options: [
      '永遠不會被呼叫',
      '只有在元件第一次渲染時',
      '當 @Input() 傳入新的參照時',
      '需要手動呼叫 ChangeDetectorRef.detectChanges() 才會觸發',
    ],
    correctIndex: 2,
    category: '生命週期',
    optionExplanations: [
      'OnPush 不影響 ngOnChanges 的呼叫，只要 @Input() 參照改變，ngOnChanges 仍會執行。',
      'ngOnChanges 不限於只在第一次渲染時執行，每次 @Input() 參照改變都會觸發。',
      '正確。OnPush 以參照比較判斷輸入是否改變，傳入新參照時仍會觸發 ngOnChanges，同時也會觸發變更偵測。這也是為什麼 OnPush 搭配不可變資料效果最好。',
      'detectChanges() 是手動觸發變更偵測，與 ngOnChanges 的呼叫時機無關。',
    ],
    correctAnswerCode: `@Component({ changeDetection: ChangeDetectionStrategy.OnPush })
export class CardComponent {
  @Input() title = '';
  // 傳入新參照時，ngOnChanges 仍正常執行
}`,
  },

  // RxJS
  {
    question: 'Observable 與 Promise 最主要的差別是？',
    options: [
      'Observable 是同步的，Promise 是非同步的',
      'Observable 可以發出多個值且是惰性的，Promise 只發出一個值且立即執行',
      'Observable 只能在 Angular 中使用，Promise 可以在任何地方使用',
      'Promise 的效能比 Observable 好',
    ],
    correctIndex: 1,
    category: 'RxJS',
    optionExplanations: [
      '兩者都可以是非同步的。Observable 也可以是同步的（如 of(1,2,3)），但這不是主要差別。',
      '正確。Promise 一建立就立即執行且只 resolve 一次。Observable 是惰性的（lazy），只有訂閱後才執行，且可以持續發出多個值，例如 WebSocket 訊息或定時器。',
      'Observable（RxJS）是獨立的函式庫，可以在任何 JavaScript 環境中使用，不限於 Angular。',
      '效能取決於使用場景，Observable 的惰性特性在很多情況下反而更有效率，無法一概而論。',
    ],
    correctAnswerCode: `// Promise：立即執行，只發一次值
const p = new Promise(resolve => resolve(1));

// Observable：惰性，可發多次值
const o$ = new Observable(sub => {
  sub.next(1);
  sub.next(2);
});
o$.subscribe(v => console.log(v)); // 訂閱後才執行`,
  },
  {
    question: 'switchMap 的行為是？',
    options: [
      '等待前一個 Observable 完成後才訂閱下一個',
      '同時保留所有 Observable，依完成順序發出值',
      '切換到新 Observable 時，取消前一個尚未完成的 Observable',
      '將所有 Observable 的值合併成陣列後一次發出',
    ],
    correctIndex: 2,
    category: 'RxJS',
    optionExplanations: [
      '等待前一個完成才訂閱下一個，這是 concatMap 的行為。',
      '同時保留所有並依完成順序發出，這是 mergeMap 的行為。',
      '正確。switchMap 最常用於搜尋框：每次輸入新字元就切換到新的 API 請求，自動取消前一個還沒回來的請求，避免舊回應覆蓋新結果（race condition）。',
      '合併成陣列一次發出，這是 forkJoin 的行為。',
    ],
    correctAnswerCode: `searchInput.valueChanges.pipe(
  switchMap(query => this.api.search(query))
).subscribe(results => { ... });
// 新輸入時自動取消前一個未完成的請求`,
  },
  {
    question: 'switchMap 與 mergeMap 的主要差別是？',
    options: [
      'mergeMap 取消前一個請求，switchMap 不取消',
      'switchMap 取消前一個未完成的請求，mergeMap 同時保留所有請求',
      '兩者完全相同，只是命名不同',
      'mergeMap 只能用於 HTTP 請求',
    ],
    correctIndex: 1,
    category: 'RxJS',
    optionExplanations: [
      '說反了。是 switchMap 取消前一個，mergeMap 不取消。',
      '正確。mergeMap 適合多個請求可以並行且順序不重要的場景（如同時上傳多個檔案）；switchMap 適合只關心最新請求結果的場景（如搜尋）。',
      '兩者行為完全不同，選錯 operator 可能造成 race condition 或請求遺失等 bug。',
      'mergeMap 可用於任何 Observable，不限於 HTTP 請求。',
    ],
    correctAnswerCode: `// switchMap：切換，取消前一個
clicks$.pipe(switchMap(() => api.fetch()));

// mergeMap：並行，保留所有
uploads$.pipe(mergeMap(file => api.upload(file)));`,
  },
  {
    question: '以下哪個場景最適合使用 concatMap？',
    options: [
      '搜尋框即時查詢，只需要最新結果',
      '同時上傳多個檔案，不在乎順序',
      '依序送出多筆訂單，必須前一筆完成才送下一筆',
      '防止按鈕在請求進行中被重複點擊',
    ],
    correctIndex: 2,
    category: 'RxJS',
    optionExplanations: [
      '搜尋框只需最新結果，應使用 switchMap 取消前一個請求。',
      '並行上傳且不在乎順序，應使用 mergeMap 同時處理多個請求。',
      '正確。concatMap 依序排隊，等前一個 Observable 完成才訂閱下一個，保證執行順序，適合有前後依賴的操作。',
      '防止重複點擊應使用 exhaustMap，它在前一個請求進行中時會忽略新的觸發。',
    ],
    correctAnswerCode: `orders$.pipe(
  concatMap(order => api.submit(order))
).subscribe();
// 等前一筆完成，才送出下一筆`,
  },
  {
    question: 'BehaviorSubject 與 Subject 的主要差別是？',
    options: [
      'BehaviorSubject 不能手動呼叫 .next() 發出值',
      'BehaviorSubject 需要初始值，新訂閱者會立即收到最新的值',
      'Subject 需要初始值，BehaviorSubject 不需要',
      '兩者完全相同，BehaviorSubject 只是 Subject 的別名',
    ],
    correctIndex: 1,
    category: 'RxJS',
    optionExplanations: [
      'BehaviorSubject 和 Subject 一樣可以呼叫 .next() 發出新值。',
      '正確。BehaviorSubject 有「記憶」功能，新訂閱者加入時會立即收到最後一次發出的值，適合儲存應用程式狀態（如登入狀態、使用者資料）。',
      '說反了。需要初始值的是 BehaviorSubject，Subject 不需要初始值。',
      '兩者行為不同，BehaviorSubject 繼承自 Subject 但增加了狀態保存功能。',
    ],
    correctAnswerCode: `const s = new Subject<number>();
// 新訂閱者收不到之前的值

const b = new BehaviorSubject<number>(0);
b.subscribe(v => console.log(v)); // 立即收到 0`,
  },
  {
    question: 'ReplaySubject 與 BehaviorSubject 的差別是？',
    options: [
      'ReplaySubject 需要初始值，BehaviorSubject 不需要',
      'ReplaySubject 可以重播指定數量的歷史值，BehaviorSubject 只保留最新一個值',
      '兩者完全相同',
      'BehaviorSubject 可以重播歷史值，ReplaySubject 不行',
    ],
    correctIndex: 1,
    category: 'RxJS',
    optionExplanations: [
      '說反了。需要初始值的是 BehaviorSubject，ReplaySubject 不需要初始值。',
      '正確。ReplaySubject(3) 會快取最近 3 個值，新訂閱者加入時立即收到這 3 個歷史值；BehaviorSubject 只保留最新一個，且建立時必須提供初始值。',
      '兩者行為不同，適用場景也不同。',
      '說反了。能重播歷史值的是 ReplaySubject。',
    ],
    correctAnswerCode: `const r = new ReplaySubject<number>(3); // 快取最近 3 個
r.next(1); r.next(2); r.next(3); r.next(4);

r.subscribe(v => console.log(v)); // 收到 2, 3, 4`,
  },
  {
    question: 'Angular 模板中使用 async pipe 的主要優點是？',
    options: [
      '將同步值自動轉為 Observable',
      '自動訂閱 Observable 並在元件銷毀時自動取消訂閱',
      '合併多個 Observable 的值為一個',
      '快取 HTTP 請求結果，避免重複打 API',
    ],
    correctIndex: 1,
    category: 'RxJS',
    optionExplanations: [
      'async pipe 是將 Observable 的值顯示在模板中，而不是反過來將同步值轉為 Observable。',
      '正確。手動訂閱需要在 ngOnDestroy 中取消，async pipe 自動管理訂閱生命週期，大幅減少記憶體洩漏的風險，是官方推薦做法。',
      '合併多個 Observable 應使用 combineLatest、forkJoin 等 operator。',
      'async pipe 不具備快取功能，每次訂閱都會重新執行。若需快取可搭配 shareReplay operator。',
    ],
    correctAnswerCode: `// 元件
readonly items$ = this.service.getItems();

// 模板：自動訂閱，元件銷毀時自動取消
<li *ngFor="let item of items$ | async">{{ item }}</li>`,
  },
  {
    question: 'takeUntilDestroyed() 的用途是？',
    options: [
      '只取得 Observable 的前 N 個值就自動完成',
      '在元件銷毀時自動取消訂閱，避免記憶體洩漏',
      '將 Observable 轉換為 Promise',
      '在 Observable 發生錯誤時自動重新訂閱',
    ],
    correctIndex: 1,
    category: 'RxJS',
    optionExplanations: [
      '只取前 N 個值應使用 take(N) operator。',
      '正確。Angular 16+ 提供的 operator，搭配 DestroyRef 在元件銷毀時自動完成 Observable，是比 ngOnDestroy + Subject 組合更簡潔的現代寫法。',
      '將 Observable 轉為 Promise 應使用 firstValueFrom() 或 lastValueFrom()。',
      '發生錯誤時重新訂閱應使用 retry() 或 retryWhen() operator。',
    ],
    correctAnswerCode: `this.service.data$.pipe(
  takeUntilDestroyed() // 元件銷毀時自動取消訂閱
).subscribe(data => this.data = data);`,
  },
];

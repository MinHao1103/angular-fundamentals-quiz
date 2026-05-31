export interface Question {
  question: string;
  options: readonly string[];
  correctIndex: number;
  optionExplanations: readonly string[];
}

export const QUESTIONS: readonly Question[] = [
  {
    question: 'Angular v20+ 中，關於 standalone 元件的敘述何者正確？',
    options: [
      '需要在 AppModule 中宣告才能使用',
      'standalone: true 是預設值，不需要明確設定',
      '必須設定 standalone: false 才能搭配路由使用',
      'standalone 元件無法直接匯入其他元件',
    ],
    correctIndex: 1,
    optionExplanations: [
      '這是 NgModule 時代的做法。Standalone 元件完全不需要 NgModule，可以獨立存在。',
      '正確。從 Angular v17 開始推進，v20+ 正式將 standalone 設為預設值，不再需要明確宣告。',
      '錯誤。Standalone 元件可以直接用於路由的 loadComponent，不需要任何額外設定。',
      '錯誤。Standalone 元件可以在另一個元件的 imports 陣列中直接匯入使用。',
    ],
  },
  {
    question: 'Angular 元件預設的變更偵測策略（Change Detection Strategy）是？',
    options: [
      'ChangeDetectionStrategy.OnPush',
      'ChangeDetectionStrategy.Detached',
      'ChangeDetectionStrategy.Default',
      'ChangeDetectionStrategy.Always',
    ],
    correctIndex: 2,
    optionExplanations: [
      'OnPush 需要明確設定，效能較佳，但只在 @Input 參照改變或 signal 更新時才檢查。',
      'Detached 會將元件從變更偵測樹中移除，幾乎不會主動使用。',
      '正確。Default 策略由 Zone.js 驅動，任何非同步事件（點擊、HTTP 回應等）都會觸發整棵元件樹的檢查。',
      'ChangeDetectionStrategy.Always 並不存在於 Angular API 中。',
    ],
  },
  {
    question: '在 Angular 中，要讀取 signal() 的目前值，正確的方式是？',
    options: [
      'signal.value',
      'signal.get()',
      'signal.read()',
      '直接呼叫它，例如 signal()',
    ],
    correctIndex: 3,
    optionExplanations: [
      '.value 是 Vue 3 ref 的語法，Angular signal 沒有此屬性。',
      '.get() 是舊版草案的設計，正式版 Angular signal 並未採用。',
      '.read() 不存在於 Angular signal API 中。',
      '正確。Signal 本身是一個 getter function，直接呼叫 signal() 即可讀取值，並在 reactive context 中自動追蹤依賴。',
    ],
  },
  {
    question: 'computed() 的主要用途是？',
    options: [
      '執行 HTTP 請求並快取結果',
      '在 signal 變更時執行副作用',
      '建立從其他 signal 衍生的唯讀響應式值',
      '取代 RxJS 的 BehaviorSubject',
    ],
    correctIndex: 2,
    optionExplanations: [
      'HTTP 請求應使用 HttpClient 搭配 Observable，或透過 toSignal() 轉為 signal。',
      '在 signal 變更時執行副作用是 effect() 的職責，computed() 是純計算，不應有副作用。',
      '正確。computed() 會自動追蹤內部使用到的 signal，任一依賴變更時自動重新計算，結果為唯讀。',
      'computed() 與 BehaviorSubject 雖然都能保存值，但 computed 是衍生值，無法直接寫入，用途不同。',
    ],
  },
  {
    question: 'Angular 中，effect() 的用途是？',
    options: [
      '建立衍生的 signal 值',
      '在依賴的 signal 變更時自動執行副作用',
      '攔截路由導航事件',
      '在元件銷毀時清除訂閱',
    ],
    correctIndex: 1,
    optionExplanations: [
      '建立衍生值是 computed() 的職責。effect() 不會回傳值，專門用來處理副作用。',
      '正確。effect() 會追蹤內部讀取的 signal，當依賴變更時自動重新執行，適合記錄 log、同步外部狀態等場景。',
      '路由事件應透過 Router.events Observable 或路由 Guards 處理，與 effect() 無關。',
      '清除訂閱應使用 takeUntilDestroyed() 搭配 DestroyRef，或在 ngOnDestroy 中處理。',
    ],
  },
  {
    question: '下列哪個 API 用於在 Angular 函式（非 constructor）中注入依賴？',
    options: [
      '@Inject() 裝飾器',
      'Injector.create()',
      'inject()',
      'ReflectiveInjector.get()',
    ],
    correctIndex: 2,
    optionExplanations: [
      '@Inject() 是 constructor 參數裝飾器，用來指定注入的 token，無法在一般函式中使用。',
      'Injector.create() 用於動態建立獨立的 injector 實例，並非一般依賴注入的方式。',
      '正確。inject() 可在 injection context（元件欄位初始化、constructor 執行期間）中呼叫，是現代 Angular 推薦的注入方式。',
      'ReflectiveInjector 已於 Angular v5 棄用，不應在新專案中使用。',
    ],
  },
  {
    question: 'Angular 路由中，要對元件進行 lazy loading，應使用哪個屬性？',
    options: [
      'component',
      'loadChildren',
      'loadComponent',
      'asyncComponent',
    ],
    correctIndex: 2,
    optionExplanations: [
      'component 屬性會直接（非 lazy）載入元件，元件會被打包進主 bundle。',
      'loadChildren 用於 lazy loading 整個子路由群組（Routes 陣列或 NgModule），而非單一元件。',
      '正確。loadComponent 接受回傳 standalone 元件的動態 import，Angular 會在導航時才載入該 chunk。',
      'asyncComponent 並不存在於 Angular 路由 API 中。',
    ],
  },
  {
    question: 'Angular 原生控制流 @for 中，哪個是必填的？',
    options: [
      'let item of items',
      'track 表達式',
      '@empty 區塊',
      'index as i',
    ],
    correctIndex: 1,
    optionExplanations: [
      'let item of items 是 @for 的迭代語法本體，屬於語法結構而非獨立的必填「選項」。',
      '正確。Angular 強制要求提供 track，用於唯一識別每個項目，讓框架高效重用 DOM 節點而非全部重建。',
      '@empty 是選填區塊，用於陣列為空時顯示替代內容，不是必填。',
      'index as i 是選填的索引別名，只在需要使用索引時才加入。',
    ],
  },
  {
    question: 'ChangeDetectionStrategy.OnPush 會在哪種情況下觸發變更偵測？',
    options: [
      '任何瀏覽器事件發生時',
      '每隔固定時間自動觸發',
      '@Input() 參照改變、signal 更新，或明確標記時',
      '只有在元件初始化（ngOnInit）時',
    ],
    correctIndex: 2,
    optionExplanations: [
      '這是 Default 策略的行為，Zone.js 會攔截所有非同步事件並觸發全樹檢查。',
      'Angular 沒有定時自動觸發變更偵測的機制。',
      '正確。OnPush 有三個觸發條件：@Input 傳入新參照、元件內的 signal 更新、或呼叫 ChangeDetectorRef.markForCheck()。',
      'ngOnInit 只在元件初始化時執行一次，並非變更偵測的觸發機制。',
    ],
  },
  {
    question: 'Angular 中，哪個內建指令專門用來最佳化靜態圖片的載入？',
    options: [
      'NgLazyImage',
      'NgImage',
      'ImageOptimizer',
      'NgOptimizedImage',
    ],
    correctIndex: 3,
    optionExplanations: [
      'NgLazyImage 並不存在於 Angular 標準函式庫中。',
      'NgImage 並不存在於 Angular 標準函式庫中。',
      'ImageOptimizer 並不存在於 Angular 標準函式庫中。',
      '正確。NgOptimizedImage 來自 @angular/common，提供自動 lazy loading、LCP 優化、尺寸警告等功能，使用 [ngSrc] 屬性替代 src。',
    ],
  },
];

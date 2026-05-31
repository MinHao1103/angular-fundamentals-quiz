export interface Question {
  question: string;
  options: readonly string[];
  correctIndex: number;
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
  },
];

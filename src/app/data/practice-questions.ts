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
];

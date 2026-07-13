import type { WorkDate, UserDate } from "@/utils/type";
import image9 from "@/assets/images/workImages/image9.png";
import image10 from "@/assets/images/workImages/image10.png";
import image12 from "@/assets/images/workImages/image12.png";
import image13 from "@/assets/images/workImages/image13.png";
import image14 from "@/assets/images/workImages/image14.png";
import image15 from "@/assets/images/workImages/image15.png";
import image16 from "@/assets/images/workImages/image16.png";
import image17 from "@/assets/images/workImages/image17.png";
import image18 from "@/assets/images/workImages/image18.png";
import image19 from "@/assets/images/workImages/image19.png";

export const workData: WorkDate[] = [
    {
        id: 9,
        title: "FTG 松山奉天宮",
        content:
            "《FTG 松山奉天宮 官方網站建置》 本專案為北台灣指標性天公廟「松山奉天宮」進行官方網站數位轉型。設計上融合傳統宮殿建築的宏偉視覺與現代簡約線條，優化了廟方歷史介紹、祭祀神明導覽與線上服務流程。透過響應式網頁設計（RSD），將百年宮廟的莊嚴文化完美延伸至數位螢幕，打造兼具文化傳承與流暢體驗的現代化廟宇入口門戶。",
        url: "https://www.ftg.org.tw/",
        tags: ["Html", "Css", "JQuery", "前端網頁開發", "響應式網頁設計"],
        imageUrl: image9,
    },
    {
        id: 10,
        title: "璞永建設",
        content:
            "《璞永建設 官方網站建置》 本專案為台灣精品建築品牌「璞永建設」量身打造官方網站。設計核心延續璞永建設「與自然共生、專注建築工藝」的品牌美學，將實體建築的沉穩線條與空間通透感，轉化為當代數位視覺語彙。",
        url: "https://www.pycg.com.tw/index.php",
        tags: ["Html", "Css", "JQuery", "前端網頁開發", "響應式網頁設計"],
        imageUrl: image10,
    },
    {
        id: 12,
        title: "瑞軒科技",
        content:
            "《瑞軒科技 官方網站建置》 本專案為全球知名顯示器與消費性電子大廠「瑞軒科技（Vizio）」進行官方網站的數位品牌升級。因應跨國企業形象與雙語系需求，以現代化的網頁設計全面重塑其全球門戶。",
        url: "https://www.amtran.com.tw/index.php",
        tags: ["Html", "Css", "Javascript"],
        imageUrl: image12,
    },
    {
        id: 13,
        title: "Pexels 影像探索平台",
        content:
            "專案展示了前端非同步資料處理與 API 整合的實務應用能力，將豐富的第三方影像資源轉化為高度流暢、直覺的網頁應用程式。",
        url: "https://photos-react.netlify.app/",
        tags: [
            "JavaScript",
            "RESTful API ",
            "React",
            "非同步資料處理",
            "效能優化",
        ],
        imageUrl: image13,
    },
    {
        id: 14,
        title: "遊戲平台前端",
        content:
            "負責前端網頁製作，包含 RWD 響應式設計，使用 vue3 Composition API 實作功能開發，模組拆分與 API 串接",
        url: "https://github.com/wenkai0505/vue3DCproject",
        tags: [
            "Sass",
            "Flexbox",
            "CSS Grid",
            "Pinia",
            "Vue Router",
            "JavaScript",
            "Axios",
            "RESTful API 串接",
            "Vue3",
        ],
        imageUrl: image14,
    },
    {
        id: 15,
        title: "多版型遊戲平台",
        content:
            "多版型切換前端網頁製作，包含 RWD 響應式設計，i18n 多語系，使用 vue3 Composition API 實作功能開發，模組拆分與 API 串接",
        url: "https://github.com/wenkai0505/vue3GSIPlatform",
        tags: [
            "Vue3",
            "i18n",
            "Sass",
            "Flexbox",
            "CSS Grid",
            "Quasar",
            "Pinia",
            "Vue Router",
            "JavaScript",
            "Axios",
            "RESTful API 串接",
        ],
        imageUrl: image15,
    },
    {
        id: 16,
        title: "後台管理系統",
        content:
            "後台管理系統協作開發，前端網頁製作，包含 RWD 響應式設計，i18n 多語系，使用 vue3 Composition API 實作功能開發，模組拆分與 API 串接",
        url: "https://github.com/wenkai0505/vue3GSIDashboard",
        tags: [
            "Vue3",
            "i18n",
            "Sass",
            "Flexbox",
            "CSS Grid",
            "Quasar",
            "Pinia",
            "Vue Router",
            "JavaScript",
            "Axios",
            "RESTful API 串接",
        ],
        imageUrl: image16,
    },
    {
        id: 17,
        title: "個人作品網站",
        content:
            "個人作品網站前端頁面製作，包含 RWD 響應式設計，使用 Element+ 以及 vue3 Composition API 實作功能開發，json-server 模擬 API 資料，node.js 實現前端圖片上傳功能",
        url: "https://vue3portfolio.netlify.app/",
        tags: [
            "Vue3",
            "Element+",
            "JSON-Server",
            "Node.js",
            "express",
            "cors",
            "Pinia",
            "Vue Router",
            "typescript",
            "sass",
        ],
        imageUrl: image17,
    },
    {
        id: 18,
        title: "旅遊行程規劃 PWA",
        content: `旅遊行程規劃行動端 Web App，採手機優先 RWD 設計，支援加入 iPhone 主畫面作為 PWA 使用。以 Vue 3 Composition API 與 Composables 拆分行程規劃、景點推薦、親子公園探索等模組，搭配 Vant 元件庫與 TypeScript 實作型別安全的前端架構。

整合 ChicTrip 熱門景點 API 與全台縣市親子公園／共融遊戲場官方資料匯入，提供景點搜尋、區域篩選、多天行程編排、景點加入行程與本地儲存等功能。`,
        url: "https://vue3travelapp.netlify.app/",
        tags: [
            "Vue3",
            "TypeScript",
            "Vite",
            "Vant",
            "Composition API",
            "PWA",
            "Sass",
            "Axios",
            "Express",
            "Node.js",
        ],
        imageUrl: image18,
    },
    {
        id: 19,
        title: "玩家營運後台 CMS",
        content: `玩家營運後台 CMS，以 Vue 3 + TypeScript + Element Plus 建置，採深色主題與 RWD 後台介面。
前端獨立開發，透過 Axios 與 MSW 預先定義並模擬後端資料與 API 契約（查詢、篩選、分頁、CRUD、批次操作），讓互動流程可完整驗證，並便於之後直接串接正式後端。`,
        url: "https://vue3playercms.netlify.app/timeline",
        tags: [
            "Vue3",
            "TypeScript",
            "Vite",
            "Vue Router",
            "Element Plus",
            "Composition API",
            "Sass",
            "Axios",
            "MSW",
        ],
        imageUrl: image19,
    },
];

export const users: UserDate[] = [
    {
        id: 1,
        name: "Ryan",
        email: "ryan@gmail.com",
        password: "123456",
    },
];

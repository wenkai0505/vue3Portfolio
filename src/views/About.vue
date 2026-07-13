<template>
    <div class="about">
        <PageTitle>About Me</PageTitle>
        <section class="hero">
            <div class="hero__copy">
                <p class="eyebrow">
                    Senior Frontend Engineer / Frontend Team Lead
                </p>
                <h2>
                    我專注於把複雜需求，整理成穩定、清晰且有質感的前端體驗。
                </h2>
                <p class="summary">
                    我是李文凱
                    Ryan，擁有超過十年的前端與網頁開發經驗，近五年擔任前端團隊組長，主要負責任務分配、跨部門溝通、前端架構整合與功能落地。
                    我的實務經驗涵蓋 Vue 3、H5 行動版、多版型平台、CMS 後台、API
                    串接與客製化功能開發，長期在變動快速的專案中維持交付品質與維護效率。
                </p>

                <div class="hero__chips">
                    <span v-for="item in heroTags" :key="item" class="chip">
                        {{ item }}
                    </span>
                </div>

                <div class="hero__actions">
                    <a href="mailto:Wenkai0505@gmail.com" class="primaryBtn"
                        >聯絡我</a
                    >
                    <a
                        href="https://vue3portfolio.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="secondaryBtn"
                    >
                        查看作品集
                    </a>
                </div>
            </div>

            <div class="hero__panel">
                <div class="portrait">
                    <div class="portrait__inner">
                        <span class="portrait__small">Ryan Lee</span>
                        <span class="portrait__big">Frontend</span>
                        <span class="portrait__small portrait__small--bottom">
                            Build with clarity, ship with confidence.
                        </span>
                    </div>
                </div>

                <div class="profileList">
                    <div
                        v-for="item in profileItems"
                        :key="item.label"
                        class="profileItem"
                    >
                        <span class="profileItem__label">{{ item.label }}</span>
                        <span class="profileItem__value">{{ item.value }}</span>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" class="bioSection">
            <div class="bioHeader">
                <p class="bioHeader__label">自傳</p>
                <h3 class="bioHeader__title">
                    我相信前端不只是畫面，而是能長期運作、清楚協作的產品結構。
                </h3>
            </div>

            <div class="bioBody">
                <article
                    v-for="item in bioChapters"
                    :key="item.step"
                    class="bioChapter"
                >
                    <span class="bioChapter__step">{{ item.step }}</span>
                    <div class="bioChapter__content">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.text }}</p>
                    </div>
                </article>
            </div>

            <div class="bioHighlights">
                <article
                    v-for="item in bioHighlights"
                    :key="item.label"
                    class="bioHighlight"
                >
                    <p class="bioHighlight__label">{{ item.label }}</p>
                    <p class="bioHighlight__value">{{ item.value }}</p>
                </article>
            </div>

            <p class="bioClosing">
                每個專案都應該被當成可長期維護的產品，而不是一次性的畫面交付。
            </p>
        </section>

        <section class="stats">
            <article v-for="item in stats" :key="item.label" class="statCard">
                <p class="statCard__value">{{ item.value }}</p>
                <p class="statCard__label">{{ item.label }}</p>
            </article>
        </section>

        <section class="sectionBlock">
            <div class="sectionHeading">
                <p class="sectionHeading__subtitle">Core Strengths</p>
                <h3>把需求做成好維護的前端。</h3>
            </div>

            <div class="skillGrid">
                <article
                    v-for="item in strengths"
                    :key="item.title"
                    class="skillCard"
                >
                    <p class="skillCard__index">{{ item.index }}</p>
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.description }}</p>
                </article>
            </div>
        </section>

        <section class="sectionBlock quoteGrid">
            <div class="quoteCard">
                <p class="sectionHeading__subtitle">Working Mindset</p>
                <h3>
                    我相信好的前端，不只是在畫面上完成需求，而是讓產品更容易維護、延伸與協作。
                </h3>
                <p>
                    面對需求變動與排程壓力，我習慣先拆解問題、確認優先順序，再規劃最實際的實作路徑。
                    在開發過程中會盡量保持命名一致、結構清楚、元件可重用，讓專案不只可以交付，也能長期維護。
                </p>
            </div>

            <div class="highlightCard">
                <p class="sectionHeading__subtitle">Team Lead Experience</p>
                <ul>
                    <li>
                        帶領 5 位前端成員，負責任務分配、進度掌握與跨部門協作。
                    </li>
                    <li>
                        制定代碼規範、整理技術文件，提升團隊交接與維護效率。
                    </li>
                    <li>
                        參與 CMS 後台結構與流程調整，讓開發更符合實務使用情境。
                    </li>
                </ul>
            </div>
        </section>

        <section class="quoteBlock">
            <p class="quoteBlock__text">
                讓技術不只是完成需求，而是成為產品穩定成長的基礎。
            </p>
        </section>
    </div>
</template>

<script setup lang="ts">
import PageTitle from "@/ccomponents/PageTitle.vue";
const heroTags = [
    "Vue 3",
    "Frontend Lead",
    "CMS / API",
    "RWD",
    "SCSS",
    "Node.js",
];

const profileItems = [
    { label: "定位", value: "Senior Frontend Engineer" },
    { label: "經驗", value: "10+ 年前端 / 網頁開發" },
    { label: "管理", value: "5 年前端團隊帶領經驗" },
    { label: "AI工具", value: "ChatGPT / Cursor / Codex" },
];

const bioChapters = [
    {
        step: "01",
        title: "從視覺走到工程",
        text: "我最早做的是企業網站與視覺製作，後來逐步轉向前端。從切版、互動細節，到 Vue、Pinia 與 API 串接，這段路讓我同時在意畫面質感與程式結構。",
    },
    {
        step: "02",
        title: "從開發走到帶領",
        text: "近五年擔任前端組長，除了親自開發，也負責任務分配、需求釐清與跨部門溝通。我習慣把共用邏輯抽出來、把規範寫清楚，讓團隊交付更穩、交接更順。",
    },
];

const bioHighlights = [
    { label: "成長路徑", value: "視覺製作 → 前端架構" },
    { label: "工作風格", value: "細節、流程、清楚協作" },
    { label: "核心目標", value: "可維護的高品質產品" },
];

const stats = [
    { value: "10+ 年", label: "前端 / 網頁開發經驗" },
    { value: "5 年", label: "前端團隊管理經驗" },
    { value: "Vue 3", label: "主力框架與元件化開發" },
    { value: "CMS / API", label: "後台整合與流程優化" },
];

const strengths = [
    {
        index: "01",
        title: "前端開發",
        description:
            "熟悉 Vue 3、JavaScript、HTML5、CSS3、SCSS、RWD 與元件化開發，能獨立完成畫面、互動與 API 串接。",
    },
    {
        index: "02",
        title: "系統與流程優化",
        description:
            "曾參與 CMS 後台結構與功能調整，透過抽離共用邏輯、制定代碼規範與整理技術文件，提升維護效率。",
    },
    {
        index: "03",
        title: "團隊協作",
        description:
            "長期與 UI/UX、後端、PM、運維團隊協作，擅長需求釐清、技術評估與跨部門溝通。",
    },
    {
        index: "04",
        title: "新技術應用",
        description:
            "熟悉基礎 Node.js 與 Mock Data 規劃，也會搭配 ChatGPT、Cursor、Codex 輔助需求拆解、重構與除錯。",
    },
];
</script>

<style scoped lang="scss">
.about {
    padding-bottom: 90px;
    // background: linear-gradient(180deg, #f7f3eb 0%, #edf1f4 100%);
    color: #1d2329;

    --surface: rgba(255, 255, 255, 0.9);
    --surface-strong: #ffffff;
    --surface-soft: #f7f8fa;
    --text: #1d2329;
    --muted: #66717b;
    --accent: #c9b367;
    --accent-deep: #846931;
    --panel: #1f2731;
    --panel-deep: #141a22;
    --panel-text: rgba(255, 255, 255, 0.84);
    --border: rgba(31, 39, 49, 0.1);
    --shadow: 0 18px 42px rgba(29, 35, 41, 0.08);

    .hero {
        margin-top: 28px;
        display: grid;
        grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.85fr);
        gap: 24px;
        align-items: stretch;
    }

    .hero__copy,
    .hero__panel,
    .statCard,
    .skillCard,
    .quoteCard {
        border: 1px solid var(--border);
        box-shadow: var(--shadow);
        background: linear-gradient(
            180deg,
            var(--surface-strong),
            var(--surface-soft)
        );
    }

    .hero__copy {
        border-radius: 34px;
        padding: 44px;

        .eyebrow {
            color: var(--accent);
            letter-spacing: 0.18em;
            text-transform: uppercase;
            font-size: 12px;
            margin-bottom: 14px;
            font-weight: 700;
        }

        h2 {
            font-size: clamp(34px, 4.6vw, 58px);
            line-height: 1.12;
            color: var(--text);
            font-weight: 900;
            margin-bottom: 18px;
        }

        .summary {
            font-size: 16px;
            line-height: 1.95;
            color: var(--muted);
        }

        .hero__chips {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 24px;
            margin-bottom: 28px;

            .chip {
                display: inline-flex;
                align-items: center;
                height: 36px;
                padding: 0 14px;
                border-radius: 999px;
                background: rgba(201, 179, 103, 0.12);
                color: var(--accent-deep);
                border: 1px solid rgba(201, 179, 103, 0.24);
                font-size: 13px;
                font-weight: 700;
            }
        }

        .hero__actions {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;

            .primaryBtn,
            .secondaryBtn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-width: 142px;
                height: 48px;
                padding: 0 20px;
                border-radius: 999px;
                font-weight: 700;
                transition:
                    transform 0.2s ease,
                    border-color 0.2s ease,
                    color 0.2s ease,
                    box-shadow 0.2s ease;
            }

            .primaryBtn {
                background: var(--accent);
                color: #fff;
                box-shadow: 0 14px 24px rgba(201, 179, 103, 0.24);
            }

            .primaryBtn:hover {
                transform: translateY(-2px);
                text-decoration: none;
            }

            .secondaryBtn {
                color: var(--text);
                border: 1px solid rgba(31, 39, 49, 0.14);
                background: rgba(255, 255, 255, 0.72);
            }

            .secondaryBtn:hover {
                color: var(--accent-deep);
                border-color: var(--accent-deep);
                text-decoration: none;
            }
        }
    }

    .hero__panel {
        border-radius: 34px;
        padding: 28px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        background: linear-gradient(180deg, var(--panel), var(--panel-deep));
        border: 1px solid rgba(255, 255, 255, 0.08);

        .portrait {
            min-height: 320px;
            border-radius: 28px;
            background:
                radial-gradient(
                    circle at top,
                    rgba(255, 255, 255, 0.16),
                    transparent 38%
                ),
                linear-gradient(
                    145deg,
                    rgba(201, 179, 103, 0.26),
                    rgba(20, 26, 34, 0.98)
                );
            padding: 18px;

            &__inner {
                width: 100%;
                height: 100%;
                border-radius: 20px;
                border: 1px solid rgba(255, 255, 255, 0.14);
                background: rgba(255, 255, 255, 0.06);
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                gap: 12px;
                text-align: center;
                color: #fff;
            }

            &__small {
                font-size: 13px;
                letter-spacing: 0.16em;
                opacity: 0.86;

                &--bottom {
                    max-width: 240px;
                    line-height: 1.8;
                    opacity: 0.76;
                }
            }

            &__big {
                font-size: clamp(34px, 5vw, 54px);
                font-weight: 900;
                letter-spacing: 0.12em;
            }
        }

        .profileList {
            display: grid;
            gap: 12px;

            .profileItem {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 18px;
                padding: 14px 16px;
                border-radius: 18px;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.08);

                &__label {
                    color: rgba(255, 255, 255, 0.56);
                    min-width: 56px;
                    font-size: 14px;
                }

                &__value {
                    color: #fff;
                    font-weight: 700;
                    text-align: right;
                }
            }
        }
    }

    .bioSection {
        margin-top: 42px;
        padding: 36px 32px 32px;
        border-radius: 34px;
        border: 1px solid var(--border);
        background: linear-gradient(
            180deg,
            var(--surface-strong),
            var(--surface-soft)
        );
        box-shadow: var(--shadow);

        .bioHeader {
            max-width: 720px;
            margin-bottom: 28px;
            padding-left: 18px;
            border-left: 4px solid var(--accent);

            &__label {
                margin-bottom: 10px;
                color: var(--accent-deep);
                letter-spacing: 0.16em;
                text-transform: uppercase;
                font-size: 12px;
                font-weight: 700;
            }

            &__title {
                color: var(--text);
                font-size: clamp(24px, 3vw, 34px);
                line-height: 1.35;
                font-weight: 900;
            }
        }

        .bioBody {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
        }

        .bioChapter {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 16px;
            padding: 24px;
            border-radius: 24px;
            border: 1px solid var(--border);
            background: rgba(255, 255, 255, 0.72);

            &__step {
                color: var(--accent-deep);
                font-size: 13px;
                font-weight: 800;
                letter-spacing: 0.08em;
                line-height: 1.2;
                padding-top: 4px;
            }

            &__content {
                h4 {
                    margin-bottom: 10px;
                    color: var(--text);
                    font-size: 20px;
                    font-weight: 800;
                    line-height: 1.35;
                }

                p {
                    color: var(--muted);
                    font-size: 15px;
                    line-height: 1.9;
                }
            }
        }

        .bioHighlights {
            margin-top: 18px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
        }

        .bioHighlight {
            padding: 20px 18px;
            border-radius: 20px;
            border: 1px solid rgba(201, 179, 103, 0.22);
            background: rgba(201, 179, 103, 0.08);

            &__label {
                margin-bottom: 8px;
                color: var(--accent-deep);
                font-size: 12px;
                font-weight: 700;
                letter-spacing: 0.12em;
                text-transform: uppercase;
            }

            &__value {
                color: var(--text);
                font-size: 16px;
                font-weight: 800;
                line-height: 1.5;
            }
        }

        .bioClosing {
            margin-top: 22px;
            padding-top: 20px;
            border-top: 1px solid var(--border);
            color: var(--text);
            font-size: 16px;
            font-weight: 700;
            line-height: 1.8;
            max-width: 680px;
        }
    }

    .stats {
        margin-top: 24px;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 16px;

        .statCard {
            border-radius: 22px;
            padding: 24px 20px;
            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0 auto auto 0;
                width: 100%;
                height: 4px;
                background: linear-gradient(
                    90deg,
                    var(--accent),
                    rgba(91, 124, 141, 0.2)
                );
            }

            &__value {
                font-size: 28px;
                font-weight: 900;
                color: var(--text);
                margin-bottom: 10px;
            }

            &__label {
                color: var(--muted);
                line-height: 1.7;
            }
        }
    }

    .sectionBlock {
        margin-top: 44px;

        .sectionHeading {
            margin-bottom: 18px;
            padding-left: 18px;
            border-left: 4px solid var(--accent);

            .sectionHeading__subtitle {
                color: var(--accent);
                letter-spacing: 0.18em;
                text-transform: uppercase;
                font-size: 12px;
                margin-bottom: 14px;
                font-weight: 700;
            }

            h3 {
                font-size: clamp(24px, 3vw, 36px);
                line-height: 1.24;
                color: var(--text);
                font-weight: 900;
            }
        }

        .skillGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;

            .skillCard {
                border-radius: 24px;
                padding: 26px;
                background: linear-gradient(
                    180deg,
                    var(--surface-strong),
                    var(--surface-soft)
                );
                border: 1px solid var(--border);
                box-shadow: var(--shadow);

                &__index {
                    font-size: 13px;
                    letter-spacing: 0.14em;
                    color: var(--accent-deep);
                    margin-bottom: 12px;
                    font-weight: 700;
                }

                h4 {
                    font-size: 20px;
                    margin-bottom: 10px;
                    font-weight: 800;
                    color: var(--text);
                }

                p {
                    color: var(--muted);
                    line-height: 1.85;
                }
            }
        }

        &.quoteGrid {
            display: grid;
            grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
            gap: 18px;

            .quoteCard,
            .highlightCard {
                border-radius: 26px;
                padding: 28px;
            }

            .quoteCard {
                background: linear-gradient(
                    180deg,
                    var(--surface-strong),
                    var(--surface-soft)
                );
                border: 1px solid var(--border);
                box-shadow: var(--shadow);

                h3 {
                    font-size: clamp(22px, 2.8vw, 32px);
                    line-height: 1.35;
                    margin-bottom: 14px;
                    font-weight: 900;
                    color: var(--text);
                }

                p:last-child {
                    color: var(--muted);
                    line-height: 1.9;
                }
            }

            .highlightCard {
                background: linear-gradient(
                    180deg,
                    var(--panel),
                    var(--panel-deep)
                );
                border: 1px solid rgba(255, 255, 255, 0.08);
                box-shadow: var(--shadow);

                .sectionHeading__subtitle {
                    color: var(--accent);
                }

                ul {
                    display: grid;
                    gap: 14px;
                    padding-left: 18px;
                    margin-top: 12px;

                    li {
                        line-height: 1.8;
                        color: var(--panel-text);
                    }
                }
            }
        }
    }

    .quoteBlock {
        margin-top: 44px;
        border-radius: 34px;
        padding: 34px 28px;
        text-align: center;
        background: linear-gradient(135deg, var(--panel), var(--panel-deep));
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: var(--shadow);

        &__text {
            font-size: clamp(20px, 2.6vw, 28px);
            font-weight: 900;
            line-height: 1.55;
            color: #fff;
        }
    }

    @include pad {
        .hero,
        .bioSection .bioBody,
        .bioSection .bioHighlights,
        .sectionBlock.quoteGrid {
            grid-template-columns: 1fr;
        }

        .stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @include mobile {
        .hero__copy,
        .hero__panel,
        .bioChapter,
        .bioHighlight,
        .statCard,
        .skillCard,
        .quoteCard,
        .highlightCard,
        .quoteBlock {
            border-radius: 20px;
        }

        .hero__copy {
            padding: 28px 22px;
        }

        .hero__panel {
            padding: 18px;
        }

        .bioSection {
            padding: 22px;

            .bioChapter {
                padding: 20px;
            }

            .bioHeader {
                margin-bottom: 22px;
            }

            .bioClosing {
                font-size: 15px;
            }
        }

        .hero__panel .portrait {
            min-height: 250px;
        }

        .stats,
        .bioSection .bioBody,
        .bioSection .bioHighlights,
        .sectionBlock .skillGrid,
        .sectionBlock.quoteGrid {
            grid-template-columns: 1fr;
        }

        .stats .statCard__value {
            font-size: 24px;
        }

        .sectionBlock {
            margin-top: 34px;
        }
    }
}
</style>

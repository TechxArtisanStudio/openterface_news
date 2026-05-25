import type { SiteLocale } from '../lib/locale';
import type { ProductSlug } from '../config/products';

export interface UiStrings {
  siteName: string;
  siteDescription: string;
  nav: {
    allNews: string;
    products: string;
    software: string;
    events: string;
    docs: string;
    home: string;
    shop: string;
    rss: string;
    newsBadge: string;
  };
  mobile: {
    products: string;
    channels: string;
    more: string;
    language: string;
  };
  feed: {
    homeTitle: string;
    homeDescription: string;
    softwareTitle: string;
    softwareDescription: string;
    eventsTitle: string;
    eventsDescription: string;
    productUpdatesTitle: (product: string) => string;
    productUpdatesDescription: (product: string) => string;
    emptyState: string;
  };
  article: {
    featured: string;
    software: string;
    event: string;
    readUpdate: string;
    nextSteps: string;
    discussForum: string;
    viewDocs: string;
    previous: string;
    next: string;
  };
  buy: Record<ProductSlug, string>;
  filter: {
    all: string;
    topics: {
      shipping: string;
      production: string;
      beta: string;
      software: string;
      campaign: string;
      event: string;
      community: string;
      analysis: string;
    };
  };
  footer: {
    tagline: string;
    channels: string;
    sites: string;
    docs: string;
    forum: string;
    copyright: string;
    privacy: string;
    terms: string;
    cookie: string;
  };
  newsletter: {
    title: string;
    description: string;
    submit: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
  cookie: {
    title: string;
    description: string;
    accept: string;
    reject: string;
  };
}

const en: UiStrings = {
  siteName: 'Openterface News',
  siteDescription:
    'Official product updates, software releases, and event news from Openterface — KVM-GO, Mini-KVM, KeyMod, and more.',
  nav: {
    allNews: 'All News',
    products: 'Products',
    software: 'Software',
    events: 'Events',
    docs: 'Docs',
    home: 'Home',
    shop: 'Shop',
    rss: 'RSS',
    newsBadge: 'News',
  },
  mobile: {
    products: 'Products',
    channels: 'Channels',
    more: 'More',
    language: 'Language',
  },
  feed: {
    homeTitle: 'Openterface News',
    homeDescription: 'Official product updates, software releases, and events from Openterface.',
    softwareTitle: 'Software Releases',
    softwareDescription: 'Openterface app releases, KeyCmd updates, and software news.',
    eventsTitle: 'Events',
    eventsDescription: 'Exhibitions, contests, and community events from Openterface.',
    productUpdatesTitle: (product) => `${product} Updates`,
    productUpdatesDescription: (product) => `Latest news and updates for Openterface ${product}.`,
    emptyState: 'No updates match these filters yet.',
  },
  article: {
    featured: 'Featured',
    software: 'Software',
    event: 'Event',
    readUpdate: 'Read update →',
    nextSteps: 'Next steps',
    discussForum: 'Discuss on Forum ↗',
    viewDocs: 'View Docs ↗',
    previous: '← Previous',
    next: 'Next →',
  },
  buy: {
    keymod: 'Support KeyMod',
    'kvm-go': 'Pre-Order KVM-GO',
    minikvm: 'Order Mini-KVM',
    'uconsole-kvm-extension': 'Get uConsole KVM',
    accessories: 'Shop Accessories',
  },
  filter: {
    all: 'All',
    topics: {
      shipping: 'Shipping',
      production: 'Production',
      beta: 'Beta',
      software: 'Software',
      campaign: 'Campaign',
      event: 'Event',
      community: 'Community',
      analysis: 'Analysis',
    },
  },
  footer: {
    tagline: 'Official updates on Openterface products, software releases, and events.',
    channels: 'Channels',
    sites: 'Sites',
    docs: 'Docs ↗',
    forum: 'Forum ↗',
    copyright: 'Openterface. Open-source KVM-over-USB.',
    privacy: 'Privacy',
    terms: 'Terms',
    cookie: 'Cookie',
  },
  newsletter: {
    title: 'Newsletter',
    description: 'Monthly updates on products, firmware, and KVM tips.',
    submit: 'Subscribe',
    namePlaceholder: 'Name',
    emailPlaceholder: 'Email *',
    footnote: 'Unsubscribe anytime.',
  },
  cookie: {
    title: 'Cookie Consent',
    description:
      'We use cookies to analyse site traffic and improve our content. By accepting, you help us understand which updates matter most.',
    accept: 'Accept',
    reject: 'Reject',
  },
};

const zh: UiStrings = {
  siteName: 'Openterface 资讯',
  siteDescription: 'Openterface 官方产品动态、软件发布与活动资讯 — KVM-GO、Mini-KVM、KeyMod 等。',
  nav: {
    allNews: '全部资讯',
    products: '产品',
    software: '软件',
    events: '活动',
    docs: '文档',
    home: '首页',
    shop: '商店',
    rss: 'RSS',
    newsBadge: '资讯',
  },
  mobile: {
    products: '产品',
    channels: '频道',
    more: '更多',
    language: '语言',
  },
  feed: {
    homeTitle: 'Openterface 资讯',
    homeDescription: 'Openterface 官方产品动态、软件发布与活动资讯。',
    softwareTitle: '软件发布',
    softwareDescription: 'Openterface 应用发布、KeyCmd 更新与软件资讯。',
    eventsTitle: '活动',
    eventsDescription: 'Openterface 展会、竞赛与社区活动。',
    productUpdatesTitle: (product) => `${product} 动态`,
    productUpdatesDescription: (product) => `Openterface ${product} 最新资讯与更新。`,
    emptyState: '暂无符合筛选条件的更新。',
  },
  article: {
    featured: '精选',
    software: '软件',
    event: '活动',
    readUpdate: '阅读全文 →',
    nextSteps: '下一步',
    discussForum: '在论坛讨论 ↗',
    viewDocs: '查看文档 ↗',
    previous: '← 上一篇',
    next: '下一篇 →',
  },
  buy: {
    keymod: '支持 KeyMod',
    'kvm-go': '预购 KVM-GO',
    minikvm: '订购 Mini-KVM',
    'uconsole-kvm-extension': '获取 uConsole KVM',
    accessories: '选购配件',
  },
  filter: {
    all: '全部',
    topics: {
      shipping: '发货',
      production: '生产',
      beta: '测试',
      software: '软件',
      campaign: '活动',
      event: '展会',
      community: '社区',
      analysis: '分析',
    },
  },
  footer: {
    tagline: 'Openterface 产品、软件发布与活动的官方更新。',
    channels: '频道',
    sites: '站点',
    docs: '文档 ↗',
    forum: '论坛 ↗',
    copyright: 'Openterface. 开源 KVM-over-USB。',
    privacy: '隐私',
    terms: '条款',
    cookie: 'Cookie',
  },
  newsletter: {
    title: '邮件订阅',
    description: '每月获取产品、固件与 KVM 技巧更新。',
    submit: '订阅',
    namePlaceholder: '姓名',
    emailPlaceholder: '邮箱 *',
    footnote: '随时可取消订阅。',
  },
  cookie: {
    title: 'Cookie 同意',
    description: '我们使用 Cookie 分析网站流量并改进内容。接受即表示您帮助我们了解哪些更新对您最重要。',
    accept: '接受',
    reject: '拒绝',
  },
};

const hk: UiStrings = {
  siteName: 'Openterface 資訊',
  siteDescription: 'Openterface 官方產品動態、軟件發佈與活動資訊 — KVM-GO、Mini-KVM、KeyMod 等。',
  nav: {
    allNews: '全部資訊',
    products: '產品',
    software: '軟件',
    events: '活動',
    docs: '文檔',
    home: '首頁',
    shop: '商店',
    rss: 'RSS',
    newsBadge: '資訊',
  },
  mobile: {
    products: '產品',
    channels: '頻道',
    more: '更多',
    language: '語言',
  },
  feed: {
    homeTitle: 'Openterface 資訊',
    homeDescription: 'Openterface 官方產品動態、軟件發佈與活動資訊。',
    softwareTitle: '軟件發佈',
    softwareDescription: 'Openterface 應用發佈、KeyCmd 更新與軟件資訊。',
    eventsTitle: '活動',
    eventsDescription: 'Openterface 展會、競賽與社區活動。',
    productUpdatesTitle: (product) => `${product} 動態`,
    productUpdatesDescription: (product) => `Openterface ${product} 最新資訊與更新。`,
    emptyState: '暫無符合篩選條件的更新。',
  },
  article: {
    featured: '精選',
    software: '軟件',
    event: '活動',
    readUpdate: '閲讀全文 →',
    nextSteps: '下一步',
    discussForum: '在論壇討論 ↗',
    viewDocs: '查看文檔 ↗',
    previous: '← 上一篇',
    next: '下一篇 →',
  },
  buy: {
    keymod: '支持 KeyMod',
    'kvm-go': '預購 KVM-GO',
    minikvm: '訂購 Mini-KVM',
    'uconsole-kvm-extension': '獲取 uConsole KVM',
    accessories: '選購配件',
  },
  filter: {
    all: '全部',
    topics: {
      shipping: '發貨',
      production: '生產',
      beta: '測試',
      software: '軟件',
      campaign: '活動',
      event: '展會',
      community: '社區',
      analysis: '分析',
    },
  },
  footer: {
    tagline: 'Openterface 產品、軟件發佈與活動的官方更新。',
    channels: '頻道',
    sites: '站點',
    docs: '文檔 ↗',
    forum: '論壇 ↗',
    copyright: 'Openterface. 開源 KVM-over-USB。',
    privacy: '隱私',
    terms: '條款',
    cookie: 'Cookie',
  },
  newsletter: {
    title: '郵件訂閲',
    description: '每月獲取產品、固件與 KVM 技巧更新。',
    submit: '訂閲',
    namePlaceholder: '姓名',
    emailPlaceholder: '郵箱 *',
    footnote: '隨時可取消訂閲。',
  },
  cookie: {
    title: 'Cookie 同意',
    description: '我們使用 Cookie 分析網站流量並改進內容。接受即表示您幫助我們瞭解哪些更新對您最重要。',
    accept: '接受',
    reject: '拒絕',
  },
};

const tw: UiStrings = {
  siteName: 'Openterface 資訊',
  siteDescription: 'Openterface 官方產品動態、軟件發佈與活動資訊 — KVM-GO、Mini-KVM、KeyMod 等。',
  nav: {
    allNews: '全部資訊',
    products: '產品',
    software: '軟件',
    events: '活動',
    docs: '文檔',
    home: '首頁',
    shop: '商店',
    rss: 'RSS',
    newsBadge: '資訊',
  },
  mobile: {
    products: '產品',
    channels: '頻道',
    more: '更多',
    language: '語言',
  },
  feed: {
    homeTitle: 'Openterface 資訊',
    homeDescription: 'Openterface 官方產品動態、軟件發佈與活動資訊。',
    softwareTitle: '軟件發佈',
    softwareDescription: 'Openterface 應用發佈、KeyCmd 更新與軟件資訊。',
    eventsTitle: '活動',
    eventsDescription: 'Openterface 展會、競賽與社區活動。',
    productUpdatesTitle: (product) => `${product} 動態`,
    productUpdatesDescription: (product) => `Openterface ${product} 最新資訊與更新。`,
    emptyState: '暫無符合篩選條件的更新。',
  },
  article: {
    featured: '精選',
    software: '軟件',
    event: '活動',
    readUpdate: '閱讀全文 →',
    nextSteps: '下一步',
    discussForum: '在論壇討論 ↗',
    viewDocs: '查看文檔 ↗',
    previous: '← 上一篇',
    next: '下一篇 →',
  },
  buy: {
    keymod: '支持 KeyMod',
    'kvm-go': '預購 KVM-GO',
    minikvm: '訂購 Mini-KVM',
    'uconsole-kvm-extension': '獲取 uConsole KVM',
    accessories: '選購配件',
  },
  filter: {
    all: '全部',
    topics: {
      shipping: '發貨',
      production: '生產',
      beta: '測試',
      software: '軟件',
      campaign: '活動',
      event: '展會',
      community: '社區',
      analysis: '分析',
    },
  },
  footer: {
    tagline: 'Openterface 產品、軟件發佈與活動的官方更新。',
    channels: '頻道',
    sites: '站點',
    docs: '文檔 ↗',
    forum: '論壇 ↗',
    copyright: 'Openterface. 開源 KVM-over-USB。',
    privacy: '隱私',
    terms: '條款',
    cookie: 'Cookie',
  },
  newsletter: {
    title: '郵件訂閱',
    description: '每月獲取產品、固件與 KVM 技巧更新。',
    submit: '訂閱',
    namePlaceholder: '姓名',
    emailPlaceholder: '郵箱 *',
    footnote: '隨時可取消訂閱。',
  },
  cookie: {
    title: 'Cookie 同意',
    description: '我們使用 Cookie 分析網站流量並改進內容。接受即表示您幫助我們瞭解哪些更新對您最重要。',
    accept: '接受',
    reject: '拒絕',
  },
};

const ja: UiStrings = {
  siteName: 'Openterface ニュース',
  siteDescription: 'Openterface 公式の製品アップデート、ソフトウェアリリース、イベント情報 — KVM-GO、Mini-KVM、KeyMod など。',
  nav: {
    allNews: 'すべてのニュース',
    products: '製品',
    software: 'ソフトウェア',
    events: 'イベント',
    docs: 'ドキュメント',
    home: 'ホーム',
    shop: 'ショップ',
    rss: 'RSS',
    newsBadge: 'ニュース',
  },
  mobile: {
    products: '製品',
    channels: 'チャンネル',
    more: 'その他',
    language: '言語',
  },
  feed: {
    homeTitle: 'Openterface ニュース',
    homeDescription: 'Openterface 公式の製品アップデート、ソフトウェアリリース、イベント情報。',
    softwareTitle: 'ソフトウェアリリース',
    softwareDescription: 'Openterface アプリのリリース、KeyCmd アップデート、ソフトウェアニュース。',
    eventsTitle: 'イベント',
    eventsDescription: 'Openterface の展示会、コンテスト、コミュニティイベント。',
    productUpdatesTitle: (product) => `${product} アップデート`,
    productUpdatesDescription: (product) => `Openterface ${product} の最新ニュースとアップデート。`,
    emptyState: 'このフィルターに一致する更新はまだありません。',
  },
  article: {
    featured: '注目',
    software: 'ソフトウェア',
    event: 'イベント',
    readUpdate: '記事を読む →',
    nextSteps: '次のステップ',
    discussForum: 'フォーラムで議論 ↗',
    viewDocs: 'ドキュメント ↗',
    previous: '← 前へ',
    next: '次へ →',
  },
  buy: {
    keymod: 'KeyMod を支援',
    'kvm-go': 'KVM-GO を予約',
    minikvm: 'Mini-KVM を注文',
    'uconsole-kvm-extension': 'uConsole KVM を入手',
    accessories: 'アクセサリーを購入',
  },
  filter: {
    all: 'すべて',
    topics: {
      shipping: '配送',
      production: '生産',
      beta: 'ベータ',
      software: 'ソフトウェア',
      campaign: 'キャンペーン',
      event: 'イベント',
      community: 'コミュニティ',
      analysis: '分析',
    },
  },
  footer: {
    tagline: 'Openterface 製品、ソフトウェアリリース、イベントの公式アップデート。',
    channels: 'チャンネル',
    sites: 'サイト',
    docs: 'ドキュメント ↗',
    forum: 'フォーラム ↗',
    copyright: 'Openterface. オープンソース KVM-over-USB。',
    privacy: 'プライバシー',
    terms: '利用規約',
    cookie: 'Cookie',
  },
  newsletter: {
    title: 'ニュースレター',
    description: '製品、ファームウェア、KVM のヒントに関する月次アップデート。',
    submit: '登録',
    namePlaceholder: 'お名前',
    emailPlaceholder: 'メール *',
    footnote: 'いつでも配信解除できます。',
  },
  cookie: {
    title: 'Cookie の同意',
    description: 'Cookie を使用してサイトのトラフィックを分析し、コンテンツを改善しています。同意いただくと、どの更新が重要かを把握するのに役立ちます。',
    accept: '同意する',
    reject: '拒否する',
  },
};

const ko: UiStrings = {
  siteName: 'Openterface 뉴스',
  siteDescription: 'Openterface 공식 제품 업데이트, 소프트웨어 릴리스 및 이벤트 소식 — KVM-GO, Mini-KVM, KeyMod 등.',
  nav: {
    allNews: '전체 뉴스',
    products: '제품',
    software: '소프트웨어',
    events: '이벤트',
    docs: '문서',
    home: '홈',
    shop: '쇼핑',
    rss: 'RSS',
    newsBadge: '뉴스',
  },
  mobile: {
    products: '제품',
    channels: '채널',
    more: '더보기',
    language: '언어',
  },
  feed: {
    homeTitle: 'Openterface 뉴스',
    homeDescription: 'Openterface 공식 제품 업데이트, 소프트웨어 릴리스 및 이벤트 소식.',
    softwareTitle: '소프트웨어 릴리스',
    softwareDescription: 'Openterface 앱 릴리스, KeyCmd 업데이트 및 소프트웨어 뉴스.',
    eventsTitle: '이벤트',
    eventsDescription: 'Openterface 전시회, 콘테스트 및 커뮤니티 이벤트.',
    productUpdatesTitle: (product) => `${product} 업데이트`,
    productUpdatesDescription: (product) => `Openterface ${product} 최신 뉴스 및 업데이트.`,
    emptyState: '이 필터에 맞는 업데이트가 아직 없습니다.',
  },
  article: {
    featured: '추천',
    software: '소프트웨어',
    event: '이벤트',
    readUpdate: '글 읽기 →',
    nextSteps: '다음 단계',
    discussForum: '포럼에서 토론 ↗',
    viewDocs: '문서 보기 ↗',
    previous: '← 이전',
    next: '다음 →',
  },
  buy: {
    keymod: 'KeyMod 지원',
    'kvm-go': 'KVM-GO 사전 주문',
    minikvm: 'Mini-KVM 주문',
    'uconsole-kvm-extension': 'uConsole KVM 구매',
    accessories: '액세서리 쇼핑',
  },
  filter: {
    all: '전체',
    topics: {
      shipping: '배송',
      production: '생산',
      beta: '베타',
      software: '소프트웨어',
      campaign: '캠페인',
      event: '이벤트',
      community: '커뮤니티',
      analysis: '분석',
    },
  },
  footer: {
    tagline: 'Openterface 제품, 소프트웨어 릴리스 및 이벤트 공식 업데이트.',
    channels: '채널',
    sites: '사이트',
    docs: '문서 ↗',
    forum: '포럼 ↗',
    copyright: 'Openterface. 오픈소스 KVM-over-USB.',
    privacy: '개인정보',
    terms: '약관',
    cookie: 'Cookie',
  },
  newsletter: {
    title: '뉴스레터',
    description: '제품, 펌웨어, KVM 팁에 대한 월간 업데이트.',
    submit: '구독',
    namePlaceholder: '이름',
    emailPlaceholder: '이메일 *',
    footnote: '언제든지 구독 취소 가능.',
  },
  cookie: {
    title: 'Cookie 동의',
    description: 'Cookie를 사용하여 사이트 트래픽을 분석하고 콘텐츠를 개선합니다. 동의하시면 어떤 업데이트가 중요한지 파악하는 데 도움이 됩니다.',
    accept: '동의',
    reject: '거부',
  },
};

const de: UiStrings = {
  siteName: 'Openterface News',
  siteDescription: 'Offizielle Produktupdates, Software-Releases und Event-News von Openterface — KVM-GO, Mini-KVM, KeyMod und mehr.',
  nav: {
    allNews: 'Alle News',
    products: 'Produkte',
    software: 'Software',
    events: 'Events',
    docs: 'Docs',
    home: 'Home',
    shop: 'Shop',
    rss: 'RSS',
    newsBadge: 'News',
  },
  mobile: {
    products: 'Produkte',
    channels: 'Kanäle',
    more: 'Mehr',
    language: 'Sprache',
  },
  feed: {
    homeTitle: 'Openterface News',
    homeDescription: 'Offizielle Produktupdates, Software-Releases und Events von Openterface.',
    softwareTitle: 'Software-Releases',
    softwareDescription: 'Openterface App-Releases, KeyCmd-Updates und Software-News.',
    eventsTitle: 'Events',
    eventsDescription: 'Messen, Wettbewerbe und Community-Events von Openterface.',
    productUpdatesTitle: (product) => `${product} Updates`,
    productUpdatesDescription: (product) => `Neueste News und Updates für Openterface ${product}.`,
    emptyState: 'Keine Updates entsprechen diesen Filtern.',
  },
  article: {
    featured: 'Empfohlen',
    software: 'Software',
    event: 'Event',
    readUpdate: 'Artikel lesen →',
    nextSteps: 'Nächste Schritte',
    discussForum: 'Im Forum diskutieren ↗',
    viewDocs: 'Docs ansehen ↗',
    previous: '← Zurück',
    next: 'Weiter →',
  },
  buy: {
    keymod: 'KeyMod unterstützen',
    'kvm-go': 'KVM-GO vorbestellen',
    minikvm: 'Mini-KVM bestellen',
    'uconsole-kvm-extension': 'uConsole KVM holen',
    accessories: 'Zubehör kaufen',
  },
  filter: {
    all: 'Alle',
    topics: {
      shipping: 'Versand',
      production: 'Produktion',
      beta: 'Beta',
      software: 'Software',
      campaign: 'Kampagne',
      event: 'Event',
      community: 'Community',
      analysis: 'Analyse',
    },
  },
  footer: {
    tagline: 'Offizielle Updates zu Openterface-Produkten, Software-Releases und Events.',
    channels: 'Kanäle',
    sites: 'Websites',
    docs: 'Docs ↗',
    forum: 'Forum ↗',
    copyright: 'Openterface. Open-Source KVM-over-USB.',
    privacy: 'Datenschutz',
    terms: 'AGB',
    cookie: 'Cookie',
  },
  newsletter: {
    title: 'Newsletter',
    description: 'Monatliche Updates zu Produkten, Firmware und KVM-Tipps.',
    submit: 'Abonnieren',
    namePlaceholder: 'Name',
    emailPlaceholder: 'E-Mail *',
    footnote: 'Jederzeit kündbar.',
  },
  cookie: {
    title: 'Cookie-Einwilligung',
    description: 'Wir verwenden Cookies, um den Website-Traffic zu analysieren und unsere Inhalte zu verbessern. Mit Ihrer Zustimmung helfen Sie uns zu verstehen, welche Updates am wichtigsten sind.',
    accept: 'Akzeptieren',
    reject: 'Ablehnen',
  },
};

const fr: UiStrings = {
  siteName: 'Openterface Actualités',
  siteDescription: 'Mises à jour produits, releases logicielles et actualités événements officielles d\'Openterface — KVM-GO, Mini-KVM, KeyMod et plus.',
  nav: {
    allNews: 'Toutes les actus',
    products: 'Produits',
    software: 'Logiciel',
    events: 'Événements',
    docs: 'Docs',
    home: 'Accueil',
    shop: 'Boutique',
    rss: 'RSS',
    newsBadge: 'Actus',
  },
  mobile: {
    products: 'Produits',
    channels: 'Canaux',
    more: 'Plus',
    language: 'Langue',
  },
  feed: {
    homeTitle: 'Openterface Actualités',
    homeDescription: 'Mises à jour produits, releases logicielles et événements officiels d\'Openterface.',
    softwareTitle: 'Releases logiciels',
    softwareDescription: 'Releases d\'apps Openterface, mises à jour KeyCmd et actualités logicielles.',
    eventsTitle: 'Événements',
    eventsDescription: 'Salons, concours et événements communautaires Openterface.',
    productUpdatesTitle: (product) => `Actualités ${product}`,
    productUpdatesDescription: (product) => `Dernières nouvelles et mises à jour pour Openterface ${product}.`,
    emptyState: 'Aucune mise à jour ne correspond à ces filtres.',
  },
  article: {
    featured: 'À la une',
    software: 'Logiciel',
    event: 'Événement',
    readUpdate: 'Lire l\'article →',
    nextSteps: 'Prochaines étapes',
    discussForum: 'Discuter sur le forum ↗',
    viewDocs: 'Voir la doc ↗',
    previous: '← Précédent',
    next: 'Suivant →',
  },
  buy: {
    keymod: 'Soutenir KeyMod',
    'kvm-go': 'Précommander KVM-GO',
    minikvm: 'Commander Mini-KVM',
    'uconsole-kvm-extension': 'Obtenir uConsole KVM',
    accessories: 'Acheter des accessoires',
  },
  filter: {
    all: 'Tout',
    topics: {
      shipping: 'Expédition',
      production: 'Production',
      beta: 'Bêta',
      software: 'Logiciel',
      campaign: 'Campagne',
      event: 'Événement',
      community: 'Communauté',
      analysis: 'Analyse',
    },
  },
  footer: {
    tagline: 'Mises à jour officielles sur les produits, releases logicielles et événements Openterface.',
    channels: 'Canaux',
    sites: 'Sites',
    docs: 'Docs ↗',
    forum: 'Forum ↗',
    copyright: 'Openterface. KVM-over-USB open source.',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    cookie: 'Cookie',
  },
  newsletter: {
    title: 'Newsletter',
    description: 'Mises à jour mensuelles sur les produits, firmware et astuces KVM.',
    submit: "S'abonner",
    namePlaceholder: 'Nom',
    emailPlaceholder: 'E-mail *',
    footnote: 'Désabonnement à tout moment.',
  },
  cookie: {
    title: 'Consentement aux cookies',
    description: 'Nous utilisons des cookies pour analyser le trafic et améliorer notre contenu. En acceptant, vous nous aidez à comprendre quelles mises à jour comptent le plus.',
    accept: 'Accepter',
    reject: 'Refuser',
  },
};

const es: UiStrings = {
  siteName: 'Openterface Noticias',
  siteDescription: 'Actualizaciones oficiales de productos, lanzamientos de software y noticias de eventos de Openterface — KVM-GO, Mini-KVM, KeyMod y más.',
  nav: {
    allNews: 'Todas las noticias',
    products: 'Productos',
    software: 'Software',
    events: 'Eventos',
    docs: 'Docs',
    home: 'Inicio',
    shop: 'Tienda',
    rss: 'RSS',
    newsBadge: 'Noticias',
  },
  mobile: {
    products: 'Productos',
    channels: 'Canales',
    more: 'Más',
    language: 'Idioma',
  },
  feed: {
    homeTitle: 'Openterface Noticias',
    homeDescription: 'Actualizaciones oficiales de productos, lanzamientos de software y eventos de Openterface.',
    softwareTitle: 'Lanzamientos de software',
    softwareDescription: 'Lanzamientos de apps Openterface, actualizaciones de KeyCmd y noticias de software.',
    eventsTitle: 'Eventos',
    eventsDescription: 'Ferias, concursos y eventos comunitarios de Openterface.',
    productUpdatesTitle: (product) => `Actualizaciones de ${product}`,
    productUpdatesDescription: (product) => `Últimas noticias y actualizaciones de Openterface ${product}.`,
    emptyState: 'No hay actualizaciones que coincidan con estos filtros.',
  },
  article: {
    featured: 'Destacado',
    software: 'Software',
    event: 'Evento',
    readUpdate: 'Leer artículo →',
    nextSteps: 'Próximos pasos',
    discussForum: 'Discutir en el foro ↗',
    viewDocs: 'Ver docs ↗',
    previous: '← Anterior',
    next: 'Siguiente →',
  },
  buy: {
    keymod: 'Apoyar KeyMod',
    'kvm-go': 'Preordenar KVM-GO',
    minikvm: 'Pedir Mini-KVM',
    'uconsole-kvm-extension': 'Obtener uConsole KVM',
    accessories: 'Comprar accesorios',
  },
  filter: {
    all: 'Todo',
    topics: {
      shipping: 'Envío',
      production: 'Producción',
      beta: 'Beta',
      software: 'Software',
      campaign: 'Campaña',
      event: 'Evento',
      community: 'Comunidad',
      analysis: 'Análisis',
    },
  },
  footer: {
    tagline: 'Actualizaciones oficiales sobre productos, lanzamientos de software y eventos de Openterface.',
    channels: 'Canales',
    sites: 'Sitios',
    docs: 'Docs ↗',
    forum: 'Foro ↗',
    copyright: 'Openterface. KVM-over-USB de código abierto.',
    privacy: 'Privacidad',
    terms: 'Términos',
    cookie: 'Cookie',
  },
  newsletter: {
    title: 'Boletín',
    description: 'Actualizaciones mensuales sobre productos, firmware y consejos KVM.',
    submit: 'Suscribirse',
    namePlaceholder: 'Nombre',
    emailPlaceholder: 'Correo *',
    footnote: 'Cancela cuando quieras.',
  },
  cookie: {
    title: 'Consentimiento de cookies',
    description: 'Usamos cookies para analizar el tráfico y mejorar nuestro contenido. Al aceptar, nos ayudas a entender qué actualizaciones son más importantes.',
    accept: 'Aceptar',
    reject: 'Rechazar',
  },
};

const it: UiStrings = {
  siteName: 'Openterface Notizie',
  siteDescription: 'Aggiornamenti ufficiali sui prodotti, release software e notizie sugli eventi Openterface — KVM-GO, Mini-KVM, KeyMod e altro.',
  nav: {
    allNews: 'Tutte le notizie',
    products: 'Prodotti',
    software: 'Software',
    events: 'Eventi',
    docs: 'Docs',
    home: 'Home',
    shop: 'Negozio',
    rss: 'RSS',
    newsBadge: 'Notizie',
  },
  mobile: {
    products: 'Prodotti',
    channels: 'Canali',
    more: 'Altro',
    language: 'Lingua',
  },
  feed: {
    homeTitle: 'Openterface Notizie',
    homeDescription: 'Aggiornamenti ufficiali sui prodotti, release software ed eventi Openterface.',
    softwareTitle: 'Release software',
    softwareDescription: 'Release app Openterface, aggiornamenti KeyCmd e notizie software.',
    eventsTitle: 'Eventi',
    eventsDescription: 'Fiere, concorsi ed eventi community Openterface.',
    productUpdatesTitle: (product) => `Aggiornamenti ${product}`,
    productUpdatesDescription: (product) => `Ultime notizie e aggiornamenti per Openterface ${product}.`,
    emptyState: 'Nessun aggiornamento corrisponde a questi filtri.',
  },
  article: {
    featured: 'In evidenza',
    software: 'Software',
    event: 'Evento',
    readUpdate: 'Leggi articolo →',
    nextSteps: 'Prossimi passi',
    discussForum: 'Discuti sul forum ↗',
    viewDocs: 'Vedi docs ↗',
    previous: '← Precedente',
    next: 'Successivo →',
  },
  buy: {
    keymod: 'Supporta KeyMod',
    'kvm-go': 'Preordina KVM-GO',
    minikvm: 'Ordina Mini-KVM',
    'uconsole-kvm-extension': 'Ottieni uConsole KVM',
    accessories: 'Acquista accessori',
  },
  filter: {
    all: 'Tutti',
    topics: {
      shipping: 'Spedizione',
      production: 'Produzione',
      beta: 'Beta',
      software: 'Software',
      campaign: 'Campagna',
      event: 'Evento',
      community: 'Community',
      analysis: 'Analisi',
    },
  },
  footer: {
    tagline: 'Aggiornamenti ufficiali su prodotti, release software ed eventi Openterface.',
    channels: 'Canali',
    sites: 'Siti',
    docs: 'Docs ↗',
    forum: 'Forum ↗',
    copyright: 'Openterface. KVM-over-USB open source.',
    privacy: 'Privacy',
    terms: 'Termini',
    cookie: 'Cookie',
  },
  newsletter: {
    title: 'Newsletter',
    description: 'Aggiornamenti mensili su prodotti, firmware e suggerimenti KVM.',
    submit: 'Iscriviti',
    namePlaceholder: 'Nome',
    emailPlaceholder: 'Email *',
    footnote: 'Disiscriviti quando vuoi.',
  },
  cookie: {
    title: 'Consenso cookie',
    description: 'Utilizziamo i cookie per analizzare il traffico e migliorare i contenuti. Accettando, ci aiuti a capire quali aggiornamenti sono più importanti.',
    accept: 'Accetta',
    reject: 'Rifiuta',
  },
};

const pt: UiStrings = {
  siteName: 'Openterface Notícias',
  siteDescription: 'Atualizações oficiais de produtos, lançamentos de software e notícias de eventos da Openterface — KVM-GO, Mini-KVM, KeyMod e mais.',
  nav: {
    allNews: 'Todas as notícias',
    products: 'Produtos',
    software: 'Software',
    events: 'Eventos',
    docs: 'Docs',
    home: 'Início',
    shop: 'Loja',
    rss: 'RSS',
    newsBadge: 'Notícias',
  },
  mobile: {
    products: 'Produtos',
    channels: 'Canais',
    more: 'Mais',
    language: 'Idioma',
  },
  feed: {
    homeTitle: 'Openterface Notícias',
    homeDescription: 'Atualizações oficiais de produtos, lançamentos de software e eventos da Openterface.',
    softwareTitle: 'Lançamentos de software',
    softwareDescription: 'Lançamentos de apps Openterface, atualizações KeyCmd e notícias de software.',
    eventsTitle: 'Eventos',
    eventsDescription: 'Feiras, concursos e eventos comunitários Openterface.',
    productUpdatesTitle: (product) => `Atualizações ${product}`,
    productUpdatesDescription: (product) => `Últimas notícias e atualizações da Openterface ${product}.`,
    emptyState: 'Nenhuma atualização corresponde a estes filtros.',
  },
  article: {
    featured: 'Destaque',
    software: 'Software',
    event: 'Evento',
    readUpdate: 'Ler artigo →',
    nextSteps: 'Próximos passos',
    discussForum: 'Discutir no fórum ↗',
    viewDocs: 'Ver docs ↗',
    previous: '← Anterior',
    next: 'Próximo →',
  },
  buy: {
    keymod: 'Apoiar KeyMod',
    'kvm-go': 'Pré-encomendar KVM-GO',
    minikvm: 'Encomendar Mini-KVM',
    'uconsole-kvm-extension': 'Obter uConsole KVM',
    accessories: 'Comprar acessórios',
  },
  filter: {
    all: 'Todos',
    topics: {
      shipping: 'Envio',
      production: 'Produção',
      beta: 'Beta',
      software: 'Software',
      campaign: 'Campanha',
      event: 'Evento',
      community: 'Comunidade',
      analysis: 'Análise',
    },
  },
  footer: {
    tagline: 'Atualizações oficiais sobre produtos, lançamentos de software e eventos Openterface.',
    channels: 'Canais',
    sites: 'Sites',
    docs: 'Docs ↗',
    forum: 'Fórum ↗',
    copyright: 'Openterface. KVM-over-USB open source.',
    privacy: 'Privacidade',
    terms: 'Termos',
    cookie: 'Cookie',
  },
  newsletter: {
    title: 'Newsletter',
    description: 'Atualizações mensais sobre produtos, firmware e dicas KVM.',
    submit: 'Inscrever-se',
    namePlaceholder: 'Nome',
    emailPlaceholder: 'Email *',
    footnote: 'Cancele quando quiser.',
  },
  cookie: {
    title: 'Consentimento de cookies',
    description: 'Usamos cookies para analisar o tráfego e melhorar o conteúdo. Ao aceitar, ajuda-nos a perceber quais atualizações são mais importantes.',
    accept: 'Aceitar',
    reject: 'Rejeitar',
  },
};

const ro: UiStrings = {
  siteName: 'Openterface Știri',
  siteDescription: 'Actualizări oficiale de produse, lansări software și știri despre evenimente Openterface — KVM-GO, Mini-KVM, KeyMod și altele.',
  nav: {
    allNews: 'Toate știrile',
    products: 'Produse',
    software: 'Software',
    events: 'Evenimente',
    docs: 'Docs',
    home: 'Acasă',
    shop: 'Magazin',
    rss: 'RSS',
    newsBadge: 'Știri',
  },
  mobile: {
    products: 'Produse',
    channels: 'Canale',
    more: 'Mai mult',
    language: 'Limbă',
  },
  feed: {
    homeTitle: 'Openterface Știri',
    homeDescription: 'Actualizări oficiale de produse, lansări software și evenimente Openterface.',
    softwareTitle: 'Lansări software',
    softwareDescription: 'Lansări de aplicații Openterface, actualizări KeyCmd și știri software.',
    eventsTitle: 'Evenimente',
    eventsDescription: 'Expoziții, concursuri și evenimente comunitare Openterface.',
    productUpdatesTitle: (product) => `Actualizări ${product}`,
    productUpdatesDescription: (product) => `Cele mai recente știri și actualizări pentru Openterface ${product}.`,
    emptyState: 'Nicio actualizare nu corespunde acestor filtre.',
  },
  article: {
    featured: 'Recomandat',
    software: 'Software',
    event: 'Eveniment',
    readUpdate: 'Citește articolul →',
    nextSteps: 'Pașii următori',
    discussForum: 'Discută pe forum ↗',
    viewDocs: 'Vezi docs ↗',
    previous: '← Anterior',
    next: 'Următor →',
  },
  buy: {
    keymod: 'Susține KeyMod',
    'kvm-go': 'Precomandă KVM-GO',
    minikvm: 'Comandă Mini-KVM',
    'uconsole-kvm-extension': 'Obține uConsole KVM',
    accessories: 'Cumpără accesorii',
  },
  filter: {
    all: 'Toate',
    topics: {
      shipping: 'Livrare',
      production: 'Producție',
      beta: 'Beta',
      software: 'Software',
      campaign: 'Campanie',
      event: 'Eveniment',
      community: 'Comunitate',
      analysis: 'Analiză',
    },
  },
  footer: {
    tagline: 'Actualizări oficiale despre produse, lansări software și evenimente Openterface.',
    channels: 'Canale',
    sites: 'Site-uri',
    docs: 'Docs ↗',
    forum: 'Forum ↗',
    copyright: 'Openterface. KVM-over-USB open source.',
    privacy: 'Confidențialitate',
    terms: 'Termeni',
    cookie: 'Cookie',
  },
  newsletter: {
    title: 'Newsletter',
    description: 'Actualizări lunare despre produse, firmware și sfaturi KVM.',
    submit: 'Abonează-te',
    namePlaceholder: 'Nume',
    emailPlaceholder: 'Email *',
    footnote: 'Dezabonare oricând.',
  },
  cookie: {
    title: 'Consimțământ cookie',
    description: 'Folosim cookie-uri pentru a analiza traficul și a îmbunătăți conținutul. Prin acceptare, ne ajuți să înțelegem ce actualizări contează cel mai mult.',
    accept: 'Acceptă',
    reject: 'Respinge',
  },
};

const MESSAGES: Record<SiteLocale, UiStrings> = {
  en,
  zh,
  ja,
  ko,
  de,
  fr,
  es,
  it,
  pt,
  ro,
  hk,
  tw,
};

export function t(locale: SiteLocale): UiStrings {
  return MESSAGES[locale] ?? MESSAGES.en;
}

export function buyProductLabel(locale: SiteLocale, product: ProductSlug): string {
  return t(locale).buy[product] ?? t(locale).buy.minikvm;
}

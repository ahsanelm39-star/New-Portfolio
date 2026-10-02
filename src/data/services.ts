import { ServiceItem } from '@/lib/types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'webflow-development',
    order: 1,
    icon: 'layout',
    title: {
      en: 'Webflow Website Design & Development',
      ar: 'تصميم وتطوير المواقع على Webflow',
    },
    subtitle: {
      en: 'Bespoke, visual-first digital experiences engineered for ambitious brands and digital studios.',
      ar: 'واجهات رقمية استثنائية مصممة خصيصاً لتعكس رقي العلامات التجارية وتطلعات الشركات الطموحة.',
    },
    description: {
      en: 'Full-cycle design and development built natively on Webflow. From architectural wireframing and high-fidelity typography to clean responsive layout systems and production-grade delivery. Your site looks custom-coded because it is engineered with strict design discipline.',
      ar: 'تصميم وتطوير متكامل يبدأ من التخطيط الهيكلي والطباعة البصرية الراقية وحتى التنفيذ المتقن على منصة Webflow. يحصل مشروعك على موقع يبدو كأنه كود مبرمج خصيصاً بفضل الانضباط الهندسي وتناسق الشبكة والتفاصيل الدقيقة.',
    },
    deliverables: {
      en: [
        'Custom Webflow visual architecture with strict class naming conventions',
        'Responsive layout systems tested across mobile, tablet, and ultra-wide displays',
        'Production-ready staging environment for client review and feedback',
        'Clean, scalable DOM structure adhering to modern semantic web standards',
      ],
      ar: [
        'هيكلة بصرية كاملة على Webflow مع تسمية منظمة للأصناف (Classes) وفق أفضل الممارسات',
        'نظام متجاوب متكامل مختبر على شاشات الهواتف والأجهزة اللوحية والشاشات العريضة',
        'بيئة تجريبية جاهزة للمعاينة المباشرة ومراجعة الملاحظات قبل الإطلاق الرسمي',
        'بنية DOM نظيفة ومتوافقة مع المعايير الحديثة للويب لضمان خفة التحميل',
      ],
    },
    idealFor: {
      en: 'Ambitious businesses, creative studios, and agencies seeking high-end web presence with complete content control.',
      ar: 'الشركات الطموحة، والاستوديوهات الإبداعية، والوكالات التي تبحث عن واجهة راقية مع سهولة إدارة المحتوى.',
    },
    badge: {
      en: 'Primary Specialization',
      ar: 'التخصص الأساسي',
    },
    isPrimaryWebflow: true,
  },
  {
    id: 'webflow-cms',
    order: 2,
    icon: 'database',
    title: {
      en: 'Webflow CMS & Scalable Content Architecture',
      ar: 'هندسة محتوى الـ CMS وقواعد البيانات على Webflow',
    },
    subtitle: {
      en: 'Empowering your marketing team to publish case studies, blog posts, and service pages without touching code.',
      ar: 'تمكين فريق التسويق لديك من نشر المقالات، دراسات الحالة، وصفحات الخدمات بسهولة تامة وبدون كود.',
    },
    description: {
      en: 'A beautiful website is useless if your team is afraid to update it. I architect intuitive Webflow CMS collections with thoughtful custom fields, dynamic multi-reference filters, and airtight template pages that preserve your design standards across hundreds of entries.',
      ar: 'الموقع الجميل يفقد قيمته إذا كان تحديثه معقداً. أقوم بهندسة مجموعات CMS مرنة وسهلة الاستخدام بحقول مخصصة وفلاتر ديناميكية، مع قوالب صفحات متناسقة تضمن بقاء التصميم متماسكاً وأنيقاً مع كل محتوى جديد يُنشر.',
    },
    deliverables: {
      en: [
        'Structured CMS collection schemas tailored to your business data model',
        'Dynamic multi-category filtering, search indexing, and pagination',
        'Client-friendly Webflow Editor configuration with helpful field tooltips',
        'Automated metadata mapping for individual CMS detail pages',
      ],
      ar: [
        'تصميم نماذج ومجموعات CMS مخصصة تناسب طبيعة أعمال وبيانات شركتك',
        'فلاتر ديناميكية متعددة الفئات، وبحث سريع، وترقيم صفحات منظم',
        'تهيئة محرر Webflow (Editor) للعميل مع إرشادات واضحة لكل حقل إدخال',
        'توليد تلقائي للبيانات الوصفية (Metadata) لكل عنصر لضمان توافق الـ SEO',
      ],
    },
    idealFor: {
      en: 'Content-driven brands, multi-project corporate portfolios, blogs, and marketing teams needing independence.',
      ar: 'الشركات التي تنشر محتوى دورياً، والمحافظ المعمارية، والمدونات التي تتطلب تحديثاً مستمراً.',
    },
    badge: {
      en: 'Scalable Architecture',
      ar: 'هيكلية قابلة للنمو',
    },
    isPrimaryWebflow: true,
  },
  {
    id: 'interactions-motion',
    order: 3,
    icon: 'sparkles',
    title: {
      en: 'Art-Directed Interactions & Motion Systems',
      ar: 'تصميم الحركة والتفاعلات البصرية الراقية',
    },
    subtitle: {
      en: 'Subtle, fluid motion that guides attention, conveys value, and feels deliberate—never chaotic.',
      ar: 'حركة انسيابية هادئة توجه انتباه الزائر، وتبرز قيمة العلامة التجارية برقي واتزان بعيداً عن الفوضى.',
    },
    description: {
      en: 'Motion in high-end design is not about making everything spin or bounce; it is about tactile weight, smooth transitions, and rewarding curiosity. I engineer custom Webflow interactions and CSS/JS motion that elevate your website into an unforgettable digital encounter.',
      ar: 'الحركة في المواقع الفاخرة ليست استعراضاً عشوائياً، بل إحساس بالعمق والانسيابية وتوجيه بصر الزائر. أقوم ببرمجة تفاعلات Webflow وحركات CSS/JS محسوبة بدقة لتمنح موقعك هيبة وتجربة مستخدم لا تُنسى.',
    },
    deliverables: {
      en: [
        'Staggered typography entrance reveals and mask clipping transitions',
        'Cursor-reactive cards, magnetic buttons, and tactile micro-states',
        'Scroll-driven storytelling pacing and smooth image scale transitions',
        'Strict performance optimization honoring prefers-reduced-motion settings',
      ],
      ar: [
        'تأثيرات ظهور متدرجة للنصوص والعناوين مع قص أقنعة أنيق (Mask Reveals)',
        'بطاقات تتفاعل مع المؤشر، وأزرار مغناطيسية، وتأثيرات تمرير فائقة الدقة',
        'سرد بصري مرتبط بالتمرير (Scroll-Driven) وتكبير ناعم للصور المعروضة',
        'مراعاة تامة للأداء وخيارات تخفيف الحركة للأجهزة الحساسة للسرعة',
      ],
    },
    idealFor: {
      en: 'Brands looking to stand out on an international level with world-class digital polish.',
      ar: 'العلامات التجارية الراغبة في التميز بمعايير عالمية ولمسة بصرية استثنائية.',
    },
    badge: {
      en: 'Interaction Craft',
      ar: 'حرفية الحركة',
    },
    isPrimaryWebflow: true,
  },
  {
    id: 'custom-code-differentiation',
    order: 4,
    icon: 'code',
    title: {
      en: 'Custom HTML / CSS / JavaScript Beyond Platform Limits',
      ar: 'الأكواد المخصصة (HTML / CSS / JS) لتجاوز حدود المنصات',
    },
    subtitle: {
      en: 'Bridging no-code visual velocity with bespoke software engineering when platforms fall short.',
      ar: 'الجمع بين سرعة أدوات الويب الحديثة وحرية البرمجة المخصصة عندما تقف المنصات عاجزة.',
    },
    description: {
      en: 'Website builders have boundaries; code does not. When a project calls for a complex mathematical calculator, an unconventional slider layout, custom API integrations, or third-party webhooks, I write clean, performant custom code directly into the build.',
      ar: 'تمتلك أدوات بناء المواقع حدوداً، لكن البرمجة الحرة بلا قيود. عندما يتطلب مشروعك حاسبة تسعير تفاعلية، أو عارض صور غير تقليدي، أو ربطاً مخصصاً مع أنظمة الـ API والـ Webhooks، أقوم بكتابة أكواد نظيفة وسريعة تلبي المتطلب بدقة.',
    },
    deliverables: {
      en: [
        'Bespoke JavaScript utilities for dynamic calculations and interactive UI mechanics',
        'Advanced CSS layout overrides (CSS Grid, subgrid, logical properties, clamp math)',
        'Third-party API and webhook data routing (CRM, forms, custom databases)',
        'Clean, commented, maintainable code blocks that client teams can audit',
      ],
      ar: [
        'تطوير أكواد جافاسكريبت خاصة للحسابات التفاعلية وحلول الواجهات المتقدمة',
        'استخدام خصائص CSS المتقدمة (Subgrid، الدوال الرياضية clamp، والخصائص المنطقية)',
        'ربط واجهات برمجة التطبيقات (APIs) والـ Webhooks مع أنظمة إدارة العملاء',
        'أكواد موثقة ومنظمة بعناية يسهل فهمها وتعديلها مستقبلاً بدون تعقيد',
      ],
    },
    idealFor: {
      en: 'Clients whose project demands specific functional mechanics that standard templates cannot accommodate.',
      ar: 'المشاريع التي تتطلب وظائف برمجية وتفاعلية خاصة لا توفرها القوالب والمنصات الجاهزة.',
    },
    badge: {
      en: 'Technical Differentiator',
      ar: 'الميزة التقنية الفارقة',
    },
    isPrimaryWebflow: false,
  },
  {
    id: 'bilingual-rtl-parity',
    order: 5,
    icon: 'globe',
    title: {
      en: 'Bilingual Arabic (RTL) & English Architecture',
      ar: 'الهندسة ثنائية اللغة: العربية (RTL) والإنجليزية',
    },
    subtitle: {
      en: 'Authentic cultural nuance, mirrored layout logic, and world-class Arabic typography for the GCC.',
      ar: 'مراعاة الخصوصية الثقافية، وتناظر الاتجاهات، والخطوط العربية الفاخرة المخصصة لأسواق الخليج.',
    },
    description: {
      en: 'Designing for Kuwait and the Gulf region requires far more than setting dir="rtl". I engineer mirrored visual systems: directional icon flipping, adapted line-heights for Arabic script, natural phrasing that appeals to Gulf commercial decision-makers, and balanced bilingual symmetry.',
      ar: 'التصميم للسوق الكويتي والخليجي لا يقتصر على قلب اتجاه الصفحة، بل هو هندسة بصرية متكاملة: عكس اتجاه الأيقونات، ضبط مسافات الأسطر المناسبة لرسم الحرف العربي، وصياغة لغوية أصيلة تحاكي عقلية رواد الأعمال والمستهلكين في الخليج.',
    },
    deliverables: {
      en: [
        'Native RTL layout mirroring with zero broken absolute positioning or clipped shadows',
        'Carefully paired contemporary typography (IBM Plex Sans Arabic, Tajawal) with English sans',
        'Culturally attuned commercial messaging crafted for Gulf business audiences',
        'Direction-aware interaction states and fluid language switching logic',
      ],
      ar: [
        'هيكلة RTL حقيقية تمنع أي تشوه في العناصر العائمة أو الظلال الجانبية',
        'اختيار مدروس لأرقى الخطوط العربية المعاصرة وتناغمها التام مع الخط اللاتيني',
        'صياغة تجارية رصينة ومفهومة تعبر عن طبيعة السوق الخليجي ومفرداته',
        'حركات انتقالية وتفاعلات تحترم اتجاه القراءة مع زر تبديل فوري وسلس بين اللغتين',
      ],
    },
    idealFor: {
      en: 'Enterprises in Kuwait, Saudi Arabia, UAE, and GCC countries requiring elite bilingual parity.',
      ar: 'الشركات في الكويت والمملكة العربية السعودية والإمارات وقطر الباحثة عن واجهة ثنائية فارهة.',
    },
    badge: {
      en: 'GCC Specialization',
      ar: 'تخصص السوق الخليجي',
    },
    isPrimaryWebflow: true,
  },
  {
    id: 'conversion-landing-pages',
    order: 6,
    icon: 'trending-up',
    title: {
      en: 'High-Converting Campaign Landing Pages',
      ar: 'صفحات الهبوط والحملات التسويقية عالية التحويل',
    },
    subtitle: {
      en: 'Built to capture traffic from Meta, Snapchat, TikTok, and Google Ads with sub-1.5s load speeds.',
      ar: 'مصممة لاستقطاب زيارات إعلانات سناب شات وإنستغرام وتيك توك بسرعة تحميل تقل عن 1.5 ثانية.',
    },
    description: {
      en: 'When ad spend is on the line, every millisecond of latency and every pixel of cognitive friction burns capital. I design conversion funnels that articulate value instantly, resolve objections systematically, and guide qualified leads toward form completion or WhatsApp conversations.',
      ar: 'عندما تدفع ميزانيات على الإعلانات الممولة، فإن كل تأخير في سرعة الصفحة يكلفك خسارة عملاء محتملين. أصمم صفحات هبوط تشرح الميزة التنافسية فوراً، وتزيل تردد الزائر، وتدفعه لاتخاذ قرار الشراء أو التواصل السريع.',
    },
    deliverables: {
      en: [
        'Single-goal conversion layouts free from distracting secondary navigation',
        'Sub-1.5s mobile loading speeds on cellular networks to maximize ad click-throughs',
        'Direct WhatsApp routing with pre-populated message intents and UTM tracking parameters',
        'A/B test ready section architecture allowing rapid headline and offer iteration',
      ],
      ar: [
        'صفحات هبوط مركزة على هدف تسويقي واحد بدون قوائم فرعية تشتت انتباه الزائر',
        'سرعة فتح استثنائية على شبكات الهاتف لتقليل معدل ارتداد الزوار من الإعلانات',
        'ربط مباشر بنظام الواتساب مع رسائل مجهزة مسبقاً وتتبع مصادر الحملات (UTM)',
        'هيكلية معيارية تسهل اختبار العناوين والعروض (A/B Testing) بسرعة ومرونة',
      ],
    },
    idealFor: {
      en: 'D2C brands, medical clinics, luxury service centers, and agencies executing high-budget ad campaigns.',
      ar: 'المراكز الطبية، ورش الخدمات الراقية، وحملات المنتجات المباشرة ذات الميزانيات الإعلانية الكبيرة.',
    },
    badge: {
      en: 'ROI & Conversion',
      ar: 'عائد الاستثمار والتحويل',
    },
    isPrimaryWebflow: false,
  },
  {
    id: 'website-redesign',
    order: 7,
    icon: 'refresh-cw',
    title: {
      en: 'Website Redesign & Structural Modernization',
      ar: 'إعادة التصميم والتطوير والتحديث الشامل للمواقع',
    },
    subtitle: {
      en: 'Transforming legacy, clunky websites into high-speed, modern assets that reflect your true stature.',
      ar: 'تحويل المواقع القديمة والبطيئة إلى واجهات عصرية فائقة السرعة تليق بمكانة شركتك الحقيقية.',
    },
    description: {
      en: 'Outdated websites quietly repel high-value clients and project an image of stagnation. I audit your existing site, re-architect your content flow, eliminate bloated dependencies, and deliver a modern, high-performance web experience that instantly commands respect.',
      ar: 'المواقع القديمة تؤثر سلباً على قرارات العملاء الكبار وتوحي بعدم مواكبة التطور. أقوم بتحليل موقعك الحالي، وإعادة ترتيب المحتوى، والتخلص من الأكواد والملفات البطيئة، وتقديم واجهة جديدة تعكس قوة وجودة خدماتك اليوم.',
    },
    deliverables: {
      en: [
        'Information architecture audit and bloat reduction plan',
        'Fresh aesthetic overhaul utilizing contemporary editorial typography and spacing',
        'Preservation of existing SEO link equity through strategic 301 redirect mappings',
        'Drastic performance improvements reducing bounce rates and boosting engagement',
      ],
      ar: [
        'مراجعة شاملة لهيكلية الموقع وتحديد المشاكل ونقاط الضعف السابقة',
        'تجديد بصري كامل يعتمد الخطوط الحديثة والتوزيع المدروس للمساحات',
        'حماية الروابط القديمة وأرشفة الـ SEO عبر خريطة تحويل مدروسة (301 Redirects)',
        'قفزة نوعية في سرعة التحميل وتجربة التصفح على كافة الأجهزة',
      ],
    },
    idealFor: {
      en: 'Established businesses with dated websites that no longer reflect the quality or scale of their current operations.',
      ar: 'الشركات العريقة التي تمتلك مواقع قديمة لم تعد تعبر عن حجم نجاحاتها وجودة أعمالها الحالية.',
    },
    badge: {
      en: 'Brand Elevation',
      ar: 'ترقية الهوية',
    },
    isPrimaryWebflow: true,
  },
  {
    id: 'ghl-background-experience',
    order: 8,
    icon: 'shield-check',
    title: {
      en: 'Agency Fulfillment & Platform Integration Background',
      ar: 'الخبرة السابقة في أنظمة الوكالات وتكامل المنصات (GoHighLevel)',
    },
    subtitle: {
      en: 'Extensive hands-on background working inside Kuwait agency workflows, sub-accounts, and marketing funnels.',
      ar: 'خبرة سابقة متعمقة في كواليس وكالات التسويق في الكويت، وإدارة الحسابات الفرعية ومسارات التحويل.',
    },
    description: {
      en: 'Before focusing primarily on bespoke Webflow architecture, I spent working behind the scenes for a Kuwait-based digital marketing company. This extensive experience inside GoHighLevel,lead routing webhooks, and agency delivery workflows gives me deep practical understanding of how real businesses acquire and convert customers.',
      ar: 'قبل التركيز التام على التخصص في Webflow، عملت خلف الكواليس لصالح شركة تسويق رقمي كويتية. هذه الخبرة العملية مع منصة GoHighLevel، وربط نماذج العملاء، منحتني فهماً حقيقياً وعميقاً لكيفية تفكير الشركات وتوليد المبيعات على أرض الواقع.',
    },
    deliverables: {
      en: [
        'Proven understanding of agency production deadlines and white-label confidentiality',
        'Hands-on fluency with GoHighLevel sub-accounts, snapshots, forms, and calendar syncing',
        'Experience translating raw marketing briefs into structured, client-ready staging previews',
        'Deep practical knowledge of WhatsApp routing and GCC business conversion workflows',
      ],
      ar: [
        'إلمام تام بضغوط العمل وسرعة التسليم داخل وكالات التسويق مع الحفاظ على السرية المهنية',
        'خبرة عملية عميقة في إعداد حسابات GoHighLevel الفرعية، والنماذج، والتقويمات',
        'القدرة على تحويل متطلبات العميل المبدئية إلى موقع مكتمل ومبهر في وقت قياسي',
        'معرفة دقيقة بسلوك المستهلك الخليجي ومسارات التحويل عبر الواتساب والاتصال',
      ],
    },
    idealFor: {
      en: 'Marketing agencies and teams seeking a reliable collaborator who already understands agency operations and client management.',
      ar: 'وكالات التسويق والشركات التي تبحث عن شريك يفهم طبيعة العمل مع العملاء بدون الحاجة للشرح والتوجيه المتكرر.',
    },
    badge: {
      en: 'Agency Background',
      ar: 'خبرة الوكالات السابقة',
    },
    isPrimaryWebflow: false,
    isBackgroundExperience: true,
  },
];

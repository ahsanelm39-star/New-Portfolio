import { ServiceItem } from '@/lib/types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'webflow-development',
    order: 1,
    icon: 'layout',
    title: {
      en: 'Webflow Development',
      ar: 'تطوير Webflow',
    },
    subtitle: {
      en: 'Figma-to-Webflow implementation for agency and in-house teams.',
      ar: 'تنفيذ تصاميم Figma على Webflow للوكالات والفرق الداخلية.',
    },
    description: {
      en: 'I take approved designs and requirements into responsive Webflow builds, with CMS and reusable structures where the project needs them.',
      ar: 'أنفذ التصاميم والمتطلبات المعتمدة على Webflow بتجاوب مناسب، مع إعداد CMS والبنى القابلة لإعادة الاستخدام بحسب حاجة المشروع.',
    },
    deliverables: {
      en: [
        'Figma-to-Webflow page implementation',
        'Responsive behavior across desktop, tablet and mobile',
        'Webflow CMS collections and templates',
        'Reusable sections and native interactions',
      ],
      ar: [
        'تنفيذ الصفحات من Figma إلى Webflow',
        'تجاوب عبر الكمبيوتر اللوحي والهاتف وسطح المكتب',
        'مجموعات CMS وقوالب Webflow',
        'أقسام قابلة لإعادة الاستخدام وتفاعلات المنصة',
      ],
    },
    idealFor: {
      en: 'Agencies and companies with approved designs that need a developer to implement and prepare the site for production review.',
      ar: 'الوكالات والشركات التي لديها تصاميم معتمدة وتحتاج إلى تنفيذ الموقع وتجهيزه للمراجعة قبل الإنتاج.',
    },
    badge: {
      en: 'Core Service',
      ar: 'الخدمة الأساسية',
    },
    isPrimaryWebflow: true,
  },
  {
    id: 'custom-development',
    order: 2,
    icon: 'code',
    title: {
      en: 'Custom Web Development',
      ar: 'تطوير ويب مخصص',
    },
    subtitle: {
      en: 'HTML, CSS and JavaScript for requirements beyond native platform options.',
      ar: 'HTML وCSS وJavaScript للمتطلبات التي تتجاوز خيارات المنصة.',
    },
    description: {
      en: 'Custom code can extend a Webflow build with scoped layout changes, interactions or functionality based on the project brief.',
      ar: 'يمكن للكود المخصص توسيع موقع Webflow بتعديلات تخطيط أو تفاعلات أو وظائف محددة وفق متطلبات المشروع.',
    },
    deliverables: {
      en: [
        'Custom HTML and CSS implementation',
        'JavaScript interactions and interface behavior',
        'Webflow extensions and third-party embeds',
        'Code handoff aligned with the existing build',
      ],
      ar: [
        'تنفيذ مخصص باستخدام HTML وCSS',
        'تفاعلات JavaScript وسلوك الواجهة',
        'توسيع مواقع Webflow والتضمينات الخارجية',
        'تسليم الكود بما يتوافق مع بنية الموقع الحالية',
      ],
    },
    idealFor: {
      en: 'Teams that need a defined interaction, layout or integration outside the standard site builder controls.',
      ar: 'الفرق التي تحتاج إلى تفاعل أو تخطيط أو تكامل لا توفره خيارات بناء الموقع المعتادة.',
    },
    badge: {
      en: 'Custom Code',
      ar: 'كود مخصص',
    },
    isPrimaryWebflow: false,
  },
  {
    id: 'go-high-level',
    order: 3,
    icon: 'database',
    title: {
      en: 'GoHighLevel Development',
      ar: 'تطوير GoHighLevel',
    },
    subtitle: {
      en: 'GHL websites, landing pages and forms within an agency workflow.',
      ar: 'مواقع وصفحات هبوط ونماذج GHL ضمن سير عمل الوكالة.',
    },
    description: {
      en: 'I have hands-on experience with GoHighLevel in a Kuwait-based marketing company. Scope can include site and funnel pages, forms, CRM-related setup and workflow configuration where the brief requires it.',
      ar: 'لدي خبرة عملية في GoHighLevel ضمن شركة تسويق في الكويت. قد يشمل النطاق صفحات المواقع ومسارات التحويل والنماذج وإعدادات CRM وسير العمل عند طلبها.',
    },
    deliverables: {
      en: [
        'GHL website and landing page implementation',
        'Forms and lead capture setup',
        'CRM-related configuration within the agreed scope',
        'Workflow or automation setup when requirements are defined',
      ],
      ar: [
        'تنفيذ مواقع وصفحات هبوط على GHL',
        'إعداد النماذج وجمع بيانات العملاء المحتملين',
        'إعدادات CRM ضمن النطاق المتفق عليه',
        'إعداد سير العمل أو الأتمتة عند تحديد المتطلبات',
      ],
    },
    idealFor: {
      en: 'Marketing teams and agencies already using GoHighLevel for lead and campaign workflows.',
      ar: 'فرق التسويق والوكالات التي تستخدم GoHighLevel لإدارة العملاء المحتملين والحملات.',
    },
    badge: {
      en: 'GHL',
      ar: 'GHL',
    },
    isPrimaryWebflow: false,
  },
  {
    id: 'technical-foundations',
    order: 4,
    icon: 'shield-check',
    title: {
      en: 'Responsive, SEO & Accessibility Foundations',
      ar: 'أساسيات التجاوب وSEO وإمكانية الوصول',
    },
    subtitle: {
      en: 'Practical technical foundations included in the implementation.',
      ar: 'أساسيات تقنية عملية ضمن تنفيذ الموقع.',
    },
    description: {
      en: 'I account for responsive layouts, semantic structure and technical SEO basics during development, without promising unmeasured performance or search outcomes.',
      ar: 'أراعي تخطيطات الأجهزة والبنية الدلالية وأساسيات SEO التقني أثناء التطوير، دون التعهد بنتائج بحث أو أداء غير مقاسة.',
    },
    deliverables: {
      en: [
        'Breakpoint-aware desktop, tablet and mobile layouts',
        'Semantic HTML and a clear heading structure',
        'Page titles, descriptions and image alt text',
        'Accessibility fundamentals and keyboard focus visibility',
      ],
      ar: [
        'تخطيطات تراعي نقاط التوقف للكمبيوتر اللوحي والهاتف وسطح المكتب',
        'HTML دلالي وتسلسل واضح للعناوين',
        'عناوين الصفحات وأوصافها والنصوص البديلة للصور',
        'أساسيات إمكانية الوصول ووضوح التركيز بلوحة المفاتيح',
      ],
    },
    idealFor: {
      en: 'Teams seeking clean implementation with SEO and accessibility basics considered as part of the build.',
      ar: 'الفرق التي تحتاج إلى تنفيذ منظم يراعي أساسيات SEO وإمكانية الوصول.',
    },
    badge: {
      en: 'Technical Foundations',
      ar: 'أساسيات تقنية',
    },
    isPrimaryWebflow: false,
  },
  {
    id: 'arabic-rtl',
    order: 5,
    icon: 'globe',
    title: {
      en: 'Arabic RTL & English LTR Implementation',
      ar: 'تنفيذ العربية RTL والإنجليزية LTR',
    },
    subtitle: {
      en: 'Direction-aware website implementation for Arabic and English content.',
      ar: 'تنفيذ مواقع يراعي اتجاه المحتوى العربي والإنجليزي.',
    },
    description: {
      en: 'I implement Arabic right-to-left and English left-to-right page behavior, including layout direction, text flow and responsive details for GCC-oriented projects.',
      ar: 'أنفذ اتجاه الصفحات العربية من اليمين إلى اليسار والإنجليزية من اليسار إلى اليمين، مع مراعاة التخطيط وتدفق النص والتفاصيل المتجاوبة لمشاريع المنطقة.',
    },
    deliverables: {
      en: [
        'Arabic RTL and English LTR page layouts',
        'Direction-aware spacing and interface alignment',
        'Arabic typography and line-spacing considerations',
        'Responsive checks across both language versions',
      ],
      ar: [
        'تخطيطات للصفحات العربية RTL والإنجليزية LTR',
        'مسافات ومحاذاة واجهة تراعي اتجاه المحتوى',
        'مراعاة الخط العربي والمسافات بين الأسطر',
        'مراجعة التجاوب في نسختي الموقع',
      ],
    },
    idealFor: {
      en: 'Companies and agencies preparing Arabic and English sites for Kuwait and the wider GCC market.',
      ar: 'الشركات والوكالات التي تجهز مواقع عربية وإنجليزية للكويت وأسواق الخليج.',
    },
    badge: {
      en: 'Arabic & GCC',
      ar: 'العربية والخليج',
    },
    isPrimaryWebflow: false,
  },
];

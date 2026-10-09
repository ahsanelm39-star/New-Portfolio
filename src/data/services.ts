import { ServiceItem } from '@/lib/types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'webflow-development',
    order: 1,
    icon: 'layout',
    title: {
      en: 'Webflow Website Development',
      ar: 'تطوير مواقع Webflow',
    },
    subtitle: {
      en: 'Figma and Adobe XD implementation for agencies and corporate teams.',
      ar: 'تنفيذ تصاميم Figma وAdobe XD على Webflow للوكالات والشركات.',
    },
    description: {
      en: 'I translate approved designs into clean, responsive Webflow websites with structured CMS collections, reusable layouts, and maintainable content organization ready for production review.',
      ar: 'أحوّل التصاميم المعتمدة إلى مواقع Webflow متجاوبة ونظيفة مع بنية CMS سهلة الإدارة، ومكونات قابلة لإعادة الاستخدام، وتنظيم محكم جاهز لمراجعة ما قبل الإطلاق.',
    },
    deliverables: {
      en: [
        'Figma and Adobe XD to Webflow page implementation',
        'Responsive layout engineering across desktop, tablet, and mobile',
        'Webflow CMS collections, dynamic templates, and components',
        'Clean class naming, reusable layouts, and native interactions',
      ],
      ar: [
        'تنفيذ الصفحات من Figma وAdobe XD إلى Webflow بدقة',
        'هندسة التخطيط المتجاوب عبر الحواسيب والأجهزة اللوحية والهواتف',
        'مجموعات CMS وقوالب ديناميكية ومكونات قابلة لإعادة الاستخدام',
        'تسمية منظمة للكلاسات وبنية تصميم قابلة للتطوير',
      ],
    },
    idealFor: {
      en: 'Agencies, creative studios, and companies with approved designs that need a dependable developer to build and prepare production-ready Webflow sites.',
      ar: 'الوكالات والاستوديوهات الإبداعية والشركات التي تملك تصاميم معتمدة وتحتاج إلى مطور موثوق لبناء موقع Webflow جاهز للإنتاج.',
    },
    badge: {
      en: 'Webflow Core',
      ar: 'تطوير Webflow',
    },
    isPrimaryWebflow: true,
  },
  {
    id: 'go-high-level',
    order: 2,
    icon: 'layout',
    title: {
      en: 'GoHighLevel Website Development',
      ar: 'تطوير مواقع GoHighLevel',
    },
    subtitle: {
      en: 'Production website pages and landing pages built cleanly inside GoHighLevel.',
      ar: 'بناء وتطوير صفحات المواقع وصفحات الهبوط باحترافية على GoHighLevel.',
    },
    description: {
      en: 'I build and implement responsive website pages and landing pages within GoHighLevel, translating approved Figma and XD designs into clean, functional page layouts with embedded forms and custom styling where native platform options fall short.',
      ar: 'أبني وأنفذ صفحات المواقع وصفحات الهبوط المتجاوبة داخل GoHighLevel، محولاً تصاميم Figma وXD المعتمدة إلى تخطيطات منظمة ونماذج متكاملة مع كتابة تنسيقات مخصصة عند الحاجة.',
    },
    deliverables: {
      en: [
        'GoHighLevel multi-page website and landing page development',
        'Figma and Adobe XD design implementation within GHL',
        'Responsive layout adjustments across mobile, tablet, and desktop',
        'Custom HTML/CSS styling for headers, typography, and page sections',
      ],
      ar: [
        'تطوير مواقع متعددة الصفحات وصفحات هبوط على GoHighLevel',
        'تنفيذ تصاميم Figma وAdobe XD داخل بيئة GHL بدقة',
        'ضبط التجاوب للهواتف والأجهزة اللوحية والحواسيب',
        'تنسيقات HTML وCSS مخصصة للترويسة والخطوط وأقسام الصفحة',
      ],
    },
    idealFor: {
      en: 'Agencies and businesses that use GoHighLevel for their web presence and need a dedicated developer to build clean, design-accurate website pages.',
      ar: 'الوكالات والشركات التي تعتمد على GoHighLevel لمواقعها وتحتاج إلى مطور متخصص لبناء صفحات دقيقة ومطابقة للتصاميم.',
    },
    badge: {
      en: 'GHL Websites',
      ar: 'مواقع GHL',
    },
    isPrimaryWebflow: false,
  },
  {
    id: 'custom-development',
    order: 3,
    icon: 'code',
    title: {
      en: 'Custom Front-End Development',
      ar: 'برمجة الواجهات المخصصة',
    },
    subtitle: {
      en: 'HTML, CSS, and JavaScript to extend Webflow and GHL websites.',
      ar: 'كود مخصص لتوسيع قدرات مواقع Webflow وGoHighLevel.',
    },
    description: {
      en: 'A practical development advantage: writing clean, hand-coded HTML, CSS, and JavaScript whenever native Webflow or GHL capabilities fall short of specific layout treatments, bespoke interactions, or UI behaviors.',
      ar: 'ميزة عملية في التنفيذ: كتابة كود مخصص نظيف بـ HTML وCSS وJavaScript متى ما كانت خيارات Webflow أو GHL غير كافية لتحقيق تخطيط دقيق أو تفاعل مخصص.',
    },
    deliverables: {
      en: [
        'Custom CSS for layout refinements, fine typography, and micro-styling',
        'Lightweight JavaScript for interactive behaviors and interface states',
        'Platform-tailored embeds and form customization for Webflow and GHL',
        'Maintainable code handoff integrated seamlessly into the website build',
      ],
      ar: [
        'تنسيقات CSS مخصصة لضبط التخطيطات المعقدة والخطوط الدقيقة',
        'جافا سكريبت خفيف للتفاعلات الحركية وسلوكيات الواجهة',
        'تضمينات مخصصة ونماذج مهيأة لمواقع Webflow وGHL',
        'تسليم كود منظم يندمج بسلاسة مع بنية الموقع',
      ],
    },
    idealFor: {
      en: 'Projects requiring bespoke layouts, unique interactions, or integrations outside standard site-builder controls.',
      ar: 'المشاريع التي تتطلب تخطيطات مخصصة أو تفاعلات استثنائية تتجاوز الخيارات المدمجة في المنصات.',
    },
    badge: {
      en: 'Custom Code',
      ar: 'كود مخصص',
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
      en: 'Practical technical foundations integrated into every website build.',
      ar: 'أساسيات تقنية عملية مدمجة في صلب كل موقع.',
    },
    description: {
      en: 'I build with semantic HTML, logical heading hierarchy, page metadata, image alt text, and keyboard focus accessibility, keeping front-end assets lightweight and performant without making unverified outcome claims.',
      ar: 'أبني المواقع بهيكلية HTML دلالية وتسلسل منطقي للعناوين وبيانات وصفية دقيقة وأساسيات إمكانية الوصول بلوحة المفاتيح، مع الحفاظ على خفة وسرعة تحميل الصفحات دون ادعاء نتائج غير مثبتة.',
    },
    deliverables: {
      en: [
        'Breakpoint-aware desktop, tablet, and mobile responsive layouts',
        'Semantic HTML and structured heading hierarchies (H1–H6)',
        'Accurate page titles, meta descriptions, and image alt text',
        'Accessibility fundamentals including visible keyboard focus states',
      ],
      ar: [
        'تخطيطات متجاوبة مدروسة للحواسيب والأجهزة اللوحية والهواتف',
        'بنية HTML دلالية وتسلسل هرمي منظم للعناوين (H1–H6)',
        'عناوين دقيقة للصفحات وبيانات وصفية ونصوص بديلة للصور',
        'أساسيات إمكانية الوصول بما فيها وضوح التركيز بلوحة المفاتيح',
      ],
    },
    idealFor: {
      en: 'Teams seeking clean, production-grade implementation with sound technical SEO and accessibility hygiene considered from the start.',
      ar: 'الفرق التي تبحث عن تنفيذ منظم بمعايير إنتاجية عالية تراعي أساسيات SEO وإمكانية الوصول من البداية.',
    },
    badge: {
      en: 'Technical Scope',
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
      en: 'Direction-aware website implementation tailored for Kuwait and GCC markets.',
      ar: 'تنفيذ مواقع يراعي اتجاه المحتوى بدقة لأسواق الكويت والخليج.',
    },
    description: {
      en: 'I implement Arabic right-to-left and English left-to-right pages with careful attention to layout direction, typographic scale, reading hierarchy, and responsive symmetry for regional businesses.',
      ar: 'أنفذ اتجاه الصفحات العربية من اليمين إلى اليسار والإنجليزية من اليسار إلى اليمين، مع مراعاة دقيقة لمحاذاة التخطيط وتناسب الخطوط وتدفق القراءة الطبيعي للشركات في المنطقة.',
    },
    deliverables: {
      en: [
        'Arabic RTL and English LTR page layouts with balanced symmetry',
        'Direction-aware spacing, padding, and UI element alignment',
        'Calibrated Arabic web typography and readable line heights',
        'Thorough responsive verification across both language versions',
      ],
      ar: [
        'تخطيطات متوازنة للصفحات العربية RTL والإنجليزية LTR',
        'مسافات ومحاذاة واجهة تراعي اتجاه القراءة الطبيعي',
        'ضبط الخطوط العربية الرقمية ومسافات الأسطر لراحة القارئ',
        'مراجعة شاملة للتجاوب في نسختي الموقع العربية والإنجليزية',
      ],
    },
    idealFor: {
      en: 'Agencies and companies preparing Arabic and English websites for Kuwait and the wider GCC business market.',
      ar: 'الوكالات والشركات التي تبني مواقع عربية وإنجليزية للكويت والأسواق الخليجية.',
    },
    badge: {
      en: 'Arabic & GCC',
      ar: 'العربية والخليج',
    },
    isPrimaryWebflow: false,
  },
];

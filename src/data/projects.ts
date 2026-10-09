import { Project } from '@/lib/types';

export const PROJECTS: Project[] = [
  {
    slug: 'al-awad-solutions',
    projectType: 'client',
    featured: true,
    order: 1,
    title: {
      en: 'Al Awad Residential & Commercial Solutions',
      ar: 'العواد للحلول السكنية والتجارية المتكاملة',
    },
    tagline: {
      en: 'Responsive multi-division commercial website delivered for a Kuwait contracting solutions provider.',
      ar: 'موقع تجاري متجاوب متعدد الأقسام نُفذ لشركة حلول ومقاولات في الكويت.',
    },
    industry: {
      en: 'Commercial & Residential Contracting',
      ar: 'المقاولات والحلول السكنية والتجارية',
    },
    category: 'commercial',
    location: {
      en: 'Kuwait',
      ar: 'الكويت',
    },
    platform: 'Webflow + Custom CSS',
    deliveryScope: {
      en: 'White-Label Agency Delivery',
      ar: 'تنفيذ لصالح وكالة تسويق (White-Label)',
    },
    platformContextNote: {
      en: 'Delivered on a white-label basis for a Kuwait-based marketing agency to support an established contracting and solutions business. Business claims shown in the source-site preview reflect client-provided copy and are not independently verified project outcomes.',
      ar: 'نُفّذ الموقع كعمل غير معلن (White-label) لصالح وكالة تسويق كويتية لدعم شركة مقاولات وحلول متكاملة. البيانات التجارية في المعاينة تمثل محتوى العميل وليست نتائج مستقلة تم التحقق منها للمشروع.',
    },
    role: {
      en: 'Website Development & Custom CSS',
      ar: 'تطوير الموقع وتنسيق CSS مخصص',
    },
    languages: {
      en: 'Arabic RTL & English LTR',
      ar: 'العربية RTL والإنجليزية LTR',
    },
    image: '/images/projects/alawad.png',
    liveUrl: 'https://alawad-arch.com',
    overview: {
      en: 'Developed through a white-label agency partnership for an established Kuwait solutions firm, this bilingual corporate website organizes distinct residential, commercial, and industrial service divisions into a structured, easily navigable digital presence.',
      ar: 'نُفّذ هذا الموقع المؤسسي ثنائي اللغة عبر شراكة عمل غير معلن (White-label) مع وكالة تسويق في الكويت لصالح شركة حلول ومقاولات كويتية، حيث تم تنظيم أقسام الخدمات السكنية والتجارية والصناعية ضمن واجهة رقمية واضحة وسلسة التصفح.',
    },
    challenge: {
      en: 'The client required an organized hierarchy capable of communicating diverse services across three distinct business sectors without overwhelming visitors, while ensuring identical layout fidelity and typographic clarity in both Arabic right-to-left and English left-to-right presentations.',
      ar: 'تطلب المشروع بناء هيكلية منظمة لعرض خدمات متنوعة عبر ثلاثة قطاعات تجارية مختلفة دون تشتيت الزائر، مع الحفاظ على دقة التخطيط والوضوح الطباعي في كلتا النسختين العربية (RTL) والإنجليزية (LTR).',
    },
    approach: {
      en: 'Working from the agency’s approved design specifications, I implemented modular service hubs, tailored custom CSS for multi-breakpoint alignment, and integrated localized direct inquiry channels to facilitate commercial lead flow.',
      ar: 'انطلاقاً من التصاميم المعتمدة من الوكالة، قمت ببناء بوابات خدمات معيارية، وتطبيق تنسيقات CSS مخصصة لضبط المحاذاة عبر مختلف الشاشات، ودمج قنوات اتصال واستفسار مباشرة تلائم طبيعة الأعمال في الكويت.',
    },
    designDecisions: {
      en: [
        'Structured dedicated capability hubs for residential, commercial, and industrial offerings.',
        'Engineered bidirectional layout logic ensuring natural Arabic RTL flow alongside English LTR.',
        'Applied custom CSS to refine responsive typography, container rhythm, and button micro-states.',
        'Positioned prominent WhatsApp and direct inquiry touchpoints alongside service specifications.',
      ],
      ar: [
        'هيكلة بوابات مخصصة لكل قطاع: السكني، التجاري، والصناعي.',
        'برمجة منطق ثنائي الاتجاه يضمن سلاسة تصفح العربية RTL وتناسقها مع الإنجليزية LTR.',
        'تطبيق تنسيقات CSS مخصصة لضبط تناسب الخطوط واستجابة الحاويات عبر الشاشات.',
        'تضمين نقاط اتصال مباشرة وروابط واتساب بجوار تفاصيل كل خدمة لتسهيل التواصل.',
      ],
    },
    keyFeatures: {
      en: [
        'Dedicated sector hubs for residential, commercial, and industrial solutions',
        'Bidirectional Arabic RTL and English LTR page architectures',
        'Direct WhatsApp and regional contact integration',
        'Custom responsive styling tuned for desktop, tablet, and mobile screens',
      ],
      ar: [
        'بوابات مخصصة لقطاعات الحلول السكنية والتجارية والصناعية',
        'بنية صفحات ثنائية الاتجاه باللغتين العربية RTL والإنجليزية LTR',
        'تكامل مباشر مع قنوات الواتساب والاتصال المحلي',
        'تنسيقات متجاوبة مخصصة ومضبوطة للحواسيب والأجهزة اللوحية والهواتف',
      ],
    },
    keyTakeaways: {
      en: [
        'Multi-division corporate websites require disciplined categorization to prevent navigation fatigue.',
        'Bilingual Gulf websites demand independent evaluation of text flow and reading direction rather than mirrored auto-flipping.',
      ],
      ar: [
        'تحتاج مواقع الشركات متعددة القطاعات إلى تنظيم هرمي دقيق لتفادي تشتت الزائر أثناء التصفح.',
        'تتطلب المواقع الخليجية ثنائية اللغة مراجعة مستقلة لتدفق النص واتجاه القراءة بدلاً من الاكتفاء بالانعكاس الآلي للتصميم.',
      ],
    },
    techTags: ['Responsive Layout', 'Custom CSS', 'Arabic RTL', 'English LTR', 'Corporate UX', 'WhatsApp Integration'],
    metrics: [],
  },
  {
    slug: 'al-nser-grills',
    projectType: 'client',
    featured: true,
    order: 2,
    title: {
      en: 'Al Nser Al Fadhi Grills & Traditional Cuisine',
      ar: 'مطعم النسر الفضي للمشويات والمأكولات الكويتية',
    },
    tagline: {
      en: 'Mobile-optimized Arabic restaurant website and culinary menu presentation for a Kuwait establishment.',
      ar: 'موقع مطعم وقائمة مأكولات باللغة العربية مهيأ للهواتف لمطعم كويتي تقليدي.',
    },
    industry: {
      en: 'Culinary, Hospitality & Restaurant',
      ar: 'المطاعم والضيافة والمأكولات التقليدية',
    },
    category: 'hospitality',
    location: {
      en: 'Kuwait',
      ar: 'الكويت',
    },
    platform: 'Webflow',
    deliveryScope: {
      en: 'White-Label Agency Delivery',
      ar: 'تنفيذ لصالح وكالة تسويق (White-Label)',
    },
    platformContextNote: {
      en: 'Delivered on a white-label basis for a Kuwait-based marketing agency to serve a local hospitality client. Business claims and imagery shown in the source-site preview reflect client-provided material and are not independently verified project outcomes.',
      ar: 'نُفّذ الموقع كعمل غير معلن (White-label) لصالح وكالة تسويق كويتية لخدمة مطعم محلي. تعكس الصور والبيانات في المعاينة محتوى العميل وليست نتائج مستقلة تم التحقق منها للمشروع.',
    },
    role: {
      en: 'Website Development & Menu Architecture',
      ar: 'تطوير الموقع وهيكلة قائمة الطعام',
    },
    languages: {
      en: 'Arabic RTL',
      ar: 'العربية RTL',
    },
    image: '/images/projects/resturant.png',
    liveUrl: 'https://silver-eagle.goonline.asia/',
    overview: {
      en: 'Produced under a white-label arrangement with a Kuwait-based agency, this mobile-first culinary website presents the traditional grill selections and authentic cuisine of a Kuwait restaurant, engineered for high-speed browsing and immediate customer contact.',
      ar: 'نُفّذ هذا الموقع الموجه للهواتف عبر تعاون غير معلن (White-label) مع وكالة تسويق كويتية لصالح مطعم كويتي للمأكولات الشعبية والمشويات، حيث تم تصميمه لتوفير تصفح سريع وقنوات تواصل فورية للطلب.',
    },
    challenge: {
      en: 'Traditional restaurant visitors frequently browse on smartphones while on the move. The project required replacing cumbersome PDF menu downloads with a responsive, live digital menu organized into intuitive food categories with instant ordering touchpoints.',
      ar: 'يتصفح رواد المطاعم المواقع غالباً عبر الهواتف الذكية أثناء التنقل. تطلب المشروع استبدال ملفات PDF الثقيلة بقائمة طعام رقمية تفاعلية وسريعة، مقسمة إلى فئات واضحة مع أزرار طلب مباشر.',
    },
    approach: {
      en: 'Following the agency brief, I developed a clean Arabic RTL layout focused on clear section anchors, accessible dish descriptions, and tap-to-call / WhatsApp ordering links that streamline customer inquiries directly to the branch.',
      ar: 'بناءً على متطلبات الوكالة، قمت بتطوير تخطيط عربي RTL يعتمد على سهولة الانتقال بين الأقسام، ووضوح أصناف المأكولات، مع توفير روابط اتصال مباشر وواتساب لتحويل رغبة الزائر إلى طلب فوري.',
    },
    designDecisions: {
      en: [
        'Replaced static downloadable files with an accessible, on-page digital menu.',
        'Organized menu items into scannable categories tailored for handheld mobile screens.',
        'Embedded direct WhatsApp and branch calling buttons prominently throughout the user journey.',
        'Optimized layout spacing and image rendering to ensure rapid mobile page loading.',
      ],
      ar: [
        'استبدال الملفات الثابتة بقائمة طعام رقمية متجاوبة وسريعة التصفح داخل الموقع.',
        'تنظيم أصناف المأكولات والمشويات في أقسام واضحة تلائم شاشات الهواتف المحمولة.',
        'تضمين أزرار اتصال وواتساب مباشرة وبارزة على مدار تجربة التصفح.',
        'ضبط المسافات وتحميل الصور لضمان سلاسة وسرعة استجابة الصفحة على الهواتف.',
      ],
    },
    keyFeatures: {
      en: [
        'Categorized digital menu for traditional grills and specialties',
        'Direct WhatsApp ordering and instant branch dial links',
        'Mobile-first responsive presentation tailored for handheld browsing',
        'Arabic-first RTL layout with localized food service conventions',
      ],
      ar: [
        'قائمة رقمية مبوبة للمشويات والمأكولات الكويتية التقليدية',
        'أزرار للطلب السريع عبر الواتساب والاتصال الهاتفي المباشر',
        'واجهة متجاوبة مهيأة أولاً لتصفح مريح عبر الهواتف',
        'تخطيط عربي أصيل RTL يراعي طبيعة قطاع المطاعم المحلي',
      ],
    },
    keyTakeaways: {
      en: [
        'Hospitality websites convert significantly better when menus are rendered as accessible web copy rather than external downloads.',
        'Integrating regional communication channels like WhatsApp directly next to menu items reduces customer drop-off.',
      ],
      ar: [
        'تحقق مواقع المطاعم تفاعلاً أعلى بكثير عندما تُعرض القائمة كنصوص ويب متجاوبة بدلاً من ملفات تنزيل خارجية.',
        'دمج قنوات التواصل المفضلة إقليمياً مثل الواتساب بجوار الأصناف يقلل من تردد الزبون ويسرع الطلب.',
      ],
    },
    techTags: ['Mobile-First UX', 'Digital Menu Architecture', 'WhatsApp Ordering', 'Arabic RTL', 'Hospitality Web'],
    metrics: [],
  },
  {
    slug: 'al-ibtikar-auto',
    projectType: 'client',
    featured: true,
    order: 3,
    title: {
      en: 'Al Ibtikar Auto Maintenance Center',
      ar: 'مركز الابتكار المتخصص لصيانة السيارات',
    },
    tagline: {
      en: 'Comprehensive Arabic automotive service center website and inquiry portal in Kuwait.',
      ar: 'موقع وبوابة خدمات لمركز صيانة وهندسة سيارات متخصص في الكويت.',
    },
    industry: {
      en: 'Automotive Engineering & Maintenance',
      ar: 'صيانة وهندسة السيارات وخدمات الكراجات',
    },
    category: 'automotive',
    location: {
      en: 'Kuwait',
      ar: 'الكويت',
    },
    platform: 'Webflow + Custom CSS',
    deliveryScope: {
      en: 'White-Label Agency Delivery',
      ar: 'تنفيذ لصالح وكالة تسويق (White-Label)',
    },
    platformContextNote: {
      en: 'Delivered on a white-label basis for a Kuwait-based marketing agency to serve a specialist automotive engineering client. Business claims and service information reflect client-provided copy and are not independently verified project outcomes.',
      ar: 'نُفّذ الموقع كعمل غير معلن (White-label) لصالح وكالة تسويق في الكويت لصالح مركز صيانة سيارات متخصص. تعكس معلومات الخدمات في المعاينة محتوى العميل وليست نتائج مستقلة تم التحقق منها للمشروع.',
    },
    role: {
      en: 'Website Development & Service Catalog Architecture',
      ar: 'تطوير الموقع وهيكلة دليل الخدمات',
    },
    languages: {
      en: 'Arabic RTL',
      ar: 'العربية RTL',
    },
    image: '/images/projects/car-cur.png',
    liveUrl: 'https://aliabtikar.goonline.asia/',
    overview: {
      en: 'Delivered through a white-label agency collaboration for an automotive maintenance center in Kuwait, this service-focused website outlines technical diagnostic and mechanical repair capabilities with clear inquiry routes for vehicle owners.',
      ar: 'نُفّذ الموقع ضمن شراكة عمل غير معلن (White-label) مع وكالة تسويق كويتية لصالح مركز صيانة سيارات في الكويت، حيث يقدم دليلاً شاملاً لخدمات الفحص والتشخيص والإصلاح الميكانيكي مع مسارات تواصل سريعة لأصحاب المركبات.',
    },
    challenge: {
      en: 'Automotive repair customers usually visit a website under urgent conditions. The challenge was structuring complex technical repair offerings into easily identifiable service groups with immediate emergency and regular booking options.',
      ar: 'يبحث عملاء صيانة السيارات عن الخدمات غالباً في أوقات حرجة. كان التحدي هو تصنيف الخدمات الفنية المعقدة إلى باقات واضحة يسهل التعرف عليها، مع إبراز وسائل الاتصال السريع والحجز الفوري.',
    },
    approach: {
      en: 'Following the agency’s wireframes and visual designs, I structured modular service sections, applied custom styling for clean mobile cards, and embedded prominent click-to-call and WhatsApp links throughout the layout.',
      ar: 'تنفيذاً لمخططات الوكالة وتصاميمها، قمت بهيكلة أقسام الخدمات في وحدات بصرية منظمة، وتطبيق تنسيقات مخصصة للبطاقات على الهواتف، ودمج روابط الاتصال الهاتفي والواتساب في أماكن بارزة.',
    },
    designDecisions: {
      en: [
        'Categorized repair services by vehicle system to simplify visual scanning.',
        'Engineered sticky call-to-action touchpoints for direct mobile phone and WhatsApp contact.',
        'Applied custom CSS to maintain tight spacing and legible typography on smaller displays.',
        'Implemented Arabic right-to-left layout conventions tailored to the local Kuwait automotive market.',
      ],
      ar: [
        'تصنيف خدمات الصيانة حسب أنظمة المركبة لتسهيل الاستعراض البصري.',
        'تثبيت أزرار الإجراء السريع للاتصال الهاتفي ومحادثة الواتساب على شاشات الهواتف.',
        'استخدام CSS مخصص لضبط الهوامش والوضوح الطباعي على مختلف مقاسات الشاشات.',
        'تطبيق معايير التخطيط العربي RTL بما يلائم مستخدمي خدمات السيارات في الكويت.',
      ],
    },
    keyFeatures: {
      en: [
        'Structured automotive service catalog and diagnostic coverage hubs',
        'Direct click-to-call and WhatsApp inquiry integration',
        'Center location map context and operating hours display',
        'Mobile-optimized responsive architecture for on-the-road visitors',
      ],
      ar: [
        'دليل مبوب لخدمات هندسة وصيانة وفحص السيارات',
        'أزرار اتصال مباشر وتواصل فوري عبر الواتساب',
        'عرض موقع المركز وساعات العمل الرسمية بوضوح',
        'بنية متجاوبة مهيأة للزوار الباحثين عن خدمة أثناء القيادة أو الطوارئ',
      ],
    },
    keyTakeaways: {
      en: [
        'Service-driven websites in technical industries perform best when technical scope is grouped logically before inviting contact.',
        'Prominent phone and messaging links remove friction for urgent local service inquiries.',
      ],
      ar: [
        'تحقق المواقع الخدمية في القطاعات الفنية أفضل أداء عندما تُشرح الخدمات بوضوح قبل دعوة الزائر للتواصل.',
        'إتاحة أزرار الاتصال والمراسلة المباشرة يزيل العقبات ويسرع طلب الخدمة للعملاء ذوي الحاجة الملحة.',
      ],
    },
    techTags: ['Responsive Layout', 'Custom CSS', 'Automotive Services', 'Arabic RTL', 'Lead Generation'],
    metrics: [],
  },
  {
    slug: 'safeer-al-oamara',
    projectType: 'client',
    featured: true,
    order: 4,
    title: {
      en: 'Safeer Al Oamara Traditional Attire',
      ar: 'سفير الأمراء للمستلزمات الرجالية والأزياء التراثية',
    },
    tagline: {
      en: 'Arabic retail showcase and product catalog presentation for a Kuwait traditional menswear brand.',
      ar: 'معرض منتجات ودليل أزياء رجالية تراثية باللغة العربية لمتجر تجزئة كويتي.',
    },
    industry: {
      en: 'Retail, Fashion & Heritage Attire',
      ar: 'الأزياء التراثية والتجزئة والمستلزمات الرجالية',
    },
    category: 'commercial',
    location: {
      en: 'Kuwait',
      ar: 'الكويت',
    },
    platform: 'Webflow',
    deliveryScope: {
      en: 'White-Label Agency Delivery',
      ar: 'تنفيذ لصالح وكالة تسويق (White-Label)',
    },
    platformContextNote: {
      en: 'Delivered on a white-label basis for a Kuwait-based marketing agency to support a retail apparel brand. Product claims, imagery, and branding reflect client-provided material and are not independently verified outcomes.',
      ar: 'نُفّذ الموقع كعمل غير معلن (White-label) لصالح وكالة تسويق كويتية لدعم علامة تجارية للأزياء. تعكس صور المنتجات والمحتوى بيانات العميل وليست نتائج مستقلة تم التحقق منها للمشروع.',
    },
    role: {
      en: 'Website Development & Catalog Structure',
      ar: 'تطوير الموقع وهيكلة عرض المنتجات',
    },
    languages: {
      en: 'Arabic RTL',
      ar: 'العربية RTL',
    },
    image: '/images/projects/safer.png',
    liveUrl: 'https://safiralamara.com/',
    overview: {
      en: 'Developed under a white-label agency partnership for a traditional retail merchant in Kuwait, this digital catalog presents bespoke menswear, fabrics, and heritage accessories with an emphasis on visual craftsmanship and direct product inquiries.',
      ar: 'نُفّذ هذا الكتالوج الرقمي عبر شراكة غير معلنة (White-label) مع وكالة تسويق كويتية لصالح متجر أزياء تراثية في الكويت، حيث يستعرض أرقى الأقمشة والمستلزمات الرجالية بأسلوب بصري أنيق يركز على جودة المعروضات وتسهيل الاستفسار المباشر.',
    },
    challenge: {
      en: 'The store required an elegant digital catalog that honors traditional Kuwaiti garment heritage while allowing customers to browse extensive fabric lines, seasonal collections, and accessories comfortably in an Arabic RTL layout.',
      ar: 'احتاج المتجر إلى كتالوج رقمي راقٍ يعبر عن أصالة الزي الكويتي التراثي، ويتيح للعملاء استعراض تشكيلات الأقمشة والمجموعات الموسمية والمستلزمات بسهولة تامة ضمن واجهة عربية RTL.',
    },
    approach: {
      en: 'I transformed the agency’s approved design system into a structured product showcase with dedicated collection groupings, high-clarity image grids, and direct ordering links connecting buyers with customer care representatives.',
      ar: 'حولت التصاميم المعتمدة من الوكالة إلى معرض منتجات منظم يضم تبويبات مخصصة للمجموعات، وشبكات عرض صور عالية الوضوح، وروابط استفسار مباشرة تربط المشتري بفريق خدمة العملاء.',
    },
    designDecisions: {
      en: [
        'Organized product collections into curated categories for easy seasonal exploration.',
        'Engineered an Arabic right-to-left layout with refined typography matching luxury heritage branding.',
        'Standardized card compositions to maintain balance across varying product image dimensions.',
        'Provided instant WhatsApp inquiry buttons tied to individual product categories.',
      ],
      ar: [
        'تنظيم تشكيلات المنتجات ضمن فئات مختارة تسهل استكشاف المجموعات الموسمية.',
        'بناء واجهة عربية RTL بخطوط متقنة تعكس فخامة العلامة التجارية التراثية.',
        'توحيد أبعاد بطاقات العرض للحفاظ على التوازن البصري رغم اختلاف مقاسات صور المنتجات.',
        'إتاحة أزرار استفسار فورية عبر الواتساب مخصصة لأقسام المنتجات المختلفة.',
      ],
    },
    keyFeatures: {
      en: [
        'Structured retail catalog navigation across fabrics, accessories, and formal wear',
        'High-resolution visual product galleries and collection overviews',
        'Integrated direct WhatsApp contact for personalized sizing and ordering inquiries',
        'Responsive mobile layout designed for effortless smartphone browsing',
      ],
      ar: [
        'دليل تصفح منظم للمنتجات يغطي الأقمشة والمستلزمات والملابس الرسمية',
        'معارض صور عالية الدقة للمنتجات واستعراض تفاصيل التشكيلات',
        'تكامل مباشر مع واتساب للاستفسار عن المقاسات والأسعار والطلب',
        'تصميم متجاوب مريح ومهيأ بالكامل للشاشات الذكية',
      ],
    },
    keyTakeaways: {
      en: [
        'Heritage retail brands require respectful typographic treatment and disciplined image containers to convey premium quality.',
        'Facilitating direct messaging inquiries allows high-touch retail businesses to close orders without heavy e-commerce overhead.',
      ],
      ar: [
        'تحتاج العلامات التجارية التراثية إلى عناية خاصة بالخطوط والتنسيق البصري لإبراز قيمة وفخامة المنتجات.',
        'إتاحة الاستفسار المباشر عبر المحادثة يتيح للمتاجر الراقية تقديم خدمة شخصية وإتمام المبيعات بمرونة عالية.',
      ],
    },
    techTags: ['Responsive Layout', 'Product Catalog UX', 'Arabic RTL', 'Retail Showcase', 'WhatsApp Commerce'],
    metrics: [],
  },
  {
    slug: 'mobile-car-wash-kuwait',
    projectType: 'client',
    featured: true,
    order: 5,
    title: {
      en: 'Mobile Car Wash Kuwait (A2Z Wash)',
      ar: 'خدمة غسيل السيارات المتنقل في الكويت (A2Z Wash)',
    },
    tagline: {
      en: 'Fast-booking service website and package showcase for an on-demand mobile car detailing operator in Kuwait.',
      ar: 'موقع لطلب وباقات غسيل السيارات المتنقل لخدمة عناية منزلية بالسيارات في الكويت.',
    },
    industry: {
      en: 'On-Demand Consumer Services & Detailing',
      ar: 'الخدمات المنزلية المتنقلة والعناية بالسيارات',
    },
    category: 'services',
    location: {
      en: 'Kuwait',
      ar: 'الكويت',
    },
    platform: 'Webflow',
    deliveryScope: {
      en: 'White-Label Agency Delivery',
      ar: 'تنفيذ لصالح وكالة تسويق (White-Label)',
    },
    platformContextNote: {
      en: 'Delivered on a white-label basis for a Kuwait-based marketing agency to serve an on-demand consumer service provider. Package details and operational claims reflect client-provided material and are not independently verified outcomes.',
      ar: 'نُفّذ الموقع كعمل غير معلن (White-label) لصالح وكالة تسويق كويتية لصالح مشروع خدمات متنقلة. تعكس باقات الخدمة في المعاينة محتوى العميل وليست نتائج مستقلة تم التحقق منها للمشروع.',
    },
    role: {
      en: 'Website Development & Service Booking Flow',
      ar: 'تطوير الموقع وهيكلة مسار طلب الخدمة',
    },
    languages: {
      en: 'Arabic RTL',
      ar: 'العربية RTL',
    },
    image: '/images/projects/car-wash.png',
    liveUrl: 'https://a2zwash.goonline.asia/',
    overview: {
      en: 'Created through a white-label agency workflow for a Kuwait mobile detailing service, this conversion-focused website communicates cleaning packages, pricing tiers, and immediate booking availability via WhatsApp.',
      ar: 'نُفّذ هذا الموقع عبر تعاون غير معلن (White-label) مع وكالة تسويق في الكويت لصالح خدمة غسيل سيارات متنقلة، حيث يركز على استعراض باقات التنظيف، ومستويات الأسعار، ومسار الحجز الفوري عبر الواتساب.',
    },
    challenge: {
      en: 'On-demand service customers make split-second decisions on their mobile phones. The landing page needed to present package differences clearly without complex tables, making the path from discovery to booking instantaneous.',
      ar: 'يتخذ عملاء الخدمات المتنقلة قراراتهم خلال ثوانٍ معدودة عبر الهواتف. كان التحدي هو عرض باقات الخدمة وفروق الأسعار بوضوح دون جداول معقدة، وجعل الانتقال من المشاهدة إلى الحجز أمراً فورياً.',
    },
    approach: {
      en: 'Implementing the agency’s approved creative layout, I built scannable package cards with clear feature lists, prominent pricing tags, and high-visibility WhatsApp conversion buttons tailored for Kuwait phone users.',
      ar: 'تنفيذاً للتصميم المعتمد من الوكالة، قمت ببناء بطاقات باقات واضحة المعالم، مع توضيح مميزات كل باقة وسعرها، وإبراز أزرار الحجز السريع عبر الواتساب المجهزة بنصوص مسبقة لتسهيل الطلب.',
    },
    designDecisions: {
      en: [
        'Constructed transparent package comparison cards optimized for rapid vertical mobile scrolling.',
        'Configured pre-formatted WhatsApp links allowing customers to request specific packages with one tap.',
        'Engineered direction-aware Arabic RTL layout spacing and typography.',
        'Ensured minimal visual asset overhead for immediate initial page rendering over mobile networks.',
      ],
      ar: [
        'بناء بطاقات مقارنة واضحة للباقات مهيأة للتمرير الرأسي السريع على الهواتف.',
        'تضمين روابط واتساب مباشرة تمكن العميل من طلب الباقة المرغوبة بنقرة واحدة.',
        'ضبط هوامش وخطوط التخطيط العربي RTL بما يضمن وضوح القراءة السريعة.',
        'تحسين أحجام الملفات البصرية لضمان سرعة تحميل الصفحة عبر شبكات الهاتف المحمول.',
      ],
    },
    keyFeatures: {
      en: [
        'Transparent service package cards with itemized detailing inclusions',
        'Instant WhatsApp booking triggers with pre-populated package references',
        'Mobile-first responsive layout tailored for on-the-go service booking',
        'Arabic RTL structure aligned with Kuwait local consumer habits',
      ],
      ar: [
        'بطاقات باقات واضحة ومفصلة لخدمات الغسيل والعناية بالمركبات',
        'أزرار حجز فوري عبر الواتساب لتسهيل طلب الخدمة وتحديد الموعد',
        'واجهة متجاوبة بالكامل مصممة خصيصاً للتصفح والطلب عبر الهاتف',
        'بنية عربية RTL متوافقة مع عادات وتفضيلات المستهلكين في الكويت',
      ],
    },
    keyTakeaways: {
      en: [
        'For local on-demand services, streamlining packages and connecting them directly to instant messaging drives the fastest user conversion.',
        'Clean, mobile-optimized typography ensures pricing and inclusions are absorbed in seconds.',
      ],
      ar: [
        'في قطاع الخدمات المتنقلة، يؤدي وضوح الباقات والربط المباشر مع تطبيقات المراسلة الفورية إلى سرعة حسم القرار والطلب.',
        'العناية بوضوح الخطوط على الهاتف تضمن استيعاب الأسعار ومحتوى الباقة خلال ثوانٍ معدودة.',
      ],
    },
    techTags: ['Responsive Layout', 'On-Demand Service UX', 'Arabic RTL', 'Mobile Conversion', 'WhatsApp Booking'],
    metrics: [],
  },
  {
    slug: 'boomtwon-travel',
    projectType: 'concept',
    featured: false,
    order: 6,
    title: {
      en: 'BoomTwon Travel Website Concept',
      ar: 'تصور موقع بوم تاون للسفر',
    },
    tagline: {
      en: 'Custom-coded travel website concept with destination cards, promotional sections and inquiry paths.',
      ar: 'تصور موقع سفر مبرمج خصيصاً يضم بطاقات للوجهات وأقساماً للعروض ومسارات للاستفسار.',
    },
    industry: {
      en: 'Travel Website Concept',
      ar: 'تصور موقع للسفر',
    },
    category: 'hospitality',
    location: {
      en: 'Independent Concept',
      ar: 'نموذج مستقل',
    },
    platform: 'Custom Code',
    deliveryScope: {
      en: 'Independent Front-End Concept',
      ar: 'نموذج واجهات تفاعلية مستقل',
    },
    platformContextNote: {
      en: 'Self-initiated custom-code concept exploring destination card structures, promotional grids, and trip inquiry flows. Sample copy and visuals are illustrative placeholders, not client work or measured outcomes.',
      ar: 'تصور ذاتي بكود مخصص يستكشف هياكل بطاقات الوجهات وشبكات العروض ومسارات الاستفسار. النصوص والصور عناصر توضيحية وليست عملاً لعميل أو نتائج مقاسة.',
    },
    role: {
      en: 'Frontend Development & Responsive Layout',
      ar: 'تطوير الواجهات الأمامية والتخطيط المتجاوب',
    },
    languages: {
      en: 'English LTR Interface',
      ar: 'واجهة إنجليزية LTR',
    },
    image: '/images/projects/BoomTwon.png',
    liveUrl: 'https://boo-town.vercel.app/',
    overview: {
      en: 'A self-initiated custom-code website concept presenting travel offers, destination cards, and multiple page layouts built with HTML, CSS, and modern JavaScript.',
      ar: 'تصور ذاتي لموقع سفر مبرمج خصيصاً باستخدام HTML وCSS وجافا سكريبت الحديثة، يعرض عروضاً وبطاقات وجهات وتخطيطات متعددة للصفحات.',
    },
    challenge: {
      en: 'The concept brings promotional content, destination cards and a search-results view into one cohesive travel website structure across diverse viewports.',
      ar: 'يجمع التصور المحتوى الترويجي وبطاقات الوجهات وواجهة لنتائج البحث ضمن بنية موقع واحدة متناسقة عبر مختلف الشاشات.',
    },
    approach: {
      en: 'Built the concept with handwritten front-end code featuring modular sections for travel offers, destination listings, search filters, and trip inquiries.',
      ar: 'نُفذ التصور بكود واجهات أمامية مكتوب يدوياً مع أقسام معيارية لعروض السفر وقوائم الوجهات وفلاتر البحث والاستفسار عن الرحلات.',
    },
    designDecisions: {
      en: [
        'Travel offer hero section designed with bold visual hierarchy.',
        'Destination cards arranged in a responsive, flexible grid.',
        'Dedicated search-results view crafted for easy visual comparison.',
        'Clean responsive layout behavior implemented purely with CSS and JavaScript.',
      ],
      ar: [
        'قسم افتتاحي لعروض السفر مصمم بتسلسل هرمي بصري واضح.',
        'بطاقات للوجهات منظمة ضمن شبكة مرنة متجاوبة.',
        'واجهة مخصصة لنتائج البحث مصممة لتسهيل المقارنة السريعة.',
        'سلوك تخطيط متجاوب وخفيف نُفذ بالكامل باستخدام CSS وجافا سكريبت.',
      ],
    },
    keyFeatures: {
      en: [
        'Travel offer and destination card sections',
        'Structured search-results layout mockup',
        'Trip inquiry pathways and contact triggers',
        'Responsive front-end implementation across breakpoints',
      ],
      ar: [
        'أقسام لعروض السفر وبطاقات استكشاف الوجهات',
        'نموذج تخطيطي لصفحة نتائج البحث وتصفية الخيارات',
        'مسارات للاستفسار عن الرحلات ونقاط اتصال واضحة',
        'تنفيذ متجاوب للواجهات الأمامية عبر كافة نقاط التوقف',
      ],
    },
    keyTakeaways: {
      en: [
        'Destination discovery and search results represent distinct interaction patterns requiring dedicated UI treatments.',
        'Concept layouts serve as practical explorations of front-end layout techniques and interaction ideas.',
      ],
      ar: [
        'يمثل استكشاف الوجهات ونتائج البحث أنماط تفاعل مختلفة تستفيد من معالجة بصرية مستقلة.',
        'تُعد النماذج التجريبية وسيلة عملية لاستكشاف تقنيات التخطيط وأفكار التفاعل المتقدمة.',
      ],
    },
    techTags: ['HTML5 / CSS3 / JS', 'Responsive Layout', 'Travel UI Concept', 'Card Grid Layout', 'Front-End Prototype'],
    metrics: [],
  },
  {
    slug: 'hoobank-financial',
    projectType: 'concept',
    featured: false,
    order: 7,
    title: {
      en: 'HooBank Finance Website Concept',
      ar: 'تصور موقع هوو بانك للخدمات المالية',
    },
    tagline: {
      en: 'Custom-coded finance website concept with payment card and billing interface mockups.',
      ar: 'تصور موقع مالي مبرمج خصيصاً يضم نماذج واجهة لبطاقات الدفع والفوترة.',
    },
    industry: {
      en: 'Finance Website Concept',
      ar: 'تصور موقع للخدمات المالية',
    },
    category: 'fintech',
    location: {
      en: 'Independent Concept',
      ar: 'نموذج مستقل',
    },
    platform: 'Custom Code',
    deliveryScope: {
      en: 'Independent Front-End Concept',
      ar: 'نموذج واجهات تفاعلية مستقل',
    },
    platformContextNote: {
      en: 'Self-initiated custom-code concept exploring modern fintech landing page architecture, billing mockups, and dark-theme UI. Product copy and visuals are illustrative placeholders, not client work or measured results.',
      ar: 'تصور ذاتي بكود مخصص يستكشف بنية صفحات التقنية المالية، ونماذج الفوترة، والواجهات الداكنة الحديثة. النصوص والمرئيات عناصر توضيحية وليست عملاً لعميل أو نتائج مقاسة.',
    },
    role: {
      en: 'Frontend Development & Interface Layout',
      ar: 'تطوير الواجهات الأمامية وتخطيط الواجهة',
    },
    languages: {
      en: 'English LTR Interface',
      ar: 'واجهة إنجليزية LTR',
    },
    image: '/images/projects/HooBank.png',
    liveUrl: 'https://hoo-bank-cyan-rho.vercel.app/',
    overview: {
      en: 'A self-initiated finance interface concept built with custom code, showcasing modern card UI mockups, feature grids, and billing workflows in a dark aesthetic.',
      ar: 'تصور ذاتي لواجهة خدمات مالية نُفذ بكود مخصص، يستعرض نماذج لبطاقات الدفع وشبكات المزايا ومسارات الفوترة بطابع بصري داكن وأنيق.',
    },
    challenge: {
      en: 'Fintech pages require sharp contrast and unambiguous typographic rhythm. The challenge was structuring dense product feature explanations alongside interactive visual mockups without visual clutter.',
      ar: 'تتطلب واجهات التقنية المالية تبايناً بصرياً دقيقاً وتسلسلاً واضحاً للنصوص. تمثل التحدي في تنظيم شرح مزايا المنتج بجوار النماذج البصرية دون ازدحام في الصفحة.',
    },
    approach: {
      en: 'Developed the interface with modular HTML5 and modern CSS, using gradients, glassmorphism accents, and responsive layout containers to present fintech concepts cleanly.',
      ar: 'طوّرت الواجهة بهيكلية HTML5 معيارية وCSS حديث، مستخدماً تدرجات لونية ولمسات زجاجية وحاويات متجاوبة لعرض أفكار التكنولوجيا المالية بوضوح.',
    },
    designDecisions: {
      en: [
        'Dark obsidian color palette accented with electric cyan highlights.',
        'Payment card mockups positioned prominently to anchor product credibility.',
        'Separated feature tiers and billing previews into dedicated sections.',
        'Responsive layout structure implemented with lightweight custom CSS.',
      ],
      ar: [
        'لوحة ألوان داكنة مع لمسات زرقاء ساطعة لإبراز العناصر الرئيسية.',
        'إبراز نماذج بطاقات الدفع في الصدارة لترسيخ الهوية البصرية للخدمة.',
        'فصل مستويات المزايا واستعراض الفوترة في أقسام مستقلة.',
        'بنية تخطيط متجاوبة نُفذت باستخدام CSS مخصص خفيف وسريع.',
      ],
    },
    keyFeatures: {
      en: [
        'Payment card interface visuals and balance indicators',
        'Categorized feature breakdown and security value propositions',
        'Billing workflow overview section with mock data',
        'Responsive layout designed for desktop, tablet, and mobile',
      ],
      ar: [
        'مرئيات لواجهات بطاقات الدفع ومؤشرات الحساب',
        'تفصيل مبوب لمزايا الخدمة وضمانات الأمان',
        'قسم لاستعراض مسار الفوترة مع بيانات توضيحية',
        'تخطيط متجاوب مصمم للحواسيب والأجهزة اللوحية والهواتف',
      ],
    },
    keyTakeaways: {
      en: [
        'High-contrast dark interfaces require disciplined padding and typography to prevent visual fatigue.',
        'Visual card mockups ground abstract fintech concepts in familiar customer touchpoints.',
      ],
      ar: [
        'تحتاج الواجهات الداكنة عالية التباين إلى مسافات وهوامش مدروسة لمنع إجهاد العين أثناء التصفح.',
        'تساعد النماذج البصرية لبطاقات الدفع على تقريب المفاهيم المالية المجردة إلى تجارب مألوفة للمستخدم.',
      ],
    },
    techTags: ['HTML5 / CSS3 / JS', 'Responsive Layout', 'Fintech UI Concept', 'Card Mockups', 'Front-End Prototype'],
    metrics: [],
  },
  {
    slug: 'urbanbuild-construction',
    projectType: 'concept',
    featured: false,
    order: 8,
    title: {
      en: 'UrbanBuild Construction Website Concept',
      ar: 'تصور موقع أوربان بيلد للمقاولات',
    },
    tagline: {
      en: 'Custom-coded construction website concept with service sections, project imagery and an inquiry layout.',
      ar: 'تصور موقع مقاولات مبرمج خصيصاً يضم أقسام الخدمات وصور المشاريع وتخطيطاً للاستفسارات.',
    },
    industry: {
      en: 'Construction Website Concept',
      ar: 'تصور موقع للمقاولات',
    },
    category: 'commercial',
    location: {
      en: 'Independent Concept',
      ar: 'نموذج مستقل',
    },
    platform: 'Custom Code',
    deliveryScope: {
      en: 'Independent Front-End Concept',
      ar: 'نموذج واجهات تفاعلية مستقل',
    },
    platformContextNote: {
      en: 'Self-initiated custom-code concept exploring commercial contractor layout architecture, portfolio galleries, and FAQ accordions. Company names, imagery, and text are illustrative placeholders, not client engagements.',
      ar: 'تصور ذاتي بكود مخصص يستكشف تخطيطات شركات المقاولات التجارية، ومعارض المشاريع، ومربعات الأسئلة الشائعة. الأسماء والنصوص والصور عناصر توضيحية وليست عملاً لعميل.',
    },
    role: {
      en: 'Frontend Development & Responsive Layout',
      ar: 'تطوير الواجهات الأمامية والتخطيط المتجاوب',
    },
    languages: {
      en: 'English LTR Interface',
      ar: 'واجهة إنجليزية LTR',
    },
    image: '/images/projects/building.png',
    liveUrl: 'https://real-estate-livid-eta.vercel.app/',
    overview: {
      en: 'A self-initiated construction and engineering website concept built with custom code, presenting commercial building capabilities, past project gallery layouts, and inquiry forms.',
      ar: 'تصور ذاتي لموقع مقاولات وهندسة إنشائية نُفذ بكود مخصص، يستعرض إمكانات البناء التجاري وتخطيطات لمعرض المشاريع السابقة ونماذج الاستفسار.',
    },
    challenge: {
      en: 'Heavy civil and architectural projects involve large photo assets. The challenge was maintaining quick render times while balancing detailed technical project specs with scannable inquiry points.',
      ar: 'تتضمن مشاريع البناء والمقاولات ملفات صور ضخمة. كان التحدي هو الحفاظ على سرعة تحميل الصفحة مع الموازنة بين التفاصيل الفنية للمشاريع ونقاط الاستفسار السريعة.',
    },
    approach: {
      en: 'Constructed an architectural multi-section page using responsive CSS grid systems, modular project showcases, and a structured consultation form layout.',
      ar: 'بنيت صفحة متعددة الأقسام باستخدام أنظمة شبكات CSS المتجاوبة، ومعارض معيارية للمشاريع، وتخطيط منظم لنموذج طلب الاستشارة.',
    },
    designDecisions: {
      en: [
        'Segmented civil, commercial, and residential building services into distinct cards.',
        'Engineered an image-forward project portfolio layout with zoom states.',
        'Separated technical FAQ accordions from immediate contact touchpoints.',
        'Built full responsive adaptation ensuring mobile accessibility on job sites.',
      ],
      ar: [
        'تقسيم خدمات البناء المدني والتجاري والسكني في بطاقات مستقلة.',
        'تصميم معرض مشاريع يعتمد على الصور مع تأثيرات تفاعلية.',
        'فصل الأسئلة الفنية الشائعة عن نقاط التواصل المباشر.',
        'بناء توافق متجاوب كامل يتيح التصفح المريح عبر الهواتف في مواقع العمل.',
      ],
    },
    keyFeatures: {
      en: [
        'Industrial capability categorization and service hubs',
        'High-impact project portfolio gallery layout',
        'Interactive FAQ accordion section mockup',
        'Structured project intake form layout',
      ],
      ar: [
        'تصنيف القدرات الإنشائية وبوابات متخصصة لكل خدمة',
        'معرض بصري متكامل لاستعراض سوابق المشاريع الهندسية',
        'قسم تفاعلي للأسئلة الشائعة والأجوبة الفنية',
        'هيكل منظم لنموذج استلام تفاصيل المشروع والمقايسات',
      ],
    },
    keyTakeaways: {
      en: [
        'Industrial websites require crisp visual organization to separate past builds from current service offerings.',
        'Generous spacing and bold typography help convey structural solidity in construction web design.',
      ],
      ar: [
        'تحتاج مواقع المقاولات إلى تنظيم بصري محكم يفصل بين سوابق الأعمال والخدمات الحالية.',
        'تساعد الهوامش المدروسة والخطوط القوية على عكس طابع الصلابة والموثوقية في قطاع البناء.',
      ],
    },
    techTags: ['HTML5 / CSS3 / JS', 'Responsive Layout', 'Construction UI Concept', 'Project Gallery', 'Front-End Prototype'],
    metrics: [],
  },
  {
    slug: 'medtro-healthcare',
    projectType: 'concept',
    featured: false,
    order: 9,
    title: {
      en: 'MedTro Healthcare Website Concept',
      ar: 'تصور موقع ميدترو للرعاية الصحية',
    },
    tagline: {
      en: 'Custom-coded healthcare website concept with department sections, provider cards and appointment UI.',
      ar: 'تصور موقع للرعاية الصحية مبرمج خصيصاً ويضم أقساماً وبطاقات لمقدمي الخدمة وواجهة للمواعيد.',
    },
    industry: {
      en: 'Healthcare Website Concept',
      ar: 'تصور موقع للرعاية الصحية',
    },
    category: 'services',
    location: {
      en: 'Independent Concept',
      ar: 'نموذج مستقل',
    },
    platform: 'Custom Code',
    deliveryScope: {
      en: 'Independent Front-End Concept',
      ar: 'نموذج واجهات تفاعلية مستقل',
    },
    platformContextNote: {
      en: 'Self-initiated custom-code concept exploring clinical department layouts, physician directories, and appointment booking UI mockups. Clinic details and doctor profiles are illustrative placeholders, not verified medical credentials.',
      ar: 'تصور ذاتي بكود مخصص يستكشف تخطيطات الأقسام الطبية، ودليل الأطباء، ونماذج حجز المواعيد. بيانات العيادة ومقدمي الرعاية عناصر توضيحية وليست مؤهلات طبية موثقة.',
    },
    role: {
      en: 'Frontend Development & Responsive Layout',
      ar: 'تطوير الواجهات الأمامية والتخطيط المتجاوب',
    },
    languages: {
      en: 'English LTR Interface',
      ar: 'واجهة إنجليزية LTR',
    },
    image: '/images/projects/MedTro.png',
    liveUrl: 'https://clinic-app-theta.vercel.app/',
    overview: {
      en: 'A self-initiated healthcare clinic website concept built with custom code, presenting clinical specialties, physician profile cards, and patient consultation intake mockups.',
      ar: 'تصور ذاتي لموقع عيادة طبية نُفذ بكود مخصص، يعرض التخصصات الطبية، وبطاقات تعريف الأطباء، ونموذجاً توضيحياً لحجز استشارات المرضى.',
    },
    challenge: {
      en: 'Medical interfaces require high clarity, calm aesthetics, and accessible information architecture so patients find care categories quickly regardless of digital proficiency.',
      ar: 'تتطلب المواقع الطبية وضوحاً فائقاً وطابعاً هادئاً وبنية معلومات سهلة الوصول تمكن المرضى من العثور على التخصص المطلوب بسرعة وسلاسة.',
    },
    approach: {
      en: 'Developed clean, semantic HTML with accessible styling, structuring medical departments into logical categories with an integrated appointment request workflow.',
      ar: 'طوّرت كود HTML دلالي ونظيفاً بتنسيقات مريحة، ونظمت الأقسام الطبية في فئات منطقية مع مسار متكامل لطلب المواعيد.',
    },
    designDecisions: {
      en: [
        'Soft teal and slate palette conveying clinical professionalism.',
        'Modular department cards with clear diagnostic descriptions.',
        'Physician credential cards organized in a readable grid.',
        'Simplified appointment form mockup prioritizing patient comfort.',
      ],
      ar: [
        'لوحة ألوان بدرجات هادئة تعكس الطابع الطبي والمهنية العالية.',
        'بطاقات معيارية للأقسام الطبية مع توضيح نطاق الفحوصات.',
        'بطاقات منظمة لملفات الأطباء في شبكة سهلة التصفح.',
        'نموذج مبسط لحجز المواعيد يراعي راحة المريض وتسهيل الإجراءات.',
      ],
    },
    keyFeatures: {
      en: [
        'Medical department directory and specialty hubs',
        'Physician profile card examples with specialty tags',
        'Patient consultation booking form interface mockup',
        'Accessible, multi-device responsive page composition',
      ],
      ar: [
        'دليل الأقسام والعيادات التخصصية',
        'نماذج لبطاقات تعريف الأطباء مع وسوم التخصصات',
        'واجهة توضيحية لنموذج حجز المواعيد والاستشارات',
        'تكوين متجاوب مريح ومناسب لكافة الأجهزة والشاشات',
      ],
    },
    keyTakeaways: {
      en: [
        'Healthcare websites require empathetic UI design where essential contact information is always within reach.',
        'Concept mockups provide a useful canvas to test accessibility and scannability in sensitive service verticals.',
      ],
      ar: [
        'تتطلب المواقع الطبية تصميماً يراعي الجانب الإنساني حيث تكون معلومات التواصل الأساسية في متناول اليد دائماً.',
        'توفر النماذج التجريبية بيئة ممتازة لاختبار سهولة القراءة وإمكانية الوصول في القطاعات الخدمية الحساسة.',
      ],
    },
    techTags: ['HTML5 / CSS3 / JS', 'Responsive Layout', 'Healthcare UI Concept', 'Provider Cards', 'Front-End Prototype'],
    metrics: [],
  },
  {
    slug: 'saas-productivity',
    projectType: 'concept',
    featured: false,
    order: 10,
    title: {
      en: 'SaaS Productivity Website Concept',
      ar: 'تصور موقع لمنصة إنتاجية SaaS',
    },
    tagline: {
      en: 'Custom-coded SaaS marketing page concept with a product visual and responsive layouts.',
      ar: 'تصور صفحة تسويقية لمنصة SaaS مبرمجة خصيصاً، مع مرئية للمنتج وتخطيطات متجاوبة.',
    },
    industry: {
      en: 'SaaS Website Concept',
      ar: 'تصور موقع SaaS',
    },
    category: 'saas',
    location: {
      en: 'Independent Concept',
      ar: 'نموذج مستقل',
    },
    platform: 'Custom Code',
    deliveryScope: {
      en: 'Independent Front-End Concept',
      ar: 'نموذج واجهات تفاعلية مستقل',
    },
    platformContextNote: {
      en: 'Self-initiated custom-code concept exploring modern SaaS product storytelling, feature breakdowns, and CTA conversion layouts. Visuals and copy are illustrative placeholders, not a live software product or measured metrics.',
      ar: 'تصور ذاتي بكود مخصص يستكشف أسلوب عرض منتجات SaaS الحديثة، وتفصيل المزايا، وتخطيطات التحويل. المرئيات والنصوص عناصر توضيحية وليست منتجاً برمجياً فعلياً أو مقاييس معتمدة.',
    },
    role: {
      en: 'Frontend Development & Responsive Layout',
      ar: 'تطوير الواجهات الأمامية والتخطيط المتجاوب',
    },
    languages: {
      en: 'English LTR Interface',
      ar: 'واجهة إنجليزية LTR',
    },
    image: '/images/projects/SaaS.png',
    liveUrl: 'https://saas-landing-page-sigma-mauve.vercel.app/',
    overview: {
      en: 'A self-initiated SaaS landing page concept built with custom code, focusing on digital product messaging, feature grids, and conversion-focused call-to-actions.',
      ar: 'تصور ذاتي لصفحة هبوط لمنصة SaaS نُفذ بكود مخصص، يركز على صياغة رسائل المنتجات الرقمية، وشبكات المزايا، وتخطيطات التحويل الفعالة.',
    },
    challenge: {
      en: 'Digital product marketing pages must balance an engaging visual hero with clear feature demonstrations, maintaining responsive elegance without sacrificing loading velocity.',
      ar: 'يجب أن توازن صفحات تسويق المنتجات الرقمية بين واجهة افتتاحية جذابة وشرح عملي للمزايا، مع الحفاظ على مرونة التجاوب وسرعة التحميل العالية.',
    },
    approach: {
      en: 'Engineered a lightweight, high-performance landing page in custom code featuring an eye-catching product preview, modular capability blocks, and clean typography.',
      ar: 'طوّرت صفحة هبوط خفيفة وعالية الأداء بكود مخصص تضم استعراضاً جذاباً للمنتج، وبلوكات معيارية للقدرات البرمجية، وخطوطاً واضحة ومريحة.',
    },
    designDecisions: {
      en: [
        'Anchored the hero with a prominent dashboard product mockup.',
        'Arranged software capabilities into scannable three-column benefit cards.',
        'Engineered responsive fluid typography scaling smoothly across device widths.',
        'Included high-contrast action triggers to guide user onboarding.',
      ],
      ar: [
        'تثبيت نموذج واجهة لوحة التحكم في الصدارة لترسيخ فكرة المنتج.',
        'ترتيب إمكانات البرنامج في بطاقات ثلاثية الأعمدة سهلة الاستيعاب.',
        'برمجة خطوط متجاوبة ومرنة تتدرج بنعومة عبر مختلف مقاسات الشاشات.',
        'تضمين أزرار إجراء عالية التباين لتوجيه الزائر نحو بدء التجربة.',
      ],
    },
    keyFeatures: {
      en: [
        'Product-centered hero section with dashboard visualization mockup',
        'Itemized software benefits and workflow integration cards',
        'High-contrast call-to-action layout sections',
        'Responsive mobile adaptation with fluid container behavior',
      ],
      ar: [
        'واجهة افتتاحية تركز على المنتج مع نموذج توضيحي للوحة التحكم',
        'بطاقات مفصلة لمزايا البرنامج وتكامل سير العمل',
        'أقسام دعوة لاتخاذ إجراء عالية التباين والوضوح',
        'مواءمة متجاوبة للهواتف مع سلوك مرن للحاويات',
      ],
    },
    keyTakeaways: {
      en: [
        'Focused product storytelling requires separating high-level value propositions from granular feature details.',
        'Handwritten front-end code allows exact layout execution with zero third-party script overhead.',
      ],
      ar: [
        'يتطلب العرض الفعال للمنتجات الرقمية فصل القيمة العامة عن التفاصيل الفنية الدقيقة.',
        'يتيح كود الواجهات المكتوب يدوياً تحقيق التخطيط الدقيق دون أعباء مكتبات برمجية زائدة.',
      ],
    },
    techTags: ['HTML5 / CSS3 / JS', 'Responsive Layout', 'SaaS Landing Page', 'Product Mockup UX', 'Front-End Prototype'],
    metrics: [],
  },
];

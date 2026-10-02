import { Project } from '@/lib/types';

export const PROJECTS: Project[] = [
  {
    slug: 'al-awad-solutions',
    featured: true,
    order: 1,
    title: {
      en: 'Al Awad Residential & Commercial Solutions',
      ar: 'العواد للحلول السكنية والتجارية المتكاملة',
    },
    tagline: {
      en: 'Integrated contracting, industrial services, and facilities architecture in Kuwait.',
      ar: 'منظومة رقمية متكاملة لخدمات المقاولات والصيانة والحلول السكنية والتجارية في الكويت.',
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
    platform: 'Webflow',
    platformContextNote: {
      en: 'Delivered in a high-volume agency fulfillment workflow with custom CSS responsive architecture.',
      ar: 'تم تنفيذه ضمن منظومة أعمال وكالة تسويق مع هيكلية CSS مخصصة وتصميم متجاوب فائق الدقة.',
    },
    role: {
      en: 'Webflow Architecture, UI/UX & Custom Code',
      ar: 'هندسة الويب وتصميم واجهات المستخدم والأكواد المخصصة',
    },
    languages: {
      en: 'Bilingual (Arabic RTL & English LTR)',
      ar: 'ثنائي اللغة (عربي RTL وإنجليزي LTR)',
    },
    image: '/images/projects/alawad.png',
    liveUrl: 'https://sites.leadconnectorhq.com/preview/IQq15taDxEKKz613KiRd',
    overview: {
      en: 'Al Awad is a multi-sector Kuwaiti enterprise delivering large-scale residential, commercial, and industrial infrastructure services. The client required a digital presence that organized disparate industrial capabilities into an authoritative, easily digestible commercial architecture.',
      ar: 'تعد شركة العوض من الكيانات الكويتية الرائدة في تقديم الحلول الإنشائية والخدمات المتكاملة للقطاعات السكنية والتجارية والصناعية. تطلب المشروع واجهة مؤسسية تنظم مجالات العمل المتشعبة ضمن هيكل بصري واضح يعزز ثقة الشركات وملاك العقارات.',
    },
    challenge: {
      en: 'The company operated across three distinct operational branches—heavy industrial maintenance, luxury residential finishing, and commercial facilities management. Presenting these without overwhelming prospective clients or diluting the luxury contracting arm required a clean, hierarchical information taxonomy and flawless bilingual symmetry.',
      ar: 'تتوزع أعمال الشركة بين ثلاثة قطاعات مختلفة: الصيانة والتشغيل الصناعي، التشطيبات السكنية الراقية، وإدارة المرافق التجارية. كان التحدي يكمن في استعراض هذه التخصصات دون إرباك الزائر أو تقليل الطابع الراقي للمقاولات السكنية، مع الحفاظ على التوازن التام بين اللغتين العربية والإنجليزية.',
    },
    approach: {
      en: 'Engineered an architectural multi-tier layout with structured service categorizations, dedicated capability dossiers, and high-contrast dark visual foundations. Custom CSS overrides ensured clean typographic rhythm in both Arabic and English, paired with direct quotation triggers designed for corporate procurement managers.',
      ar: 'بناء هيكل شبكي مدروس يقسم الخدمات إلى محاور رئيسية واضحة، مع بطاقات مواصفات مفصلة وخلفيات داكنة فخمة تعكس طابع الرصانة والصلابة. تم توظيف تنسيقات CSS مخصصة لضبط مقروئية الخط العربي والإنجليزي، مع أزرار تواصل مباشرة مهيأة لمديري المشتريات والمشاريع.',
    },
    designDecisions: {
      en: [
        'Architectural structural grid with fine micro-borders inspired by structural engineering blueprints.',
        'High-legibility bilingual typography utilizing IBM Plex Sans Arabic alongside crisp geometric English sans.',
        'Service filter tabs designed to immediately segment residential homeowners from commercial facility buyers.',
        'Optimized responsive layouts engineered to ensure rapid loading even on jobsite mobile connections.',
      ],
      ar: [
        'شبكة تصميم هندسية مستوحاة من المخططات المعمارية بخطوط فاصلة دقيقة وأنيقة.',
        'هرمية خطية مريحة تعتمد خط IBM Plex Sans العربي بجانب خط لاتيني هندسي حديث.',
        'تبويبات تفاعلية تتيح لعملاء المنازل والشركات الوصول الفوري للقطاع المناسب دون تشتت.',
        'تطوير الواجهة بنظام خفيف وسريع يعمل بسلاسة تامة على هواتف المهندسين في المواقع الإنشائية.',
      ],
    },
    keyFeatures: {
      en: [
        'Dedicated residential, commercial, and industrial capability hubs',
        'Direct RFQ quotation routing with WhatsApp enterprise integration',
        'Balanced RTL/LTR layout mirroring with zero alignment shifts',
        'Interactive project showcase highlighting previous infrastructure work',
      ],
      ar: [
        'بوابات مخصصة لكل قطاع: السكني، التجاري، والصناعي',
        'مسارات طلب عروض أسعار مباشرة مع ربط فوري بالواتساب',
        'محاذاة كاملة ومتناغمة بين اللغتين العربية والإنجليزية',
        'معرض تفاعلي للأعمال والمشاريع المنجزة يعزز المصداقية',
      ],
    },
    keyTakeaways: {
      en: [
        'Organizing dense enterprise service offerings requires disciplined visual hierarchy rather than decorative filler.',
        'True bilingual parity in the Gulf means redesigning whitespace rather than just translating strings.',
      ],
      ar: [
        'تقديم خدمات الشركات الكثيفة يتطلب انضباطاً صارماً في الهرمية البصرية بدلاً من الحشو الزخرفي.',
        'التوافق الثنائي الحقيقي في السوق الخليجي يبدأ من توزيع المساحات وتصميم الاتجاه وليس مجرد ترجمة النصوص.',
      ],
    },
    techTags: ['Webflow', 'Custom CSS', 'Bilingual RTL/LTR', 'Information Architecture', 'GCC Enterprise'],
    metrics: [
      { label: { en: 'Bilingual Symmetry', ar: 'التطابق اللغوي' }, value: '100% RTL/LTR' },
      { label: { en: 'Service Verticals', ar: 'القطاعات المنظمة' }, value: '3 Major Hubs' },
      { label: { en: 'Mobile Breakpoints', ar: 'نقاط التجاوب' }, value: '4 Responsive Tiers' },
    ],
  },
  {
    slug: 'al-nser-grills',
    featured: true,
    order: 2,
    title: {
      en: 'Al Nser Al Fadhi Grills & Traditional Cuisine',
      ar: 'مطعم النسر الفضي للمشويات والمأكولات الكويتية',
    },
    tagline: {
      en: 'Traditional Kuwaiti culinary dining, signature grills, and authentic feasts.',
      ar: 'أصالة المطبخ الكويتي التقليدي، أطباق العيوش والمشويات الطازجة والولائم العريقة.',
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
    platformContextNote: {
      en: 'Production website fulfilled for a Kuwait hospitality brand with custom mobile menu UX.',
      ar: 'موقع معتمد لعلامة ضيافة كويتية مع قائمة طعام رقمية تفاعلية وسريعة للهواتف الذكية.',
    },
    role: {
      en: 'Webflow Design, Mobile Menu UX & Custom Interactions',
      ar: 'تصميم تجربة المستخدم وقائمة الطعام التفاعلية وتطوير الويب',
    },
    languages: {
      en: 'Arabic (RTL Native)',
      ar: 'اللغة العربية (واجهة أصيلة RTL)',
    },
    image: '/images/projects/resturant.png',
    liveUrl: 'https://silver-eagle.goonline.asia/',
    overview: {
      en: 'Al Nser Al Fadhi is an established Kuwaiti dining establishment celebrated for heritage dishes including authentic Ayoosh, Paja, Kareaeen, and signature charcoal-grilled meats. The objective was to replace cumbersome printed menus and PDF downloads with an appetizing, high-speed mobile digital menu.',
      ar: 'يعد مطعم النسر الفضي علامة كويتية عريقة تشتهر بتقديم الأطباق التراثية الأصيلة مثل العيوش، والباجة، والكوارع، والمشويات الطازجة على الفحم. هدف المشروع إلى استبدال ملفات الـ PDF الثقيلة بقائمة طعام رقمية تفاعلية جذابة وسريعة التصفح على الهواتف.',
    },
    challenge: {
      en: 'Restaurant guests browsing on 4G cellular networks frequently bounce when forced to download 15MB PDF menus. The website required instantaneous loading, clear allergen and meat cut classifications, and an inviting warm ambiance that honors Kuwaiti culinary tradition without feeling archaic.',
      ar: 'يعاني رواد المطاعم عند محاولة تنزيل ملفات المنيو الكبيرة عبر شبكات الهاتف. كان المطلوب توفير تجربة تصفح فورية لا تتجاوز ثانية واحدة، مع تصنيف دقيق للوجبات والولائم العائلية، وإبراز كرم الضيافة الكويتي بهوية بصرية راقية وعصرية.',
    },
    approach: {
      en: 'Crafted a rich, appetizing visual identity with dark charcoal backgrounds, warm copper/amber illumination, and instant sticky category navigation (Grills, Traditional Dishes, Platters). WhatsApp order triggers allow customers to order directly with pre-formatted dish selections.',
      ar: 'تصميم هوية غنية بألوان الفحم الدافئ وتطعيمات النحاس والعنبر، مع شريط تنقل سفلي سريع بين أقسام المنيو (المشويات، الأطباق الشعبية، الولائم). تم ربط أزرار الطلب بالواتساب مباشرة مع رسائل تلقائية تحدد الوجبة والفرع المطلوب.',
    },
    designDecisions: {
      en: [
        'Zero-PDF interactive HTML menu architecture ensuring instantaneous first-paint on mobile devices.',
        'High-contrast food typography with warm amber badges highlighting house signature cuts.',
        'Sticky bottom order bar with direct one-tap branch dialing and WhatsApp takeout ordering.',
        'Touch-optimized item cards featuring generous touch targets for quick mobile scrolling.',
      ],
      ar: [
        'بناء قائمة طعام HTML تفاعلية خالية تماماً من ملفات الـ PDF لضمان الفتح الفوري في أقل من ثانية.',
        'تنسيق خطي مريح بخلفيات داكنة وإشارات ذهبية تميز الأطباق الخاصة والولائم الأكثر طلباً.',
        'شريط سفلي ثابت يتيح الاتصال المباشر بفرع المطعم أو فتح محادثة الواتساب بنقرة واحدة.',
        'بطاقات وجبات مدروسة بمساحات لمس واسعة تناسب التصفح السريع بيد واحدة أثناء التنقل.',
      ],
    },
    keyFeatures: {
      en: [
        'Lightning-fast category filtering across 40+ traditional and grill items',
        'Direct WhatsApp ordering with pre-populated order messaging',
        'Interactive branch locator with Kuwait location maps and operating hours',
        'Rich imagery presentation emphasizing food texture and freshness',
      ],
      ar: [
        'فلترة سريعة ولحظية بين أكثر من 40 طبقاً ومشوياً أصيلاً',
        'طلب فوري عبر الواتساب مع كتابة تلقائية لاسم الصنف والكمية',
        'دليل فروع تفاعلي يوضح خرائط المواقع وساعات العمل في الكويت',
        'عرض بصري شهي يبرز جودة ونظافة وتفاصيل الأطباق المقدمة',
      ],
    },
    keyTakeaways: {
      en: [
        'For hospitality and dining in the Gulf, mobile speed and direct WhatsApp checkout trump all other features.',
        'A dark luxury color palette can successfully bridge tradition and modern digital hospitality.',
      ],
      ar: [
        'في قطاع المطاعم الخليجي، سرعة التصفح بالموبايل والطلب المباشر عبر الواتساب هما العامل الحاسم في النجاح.',
        'الهوية البصرية الداكنة الراقية قادرة على دمج عراقة التراث مع متطلبات العصر الحديث بجدارة.',
      ],
    },
    techTags: ['Webflow', 'Mobile Menu UX', 'WhatsApp Commerce', 'Arabic RTL', 'Hospitality'],
    metrics: [
      { label: { en: 'Menu Load Time', ar: 'سرعة فتح المنيو' }, value: '< 1.1s Instant' },
      { label: { en: 'Mobile Optimization', ar: 'ملاءمة الهواتف' }, value: '100% Native' },
      { label: { en: 'PDF Dependency', ar: 'الاعتماد على PDF' }, value: '0% Eliminated' },
    ],
  },
  {
    slug: 'al-ibtikar-auto',
    featured: true,
    order: 3,
    title: {
      en: 'Al Ibtikar Auto Maintenance Center',
      ar: 'مركز الابتكار المتخصص لصيانة السيارات',
    },
    tagline: {
      en: 'High-precision mechanical repair, electrical diagnostics, and preventative auto care in Kuwait.',
      ar: 'مركز متكامل للصيانة الميكانيكية، البرمجة وفحص الكمبيوتر، والعناية الدورية بالسيارات في الكويت.',
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
    platform: 'Webflow',
    platformContextNote: {
      en: 'Engineered as a high-trust digital service hub for a Kuwait workshop, backed by custom CSS.',
      ar: 'تم تطويره كمركز رقمي يعزز الموثوقية لكراج صيانة كويتي مع كود CSS مخصص وتجاوب متقدم.',
    },
    role: {
      en: 'Webflow Design, Conversion Architecture & RTL Engineering',
      ar: 'تصميم الويب، هندسة واجهات المستخدم العربية وتوجيه مسارات التحويل',
    },
    languages: {
      en: 'Arabic (RTL Native)',
      ar: 'اللغة العربية (واجهة أصيلة RTL)',
    },
    image: '/images/projects/car-cur.png',
    liveUrl: 'https://aliabtikar.goonline.asia/',
    overview: {
      en: 'Al Ibtikar is an automotive service facility in Kuwait providing comprehensive computerized diagnostics, mechanical rebuilds, electrical systems repair, and periodic servicing. The website was created to build immediate credibility with drivers facing vehicle breakdowns and looking for dependable, transparent service.',
      ar: 'مركز الابتكار من مراكز الصيانة المتقدمة في الكويت، ويقدم خدمات فحص الكمبيوتر، وتوضيب المحركات والجير، وإصلاح الأنظمة الكهربائية المعقدة. هدف الموقع إلى بناء ثقة فورية مع قائدي المركبات الذين يبحثون عن مركز صيانة أمين وموثوق.',
    },
    challenge: {
      en: 'The independent auto garage market in the Gulf is crowded with untrusted options. Most customers contact a mechanic under stress or urgent breakdown conditions. The site needed to communicate technical proficiency, diagnostic precision, and immediate booking accessibility within three seconds of landing.',
      ar: 'يمتلئ سوق صيانة السيارات بالخيارات المتفاوتة في الجودة والشفافية، وغالباً ما يدخل العميل الموقع تحت ضغط تعطل سيارته في الطريق. كان الهدف إبراز المعدات الفنية الحديثة والضمان، مع توفير وصول فوري لخدمة السحب والاستقبال خلال 3 ثوانٍ فقط.',
    },
    approach: {
      en: 'Constructed an authoritative, technical visual language using precision cyan accents against a deep metallic slate background. Highlighted diagnostic gear, warranty commitments, and a breakdown of maintenance packages. Integrated immediate emergency call and WhatsApp location-sharing buttons.',
      ar: 'بناء واجهة تقنية رصينة تعتمد اللون الأزرق الفولاذي والرمادي المعدني لتعكس الدقة الهندسية. تم إبراز أجهزة الفحص المعتمدة، وبنود الضمان، مع أزرار بارزة لطلب ونش المساعدة وإرسال اللوكيشن عبر واتساب مباشرة.',
    },
    designDecisions: {
      en: [
        'Urgent emergency contact triggers anchored prominently above the fold for stranded drivers.',
        'Categorized service breakdown: Diagnostics, Powertrain, Electrical, AC Systems, and Routine Care.',
        'High-trust transparency badges highlighting computer diagnostic reports and genuine spare parts.',
        'Optimized one-thumb mobile navigation ensuring easy one-handed operation on roadside emergencies.',
      ],
      ar: [
        'تثبيت أزرار الطوارئ وطلب الونش في أعلى الشاشة لتسهيل وصول السائقين في حالات الأعطال المفاجئة.',
        'تقسيم فني واضح للخدمات: فحص الكمبيوتر، المحركات ونواقل الحركة، الكهرباء والتكييف، والصيانة السريعة.',
        'شارات ثقة تبرز تقديم تقارير فحص دقيقة، واستخدام قطع الغيار الأصلية مع الضمان الفعلي.',
        'تصميم أزرار كبيرة ومريحة للاستخدام بيد واحدة على شاشات الهواتف دون أخطاء نقر.',
      ],
    },
    keyFeatures: {
      en: [
        'Direct emergency roadside assistance and WhatsApp geolocation button',
        'Structured breakdown of vehicle systems serviced with diagnostic guarantees',
        'Workshop photo gallery demonstrating clean bays and professional diagnostic rigs',
        'Clear Kuwait workshop address, Google Maps integration, and operating schedule',
      ],
      ar: [
        'زر اتصال طارئ مباشر وزر إرسال موقع السيارة (GPS) عبر الواتساب فوراً',
        'شرح مفصل لكافة أنظمة السيارات التي يغطيها المركز مع شرح خطوات الفحص',
        'معرض صور حقيقي لمعدات الورشة النظيفة وأجهزة الفحص الحديثة لتعزيز الثقة',
        'خريطة موقع دقيقة في الكويت مع ساعات العمل وأرقام مسؤولي الاستقبال',
      ],
    },
    keyTakeaways: {
      en: [
        'In automotive services, visitors are task-driven and stressed; remove decorative friction and place contact buttons front and center.',
        'A polished technical design elevates an independent workshop into an enterprise-grade service center.',
      ],
      ar: [
        'في خدمات السيارات، يكون الزائر مستعجلاً ويبحث عن حل لمشكلة عاجلة؛ يجب إلغاء التعقيد ووضع أزرار الاتصال في الواجهة.',
        'التصميم الرقمي الاحترافي قادر على تحويل ورشة عادية في ذهن العميل إلى مركز صيانة معتمد وفائق الموثوقية.',
      ],
    },
    techTags: ['Webflow', 'Automotive UI', 'Emergency CTA', 'Arabic RTL', 'Conversion Design'],
    metrics: [
      { label: { en: 'Click-to-Call Access', ar: 'الوصول للاتصال' }, value: '1 Tap Sticky' },
      { label: { en: 'Diagnostic Coverage', ar: 'شمولية الخدمات' }, value: 'Full Systems' },
      { label: { en: 'RTL Architecture', ar: 'هندسة الواجهة' }, value: 'Native Arabic' },
    ],
  },
  {
    slug: 'safeer-al-oamara',
    featured: true,
    order: 4,
    title: {
      en: 'Safeer Al Oamara Traditional Attire',
      ar: 'سفير الأمراء للمستلزمات الرجالية والأزياء التراثية',
    },
    tagline: {
      en: 'Curated traditional Kuwaiti menswear, luxury ghutras, bespoke shemaghs, and handcrafted agals.',
      ar: 'أناقة الرجل الخليجي، أفخر أنواع الغتر والأشمغة، العقال اليدوي، والمستلزمات التراثية الأصلية.',
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
    platformContextNote: {
      en: 'Luxury heritage brand experience delivered for a Kuwait menswear retailer.',
      ar: 'تصميم تجربة علامة تجارية فخمة لمتجر أزياء رجالية كويتي عريق.',
    },
    role: {
      en: 'Webflow Storefront Architecture & Brand Digitalization',
      ar: 'تصميم وتطوير الواجهة الرقمية للمتجر وهيكلة المنتجات التراثية',
    },
    languages: {
      en: 'Arabic (RTL Native)',
      ar: 'اللغة العربية (واجهة أصيلة RTL)',
    },
    image: '/images/projects/safer.png',
    liveUrl: 'https://safiralamara.com/',
    overview: {
      en: 'Safeer Al Oamara is a Kuwait-based retailer dedicated to classic Gulf men’s headwear, premium fabrics, handcrafted agals, and traditional lifestyle essentials. The goal was to establish a prestigious digital presence that communicates fabric quality, weaves, and heritage craftsmanship.',
      ar: 'متجر سفير الأمراء من الأسماء المعروفة في الكويت في مجال بيع الغتر السويسرية واليابانية، والأشمغة الفاخرة، والعقال الملكي المصنوع يدوياً، والمستلزمات الرجالية الراقية. هدف المشروع إلى إطلاق واجهة رقمية تعكس فخامة الخامات وجودة الحياكة وتاريخ الحرفة.',
    },
    challenge: {
      en: 'Traditional textile buyers in Kuwait place paramount value on hand-feel, fabric thread counts, and precision edging. Conveying the tactile luxury of silk and cotton blends digitally required ultra-refined typography, generous macro imagery layouts, and an intuitive product taxonomy.',
      ar: 'يهتم عملاء الأزياء التراثية في الخليج بأدق التفاصيل مثل ملمس القماش، وخيوط الحياكة، واستقامة العقال. كان نقل هذا الشعور بالفخامة رقمياً يتطلب هرمية خطية عالية الأناقة، وعرضاً بصرياً فائق النقاء، وتنظيماً سلساً للمجموعات الموسمية.',
    },
    approach: {
      en: 'Engineered an editorial aesthetic combining warm charcoal, deep parchment accents, and refined serif-style Arabic headlines. Structured collections by season (Winter / Summer fabrics) and item type, with instant WhatsApp personal shopper inquiries.',
      ar: 'صياغة هوية تحريرية كلاسيكية تجمع بين الأسود الداكن واللمسات الذهبية الدافئة مع عناوين عربية رصينة. تم تقسيم المنتجات حسب الفصول (أقمشة صيفية وشتوية) مع ربط كل قطعة بخدمة المساعد الشخصي عبر الواتساب للاستفسار والحجز.',
    },
    designDecisions: {
      en: [
        'Editorial catalog layout emphasizing product craft, thread precision, and fabric origins.',
        'Seasonal collection segmentation: Swiss voile ghutras, winter wool shemaghs, and custom agals.',
        'Refined luxury color scheme (deep obsidian, brushed gold, crisp off-white typography).',
        'Direct WhatsApp personal shopper routing pre-configured with the selected product title.',
      ],
      ar: [
        'تخطيط كتالوج تحريري فاخر يبرز دقة حياكة الأقمشة ومصادر الغزل السويسرية واليابانية.',
        'تقسيم سلس للمجموعات: غتر الفوال، الأشمغة الشتوية الصوفية، والعقال الملكي المبروم.',
        'لوحة ألوان ملكية هادئة تعتمد الأسود الفاحم والذهبي المطفي مع نصوص ناصعة المقروئية.',
        'ربط كل قطعة بطلب محادثة مباشر مع مسؤول المبيعات عبر الواتساب متضمناً كود الصنف تلقائياً.',
      ],
    },
    keyFeatures: {
      en: [
        'Comprehensive product category navigation across ghutras, shemaghs, agals, and accessories',
        'Bespoke product cards featuring material specifications and fabric weight guides',
        'Single-click WhatsApp consultation for sizing advice and boutique reservations',
        'Mobile-first responsive presentation optimized for Kuwait luxury shoppers',
      ],
      ar: [
        'دليل شامل لجميع الفئات: الغتر، الأشمغة، العقال، المسابيح، والمستلزمات الرجالية',
        'بطاقات منتجات تبرز بلد المنشأ (سويسري، ياباني، بريطاني) ونوع الخيوط',
        'إمكانية الاستفسار عن المقاسات الدقيقة والطلب الخاص عبر الواتساب بنقرة واحدة',
        'واجهة متجاوبة 100% صممت بعناية لتناسب ذوق المتسوقين في الكويت والخليج',
      ],
    },
    keyTakeaways: {
      en: [
        'Luxury retail in the GCC thrives on personal consultative conversation; integrating WhatsApp seamlessly into the product cards drove immediate trust.',
        'A restrained, dignified visual presentation honors heritage far more effectively than loud promotional banners.',
      ],
      ar: [
        'التجزئة الفاخرة في الخليج تقوم على خدمة العميل الشخصية؛ دمج الواتساب بسلاسة في تفاصيل المنتج عزز الثقة فوراً.',
        'البساطة والوقار في التصميم يمنحان التراث قيمته الحقيقية بعيداً عن إعلانات الخصومات الصاخبة.',
      ],
    },
    techTags: ['Webflow', 'Luxury Retail', 'Heritage Brand', 'Arabic RTL', 'E-Commerce UX'],
    metrics: [
      { label: { en: 'Product Categorization', ar: 'تنظيم الفئات' }, value: 'Multi-Tiered' },
      { label: { en: 'Concierge Inquiry', ar: 'طلب المساعد' }, value: 'Instant WhatsApp' },
      { label: { en: 'Visual Restraint', ar: 'الهوية البصرية' }, value: 'Luxury Dark' },
    ],
  },
  {
    slug: 'mobile-car-wash-kuwait',
    featured: true,
    order: 5,
    title: {
      en: 'Mobile Car Wash Kuwait (A2Z Wash)',
      ar: 'خدمة غسيل السيارات المتنقل في الكويت (A2Z Wash)',
    },
    tagline: {
      en: 'On-demand doorstep vehicle detailing, eco-wash, and interior sanitization across Kuwait governorates.',
      ar: 'خدمة متنقلة تصلك إلى باب المنزل أو العمل لغسيل وتعقيم وتلميع السيارات في جميع محافظات الكويت.',
    },
    industry: {
      en: 'On-Demand Consumer Services & Detailing',
      ar: 'الخدمات المنزلية المتنقلة والعناية بالسيارات',
    },
    category: 'services',
    location: {
      en: 'Kuwait (All Governorates)',
      ar: 'الكويت (جميع المحافظات)',
    },
    platform: 'Webflow',
    platformContextNote: {
      en: 'High-conversion on-demand booking funnel built for a fast-scaling Kuwait service business.',
      ar: 'مسار حجز سريع ومصمم خصيصاً لخدمة متنقلة سريعة النمو في الكويت.',
    },
    role: {
      en: 'Webflow Design, Funnel Architecture & Mobile Optimization',
      ar: 'تصميم الويب، هندسة مسارات الحجز السريع وتطوير تجربة الموبايل',
    },
    languages: {
      en: 'Arabic (RTL Native)',
      ar: 'اللغة العربية (واجهة أصيلة RTL)',
    },
    image: '/images/projects/car-wash.png',
    liveUrl: 'https://a2zwash.goonline.asia/',
    overview: {
      en: 'A2Z Mobile Car Wash provides equipped detailing vans that service customer vehicles directly outside homes, offices, or chalets across Kuwait. The platform was built to convert drive-by social media traffic into confirmed bookings with minimal user input.',
      ar: 'تقدم شركة A2Z سيارات مجهزة بالكامل لغسيل وتلميع وتعقيم المركبات أمام منازل أو مكاتب أو شاليهات العملاء في مختلف محافظات الكويت. صُمم الموقع لتحويل زيارات مواقع التواصل الاجتماعي إلى حجوزات فورية بأقل عدد من الخطوات.',
    },
    challenge: {
      en: 'Consumers booking a car wash from their smartphone expect zero friction: no lengthy multi-step forms, no mandatory account creation, and instant answers on pricing and availability. Every additional form field reduced conversion rates dramatically on mobile ads.',
      ar: 'يتوقع العميل الذي يطلب غسيل سيارته من الهاتف تجربة سهلة وسريعة للغاية: بدون ملء استمارات طويلة، وبدون تسجيل حساب، مع معرفة واضحة بالأسعار ومناطق الخدمة. كل حقل إضافي في النموذج كان يؤدي إلى مغادرة الزائر فوراً.',
    },
    approach: {
      en: 'Engineered a hyper-streamlined single-page funnel: immediate vehicle size selector (Sedan vs SUV), package transparency (Express, Deep Clean, Polishing), and a single-click WhatsApp dispatcher trigger that packages vehicle type and location automatically.',
      ar: 'بناء صفحة هبوط مركزة بالكامل: تحديد فوري لحجم السيارة (صالون / جيب رباعي)، باقات واضحة ومحددة الأسعار، مع زر حجز ذكي عبر الواتساب يرسل تلقائياً نوع السيارة والباقة المطلوبة لخدمة العملاء للتأكيد.',
    },
    designDecisions: {
      en: [
        'Single-goal conversion design removing all unnecessary auxiliary navigation links.',
        'High-contrast package cards allowing drivers to compare services in five seconds.',
        'Prominent coverage badge highlighting all 6 Kuwait governorates served.',
        'Sticky WhatsApp bottom sheet ensuring the booking trigger is always accessible during scrolling.',
      ],
      ar: [
        'تصميم مسار تحويل محدد الهدف خالي من أي روابط أو قوائم فرعية تشتت انتباه العميل.',
        'بطاقات أسعار واضحة ومقارنة سريعة تمكن الزائر من اختيار الباقة المناسبة في 5 ثوانٍ.',
        'إبراز شارات تغطية جميع محافظات الكويت الست (العاصمة، حولي، الفروانية، الأحمدي، مبارك الكبير، الجهراء).',
        'شريط حجز ثابت في أسفل الشاشة يرافق الزائر طوال التصفح للوصول السريع للطلب.',
      ],
    },
    keyFeatures: {
      en: [
        'Instant package comparison matrix (Exterior Steam, Interior Sanitization, Full Polish)',
        'Pre-formatted WhatsApp booking messages including governorate and car category',
        'Customer satisfaction and equipment safety badges explaining waterless tech',
        'Sub-1.2s mobile load time tailored for ad campaign click-throughs',
      ],
      ar: [
        'مصفوفة باقات واضحة (غسيل بخار خارجي، تعقيم داخلي شامل، تلميع ساطع)',
        'رسائل حجز واتساب مجهزة مسبقاً تشمل اسم المحافظة ونوع المركبة',
        'شرح مبسط لمميزات مواد التنظيف الإيطالية والألمانية الآمنة على الطلاء',
        'سرعة فتح فائقة للصفحة تقل عن 1.2 ثانية لتفادي ضياع زيارات الإعلانات',
      ],
    },
    keyTakeaways: {
      en: [
        'On-demand local services in the Gulf must treat WhatsApp as the checkout gateway, not merely a support link.',
        'Transparent package pricing builds instant consumer trust and eliminates endless back-and-forth.',
      ],
      ar: [
        'الخدمات المتنقلة في الخليج تعتمد على الواتساب كبوابة إتمام الطلب وليس مجرد قناة دعم فني.',
        'وضوح أسعار الباقات يمنح العميل ثقة فورية وينهي الحاجة للمفاوضات الطويلة.',
      ],
    },
    techTags: ['Webflow', 'Lead Generation', 'On-Demand Funnel', 'Arabic RTL', 'Mobile-First'],
    metrics: [
      { label: { en: 'Booking Friction', ar: 'سهولة الحجز' }, value: '1 Tap Checkout' },
      { label: { en: 'Area Coverage', ar: 'المناطق المغطاة' }, value: 'All 6 Governorates' },
      { label: { en: 'Mobile Page Speed', ar: 'سرعة الهاتف' }, value: '< 1.2s Fast' },
    ],
  },
  {
    slug: 'boomtwon-travel',
    featured: false,
    order: 6,
    title: {
      en: 'BoomTwon Travel & Tourism Platform',
      ar: 'منصة بوم تاون للسياحة وتجارب السفر',
    },
    tagline: {
      en: 'Immersive travel experiences, curated destination itineraries, and international tour packages.',
      ar: 'تجارب سفر ملهمة، باقات سياحية استثنائية وجولات استكشافية لأجمل الوجهات العالمية.',
    },
    industry: {
      en: 'Travel, Tourism & Destination Booking',
      ar: 'السياحة والسفر وتنظيم الرحلات الدولية',
    },
    category: 'hospitality',
    location: {
      en: 'International Concept',
      ar: 'مشروع رقمي / دولي',
    },
    platform: 'Custom Code',
    platformContextNote: {
      en: 'Custom-coded production exploration showcasing advanced layout grids and visual storytelling.',
      ar: 'مشروع يعكس مهارات التطوير بالأكواد البرمجية والتصميم الشبكي المتقدم وسرد القصص البصري.',
    },
    role: {
      en: 'Frontend Engineering, UI Design & Motion System',
      ar: 'هندسة الواجهات الأمامية، التصميم البصري وتصميم الحركة',
    },
    languages: {
      en: 'English (LTR Native)',
      ar: 'اللغة الإنجليزية (واجهة LTR)',
    },
    image: '/images/projects/BoomTwon.png',
    liveUrl: 'https://boo-town.vercel.app/',
    overview: {
      en: 'BoomTwon is a dynamic travel discovery platform engineered to showcase exotic itineraries, bespoke resort packages, and experiential city escapes. The concept is anchored by cinematic full-width photography, structured itinerary cards, and engaging visual pacing.',
      ar: 'بوم تاون منصة سياحية حديثة صممت لاستعراض الوجهات السياحية الساحرة، والبرامج الفندقية الخاصة، والرحلات الاستكشافية. يعتمد التصميم على الصور البانورامية العريضة، والبطاقات المنظمة للرحلات، والإيقاع البصري المشوق.',
    },
    challenge: {
      en: 'Travel websites often suffer from visual cacophony: competing banners, cluttered search widgets, and disjointed typography. The objective was to craft a tranquil, editorial experience that inspires wanderlust while maintaining clear package specifications and booking pathways.',
      ar: 'تعاني مواقع السفر غالباً من الازدحام البصري وكثرة الإعلانات ومربعات البحث المتداخلة. كان التحدي يكمن في خلق تجربة مريحة وملهمة تحفز الرغبة في السفر مع الحفاظ على وضوح تفاصيل الرحلات ومسارات الحجز.',
    },
    approach: {
      en: 'Designed an editorial layout system pairing deep navy tones with golden hour accents. Integrated modular destination cards, detailed day-by-day itinerary accordions, and frictionless booking consultation triggers.',
      ar: 'تطوير شبكة تصميم تعتمد على خلفيات الكحلي العميق ولمسات من درجات الغروب الذهبية. تم دمج بطاقات وجهات معيارية وجداول رحلات تفاعلية يومية مع أزرار طلب تخطيط الرحلات.',
    },
    designDecisions: {
      en: [
        'Cinematic hero imagery with subtle gradient overlays for maximum headline legibility.',
        'Modular destination grid showcasing pricing tiers, trip durations, and included perks.',
        'High-performance asset loading strategies to ensure crisp imagery without sluggish scroll stutter.',
        'Restrained micro-interactions on card hover conveying a premium boutique agency feel.',
      ],
      ar: [
        'واجهة افتتاحية سينمائية مع تدرجات لونية هادئة لحماية وضوح العناوين والطباعة.',
        'شبكة وجهات متناسقة توضح مدة الرحلة، الفنادق المشمولة، ومتوسط التكلفة بشفافية.',
        'تحسين تحميل الصور العريضة لضمان سلاسة التمرير التام دون أي تقطيع.',
        'تأثيرات حركة دقيقة وراقية عند تمرير المؤشر تعكس طابع الوكالات السياحية الفارهة.',
      ],
    },
    keyFeatures: {
      en: [
        'Curated destination explorer covering coastal retreats, cultural capitals, and alpine escapes',
        'Structured itinerary timeline breakdown with daily activity highlights',
        'Responsive travel inquiry form for customized private group bookings',
        'Cross-browser performance tuned for smooth 60fps scrolling',
      ],
      ar: [
        'مستكشف وجهات مختارة يغطي المنتجعات البحرية، العواصم الثقافية، والرحلات الجبلية',
        'تفصيل زمني منظم لكل برنامج سياحي مع إبراز الأنشطة اليومية',
        'نموذج استفسار متجاوب لتنسيق الرحلات العائلية والجماعية الخاصة',
        'أداء فائق واستجابة حركة بسرعة 60 إطاراً في الثانية عبر كافة المتصفحات',
      ],
    },
    keyTakeaways: {
      en: [
        'Editorial travel websites need photography to breathe; aggressive margins and spacious typography outperform dense booking matrices.',
        'Carefully tuned custom code allows interactions that standard templates cannot replicate.',
      ],
      ar: [
        'مواقع السفر السياحية تحتاج مساحات واسعة لتتنفس الصور بجاذبية دون تزاحم.',
        'الكود البرمجي المتقن يمنح الموقع حرية وانسيابية تفاعلية لا توفرها القوالب الجاهزة.',
      ],
    },
    techTags: ['Custom Code', 'Responsive Web', 'Travel UI', 'Motion Design', 'Frontend'],
    metrics: [
      { label: { en: 'Visual Layout', ar: 'الهيكل البصري' }, value: 'Editorial Grid' },
      { label: { en: 'Scroll Performance', ar: 'سلاسة التمرير' }, value: '60fps Fluid' },
      { label: { en: 'Typography', ar: 'النمط الطباعي' }, value: 'Contemporary Sans' },
    ],
  },
  {
    slug: 'hoobank-financial',
    featured: false,
    order: 7,
    title: {
      en: 'HooBank Digital Financial Services',
      ar: 'منصة هوو بانك للخدمات المالية الرقمية',
    },
    tagline: {
      en: 'Next-generation digital card issuing, asset management, and encrypted payment rails.',
      ar: 'خدمات الدفع المشفر، إدارة الأصول الرقمية، وبطاقات الدفع الائتمانية من الجيل الجديد.',
    },
    industry: {
      en: 'Fintech, Digital Banking & Web3',
      ar: 'التقنية المالية والخدمات المصرفية الرقمية',
    },
    category: 'fintech',
    location: {
      en: 'Fintech Concept',
      ar: 'مشروع تجريبي / تقنية مالية',
    },
    platform: 'Custom Code',
    platformContextNote: {
      en: 'Modern fintech interface built to explore gradient lighting, card depth, and security hierarchy.',
      ar: 'واجهة مصرفية حديثة صممت لدراسة توزيع الإضاءة، وعمق البطاقات، والهرمية الأمنية.',
    },
    role: {
      en: 'Fintech UI Architecture & Interaction Development',
      ar: 'هندسة واجهات الفنتك والتطوير التفاعلي',
    },
    languages: {
      en: 'English (LTR Native)',
      ar: 'اللغة الإنجليزية (واجهة LTR)',
    },
    image: '/images/projects/HooBank.png',
    liveUrl: 'https://hoo-bank-cyan-rho.vercel.app/',
    overview: {
      en: 'HooBank is an exploration into modern digital banking aesthetics, illustrating how modern payment networks can communicate speed, bank-grade encryption, and seamless transaction management without falling into cold corporate monotony.',
      ar: 'يقدم مشروع هوو بانك تجربة بصرية حديثة للخدمات المصرفية الرقمية، موضحاً كيف يمكن لشبكات الدفع المعاصرة أن تعبر عن السرعة، والأمان المصرفي الصارم، وسهولة تداول الأصول دون الوقوع في جمود المواقع البنكية التقليدية.',
    },
    challenge: {
      en: 'Financial interfaces must balance visual excitement with institutional trustworthiness. The interface required futuristic glass-like depth and glowing gradients without looking like a speculative toy or sacrificing contrast ratios required for financial compliance.',
      ar: 'يتطلب تصميم واجهات الفنتك توازناً دقيقاً بين الحداثة البصرية وبين الرصانة والمصداقية المصرفية. كان الهدف إدخال تدرجات إضاءة عصرية وعمق طبقات دون المساس بمقروئية الأرقام والبيانات الحساسة.',
    },
    approach: {
      en: 'Constructed an obsidian foundation punctuated by soft gradient spheres and titanium-toned borders. Deconstructed the core banking features into floating cards that highlight real-time balance analytics, transaction fees, and global card rewards.',
      ar: 'بناء خلفيات داكنة شديدة العمق مع هالات إضاءة ناعمة وحواف بلون التيتانيوم. تم تفكيك المزايا المصرفية إلى بطاقات عائمة تبرز تحليلات الرصيد المباشرة، وحماية العمليات، ومزايا البطاقات العالمية.',
    },
    designDecisions: {
      en: [
        'Dark obsidian color palette with precision cyan glow effects indicating active transactional states.',
        'High-contrast typography ensuring regulatory financial disclosures remain 100% legible.',
        'Glassmorphic card components engineered with subtle border highlights rather than heavy blurs.',
        'Interactive feature highlights displaying rewards, billing protection, and API connectivity.',
      ],
      ar: [
        'لوحة ألوان داكنة مع توهجات إلكترونية زرقاء تشير إلى العمليات النشطة وحماية الحسابات.',
        'هرمية خطية عالية التباين تضمن وضوح الأرقام والملاحظات القانونية بدقة تامة.',
        'بطاقات زجاجية محسوبة بحواف دقيقة وناعمة بعيداً عن التشويش الزائد الذي يضر بالقراءة.',
        'أقسام تفاعلية توضح سرعة التحويل، الحماية من الاحتيال، وتكامل واجهات الدفع البرمجية.',
      ],
    },
    keyFeatures: {
      en: [
        'Interactive payment method showcase with virtual card mockup animations',
        'Security compliance trust badges including 256-bit encryption indicators',
        'Structured billing and fee transparency matrix for retail and business accounts',
        'Subtle motion physics applied to cards to deliver tactile digital polish',
      ],
      ar: [
        'عرض تفاعلي لبطاقات الدفع الافتراضية مع تأثيرات حركية خفيفة',
        'شارات أمان مصرفي تبرز التشفير العالي وحماية البيانات المالية',
        'مصفوفة واضحة لرسوم العمليات وحسابات الأفراد والشركات بشفافية',
        'حركات فيزيائية ناعمة للبطاقات تمنح الموقع ملمساً تقنياً فائق الدقة',
      ],
    },
    keyTakeaways: {
      en: [
        'In fintech, restraint creates trust; glow effects should highlight essential data rather than decorate empty space.',
        'Custom code enables precise control over component depth and layered shadows.',
      ],
      ar: [
        'في قطاع الفنتك، البساطة المدروسة هي التي تصنع الثقة؛ يجب أن تخدم الإضاءة توضيح الأرقام لا تزيين الفراغ.',
        'التحكم البرمجي يتيح ضبط تداخل الطبقات والظلال بدقة لا تتيحها الأدوات العادية.',
      ],
    },
    techTags: ['Fintech UI', 'Custom Code', 'Card Architecture', 'Modern Web', 'Dark Mode'],
    metrics: [
      { label: { en: 'Visual Language', ar: 'الهوية البصرية' }, value: 'Fintech Obsidian' },
      { label: { en: 'Typography Contrast', ar: 'تباين النصوص' }, value: 'WCAG AAA' },
      { label: { en: 'Layered Depth', ar: 'عمق الطبقات' }, value: 'Multi-Surface' },
    ],
  },
  {
    slug: 'urbanbuild-construction',
    featured: false,
    order: 8,
    title: {
      en: 'UrbanBuild Construction & Housing Solutions',
      ar: 'شركة أوربان بيلد للمقاولات والحلول الإنشائية',
    },
    tagline: {
      en: 'Commercial construction management, structural engineering, and modern housing projects.',
      ar: 'إدارة مشاريع المقاولات التجارية، الهندسة الإنشائية، وتطوير المجمعات السكنية الحديثة.',
    },
    industry: {
      en: 'Construction, Civil Engineering & Real Estate',
      ar: 'المقاولات العامة والهندسة المدنية والتطوير العقاري',
    },
    category: 'commercial',
    location: {
      en: 'Corporate Concept',
      ar: 'مشروع مؤسسي / مقاولات',
    },
    platform: 'Custom Code',
    platformContextNote: {
      en: 'Corporate engineering website built to showcase project portfolios and capability dossiers.',
      ar: 'موقع مؤسسي للمقاولات يركز على استعراض سجل المشاريع الهندسية وشهادات الجودة.',
    },
    role: {
      en: 'Corporate Web Architecture & Portfolio Design',
      ar: 'هندسة الموقع المؤسسي وتصميم معرض المشاريع الإنشائية',
    },
    languages: {
      en: 'English (LTR Native)',
      ar: 'اللغة الإنجليزية (واجهة LTR)',
    },
    image: '/images/projects/building.png',
    liveUrl: 'https://real-estate-livid-eta.vercel.app/',
    overview: {
      en: 'UrbanBuild is a comprehensive corporate construction website designed to communicate infrastructural capacity, occupational safety standards, and architectural fidelity to municipal planners, corporate developers, and high-value property owners.',
      ar: 'أوربان بيلد موقع مؤسسي للمقاولات الكبرى، صُمم لإبراز القدرة الإنشائية، والالتزام بمعايير السلامة المهنية، والجودة المعمارية أمام المطورين العقاريين، ومؤسسات التخطيط العمراني، وملاك المشاريع الضخمة.',
    },
    challenge: {
      en: 'General contracting websites frequently drown in generic stock photography and ambiguous capability lists. The mandate was to engineer an authoritative, industrial brand presence that treats past builds with the respect of architectural case studies.',
      ar: 'غالباً ما تقع مواقع شركات المقاولات في فخ الصور العشوائية والعبارات المكررة دون إبراز فعلي للمشاريع. كان الهدف بناء واجهة مؤسسية صلبة تقدم المشاريع السابقة بأسلوب دراسات الجدوى الهندسية الموثقة.',
    },
    approach: {
      en: 'Developed an industrial grid architecture featuring monochromatic slate surfaces, high-contrast hazard amber accents, structured technical specifications, and dedicated portfolio case cards with clear completion metrics.',
      ar: 'تطوير شبكة تصميم صناعية تعتمد ألوان الرمادي الإسمنتي مع لمسات برتقالية تحذيرية مستوحاة من السلامة الإنشائية، مع بطاقات مواصفات تفصيلية لكل مشروع توضح المساحة ومدة الإنجاز.',
    },
    designDecisions: {
      en: [
        'Monolithic typographic scale conveying structural permanence, stability, and scale.',
        'High-density technical metric counters detailing square footage completed and safety compliance.',
        'Dedicated breakdown across Civil Infrastructure, Commercial Towers, and Residential Communities.',
        'Direct inquiry funnel for commercial RFP tenders and subcontracting partnerships.',
      ],
      ar: [
        'خطوط عريضة وقوية تعكس المتانة الهندسية والصلابة المؤسسية للشركة.',
        'عدادات إحصائية بارزة توضح إجمالي المساحات الإنشائية وساعات العمل الآمنة بدون حوادث.',
        'تقسيم منهجي واضح: البنية التحتية، الأبراج التجارية، والمجمعات السكنية الخاصة.',
        'مسار تقديم مناقصات واستفسارات مباشر لمديري العقود والمشاريع.',
      ],
    },
    keyFeatures: {
      en: [
        'Comprehensive civil engineering services catalog with downloadable capability briefs',
        'Structured project gallery filtering builds by typology, square footage, and year',
        'Occupational health and safety compliance showcase with international ISO credentials',
        'Robust multi-device layout engineered for boardroom presentations on large monitors',
      ],
      ar: [
        'كتالوج خدمات هندسية متكامل مع إمكانية استعراض ملفات المواصفات الفنية',
        'معرض مشاريع يتيح الفلترة حسب نوع المبنى، المساحة الإجمالية، وسنة التسليم',
        'استعراض شهادات الجودة والآيزو ومعايير السلامة الإنشائية المعتمدة',
        'تجاوب عالي الدقة مهيأ للعرض في قاعات الاجتماعات والشاشات الكبيرة بجودة فائقة',
      ],
    },
    keyTakeaways: {
      en: [
        'In the contracting sector, heavy typographic weight and architectural grids build credibility faster than decorative illustrations.',
        'Corporate decision-makers prioritize verified capacity and safety records over emotional marketing copy.',
      ],
      ar: [
        'في قطاع المقاولات، الخطوط الرصينة والتصميم الهندسي المنظم يبنيان المصداقية أسرع بكثير من الرسومات التعبيرية.',
        'أصحاب القرار في الشركات والمشاريع الكبرى يبحثون عن سجل الإنجاز والاعتمادات الرسمية أولاً.',
      ],
    },
    techTags: ['Corporate UI', 'Construction', 'Custom Code', 'Responsive Grid', 'Portfolio UX'],
    metrics: [
      { label: { en: 'Layout System', ar: 'نظام الشبكة' }, value: 'Industrial Grid' },
      { label: { en: 'Typography Weight', ar: 'وزن الخطوط' }, value: 'Monolithic Heavy' },
      { label: { en: 'Tender Readiness', ar: 'جاهزية المناقصات' }, value: 'Enterprise Ready' },
    ],
  },
  {
    slug: 'medtro-healthcare',
    featured: false,
    order: 9,
    title: {
      en: 'MedTro Clinical & Diagnostic Healthcare',
      ar: 'منصة ميدترو للخدمات الطبية والتشخيصية',
    },
    tagline: {
      en: 'Patient-centric clinic navigation, specialized medical departments, and doctor directory.',
      ar: 'بوابة رعاية طبية متكاملة، دليل الأطباء الاستشاريين، وحجز المواعيد والخدمات التشخيصية.',
    },
    industry: {
      en: 'Healthcare, Clinical Medicine & Diagnostics',
      ar: 'الرعاية الصحية والمراكز الطبية التخصصية',
    },
    category: 'services',
    location: {
      en: 'Medical Concept',
      ar: 'مشروع رقمي / رعاية صحية',
    },
    platform: 'Custom Code',
    platformContextNote: {
      en: 'Accessible clinical interface designed to explore medical information architecture and patient pathways.',
      ar: 'واجهة صحية تراعي أعلى معايير سهولة الوصول وتنظيم المسارات العلاجية للمرضى.',
    },
    role: {
      en: 'Healthcare UI Design, Accessibility & Information Architecture',
      ar: 'تصميم واجهات الرعاية الصحية، سهولة الوصول وهندسة المحتوى الطبي',
    },
    languages: {
      en: 'English (LTR Native)',
      ar: 'اللغة الإنجليزية (واجهة LTR)',
    },
    image: '/images/projects/MedTro.png',
    liveUrl: 'https://clinic-app-theta.vercel.app/',
    overview: {
      en: 'MedTro is a patient-oriented clinical website designed to eliminate anxiety and cognitive overload for individuals seeking medical care. The platform presents specialties, physicians, and clinic hours with pristine clarity, high contrast, and accessible navigation.',
      ar: 'ميدترو منصة طبية تراعي سيكولوجية المريض، وصممت لإزالة التوتر والارتباك عند البحث عن رعاية صحية. تقدم المنصة الأقسام الطبية، وقائمة الأطباء، وساعات العمل بأعلى درجات الوضوح والتباين البصري وسهولة التصفح.',
    },
    challenge: {
      en: 'Medical websites often fail users when they are most vulnerable: confusing doctor lists, hidden clinic locations, and buried emergency contact details. The interface needed to comply with strict accessibility standards while maintaining a clean, calming aesthetic.',
      ar: 'تفشل العديد من المواقع الطبية في تلبية حاجة المريض في أوقات الطوارئ بسبب تداخل القوائم وصعوبة الوصول لمواعيد العيادات. كان المطلوب تحقيق معايير سهولة الوصول الصارمة مع الحفاظ على مظهر مهدئ يعزز الطمأنينة.',
    },
    approach: {
      en: 'Implemented a clean, soothing palette of clinical cyan, deep obsidian, and surgical whites. Structured patient pathways by symptom and medical specialty (Cardiology, Orthopedics, Pediatrics), accompanied by immediate tele-consultation triggers.',
      ar: 'اعتماد لوحة ألوان طبية مهدئة تدمج الأزرق السماوي مع الأبيض الناصع والرمادي الداكن. تم تنظيم مسارات المرضى حسب الأعراض والتخصصات الطبية، مع أزرار واضحة لحجز المواعيد والاستشارات العاجلة.',
    },
    designDecisions: {
      en: [
        'Strict adherence to high-contrast accessibility standards to support elderly and visually impaired users.',
        'Prominent emergency and urgent care locator anchored across all viewport sizes.',
        'Structured doctor credential cards detailing board certifications, languages, and consultation hours.',
        'Frictionless appointment booking flow designed to be completed in under 45 seconds.',
      ],
      ar: [
        'الالتزام الصارم بأعلى معايير التباين وسهولة الوصول لمساعدة كبار السن وذوي الإعاقة البصرية.',
        'تثبيت أرقام الطوارئ وخط الإسعاف في مكان بارز يسهل الوصول إليه على كافة الشاشات.',
        'بطاقات تعريفية دقيقة لكل طبيب تشمل التخصص الدقيق، الزمالات الطبية، واللغات وساعات العيادة.',
        'مسار حجز مواعيد مبسط يمكن إتمامه بالكامل في أقل من 45 ثانية دون أي تعقيد.',
      ],
    },
    keyFeatures: {
      en: [
        'Interactive department directory covering internal medicine, surgical specialties, and lab diagnostics',
        'Physician finder with filtering by specialty, availability, and clinical location',
        'Direct emergency hotline click-to-call banner prominently displayed',
        'Mobile-first responsive architecture tested for elderly touch target accessibility',
      ],
      ar: [
        'دليل تفاعلي للأقسام يشمل الباطنية، الجراحة، طب الأطفال، ومختبرات التحاليل والأشعة',
        'محرك بحث عن الأطباء يتيح الفلترة حسب التخصص وساعات التواجد بالعيادة',
        'شريط طوارئ ثابت للاتصال السريع بخدمات الإسعاف والرعاية الفورية',
        'مساحات لمس واسعة ومدروسة لتسهيل استخدام الموقع على كبار السن عبر الهواتف',
      ],
    },
    keyTakeaways: {
      en: [
        'In healthcare, visual calm and accessibility are not merely aesthetic choices—they are core functional requirements.',
        'Clear hierarchy and legible typography reduce cognitive friction for patients in stressful circumstances.',
      ],
      ar: [
        'في قطاع الرعاية الصحية، الهدوء البصري وسهولة الوصول ليسا رفاهية تجميلية بل متطلب وظيفي أساسي.',
        'الهرمية الواضحة والخطوط المريحة تقلل من توتر المرضى وتساعدهم في اتخاذ القرار الطبي الصحيح.',
      ],
    },
    techTags: ['Healthcare UI', 'Accessibility', 'Custom Code', 'Information Architecture', 'Clean Design'],
    metrics: [
      { label: { en: 'Accessibility', ar: 'سهولة الوصول' }, value: 'WCAG Compliant' },
      { label: { en: 'Booking Friction', ar: 'وقت الحجز' }, value: '< 45s Rapid' },
      { label: { en: 'Touch Targets', ar: 'مساحات اللمس' }, value: 'Generous 48px+' },
    ],
  },
  {
    slug: 'saas-productivity',
    featured: false,
    order: 10,
    title: {
      en: 'SaaS Productivity & Sprint Platform',
      ar: 'منصة ساس لإدارة المشاريع والإنتاجية الرقمية',
    },
    tagline: {
      en: 'Collaborative task pipelines, sprint velocity tracking, and automated engineering workflows.',
      ar: 'إدارة المهام والعمل المشترك، تتبع سرعة الإنجاز، وأتمتة مسارات العمل للفرق البرمجية والشركات.',
    },
    industry: {
      en: 'SaaS, Software & Digital Productivity',
      ar: 'البرمجيات السحابية ومنصات الإنتاجية الرقمية',
    },
    category: 'saas',
    location: {
      en: 'SaaS Concept',
      ar: 'مشروع ساس تجريبي',
    },
    platform: 'Custom Code',
    platformContextNote: {
      en: 'Product marketing landing page exploring tiered pricing models, feature demos, and software conversion UX.',
      ar: 'صفحة هبوط تسويقية للبرمجيات تستعرض باقات الأسعار التفاعلية ونماذج عرض المزايا.',
    },
    role: {
      en: 'Product Landing Page Architecture, UI/UX & Interaction Design',
      ar: 'هندسة صفحات هبوط البرمجيات، تصميم الواجهات وتطوير التفاعل',
    },
    languages: {
      en: 'English (LTR Native)',
      ar: 'اللغة الإنجليزية (واجهة LTR)',
    },
    image: '/images/projects/SaaS.png',
    liveUrl: 'https://saas-landing-page-sigma-mauve.vercel.app/',
    overview: {
      en: 'A high-converting SaaS landing page engineered for modern tech teams. Built to demonstrate feature matrices, live sprint board simulations, tiered pricing toggles (Monthly vs Annual), and developer tool integrations in a cohesive, polished digital experience.',
      ar: 'صفحة هبوط تسويقية عالية التحويل مخصصة لفرق العمل الرقمية المعاصرة. صُممت لاستعراض مزايا المنصة، ومحاكاة لوحات تتبع المهام (Sprint Boards)، ومفاتيح التبديل بين باقات الدفع الشهرية والسنوية، مع تكامل أدوات المطورين.',
    },
    challenge: {
      en: 'SaaS landing pages easily succumb to generic AI purple gradients, bloated copy, and confusing feature tables. The goal was to build a clean, purposeful product interface that communicates product utility in the first 10 seconds of viewport interaction.',
      ar: 'كثيراً ما تقع صفحات هبوط البرمجيات في التكرار والمصطلحات المعقدة والجداول غير المفهومة. كان التحدي هو تقديم واجهة ذكية ومنظمة تشرح قيمة البرنامج خلال أول 10 ثوانٍ من التصفح.',
    },
    approach: {
      en: 'Created an architectural software narrative: an interactive product dashboard mockup hero, animated capability tabs, a transparent comparison matrix, and clear, low-friction trial conversion pathways.',
      ar: 'صياغة سرد بصري مدروس: واجهة افتتاحية تعرض مجسماً تفاعلياً للوحة التحكم، تبويبات للمزايا الأساسية، جدول مقارنة شفاف للباقات، ومسارات تسجيل تجريبية خالية من أي خطوات معقدة.',
    },
    designDecisions: {
      en: [
        'Browser dashboard mockup hero with real interface fragments rather than abstract illustrations.',
        'Interactive Monthly/Annual pricing calculator with transparent tier breakdowns.',
        'Integration showcase highlighting tool interoperability with Slack, GitHub, and Figma.',
        'High-velocity CTA placement driving free trial initiation without requiring credit cards.',
      ],
      ar: [
        'واجهة افتتاحية بمجسم حقيقي للبرنامج داخل إطار متصفح أنيق بدلاً من الرسومات الوهمية.',
        'حاسبة أسعار تفاعلية للتبديل بين الاشتراك السنوي والشهري مع توضيح نسبة التوفير.',
        'قسم مخصص للتكامل مع أشهر الأدوات البرمجية مثل Slack و GitHub و Figma.',
        'أزرار تحويل مباشرة لبدء التجربة المجانية دون اشتراط إدخال بيانات البطاقة الائتمانية.',
      ],
    },
    keyFeatures: {
      en: [
        'Dynamic interactive sprint board preview showing drag-and-drop task mechanics',
        'Tiered pricing tables with feature checkmarks and team seat calculators',
        'Security compliance indicators (SOC2, GDPR, end-to-end data encryption)',
        'Fully responsive layout ensuring flawless rendering from mobile to ultrawide screens',
      ],
      ar: [
        'معاينة تفاعلية للوحة المهام تحاكي السحب والإفلات وتغيير حالات الإنجاز',
        'جداول باقات منظمة تشمل المقارنة الفنية التفصيلية وتحديد عدد المقاعد',
        'استعراض معايير الأمان المعتمدة والتشفير التام وحماية خصوصية بيانات الفرق',
        'تجاوب كامل مع مختلف الشاشات من الهواتف الصغيرة وحتى الشاشات العريضة',
      ],
    },
    keyTakeaways: {
      en: [
        'Product demonstrations beat marketing copy; showing realistic interface mechanics creates immediate customer desire.',
        'Clean, architectural spacing elevates software from an unproven startup into an enterprise-grade utility.',
      ],
      ar: [
        'عرض واجهة البرنامج الحقيقية أفضل من آلاف الكلمات التسويقية؛ إبراز طريقة العمل يصنع الرغبة في التجربة فوراً.',
        'المساحات البيضاء المنظمة والتنظيم الهندسي يحولان أي برنامج إلى أداة مؤسسية موثوقة.',
      ],
    },
    techTags: ['SaaS Landing Page', 'Pricing UX', 'Product Mockup', 'Custom Code', 'Conversion Design'],
    metrics: [
      { label: { en: 'Product Clarity', ar: 'وضوح البرنامج' }, value: 'UI Simulation' },
      { label: { en: 'Pricing Flexibility', ar: 'مرونة الأسعار' }, value: 'Monthly / Annual' },
      { label: { en: 'Conversion Focus', ar: 'تركيز التحويل' }, value: 'No-Card Trial' },
    ],
  },
];

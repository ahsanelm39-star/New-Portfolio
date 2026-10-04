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
      en: 'A Kuwait-based solutions company presenting residential, commercial and industrial services.',
      ar: 'شركة حلول في الكويت تعرض خدمات سكنية وتجارية وصناعية.',
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
    platformContextNote: {
      en: 'Webflow + custom CSS. Business claims shown in the source-site preview are not independently verified project outcomes.',
      ar: 'Webflow مع CSS مخصص. الادعاءات التجارية الظاهرة في صورة الموقع الأصلي ليست نتائج للمشروع تم التحقق منها بشكل مستقل.',
    },
    role: {
      en: 'Webflow Development & Custom CSS',
      ar: 'تطوير Webflow وCSS مخصص',
    },
    languages: {
      en: 'Arabic RTL & English LTR',
      ar: 'العربية RTL والإنجليزية LTR',
    },
    image: '/images/projects/alawad.png',
    liveUrl: 'https://alawad-arch.com',
    overview: {
      en: 'A Kuwait-based business website presenting residential, commercial and industrial service information in Arabic and English.',
      ar: 'موقع لشركة في الكويت يعرض معلومات الخدمات السكنية والتجارية والصناعية باللغتين العربية والإنجليزية.',
    },
    challenge: {
      en: 'The site needed to organize several service areas and keep the information legible in both right-to-left and left-to-right layouts.',
      ar: 'احتاج الموقع إلى تنظيم عدة مجالات للخدمة والحفاظ على وضوح المعلومات في التخطيطين من اليمين إلى اليسار ومن اليسار إلى اليمين.',
    },
    approach: {
      en: 'Built the site in Webflow with custom CSS, grouped service content, responsive page layouts and direct inquiry links.',
      ar: 'نُفذ الموقع على Webflow مع CSS مخصص، وتجميع محتوى الخدمات، وتخطيطات متجاوبة وروابط مباشرة للاستفسار.',
    },
    designDecisions: {
      en: [
        'Grouped service sections for residential, commercial and industrial work.',
        'Separate right-to-left and left-to-right page presentation.',
        'Custom CSS used for responsive layout details.',
        'Direct inquiry links included alongside service information.',
      ],
      ar: [
        'تجميع أقسام الخدمات السكنية والتجارية والصناعية.',
        'عرض منفصل للتخطيط من اليمين إلى اليسار ومن اليسار إلى اليمين.',
        'استخدام CSS مخصص لتفاصيل التخطيط المتجاوب.',
        'إضافة روابط مباشرة للاستفسار بجانب معلومات الخدمات.',
      ],
    },
    keyFeatures: {
      en: [
        'Dedicated residential, commercial, and industrial capability hubs',
        'Direct links for service inquiries',
        'Arabic RTL and English LTR page layouts',
        'Service information grouped by area of work',
      ],
      ar: [
        'بوابات مخصصة لكل قطاع: السكني، التجاري، والصناعي',
        'روابط مباشرة للاستفسار عن الخدمات',
        'تخطيطات للصفحات العربية RTL والإنجليزية LTR',
        'تنظيم معلومات الخدمات حسب مجال العمل',
      ],
    },
    keyTakeaways: {
      en: [
        'Grouping related services makes a multi-service business easier to browse.',
        'Arabic and English layouts need to be reviewed for direction and text flow separately.',
      ],
      ar: [
        'يساعد تجميع الخدمات المرتبطة على تسهيل تصفح المواقع متعددة الخدمات.',
        'تحتاج التخطيطات العربية والإنجليزية إلى مراجعة مستقلة لاتجاه المحتوى وتدفق النص.',
      ],
    },
    techTags: ['Webflow', 'Custom CSS', 'Arabic RTL', 'English LTR', 'Responsive Layout'],
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
      en: 'Arabic-language website and menu presentation for a Kuwait restaurant.',
      ar: 'موقع عربي وقائمة طعام لمطعم في الكويت.',
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
      en: 'Webflow website for a Kuwait restaurant. Business claims shown in the source-site preview are not independently verified project outcomes.',
      ar: 'موقع Webflow لمطعم في الكويت. الادعاءات التجارية الظاهرة في صورة الموقع الأصلي ليست نتائج للمشروع تم التحقق منها بشكل مستقل.',
    },
    role: {
      en: 'Webflow Development & Menu Structure',
      ar: 'تطوير Webflow وهيكلة قائمة الطعام',
    },
    languages: {
      en: 'Arabic RTL',
      ar: 'العربية RTL',
    },
    image: '/images/projects/resturant.png',
    liveUrl: 'https://silver-eagle.goonline.asia/',
    overview: {
      en: 'An Arabic-language website for a Kuwait restaurant, presenting menu information and contact options.',
      ar: 'موقع باللغة العربية لمطعم في الكويت يعرض معلومات قائمة الطعام ووسائل التواصل.',
    },
    challenge: {
      en: 'Menu categories and contact details needed to remain easy to find when viewed on a phone.',
      ar: 'كان من المهم أن تبقى أقسام القائمة ومعلومات التواصل واضحة وسهلة الوصول عبر الهاتف.',
    },
    approach: {
      en: 'Built the Webflow pages around menu categories and direct contact links, with responsive navigation for smaller screens.',
      ar: 'نُفذت صفحات Webflow حول أقسام قائمة الطعام وروابط التواصل المباشر، مع تنقل متجاوب للشاشات الصغيرة.',
    },
    designDecisions: {
      en: [
        'Menu categories presented in a web page rather than described as a downloadable file.',
        'Menu items grouped for mobile browsing.',
        'Direct contact and WhatsApp links.',
        'Responsive layout for smaller screens.',
      ],
      ar: [
        'عرض أقسام القائمة في صفحات الموقع بدلاً من الاعتماد على ملف قابل للتنزيل.',
        'تنظيم عناصر القائمة بما يلائم التصفح عبر الهاتف.',
        'إضافة روابط مباشرة للتواصل والواتساب.',
        'تخطيط متجاوب للشاشات الصغيرة.',
      ],
    },
    keyFeatures: {
      en: [
        'Menu categories for dishes and grills',
        'WhatsApp contact link',
        'Restaurant location and contact information',
        'Responsive menu presentation',
      ],
      ar: [
        'أقسام لقائمة الطعام والمشويات',
        'رابط للتواصل عبر واتساب',
        'معلومات الموقع والتواصل مع المطعم',
        'عرض متجاوب لقائمة الطعام',
      ],
    },
    keyTakeaways: {
      en: [
        'Clear menu grouping supports browsing on mobile.',
        'Direct contact links keep the next step visible alongside the menu.',
      ],
      ar: [
        'يساعد تقسيم القائمة بوضوح على تصفحها عبر الهاتف.',
        'تُبقي روابط التواصل المباشر الخطوة التالية واضحة بجانب القائمة.',
      ],
    },
    techTags: ['Webflow', 'Mobile Menu UX', 'WhatsApp Commerce', 'Arabic RTL', 'Hospitality'],
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
      en: 'Webflow website for an automotive service center in Kuwait.',
      ar: 'موقع Webflow لمركز خدمات سيارات في الكويت.',
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
    platformContextNote: {
      en: 'Webflow + custom CSS. Business claims shown in the source-site preview are not independently verified project outcomes.',
      ar: 'Webflow مع CSS مخصص. الادعاءات التجارية الظاهرة في صورة الموقع الأصلي ليست نتائج للمشروع تم التحقق منها بشكل مستقل.',
    },
    role: {
      en: 'Webflow Development & Custom CSS',
      ar: 'تطوير Webflow وCSS مخصص',
    },
    languages: {
      en: 'Arabic RTL',
      ar: 'العربية RTL',
    },
    image: '/images/projects/car-cur.png',
    liveUrl: 'https://aliabtikar.goonline.asia/',
    overview: {
      en: 'A Kuwait automotive service website presenting maintenance information and ways to contact the center.',
      ar: 'موقع لخدمات السيارات في الكويت يعرض معلومات الصيانة ووسائل التواصل مع المركز.',
    },
    challenge: {
      en: 'Visitors needed to identify the services offered and find a direct contact route without searching through dense copy.',
      ar: 'احتاج الزوار إلى معرفة الخدمات المتاحة والوصول إلى وسيلة تواصل مباشرة دون البحث في نصوص مطولة.',
    },
    approach: {
      en: 'Built the Webflow pages with custom CSS, grouped service information and provided direct call and WhatsApp contact links.',
      ar: 'نُفذت صفحات Webflow باستخدام CSS مخصص، مع تجميع معلومات الخدمات وإضافة روابط مباشرة للاتصال والواتساب.',
    },
    designDecisions: {
      en: [
        'Service information grouped by type.',
        'Direct call and WhatsApp contact links.',
        'Custom CSS used for responsive layout details.',
        'Arabic RTL page layout.',
      ],
      ar: [
        'تجميع معلومات الخدمات حسب نوعها.',
        'روابط مباشرة للاتصال والواتساب.',
        'استخدام CSS مخصص لتفاصيل التخطيط المتجاوب.',
        'تخطيط باللغة العربية باتجاه RTL.',
      ],
    },
    keyFeatures: {
      en: [
        'Direct call and WhatsApp links',
        'Grouped vehicle service information',
        'Center location and contact details',
        'Responsive page layout',
      ],
      ar: [
        'روابط مباشرة للاتصال والواتساب',
        'معلومات مجمعة عن خدمات السيارات',
        'معلومات الموقع ووسائل التواصل',
        'تخطيط صفحات متجاوب',
      ],
    },
    keyTakeaways: {
      en: [
        'Service information and direct contact links support visitors looking for a specific maintenance service.',
        'Grouping content and keeping the contact route visible makes the page easier to scan.',
      ],
      ar: [
        'تساعد معلومات الخدمات وروابط التواصل المباشر الزائر في الوصول إلى الخدمة المطلوبة.',
        'يسهّل تجميع المحتوى وإبقاء وسيلة التواصل واضحة عملية تصفح الصفحة.',
      ],
    },
    techTags: ['Webflow', 'Custom CSS', 'Automotive Services', 'Arabic RTL', 'Responsive Layout'],
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
      en: 'Webflow website for a Kuwait menswear and traditional attire retailer.',
      ar: 'موقع Webflow لمتجر أزياء رجالية وملابس تراثية في الكويت.',
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
      en: 'Webflow website for a Kuwait retailer. Business claims shown in the source-site preview are not independently verified project outcomes.',
      ar: 'موقع Webflow لمتجر في الكويت. الادعاءات التجارية الظاهرة في صورة الموقع الأصلي ليست نتائج للمشروع تم التحقق منها بشكل مستقل.',
    },
    role: {
      en: 'Webflow Development & Product Presentation',
      ar: 'تطوير Webflow وعرض المنتجات',
    },
    languages: {
      en: 'Arabic RTL',
      ar: 'العربية RTL',
    },
    image: '/images/projects/safer.png',
    liveUrl: 'https://safiralamara.com/',
    overview: {
      en: 'A Kuwait retailer website presenting men’s attire and traditional clothing products in Arabic.',
      ar: 'موقع لمتجر في الكويت يعرض منتجات الأزياء الرجالية والملابس التراثية باللغة العربية.',
    },
    challenge: {
      en: 'Product categories and details needed a clear structure that was easy to browse in an Arabic right-to-left layout.',
      ar: 'احتاجت فئات المنتجات وتفاصيلها إلى بنية واضحة يسهل تصفحها ضمن تخطيط عربي من اليمين إلى اليسار.',
    },
    approach: {
      en: 'Built Webflow pages with product groupings, Arabic RTL layout and direct inquiry links.',
      ar: 'نُفذت صفحات Webflow بتجميع للمنتجات وتخطيط عربي RTL وروابط مباشرة للاستفسار.',
    },
    designDecisions: {
      en: [
        'Product categories grouped for browsing.',
        'Arabic right-to-left page structure.',
        'Product information presented in a consistent page layout.',
        'Direct contact link for product inquiries.',
      ],
      ar: [
        'تجميع فئات المنتجات لتسهيل التصفح.',
        'بنية صفحات باللغة العربية من اليمين إلى اليسار.',
        'عرض معلومات المنتجات بتخطيط متناسق.',
        'رابط مباشر للاستفسار عن المنتجات.',
      ],
    },
    keyFeatures: {
      en: [
        'Product category navigation',
        'Product information pages',
        'Direct contact for inquiries',
        'Responsive layout for mobile browsing',
      ],
      ar: [
        'تنقل بين فئات المنتجات',
        'صفحات لمعلومات المنتجات',
        'وسيلة تواصل مباشرة للاستفسارات',
        'تخطيط متجاوب للتصفح عبر الهاتف',
      ],
    },
    keyTakeaways: {
      en: [
        'Product categories and direct inquiries support browsing for a retail website.',
        'A consistent layout helps keep product information easy to scan.',
      ],
      ar: [
        'تساعد فئات المنتجات والاستفسار المباشر في تسهيل تصفح موقع المتجر.',
        'يحافظ التخطيط المتناسق على وضوح معلومات المنتجات.',
      ],
    },
    techTags: ['Webflow', 'Arabic RTL', 'Retail', 'Product Presentation', 'Responsive Layout'],
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
      en: 'Webflow website for a mobile car wash service in Kuwait.',
      ar: 'موقع Webflow لخدمة غسيل سيارات متنقلة في الكويت.',
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
    platformContextNote: {
      en: 'Webflow website for a Kuwait mobile car wash service. Business claims shown in the source-site preview are not independently verified project outcomes.',
      ar: 'موقع Webflow لخدمة غسيل سيارات متنقلة في الكويت. الادعاءات التجارية الظاهرة في صورة الموقع الأصلي ليست نتائج للمشروع تم التحقق منها بشكل مستقل.',
    },
    role: {
      en: 'Webflow Development & Responsive Layout',
      ar: 'تطوير Webflow وتخطيط متجاوب',
    },
    languages: {
      en: 'Arabic RTL',
      ar: 'العربية RTL',
    },
    image: '/images/projects/car-wash.png',
    liveUrl: 'https://a2zwash.goonline.asia/',
    overview: {
      en: 'A Kuwait mobile car wash website presenting available services, package information and an inquiry route.',
      ar: 'موقع لخدمة غسيل سيارات متنقلة في الكويت يعرض الخدمات ومعلومات الباقات ووسيلة للاستفسار.',
    },
    challenge: {
      en: 'Visitors needed to compare the listed services and find a straightforward way to ask about availability.',
      ar: 'احتاج الزوار إلى مقارنة الخدمات المعروضة والعثور على طريقة مباشرة للاستفسار عن التوفر.',
    },
    approach: {
      en: 'Built the Webflow page around service and package information, with a direct WhatsApp inquiry link and responsive layout.',
      ar: 'نُفذت صفحة Webflow حول معلومات الخدمات والباقات، مع رابط مباشر للاستفسار عبر واتساب وتخطيط متجاوب.',
    },
    designDecisions: {
      en: [
        'Service and package information grouped on the page.',
        'Direct WhatsApp link for inquiries.',
        'Arabic RTL page layout.',
        'Responsive layout for mobile browsing.',
      ],
      ar: [
        'تجميع معلومات الخدمات والباقات في الصفحة.',
        'رابط مباشر للاستفسار عبر واتساب.',
        'تخطيط باللغة العربية باتجاه RTL.',
        'تخطيط متجاوب للتصفح عبر الهاتف.',
      ],
    },
    keyFeatures: {
      en: [
        'Service and package information',
        'WhatsApp inquiry link',
        'Mobile-friendly content layout',
        'Responsive Webflow implementation',
      ],
      ar: [
        'معلومات الخدمات والباقات',
        'رابط للاستفسار عبر واتساب',
        'تنظيم المحتوى لعرضه عبر الهاتف',
        'تنفيذ Webflow متجاوب',
      ],
    },
    keyTakeaways: {
      en: [
        'Package information and a direct inquiry option keep the service details together.',
        'A responsive page helps visitors review the offer from a phone.',
      ],
      ar: [
        'يساعد عرض معلومات الباقات ووسيلة الاستفسار في مكان واحد على وضوح تفاصيل الخدمة.',
        'تتيح الصفحة المتجاوبة للزوار مراجعة العرض عبر الهاتف.',
      ],
    },
    techTags: ['Webflow', 'Arabic RTL', 'Mobile Service', 'Responsive Layout', 'WhatsApp Contact'],
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
      en: 'Self-Initiated Concept',
      ar: 'مشروع ذاتي تجريبي',
    },
    platform: 'Custom Code',
    platformContextNote: {
      en: 'Self-initiated custom-code concept. Names, sample copy, testimonials and figures shown in the concept image are illustrative placeholders, not client work or measured results.',
      ar: 'تصور ذاتي بكود مخصص. الأسماء والنصوص والآراء والأرقام الظاهرة في الصورة عناصر توضيحية وليست عملاً لعميل أو نتائج مقاسة.',
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
      en: 'A self-initiated custom-code website concept presenting travel offers, destination cards and multiple page layouts.',
      ar: 'تصور ذاتي لموقع سفر مبرمج خصيصاً يعرض عروضاً وبطاقات وجهات وتخطيطات متعددة للصفحات.',
    },
    challenge: {
      en: 'The concept brings promotional content, destination cards and a search-results view into one travel website structure.',
      ar: 'يجمع التصور المحتوى الترويجي وبطاقات الوجهات وواجهة لنتائج البحث ضمن بنية موقع واحدة.',
    },
    approach: {
      en: 'Built the concept in custom code with page sections for travel offers, destination listings, search results and trip inquiries.',
      ar: 'نُفذ التصور بكود مخصص مع أقسام لعروض السفر وقوائم الوجهات ونتائج البحث والاستفسار عن الرحلات.',
    },
    designDecisions: {
      en: [
        'Travel offer section with image-led content.',
        'Destination cards arranged in a grid.',
        'Separate search-results page composition.',
        'Responsive page layouts implemented with custom code.',
      ],
      ar: [
        'قسم لعروض السفر بمحتوى معتمد على الصور.',
        'بطاقات للوجهات ضمن شبكة.',
        'تخطيط مستقل لصفحة نتائج البحث.',
        'تخطيطات متجاوبة منفذة بكود مخصص.',
      ],
    },
    keyFeatures: {
      en: [
        'Travel offer and destination sections',
        'Search-results page layout',
        'Trip inquiry content and links',
        'Responsive implementation',
      ],
      ar: [
        'أقسام لعروض السفر والوجهات',
        'تخطيط لصفحة نتائج البحث',
        'محتوى وروابط للاستفسار عن الرحلات',
        'تنفيذ متجاوب',
      ],
    },
    keyTakeaways: {
      en: [
        'Destination cards and search results are distinct content patterns and benefit from separate page structures.',
        'A concept layout does not demonstrate a real booking service or business outcome.',
      ],
      ar: [
        'بطاقات الوجهات ونتائج البحث أنماط محتوى مختلفة وتستفيد من تخطيطات مستقلة.',
        'لا يثبت التصور وجود خدمة حجز فعلية أو نتائج تجارية.',
      ],
    },
    techTags: ['Custom Code', 'Responsive Layout', 'Travel Website', 'Destination Cards', 'Frontend'],
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
      en: 'Self-Initiated Concept',
      ar: 'مشروع ذاتي تجريبي',
    },
    platform: 'Custom Code',
    platformContextNote: {
      en: 'Self-initiated custom-code concept. Names, sample copy, testimonials and figures shown in the concept image are illustrative placeholders, not client work or measured results.',
      ar: 'تصور ذاتي بكود مخصص. الأسماء والنصوص والآراء والأرقام الظاهرة في الصورة عناصر توضيحية وليست عملاً لعميل أو نتائج مقاسة.',
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
      en: 'A self-initiated finance interface concept using custom code to present payment card, feature and billing UI mockups.',
      ar: 'تصور ذاتي لواجهة خدمات مالية نُفذ بكود مخصص لعرض نماذج بطاقات الدفع والمزايا والفوترة.',
    },
    challenge: {
      en: 'The concept needed to organize payment-related interface mockups and product information into a legible page hierarchy.',
      ar: 'احتاج التصور إلى تنظيم نماذج الواجهات المرتبطة بالدفع ومعلومات المنتج ضمن تسلسل واضح للصفحة.',
    },
    approach: {
      en: 'Built the custom-coded pages around a product introduction, payment card mockups, feature content and billing interface visuals.',
      ar: 'نُفذت الصفحات بكود مخصص حول مقدمة المنتج ونماذج بطاقات الدفع ومحتوى المزايا ومرئيات واجهة الفوترة.',
    },
    designDecisions: {
      en: [
        'Dark page layout with cyan accents.',
        'Payment card interface mockups presented as visual examples.',
        'Separate feature and billing content sections.',
        'Responsive page structure implemented with custom code.',
      ],
      ar: [
        'تخطيط داكن للصفحات مع لمسات زرقاء.',
        'عرض نماذج واجهة لبطاقات الدفع كأمثلة بصرية.',
        'أقسام منفصلة للمزايا ومحتوى الفوترة.',
        'بنية صفحات متجاوبة منفذة بكود مخصص.',
      ],
    },
    keyFeatures: {
      en: [
        'Payment card interface mockups',
        'Feature and service content sections',
        'Billing interface visuals',
        'Responsive layout',
      ],
      ar: [
        'نماذج واجهة لبطاقات الدفع',
        'أقسام لمحتوى المزايا والخدمات',
        'مرئيات لواجهة الفوترة',
        'تخطيط متجاوب',
      ],
    },
    keyTakeaways: {
      en: [
        'A concept can explore how product mockups and supporting copy share a page hierarchy.',
        'Interface examples in a concept do not represent a real financial service or compliance status.',
      ],
      ar: [
        'يتيح التصور استكشاف تنظيم نماذج المنتج والنصوص ضمن تسلسل الصفحة.',
        'لا تمثل نماذج الواجهة في التصور خدمة مالية فعلية أو حالة امتثال.',
      ],
    },
    techTags: ['Custom Code', 'Responsive Layout', 'Finance UI Concept', 'Card Mockups', 'Frontend'],
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
      en: 'Self-Initiated Concept',
      ar: 'مشروع ذاتي تجريبي',
    },
    platform: 'Custom Code',
    platformContextNote: {
      en: 'Self-initiated custom-code concept. Names, sample copy, testimonials and figures shown in the concept image are illustrative placeholders, not client work or measured results.',
      ar: 'تصور ذاتي بكود مخصص. الأسماء والنصوص والآراء والأرقام الظاهرة في الصورة عناصر توضيحية وليست عملاً لعميل أو نتائج مقاسة.',
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
      en: 'A self-initiated construction website concept presenting service categories, project gallery layouts and contact content.',
      ar: 'تصور ذاتي لموقع مقاولات يعرض فئات الخدمات وتخطيطات معرض المشاريع ومحتوى التواصل.',
    },
    challenge: {
      en: 'The page structure needed to keep service categories, project imagery and inquiry information distinct and easy to scan.',
      ar: 'احتاج هيكل الصفحة إلى فصل فئات الخدمات وصور المشاريع ومعلومات الاستفسار لتسهيل تصفحها.',
    },
    approach: {
      en: 'Built the custom-coded concept with separate service and project sections, FAQ content and an inquiry form layout.',
      ar: 'نُفذ التصور بكود مخصص مع أقسام منفصلة للخدمات والمشاريع ومحتوى للأسئلة الشائعة وتخطيط لنموذج الاستفسار.',
    },
    designDecisions: {
      en: [
        'Service categories presented as separate page sections.',
        'Image-led project gallery layout.',
        'FAQ content grouped apart from service details.',
        'Inquiry form area included in the page structure.',
      ],
      ar: [
        'عرض فئات الخدمات في أقسام منفصلة.',
        'تخطيط لمعرض مشاريع يعتمد على الصور.',
        'تجميع محتوى الأسئلة الشائعة بعيداً عن تفاصيل الخدمات.',
        'إضافة مساحة لنموذج الاستفسار ضمن بنية الصفحة.',
      ],
    },
    keyFeatures: {
      en: [
        'Service category sections',
        'Construction project gallery layout',
        'FAQ content and inquiry form layout',
        'Responsive page structure',
      ],
      ar: [
        'أقسام لفئات الخدمات',
        'تخطيط لمعرض مشاريع المقاولات',
        'تخطيط لمحتوى الأسئلة الشائعة ونموذج الاستفسار',
        'بنية صفحات متجاوبة',
      ],
    },
    keyTakeaways: {
      en: [
        'Separating service content from project examples helps keep a dense company site easier to browse.',
        'Figures and testimonials in the concept artwork are placeholders, not evidence of a real contractor or project history.',
      ],
      ar: [
        'يساعد فصل معلومات الخدمات عن أمثلة المشاريع على تسهيل تصفح مواقع الشركات متعددة الخدمات.',
        'الأرقام والآراء في صورة التصور عناصر توضيحية وليست دليلاً على شركة أو سجل مشاريع حقيقي.',
      ],
    },
    techTags: ['Custom Code', 'Responsive Layout', 'Construction Website', 'Project Gallery', 'Frontend'],
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
      en: 'Self-Initiated Concept',
      ar: 'مشروع ذاتي تجريبي',
    },
    platform: 'Custom Code',
    platformContextNote: {
      en: 'Self-initiated custom-code concept. Names, sample copy, testimonials and figures shown in the concept image are illustrative placeholders, not client work or measured results.',
      ar: 'تصور ذاتي بكود مخصص. الأسماء والنصوص والآراء والأرقام الظاهرة في الصورة عناصر توضيحية وليست عملاً لعميل أو نتائج مقاسة.',
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
      en: 'A self-initiated healthcare website concept showing service departments, provider-card layouts and an appointment form mockup.',
      ar: 'تصور ذاتي لموقع رعاية صحية يعرض أقسام الخدمات وتخطيط بطاقات مقدمي الرعاية ونموذجاً توضيحياً للمواعيد.',
    },
    challenge: {
      en: 'The concept needed a clear way to present department information, provider examples and appointment content without implying a real clinic or verified medical credentials.',
      ar: 'احتاج التصور إلى عرض معلومات الأقسام وأمثلة مقدمي الرعاية ومحتوى المواعيد بوضوح، دون الإيحاء بوجود عيادة فعلية أو مؤهلات طبية موثقة.',
    },
    approach: {
      en: 'Built the pages in custom code with separate department, provider-card and appointment-form sections. Provider and clinic content is illustrative.',
      ar: 'نُفذت الصفحات بكود مخصص مع أقسام منفصلة للخدمات وبطاقات مقدمي الرعاية ونموذج المواعيد. محتوى مقدمي الرعاية والعيادة توضيحي.',
    },
    designDecisions: {
      en: [
        'Service departments arranged as separate content cards.',
        'Provider information shown in card layouts.',
        'Appointment form presented as an interface mockup.',
        'Responsive page composition implemented with custom code.',
      ],
      ar: [
        'عرض أقسام الخدمات في بطاقات منفصلة.',
        'عرض معلومات مقدمي الرعاية ضمن بطاقات.',
        'تقديم نموذج المواعيد كنموذج توضيحي للواجهة.',
        'تكوين متجاوب للصفحات باستخدام كود مخصص.',
      ],
    },
    keyFeatures: {
      en: [
        'Department card layouts',
        'Provider profile card examples',
        'Appointment form mockup',
        'Responsive page structure',
      ],
      ar: [
        'تخطيطات بطاقات لأقسام الخدمات',
        'أمثلة لبطاقات ملفات مقدمي الرعاية',
        'نموذج توضيحي للمواعيد',
        'بنية صفحات متجاوبة',
      ],
    },
    keyTakeaways: {
      en: [
        'Provider profiles and appointment controls in a concept are visual examples, not verified medical services or credentials.',
        'A medical-site project would require verified clinic, provider and accessibility information before release.',
      ],
      ar: [
        'تُعد ملفات مقدمي الرعاية وأدوات المواعيد في التصور أمثلة بصرية وليست خدمات أو مؤهلات طبية موثقة.',
        'يتطلب نشر موقع طبي معلومات موثقة عن العيادة ومقدمي الرعاية وإمكانية الوصول.',
      ],
    },
    techTags: ['Custom Code', 'Responsive Layout', 'Healthcare UI Concept', 'Provider Cards', 'Frontend'],
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
      en: 'Self-Initiated Concept',
      ar: 'مشروع ذاتي تجريبي',
    },
    platform: 'Custom Code',
    platformContextNote: {
      en: 'Self-initiated custom-code concept. Names, sample copy, testimonials and figures shown in the concept image are illustrative placeholders, not client work or measured results.',
      ar: 'تصور ذاتي بكود مخصص. الأسماء والنصوص والآراء والأرقام الظاهرة في الصورة عناصر توضيحية وليست عملاً لعميل أو نتائج مقاسة.',
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
      en: 'A self-initiated SaaS marketing-page concept built with custom code, featuring a responsive product-focused landing page.',
      ar: 'تصور ذاتي لصفحة تسويقية لمنصة SaaS نُفذ بكود مخصص ويعرض صفحة متجاوبة تركز على المنتج.',
    },
    challenge: {
      en: 'The concept needed a clear landing-page structure for product messaging and visual examples across desktop and mobile layouts.',
      ar: 'احتاج التصور إلى بنية واضحة لرسائل المنتج وأمثلته البصرية عبر تخطيطات سطح المكتب والهاتف.',
    },
    approach: {
      en: 'Built the landing page in custom code with a product introduction, feature content and responsive page composition.',
      ar: 'نُفذت الصفحة بكود مخصص مع مقدمة للمنتج ومحتوى للمزايا وتكوين متجاوب للصفحة.',
    },
    designDecisions: {
      en: [
        'Product message and interface visual presented in the page hero.',
        'Separate content sections for product features.',
        'Responsive layouts for desktop and mobile.',
        'Call-to-action included as part of the concept page.',
      ],
      ar: [
        'رسالة المنتج ومرئية الواجهة ضمن القسم الافتتاحي للصفحة.',
        'أقسام منفصلة لمحتوى مزايا المنتج.',
        'تخطيطات متجاوبة لسطح المكتب والهاتف.',
        'إضافة زر إجراء ضمن تصور الصفحة.',
      ],
    },
    keyFeatures: {
      en: [
        'Product-focused landing page',
        'Feature content sections',
        'Product interface visual',
        'Responsive page layout',
      ],
      ar: [
        'صفحة هبوط تركز على المنتج',
        'أقسام لمحتوى المزايا',
        'مرئية لواجهة المنتج',
        'تخطيط متجاوب للصفحة',
      ],
    },
    keyTakeaways: {
      en: [
        'A focused product landing page can separate the product explanation from supporting detail.',
        'Concept visuals do not represent a live product, its integrations or business performance.',
      ],
      ar: [
        'تساعد صفحة المنتج المركزة على فصل شرح المنتج عن التفاصيل المساندة.',
        'لا تمثل مرئيات التصور منتجاً فعلياً أو تكاملاته أو أداءه التجاري.',
      ],
    },
    techTags: ['Custom Code', 'Responsive Layout', 'SaaS Website', 'Product Visual', 'Frontend'],
    metrics: [],
  },
];

export interface FeatureOption {
  id: string;
  label: string;
  price: number; // in million tomans
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  options: FeatureOption[];
}

export const INITIAL_PRICE = 10; // 10 million tomans

export const customFeatures: Feature[] = [
  {
    id: "itemImages",
    title: "عکس آیتم‌های منو",
    description: "",
    options: [
      { id: "no-image", label: "بدون عکس", price: 0 },
      { id: "one-image", label: "🌄 یک عکس به ازای هر آیتم", price: 2 },
      { id: "three-images", label: "🌄🌆🏞️ ۳ عکس به ازای هر آیتم", price: 3 },
    ],
  },
  {
    id: "landingPage",
    title: "صفحه‌ی فرود(خانه)",
    description: "",
    options: [
      { id: "no-landing", label: "بدون صفحه‌ی فرود", price: 0 },
      { id: "static-landing", label: "🛬 صفحه‌ی فرود ثابت", price: 2 },
      { id: "dynamic-landing", label: "🛸 صفحه‌ی فرود قابل شخصی‌سازی", price: 3 },
    ],
  },
  {
    id: "shop",
    title: "کاتالوگ محصولات فروشگاهی",
    description: "",
    options: [
      { id: "no-shop", label: "بدون کاتالوگ", price: 0 },
      { id: "shop-one-image", label: "🏷️ کاتالوگ با یک عکس به ازای هر محصول", price: 2 },
      { id: "shop-three-images", label: "🏷️🏷️🏷️ کاتالوگ با ۳ عکس به ازای هر محصول", price: 3 },
    ],
  },
  {
    id: "gallery",
    title: "گالری تصاویر",
    description: "",
    options: [
      { id: "no-gallery", label: "بدون گالری", price: 0 },
      { id: "static-gallery", label: "🖼️ گالری با عکس‌ها و آلبوم‌های ثابت", price: 2 },
      { id: "dynamic-gallery", label: "📸 گالری قابل تغییر و شخصی‌سازی", price: 3 },
    ],
  },
  {
    id: "blog",
    title: "وبلاگ",
    description: "",
    options: [
      { id: "no-blog", label: "بدون ,بلاگ", price: 0 },
      { id: "static-blog", label: "📰 ٢٤ مقاله‌ی آماده(هر ماه ٢ مقاله)", price: 3 },
      { id: "dynamic-blog", label: "✍️ ٢٤ مقاله‌ی آماده(هر ماه ٢ مقاله) و پنل وبلاگ‌نویسی", price: 5 },
    ],
  },
  {
    id: "responsiveness",
    title: "واکنش‌گرایی",
    description: "",
    options: [
      { id: "mobile-only", label: "📱 نمایش صحیح در گوشی موبایل", price: 0 },
      { id: "responsive", label: "📱💻 نمایش صحیح در تمام اندازه‌ها (گوشی، تبلت، دسکتاپ)", price: 1.5 },
    ],
  },
  {
    id: "bilingual",
    title: "چند زبانه",
    description: "",
    options: [
      { id: "single-language", label: "تک زبانه", price: 0 },
      { id: "bilingual", label: "دو زبانه(فارسی/انگلیسی)", price: 2 },
    ],
  },
  {
    id: "theme",
    title: "تم",
    description: "",
    options: [
      { id: "light", label: "☀️ لایت مُد", price: 0 },
      { id: "dark", label: "🌑 دارک مُد", price: 0 },
      { id: "theme-switcher", label: "☀️🌑💻 لایت مُد، دارک مُد و قابلیت تشخیص تم ترجیحی کاربر", price: 2 },
    ],
  },
  {
    id: "pwa",
    title: "قابلیت نصب و ارسال نوتیفیکیشن",
    description: "",
    options: [
      { id: "no-pwa", label: "بدون قابلیت نصب و ارسال نوتیفیکیشن", price: 0 },
      { id: "notifications", label: "🔔 قابلیت ارسال نوتیفیکیشن", price: 3 },
      { id: "installable-notifications", label: "📱🔔 قابلیت نصب و ارسال نوتیفیکیشن", price: 8 },
    ],
  },
  {
    id: "recruitForm",
    title: "فرم استخدام",
    description: "",
    options: [
      { id: "no-recruit", label: "بدون فرم استخدام", price: 0 },
      { id: "with-recruit", label: "🤝 با فرم استخدام", price: 1 },
    ],
  },
  {
    id: "commentForm",
    title: "فرم نظرات",
    description: "",
    options: [
      { id: "no-comment", label: "بدون فرم نظرات", price: 0 },
      { id: "with-comment", label: "💭 با فرم نظرات", price: 1.5 },
    ],
  },
  {
    id: "waiterSummoning",
    title: "فراخوانی ویتر",
    description: "",
    options: [
      { id: "no-summon", label: "بدون فراخوانی ویتر", price: 0 },
      { id: "with-summon", label: "🖐 امکان فراخوانی ویتر", price: 2 },
    ],
  },
  {
    id: "pageDialog",
    title: "پاپ آپ برای صفحات",
    description: "",
    options: [
      { id: "no-dialog", label: "بدون پاپ‌آپ", price: 0 },
      { id: "with-dialog", label: "📣 با پاپ‌آپ", price: 1 },
    ],
  },
  {
    id: "availabilityToggle",
    title: "موجود/ناموجود کردن آیتم‌ها",
    description: "",
    options: [
      { id: "manual", label: "موجود/ناموجود کردن دستی", price: 0 },
      { id: "scheduled", label: "🕘 موجود/ناموجود کردن دستی و اتوماتیک آیتم‌ها و دسته‌بندی‌ها در ساعات یا روزهای معین", price: 1 },
    ],
  },
];

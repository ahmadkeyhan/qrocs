export interface FeatureOption {
  id: string;
  label: string;
  price: number; // in million tomans
}

export interface Feature {
  id: string;
  title: string;
  options: FeatureOption[];
}

export const INITIAL_PRICE = 10; // 10 million tomans

export const customFeatures: Feature[] = [
  {
    id: "itemImages",
    title: "عکس آیتم‌های منو",
    options: [
      { id: "no-image", label: "بدون عکس", price: 0 },
      { id: "one-image", label: "یک عکس به ازای هر آیتم", price: 2 },
      { id: "three-images", label: "۳ عکس به ازای هر آیتم", price: 3 },
    ],
  },
  {
    id: "landingPage",
    title: "صفحه‌ی فرود",
    options: [
      { id: "no-landing", label: "بدون صفحه‌ی فرود", price: 0 },
      { id: "static-landing", label: "صفحه‌ی فرود ثابت", price: 2 },
      { id: "dynamic-landing", label: "صفحه‌ی فرود قابل شخصی‌سازی", price: 3 },
    ],
  },
  {
    id: "shop",
    title: "کاتالوگ محصولات فروشگاهی",
    options: [
      { id: "no-shop", label: "بدون کاتالوگ", price: 0 },
      { id: "shop-one-image", label: "کاتالوگ با یک عکس به ازای هر محصول", price: 2 },
      { id: "shop-three-images", label: "کاتالوگ با ۳ عکس به ازای هر محصول", price: 3 },
    ],
  },
  {
    id: "gallery",
    title: "گالری",
    options: [
      { id: "no-gallery", label: "بدون گالری", price: 0 },
      { id: "static-gallery", label: "گالری استاتیک", price: 2 },
      { id: "dynamic-gallery", label: "گالری داینامیک(قابل مدیریت از طریق پنل ادمین)", price: 3 },
    ],
  },
  {
    id: "blog",
    title: "بلاگ",
    options: [
      { id: "no-blog", label: "بدون بلاگ", price: 0 },
      { id: "static-blog", label: "بلاگ استاتیک", price: 3 },
      { id: "dynamic-blog", label: "بلاگ داینامیک", price: 5 },
    ],
  },
  {
    id: "responsiveness",
    title: "ریسپانسیو",
    options: [
      { id: "mobile-only", label: "فقط موبایل", price: 0 },
      { id: "responsive", label: "تمام سایزها", price: 1.5 },
    ],
  },
  {
    id: "bilingual",
    title: "چند زبانه",
    options: [
      { id: "single-language", label: "تک زبانه", price: 0 },
      { id: "bilingual", label: "دو زبانه", price: 2 },
    ],
  },
  {
    id: "theme",
    title: "تم",
    options: [
      { id: "light", label: "حالت روشن", price: 0 },
      { id: "dark", label: "حالت تاریک", price: 0 },
      { id: "theme-switcher", label: "انتخاب تم (روشن/تاریک/سیستمی)", price: 2 },
    ],
  },
  {
    id: "pwa",
    title: "PWA و نوتیفیکیشن",
    options: [
      { id: "no-pwa", label: "بدون", price: 0 },
      { id: "notifications", label: "ارسال نوتیفیکیشن", price: 3 },
      { id: "installable-notifications", label: "قابل نصب و ارسال نوتیفیکیشن", price: 8 },
    ],
  },
  {
    id: "recruitForm",
    title: "فرم استخدام",
    options: [
      { id: "no-recruit", label: "بدون فرم استخدام", price: 0 },
      { id: "with-recruit", label: "با فرم استخدام", price: 1 },
    ],
  },
  {
    id: "commentForm",
    title: "فرم نظرات",
    options: [
      { id: "no-comment", label: "بدون فرم نظرات", price: 0 },
      { id: "with-comment", label: "با فرم نظرات", price: 1.5 },
    ],
  },
  {
    id: "waiterSummoning",
    title: "صدا زدن گارسون",
    options: [
      { id: "no-summon", label: "بدون", price: 0 },
      { id: "with-summon", label: "با امکان صدا زدن گارسون", price: 2 },
    ],
  },
  {
    id: "pageDialog",
    title: "دیالوگ برای صفحات",
    options: [
      { id: "no-dialog", label: "بدون دیالوگ", price: 0 },
      { id: "with-dialog", label: "با دیالوگ", price: 1 },
    ],
  },
  {
    id: "availabilityToggle",
    title: "تغییر وضعیت در دسترس بودن",
    options: [
      { id: "manual", label: "تغییر دستی", price: 0 },
      { id: "scheduled", label: "تغییر زمان‌بندی شده", price: 1 },
    ],
  },
];

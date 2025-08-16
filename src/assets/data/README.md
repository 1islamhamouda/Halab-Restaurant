# إدارة بيانات القوائم

## الملفات المتاحة

### 1. `categories.ts`
يحتوي على فئات الطعام الرئيسية:
- المقبلات
- الشوربات  
- الأطباق الرئيسية
- المشويات
- الأرز والبرغل
- السلطات
- الحلويات
- المشروبات

### 2. `menuItems.ts`
يحتوي على جميع المنتجات مقسمة حسب الفئات:

#### هيكل المنتج:
```typescript
{
  id: number,           // معرف فريد
  name: string,         // اسم المنتج
  price: string,        // السعر
  description: string,  // الوصف
  image: string,        // مسار الصورة
  category: string,     // اسم الفئة
  isPopular: boolean    // هل هو منتج شائع
}
```

#### هيكل منتج الجزارة:
```typescript
{
  id: number,           // معرف فريد
  name: string,         // اسم المنتج
  price: string,        // السعر
  description: string,  // الوصف
  image: string,        // مسار الصورة
  category: string,     // اسم الفئة
  weight: string        // الوزن
}
```

## كيفية التعديل

### إضافة منتج جديد:
1. افتح ملف `menuItems.ts`
2. ابحث عن الفئة المطلوبة (مثل المقبلات = 1)
3. أضف المنتج الجديد في المصفوفة:

```typescript
{
  id: 39, // استخدم معرف فريد
  name: "اسم المنتج الجديد",
  price: "25 جنية",
  description: "وصف المنتج",
  image: "/imagesHalab/beaf-27.jpg",
  category: "المقبلات",
  isPopular: false
}
```

### تعديل منتج موجود:
1. ابحث عن المنتج في `menuItems.ts`
2. عدل الحقول المطلوبة
3. احفظ الملف

### إضافة فئة جديدة:
1. أضف الفئة في `categories.ts`:
```typescript
{
  id: 9,
  name: "اسم الفئة الجديدة",
  description: "وصف الفئة",
  image: "/imagesHalab/beaf-28.jpg",
  color: "from-teal-500 to-teal-600"
}
```

2. أضف المنتجات في `menuItems.ts`:
```typescript
9: [
  // منتجات الفئة الجديدة
]
```

## الدوال المساعدة

### `getAllMenuItems()`
تُرجع جميع المنتجات

### `getPopularItems()`
تُرجع المنتجات الشائعة فقط

### `getItemsByCategory(categoryId)`
تُرجع منتجات فئة معينة

### `getButcherItemsByCategory(categoryId)`
تُرجع منتجات الجزارة لفئة معينة

## ملاحظات مهمة

1. **الصور**: تأكد من وجود الصور في مجلد `public/imagesHalab/`
2. **المعرفات**: استخدم معرفات فريدة لكل منتج
3. **الأسعار**: استخدم تنسيق "XX جنية" أو "XX جنية/كجم"
4. **الألوان**: استخدم تنسيق Tailwind CSS للألوان

## أمثلة على التعديل

### تغيير سعر منتج:
```typescript
// قبل
price: "15 جنية"

// بعد  
price: "18 جنية"
```

### إضافة منتج شائع:
```typescript
// قبل
isPopular: false

// بعد
isPopular: true
```

### تغيير صورة:
```typescript
// قبل
image: "/imagesHalab/beaf-1.jpg"

// بعد
image: "/imagesHalab/beaf-30.jpg"
```

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { getItemsByCategory } from '../data/menuItems';

const MenuCategoryDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showProductModal, setShowProductModal] = useState(false);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleBookingClick = () => {
    setShowBookingModal(true);
    // إخفاء الرسالة بعد دقيقة واحدة
    setTimeout(() => {
      setShowBookingModal(false);
    }, 60000); // 60 ثانية = دقيقة واحدة
  };

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setShowProductModal(true);
  };

  const closeProductModal = () => {
    setShowProductModal(false);
    setSelectedProduct(null);
  };

  const categoryId = parseInt(id || '1');
  const category = categories.find(cat => cat.id === categoryId);
  const items = getItemsByCategory(categoryId);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gold"></div>
      </div>
    );
  }

  if (!category || !items.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">الفئة غير موجودة</h1>
          <Link to="/menu" className="text-gold hover:underline">العودة للقائمة</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-gold to-yellow-500 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <Link to="/menu" className="inline-flex items-center text-black mb-4 hover:underline text-sm md:text-base">
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            العودة للقائمة
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4">
            {category.name}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-black/80 max-w-4xl">
            {category.description}
          </p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up cursor-pointer"
              style={{
                animationDelay: `${index * 150}ms`
              }}
              onClick={() => handleProductClick(item)}
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-full font-bold text-sm">
                  {item.price}
                </div>
                {item.isPopular && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    الأكثر طلباً
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  {item.description}
                </p>
                
                {/* Click indicator */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">اضغط لعرض التفاصيل</span>
                  <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-gold to-yellow-500 py-12 md:py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
            جرب طعم حلب الأصيل
          </h2>
          <p className="text-lg md:text-xl text-black/80 mb-6 md:mb-8 max-w-3xl mx-auto">
            احجز طاولتك الآن واستمتع بأشهى الأطباق
          </p>
          <button 
            onClick={handleBookingClick}
            className="bg-black text-gold px-6 md:px-8 py-3 rounded-full font-bold text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            احجز الآن
          </button>
        </div>
      </div>

      {/* Product Detail Modal */}
      {showProductModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in-scale p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button 
                onClick={closeProductModal}
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="space-y-4">
                  <div className="relative">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name}
                      className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute top-4 right-4 bg-gold text-black px-4 py-2 rounded-full font-bold">
                      {selectedProduct.price}
                    </div>
                    {selectedProduct.isPopular && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        الأكثر طلباً
                      </div>
                    )}
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Ingredients Section */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      المكونات
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {getIngredientsForProduct(selectedProduct.name).map((ingredient, index) => (
                        <div key={index} className="flex items-center space-x-2 space-x-reverse">
                          <div className="w-2 h-2 bg-gold rounded-full"></div>
                          <span className="text-gray-700">{ingredient}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="bg-gold/10 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">معلومات إضافية</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>التحضير:</span>
                        <span className="font-semibold">15-20 دقيقة</span>
                      </div>
                      <div className="flex justify-between">
                        <span>الحجم:</span>
                        <span className="font-semibold">طبق متوسط</span>
                      </div>
                      <div className="flex justify-between">
                        <span>السعرات:</span>
                        <span className="font-semibold">350-450 سعرة</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in-scale">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-sm md:max-w-md mx-4 text-center shadow-2xl">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              شكراً لك!
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
              للحجز، يرجى زيارتنا في الفرع
            </p>
            <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">
              ستختفي هذه الرسالة تلقائياً خلال دقيقة
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => setShowBookingModal(false)}
                className="bg-gold text-black px-4 md:px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 text-sm md:text-base"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to get ingredients for each product
const getIngredientsForProduct = (productName: string): string[] => {
  const ingredientsMap: { [key: string]: string[] } = {
    // المقبلات
    "حمص": ["حمص", "طحينة", "ليمون", "زيت زيتون", "ملح", "كمون"],
    "متبل": ["باذنجان مشوي", "طحينة", "ليمون", "ثوم", "زيت زيتون", "ملح"],
    "تبولة": ["برغل", "بقدونس", "طماطم", "بصل", "ليمون", "زيت زيتون"],
    "فتوش": ["خبز محمص", "خضار طازجة", "زيت زيتون", "ليمون", "خل", "ملح"],
    
    // الأطباق الرئيسية
    "كباب حلب": ["لحم ضأن", "بصل", "ثوم", "بهارات حلبية", "زيت زيتون"],
    "شاورما دجاج": ["دجاج", "خبز صاج", "خضار طازجة", "صوص ثوم", "مخللات"],
    "مشاوي": ["لحم ضأن", "دجاج", "خضار مشوية", "أرز", "صوصات"],
    "مندي": ["لحم ضأن", "أرز بسمتي", "بهارات", "زيت", "بصل"],
    
    // الحلويات
    "بقلاوة": ["عجين فيلو", "جوز", "عسل", "زبدة", "ماء ورد"],
    "كنافة": ["عجين كنافة", "جبنة", "عسل", "زبدة", "فستق"],
    "مملح": ["عجين", "جبنة", "زيت زيتون", "زعتر"],
    "حلاوة": ["طحينة", "عسل", "فستق", "ماء ورد"],
    
    // المشروبات
    "عصير برتقال": ["برتقال طازج", "سكر", "ماء"],
    "عصير ليمون": ["ليمون", "سكر", "ماء", "نعناع"],
    "شاي": ["شاي أسود", "سكر", "ماء", "هيل"],
    "قهوة تركية": ["قهوة تركية", "سكر", "ماء", "هيل"],
    
    // السلطات
    "سلطة خضار": ["خيار", "طماطم", "بصل", "زيت زيتون", "ليمون"],
    "سلطة فتوش": ["خبز محمص", "خضار", "زيت زيتون", "خل"],
    "سلطة تبولة": ["برغل", "بقدونس", "طماطم", "ليمون"],
    "سلطة يونانية": ["خيار", "طماطم", "زيتون", "جبنة فيتا"],
    
    // الشوربات
    "شوربة عدس": ["عدس", "بصل", "جزر", "ثوم", "بهارات"],
    "شوربة خضار": ["خضار متنوعة", "مرق دجاج", "أرز", "بهارات"],
    "شوربة طماطم": ["طماطم", "بصل", "ثوم", "كريمة", "بهارات"],
    "شوربة فطر": ["فطر", "بصل", "كريمة", "مرق", "بهارات"],
    
    // الأرز
    "أرز بسمتي": ["أرز بسمتي", "زيت", "ملح", "بهارات"],
    "أرز بالخلطة": ["أرز", "خضار", "لحم", "بهارات", "زيت"],
    "أرز بالدجاج": ["أرز", "دجاج", "بصل", "بهارات", "زيت"],
    "أرز باللحم": ["أرز", "لحم ضأن", "بصل", "بهارات", "زيت"],
    
    // المعجنات
    "مناقيش زعتر": ["عجين", "زعتر", "زيت زيتون", "سمسم"],
    "مناقيش جبنة": ["عجين", "جبنة", "زيت زيتون"],
    "فطائر": ["عجين", "لحم", "بصل", "بهارات"],
    "سمبوسك": ["عجين", "لحم", "بصل", "بهارات", "زيت"]
  };

  return ingredientsMap[productName] || [
    "مكونات طازجة",
    "بهارات حلبية",
    "زيت زيتون",
    "ملح",
    "ليمون",
    "ثوم"
  ];
};

export default MenuCategoryDetail;

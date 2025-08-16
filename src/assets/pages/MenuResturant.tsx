import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import bgFood from '../../../public/imagesHalab/tast.jpg';

const MenuResturant = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleBookingClick = () => {
    setShowBookingModal(true);
    // إخفاء الرسالة بعد دقيقة واحدة
    setTimeout(() => {
      setShowBookingModal(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat w-full animate-fade-in-up"
        style={{ 
          backgroundImage: `url(${bgFood})`,
          minHeight: '60vh',
          height: 'auto'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-16 md:py-24 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 animate-fade-in-scale drop-shadow-lg">
              قائمة الطعام
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in-up stagger-1 drop-shadow-lg leading-relaxed">
              اكتشف أشهى الأطباق الحلبية التقليدية، من المقبلات إلى الحلويات
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={category.id} 
              to={`/menu/${category.id}`}
              className="group"
            >
              <div 
                className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white hover-lift animate-fade-in-up`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 mb-4">
                    {category.description}
                  </p>
                  
                  {/* Arrow Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 group-hover:text-white/70 transition-colors duration-300">
                      اضغط للتصفح
                    </span>
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-gold transition-all duration-300 transform group-hover:translate-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold rounded-2xl transition-all duration-500"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Special Offer Section */}
      <div className="bg-gradient-to-r from-gold to-yellow-500 py-16 animate-fade-in-up stagger-8">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-black mb-4 animate-fade-in-scale">
            عرض خاص
          </h2>
          <p className="text-xl text-black/80 mb-8 animate-fade-in-up stagger-1">
            احصل على خصم 20% على جميع الأطباق الرئيسية
          </p>
          
          <button 
            onClick={handleBookingClick}
            className="bg-black text-gold px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 animate-fade-in-up stagger-2"
          >
            احجز طاولتك الآن
          </button>
          
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in-scale">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              شكراً لك!
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              للحجز، يرجى زيارتنا في الفرع
            </p>
            <p className="text-sm text-gray-500 mb-6">
              ستختفي هذه الرسالة تلقائياً خلال دقيقة
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => setShowBookingModal(false)}
                className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300"
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

export default MenuResturant;        
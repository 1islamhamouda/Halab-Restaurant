import React from 'react';
import { useParams } from 'react-router-dom';
import { getButcherItemsByCategory } from '../data/menuItems';

const MenuButcher: React.FC = () => {
  const { id } = useParams();
  const categoryId = parseInt(id || '1');
  const items = getButcherItemsByCategory(categoryId);

  const categoryNames = {
    1: "لحم البقر",
    2: "لحم الضأن", 
    3: "لحم العجل",
    4: "الدجاج",
    5: "النقانق",
    6: "الكباب"
  };

  const categoryDescriptions = {
    1: "أجود أنواع لحوم البقر الطازجة",
    2: "لحوم ضأن طازجة ومذبوحة حسب الشريعة",
    3: "لحوم عجل طري وعالي الجودة",
    4: "دجاج طازج ومذبوح يومياً",
    5: "نقانق محضرة بالطريقة الحلبية التقليدية",
    6: "كباب محضر بالبهارات الحلبية الأصيلة"
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gold mb-4">منيو الجزارة</h1>
        <p className="text-gray-600 text-lg">أجود أنواع اللحوم الطازجة</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-bold text-lg">{item.price}</span>
               
                
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* معلومات إضافية */}
      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">خدمات الجزارة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">توصيل سريع</h3>
            <p className="text-gray-600">توصيل خلال ساعة واحدة</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">جودة عالية</h3>
            <p className="text-gray-600">لحوم طازجة ومضمونة الجودة</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">خدمة مخصصة</h3>
            <p className="text-gray-600">قطع حسب الطلب</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuButcher;

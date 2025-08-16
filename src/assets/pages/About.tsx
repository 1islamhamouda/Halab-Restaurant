import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaLinks from '../components/SocialMediaLinks';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gold to-yellow-500 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 animate-fade-in-scale">
            عن حلب الشهباء
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-black/80 max-w-3xl mx-auto animate-fade-in-up stagger-1">
            أصالة المذاق الحلبي منذ عام 2010
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">قصة نجاحنا</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                بدأت رحلة مطعم حلب الشهباء في عام 2010، عندما قرر مؤسسنا نقل أصالة المذاق الحلبي 
                إلى طاولاتكم. بدأنا كمطعم صغير في قلب حلب، وبتفانينا في الجودة والأصالة، 
                  أصبحنا اليوم وجهة محببة لعشاق الطعام الحلبي الأصيل في مصر 
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                نفتخر بكوننا جزءاً من تراث مدينة حلب الشهباء في مصر، ونحافظ على الوصفات التقليدية 
                التي تم تناقلها عبر الأجيال، مع إضافة لمسة عصرية تجعل تجربتكم فريدة ومميزة.
              </p>
            </div>
            <div className="relative border-2 border-gray-300 rounded-lg overflow-hidden">
             <video src="/imagesHalab/halabVideo.mp4" autoPlay muted loop className='w-full h-[400px] object-cover rounded-lg shadow-lg border-2 border-gray-300' />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">قيمنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* الأصالة */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">الأصالة</h3>
              <p className="text-gray-600">
                نحافظ على الوصفات التقليدية الحلبية الأصيلة ونقدمها كما كانت منذ عقود
              </p>
            </div>

            {/* الجودة */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">الجودة</h3>
              <p className="text-gray-600">
                نستخدم أجود المكونات الطازجة ونحرص على أعلى معايير الجودة في كل طبق
              </p>
            </div>

            {/* الضيافة */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">الضيافة</h3>
              <p className="text-gray-600">
                نقدم لكم ضيافة عربية أصيلة ونحرص على راحتكم ورضاكم في كل زيارة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">خدماتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* المطعم */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img 
                  src="/imagesHalab/beaf-1.jpg" 
                  alt="المطعم" 
                  className="w-16 h-16 rounded-lg object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">مطعم حلب الشهباء</h3>
                  <p className="text-gray-600">أشهى الأطباق الحلبية التقليدية</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                نقدم مجموعة متنوعة من الأطباق الحلبية الأصيلة، من المقبلات إلى الحلويات، 
                كلها محضرة بأيدي خبراء في الطبخ الحلبي التقليدي.
              </p>
              <Link to="/menu">
                <button className="bg-gold text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">
                  تصفح قائمة الطعام
                </button>
              </Link>
            </div>

            {/* الجزارة */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img 
                  src="/imagesHalab/beaf-2.jpg" 
                  alt="الجزارة" 
                  className="w-16 h-16 rounded-lg object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">جزارة حلب الشهباء</h3>
                  <p className="text-gray-600">أجود أنواع اللحوم الطازجة</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                نقدم أجود أنواع اللحوم الطازجة، من لحم البقر والضأن والدجاج، 
                كلها مختارة بعناية وذبحت بطرق إسلامية صحية.
              </p>
              <Link to="/menubutcher/1">
                <button className="bg-gold text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">
                  تصفح قائمة الجزارة
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gradient-to-r from-gold to-yellow-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">تابعنا على وسائل التواصل</h2>
          <p className="text-black/80 mb-8 max-w-2xl mx-auto">
            تابع آخر أخبارنا وعروضنا الخاصة، وشاهد صور أشهى أطباقنا على وسائل التواصل الاجتماعي
          </p>
          <div className="flex justify-center">
            <SocialMediaLinks variant="contact" iconSize={8} showLabels={true} />
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="bg-gradient-to-r from-gold to-yellow-500 py-8">
        <div className="container mx-auto px-6 text-center">
          <Link to="/" className="inline-flex items-center bg-black text-gold px-6 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

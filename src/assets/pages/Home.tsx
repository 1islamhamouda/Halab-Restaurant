import { Link } from "react-router-dom";
import heroVideo from "../../../public/imagesHalab/food.mp4";
import logo from "../../../public/imagesHalab/Logo.jpg";
import SocialMediaLinks from "../components/SocialMediaLinks";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* خلفية فيديو */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 right-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* المحتوى */}
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-center h-full px-6">
          
          {/* اللوجو والنصوص */}
          <div className="flex flex-col items-center md:items-center text-center md:text-left">
            <img
              src={logo}
              alt="Halab El Shahbaa"
              className="w-60 md:w-72 mb-4 drop-shadow-[0_0_20px_rgba(255,215,0,0.8)] rounded-full"
            />
            <p className="text-gold text-lg md:text-xl font-semibold mb-6">
              أصالة المذاق الحلبي منذ 2010
            </p>

            {/* الأزرار */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link to="/menu">
                <button className="bg-gold text-black px-6 py-3 rounded-full font-bold text-lg hover:bg-transparent hover:text-gold hover:border-2 hover:border-gold transition w-full sm:w-auto">
                  منيو المطعم
                </button>
              </Link>
              <Link to="/menubutcher/1">
                <button className="border-2 border-gold text-gold px-6 py-3 rounded-full font-bold text-lg hover:bg-gold hover:text-black transition w-full sm:w-auto">
                  منيو الجزارة
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Menu Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">خدماتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* المطعم */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/imagesHalab/beaf-1.jpg" 
                  alt="المطعم" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">مطعم حلب الشهباء</h3>
                <p className="text-gray-600 mb-4">أشهى الأطباق الحلبية التقليدية</p>
                <Link to="/menu">
                  <button className="w-full bg-gold text-black py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">
                    تصفح القائمة
                  </button>
                </Link>
              </div>
            </div>

            {/* الجزارة */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/imagesHalab/beaf-2.jpg" 
                  alt="الجزارة" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">جزارة حلب الشهباء</h3>
                <p className="text-gray-600 mb-4">أجود أنواع اللحوم الطازجة</p>
                <Link to="/menubutcher/1">
                  <button className="w-full bg-gold text-black py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">
                    تصفح القائمة
                  </button>
                </Link>
              </div>
            </div>

            {/* التوصيل */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">توصيل سريع</h3>
                <p className="text-gray-600 mb-4">توصيل خلال 30 دقيقة</p>
                <Link to="/contact">
                  <button className="w-full bg-gold text-black py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">
                    اطلب الآن
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">عن حلب الشهباء</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                نحن نفتخر بتقديم أصالة المذاق الحلبي منذ عام 2010. نقدم أجود أنواع اللحوم والأطباق التقليدية 
                التي تميزت بها مدينة حلب الشهباء عبر التاريخ.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                نستخدم أفضل المكونات الطازجة وأحدث التقنيات لضمان جودة عالية في كل طبق نقدمه.
              </p>
              <Link to="/about">
                <button className="bg-gold text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-600 transition">
                  اعرف المزيد
                </button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/imagesHalab/Chef having doubts over white background _ Free….jpeg" 
                alt="الشيف" 
                className="rounded-lg shadow-lg w-full"
              />
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
    </>
  )
}

import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import SocialMediaLinks from '../SocialMediaLinks';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* القسم الرئيسي */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* معلومات المطعم */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/imagesHalab/Logo.jpg" 
                alt="Halab El Shahbaa" 
                className="w-12 h-12 rounded-full"
              />
              <span className="ml-3 font-bold text-xl text-gold">حلب الشهباء</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              نقدم لكم أفضل المأكولات الحلبية الأصيلة منذ عام 2010، 
              نحرص على جودة المكونات وطعم الأصالة في كل طبق.
            </p>
            <SocialMediaLinks variant="footer" iconSize={6} />
          </div>

          {/* روابط سريعة */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-gold transition-colors">الرئيسية</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-gold transition-colors">قائمة الطعام</a></li>
              <li><a href="#desserts" className="text-gray-300 hover:text-gold transition-colors">الحلويات</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-gold transition-colors">عن المطعم</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gold transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* معلومات الاتصال */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gold mb-4">معلومات الاتصال</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaPhone className="text-gold ml-2" />
                <span className="text-gray-300">+963 11 123 4567</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-gold ml-2" />
                <span className="text-gray-300">شارع الجمهورية، حلب، سوريا</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-gold ml-2" />
                <span className="text-gray-300">يومياً: 12:00 - 23:00</span>
              </div>
            </div>
          </div>

          {/* الكيو آر كود */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gold mb-4">احجز طاولتك</h3>
            <div className="bg-white p-4 rounded-lg inline-block">
              {/* مكان للكيو آر كود */}
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm text-center">
                  QR Code<br/>
                  سيتم إضافته هنا
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              امسح الكيو آر كود لحجز طاولتك أو طلب الطعام
            </p>
          </div>

        </div>
      </div>

      {/* حقوق النشر */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 مطعم حلب الشهباء. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              تصميم وتطوير بـ ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
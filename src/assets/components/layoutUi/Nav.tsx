import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/imagesHalab/Logo.jpg" 
                alt="Halab El Shahbaa" 
                className="w-12 h-12 rounded-full"
              />
              <span className={`ml-3 font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-white'
              }`}>
                حلب الشهباء
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse me-10">
            <Link to="/" className={`font-semibold transition-colors duration-300 hover:text-gold ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>
              الرئيسية
            </Link>
            <Link to="/menu" className={`font-semibold transition-colors duration-300 hover:text-gold ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>
              القائمة
            </Link>
            <Link to="/about" className={`font-semibold transition-colors duration-300 hover:text-gold ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>
              عن المطعم
            </Link>
            <Link to="/contact" className={`font-semibold transition-colors duration-300 hover:text-gold ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>
              اتصل بنا
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className={`p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-white hover:bg-white/10' : 'text-white hover:bg-white/10'
            }`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

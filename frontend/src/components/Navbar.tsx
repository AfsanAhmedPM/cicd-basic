import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-serif font-bold text-[#1565C0]"
          >
            AAP
          </button>

          <div className="hidden md:flex items-center gap-8">
            {['about', 'projects', 'skills', 'achievements', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-[#FF9900] transition-colors duration-200 capitalize"
              >
                {section}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[#FF9900] text-white px-6 py-2 rounded-full hover:bg-[#e68a00] transition-colors duration-200"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

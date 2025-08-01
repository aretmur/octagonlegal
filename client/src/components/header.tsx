import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import { useState } from "react";
import ConsultationModal from "./consultation-modal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-navy border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-between">
          {/* Left: Firm Name with Golden Line */}
          <div className="flex items-center space-x-4">
            {/* Golden vertical line */}
            <div className="w-1 h-16 bg-gold"></div>
            
            {/* Firm name and tagline */}
            <div className="flex flex-col">
              <h1 className="text-5xl md:text-6xl font-serif font-normal">
                <span className="text-gold">O</span>
                <span className="text-white">ctagon </span>
                <span className="text-white">L</span>
                <span className="text-white">egal</span>
              </h1>
              <p className="text-sm text-gold italic mt-1">
                Where Law Meets Strength and Stability
              </p>
            </div>
          </div>
          

          
          {/* Right: Phone Number and Navigation */}
          <div className="flex flex-col items-end space-y-2">
            {/* Phone Number with icon and separator line */}
            <div className="flex items-center text-lg font-bold tracking-wide">
              <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <div className="w-px h-6 bg-white mr-3"></div>
              <span className="text-gold">1300 TBC</span>
            </div>
            
            {/* Navigation and Book Consultation */}
            <div className="flex items-center space-x-6">
              <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center space-x-6`}>
                <button 
                  onClick={() => window.scrollTo(0, 0)} 
                  className="text-sm text-white hover:text-gold transition-colors font-medium tracking-wide uppercase"
                >
                  HOME
                </button>
                <button 
                  onClick={() => scrollToSection('practice-areas')} 
                  className="text-sm text-white hover:text-gold transition-colors font-medium tracking-wide uppercase"
                >
                  AREAS OF PRACTICE
                </button>
                <button 
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="text-sm text-white hover:text-gold transition-colors font-medium tracking-wide uppercase"
                >
                  BOOK A CONSULTATION
                </button>
              </nav>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white hover:text-gold"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>
        

      </div>
      
      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />
    </header>
  );
}

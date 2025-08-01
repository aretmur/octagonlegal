import { Facebook, Linkedin, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {

  return (
    <footer id="contact" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Company Info */}
          <div className="ml-1">
            <div className="flex items-center space-x-2 mb-4">
              {/* Left Column - Smaller */}
              <div className="flex flex-col items-center">
                <svg width="18" height="50" viewBox="0 0 24 70" className="text-gold">
                  {/* Top entablature */}
                  <rect x="0" y="0" width="24" height="4" fill="currentColor" />
                  <rect x="2" y="4" width="20" height="3" fill="currentColor" />
                  <rect x="4" y="7" width="16" height="2" fill="currentColor" />
                  
                  {/* Ionic capital with volutes */}
                  <rect x="6" y="9" width="12" height="4" fill="#1e3a8a" />
                  <circle cx="8" cy="11" r="2" fill="currentColor" />
                  <circle cx="16" cy="11" r="2" fill="currentColor" />
                  <path d="M6 11 Q4 10, 4 11 Q4 12, 6 11" fill="currentColor" />
                  <path d="M18 11 Q20 10, 20 11 Q20 12, 18 11" fill="currentColor" />
                  
                  {/* Fluted shaft */}
                  <rect x="8" y="13" width="8" height="48" fill="currentColor" />
                  <line x1="9" y1="13" x2="9" y2="61" stroke="currentColor" strokeWidth="0.5" opacity="0.8" />
                  <line x1="11" y1="13" x2="11" y2="61" stroke="currentColor" strokeWidth="0.5" opacity="0.8" />
                  <line x1="13" y1="13" x2="13" y2="61" stroke="currentColor" strokeWidth="0.5" opacity="0.8" />
                  <line x1="15" y1="13" x2="15" y2="61" stroke="currentColor" strokeWidth="0.5" opacity="0.8" />
                  
                  {/* Base */}
                  <rect x="6" y="61" width="12" height="3" fill="#1e3a8a" />
                  <rect x="2" y="64" width="20" height="3" fill="currentColor" />
                  <rect x="0" y="67" width="24" height="3" fill="currentColor" />
                </svg>
              </div>
              
              {/* Firm Name */}
              <div className="flex flex-col items-center ml-2">
                <h3 className="text-xl font-serif font-normal">
                  <span className="text-gold">O</span>
                  <span className="text-white">ctagon </span>
                  <span className="text-white">L</span>
                  <span className="text-white">egal</span>
                </h3>
                <p className="text-xs font-medium text-gold tracking-widest uppercase mt-0.5">
                  Barristers & Solicitors
                </p>
              </div>
              
              {/* Right Column - Smaller */}
              <div className="flex flex-col items-center ml-2">
                <svg width="18" height="50" viewBox="0 0 24 70" className="text-gold">
                  {/* Top entablature */}
                  <rect x="0" y="0" width="24" height="4" fill="currentColor" />
                  <rect x="2" y="4" width="20" height="3" fill="currentColor" />
                  <rect x="4" y="7" width="16" height="2" fill="currentColor" />
                  
                  {/* Ionic capital with volutes */}
                  <rect x="6" y="9" width="12" height="4" fill="#1e3a8a" />
                  <circle cx="8" cy="11" r="2" fill="currentColor" />
                  <circle cx="16" cy="11" r="2" fill="currentColor" />
                  <path d="M6 11 Q4 10, 4 11 Q4 12, 6 11" fill="currentColor" />
                  <path d="M18 11 Q20 10, 20 11 Q20 12, 18 11" fill="currentColor" />
                  
                  {/* Fluted shaft */}
                  <rect x="8" y="13" width="8" height="48" fill="currentColor" />
                  <line x1="9" y1="13" x2="9" y2="61" stroke="currentColor" strokeWidth="0.5" opacity="0.8" />
                  <line x1="11" y1="13" x2="11" y2="61" stroke="currentColor" strokeWidth="0.5" opacity="0.8" />
                  <line x1="13" y1="13" x2="13" y2="61" stroke="currentColor" strokeWidth="0.5" opacity="0.8" />
                  <line x1="15" y1="13" x2="15" y2="61" stroke="currentColor" strokeWidth="0.5" opacity="0.8" />
                  
                  {/* Base */}
                  <rect x="6" y="61" width="12" height="3" fill="#1e3a8a" />
                  <rect x="2" y="64" width="20" height="3" fill="currentColor" />
                  <rect x="0" y="67" width="24" height="3" fill="currentColor" />
                </svg>
              </div>
            </div>
            
            <div className="flex space-x-4 ml-6">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex justify-end">
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <p className="text-gray-300 flex items-start">
                  <MapPin className="mr-2 text-gold mt-1 flex-shrink-0" size={16} />
                  <span>
                    Address: TBC
                  </span>
                </p>
                <p className="text-gray-300 flex items-center">
                  <Phone className="mr-2 text-gold" size={16} />
                  Phone: 1300 TBC
                </p>
                <p className="text-gray-300 flex items-center">
                  <Mail className="mr-2 text-gold" size={16} />
                  Email: TBC
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Octagon Legal. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-300 hover:text-gold transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-300 hover:text-gold transition-colors">Terms of Service</a>
              <a href="/legal-disclaimer" className="text-gray-300 hover:text-gold transition-colors">Legal Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

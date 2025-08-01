import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const messages = [
    {
      text: "When the ",
      emphasis: "DETAILS",
      textAfter: " matter"
    },
    {
      text: "We have the ",
      emphasis: "CREATIVE SOLUTIONS",
      textAfter: "for complex problems"
    },
    {
      text: "Legal Precision",
      emphasis: "NO COMPROMISES",
      textAfter: "When you need it most"
    }
  ];

  useEffect(() => {
    const advanceMessage = () => {
      setCurrentMessageIndex((prev) => {
        const nextIndex = (prev + 1) % messages.length;
        
        // Set different timing for the next transition
        const isLastMessage = prev === messages.length - 1; // Currently on last message
        const delay = isLastMessage ? 6000 : 3000; // 6 seconds after last message, 3 for others
        
        setTimeout(advanceMessage, delay);
        return nextIndex;
      });
    };

    // Start the first transition after 3 seconds
    const initialTimeout = setTimeout(advanceMessage, 3000);
    
    return () => clearTimeout(initialTimeout);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/lawyers-background.mp4" type="video/mp4" />
          {/* Fallback background if video doesn't load */}
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="min-h-[300px] flex items-center">
            <div className="transition-opacity duration-500" style={{ transform: 'translateY(-35px)' }}>
              {messages[currentMessageIndex].emphasis ? (
                <>
                  <div className="text-2xl lg:text-3xl xl:text-4xl font-sans font-light text-white uppercase tracking-wider leading-none">
                    {messages[currentMessageIndex].text}
                  </div>
                  <div className="text-6xl lg:text-8xl xl:text-9xl font-sans font-black text-white uppercase tracking-tight leading-none -mt-2 whitespace-nowrap">
                    {messages[currentMessageIndex].emphasis}
                  </div>
                  <div className="text-2xl lg:text-3xl xl:text-4xl font-sans font-light text-white uppercase tracking-wider leading-none -mt-2">
                    {messages[currentMessageIndex].textAfter}
                  </div>
                </>
              ) : (
                <>
                  <div className="text-6xl lg:text-8xl xl:text-9xl font-sans font-black text-white uppercase tracking-tight leading-none">
                    {messages[currentMessageIndex].text}
                  </div>
                  <div className="text-2xl lg:text-3xl xl:text-4xl font-sans font-light text-white uppercase tracking-wider leading-none -mt-2">
                    {messages[currentMessageIndex].textAfter}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Bus, Heart, Trophy, Clock } from "lucide-react";

const valueProps = [
  {
    icon: Bus,
    title: "Experienced Legal Counsel",
    description: "Our team brings decades of combined experience across all practice areas."
  },
  {
    icon: Heart,
    title: "Client-Centred Approach",
    description: "We prioritise your needs and provide personalised legal strategies."
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Our track record demonstrates consistent success for our clients."
  },
  {
    icon: Clock,
    title: "Responsive Service",
    description: "We believe in open communication and timely responses to all inquiries."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="pt-20 pb-12 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl p-8">
          <p className="text-center text-lg text-gray-700 mb-8 max-w-4xl mx-auto" style={{ transform: 'translateY(4px)' }}>
            Octagon Legal provides exceptional service and unmatched expertise for your most challenging legal matters.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-navy rounded-full mb-4">
                  <prop.icon className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-serif font-bold text-navy mb-3">{prop.title}</h4>
                <p className="text-gray-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

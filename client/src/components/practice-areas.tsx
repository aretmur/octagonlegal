import { Card, CardContent } from "@/components/ui/card";
import { Scale, Users, Building, Briefcase, Shield } from "lucide-react";

const practiceAreas = [
  {
    icon: Scale,
    title: "Criminal Law",
    subtitle: "",
    services: [
      "Police interviews & bail applications",
      "Summary and indictable offences",
      "Family violence (both sides - IVOs & breach defence)",
      "Sexual offences",
      "White-collar and fraud matters",
      "Traffic offences",
      "Drink and Drug driving",
      "Drug offences",
      "Appeals and sentence reductions"
    ]
  },
  {
    icon: Users,
    title: "Family Law",
    subtitle: "",
    services: [
      "Divorce & separation",
      "Parenting disputes and consent orders",
      "Property and asset division",
      "Urgent recovery, relocation & risk matters",
      "Intervention orders linked to family violence",
      "Binding financial agreements",
      "Child support disputes"
    ]
  },
  {
    icon: Building,
    title: "Immigration Law",
    subtitle: "",
    services: [
      "Visa refusals, cancellations (s 501, s 116), character concerns",
      "AAT and Court appeals",
      "Partner, Parent & Family visas",
      "Skilled migration & Employer-sponsored visas",
      "Ministerial intervention and exceptional circumstances cases",
      "Bridging visas and unlawful stay regularisation",
      "Citizenship applications, refusals and appeals"
    ]
  },
  {
    icon: Briefcase,
    title: "Workplace &\nMisconduct Law",
    subtitle: "",
    services: [
      "Toxic workplace complaints",
      "Unfair dismissal and show cause responses",
      "Discrimination, bullying, sexual harassment",
      "Whistleblower protections",
      "Policy review + legal health checks",
      "Internal dispute resolution",
      "Executive-level conduct advice"
    ]
  },
  {
    icon: Shield,
    title: "Crisis Intervention &\nHigh-Risk Disputes",
    subtitle: "This service is available\nvia direct phone contact only.",
    services: [
      "PSC interviews, allegations & disciplinary hearings",
      "Suspensions, stand-downs & show cause responses",
      "Strategic resignation or payout negotiations",
      "Representation during systemic reviews",
      "Support for members under media scrutiny",
      "Legal navigation of WorkCover or mental health exits"
    ]
  }
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">Our Practice Areas</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our team of experienced Barristers and Solicitors provides exceptional legal counsel across specialized practice areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {practiceAreas.slice(0, 3).map((area, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-lg transition-shadow h-[520px]">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-navy rounded-full mb-3">
                    <area.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy mb-2 whitespace-pre-line">{area.title}</h3>
                  <p className="text-gray-600 italic text-sm whitespace-pre-line">{area.subtitle}</p>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-semibold text-navy mb-2">Core Services:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    {area.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <span className="text-gold mr-2 flex-shrink-0">•</span>
                        <span className="leading-tight">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {practiceAreas.slice(3).map((area, index) => (
            <Card key={index + 3} className="bg-white shadow-sm hover:shadow-lg transition-shadow h-[420px]">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-navy rounded-full mb-3">
                    <area.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy mb-2 whitespace-pre-line">{area.title}</h3>
                  <p className={`text-sm whitespace-pre-line ${area.title.includes('Crisis Intervention') ? 'text-red-600 font-bold' : 'text-gray-600 italic'}`}>{area.subtitle}</p>
                </div>
                
                <div className="flex-1 overflow-hidden">
                  <h4 className="font-semibold text-navy mb-2">Core Services:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    {area.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <span className="text-gold mr-2 flex-shrink-0">•</span>
                        <span className="leading-tight">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

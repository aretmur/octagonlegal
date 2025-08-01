import { useState } from "react";
import { X } from "lucide-react";
import williamBillingsImage from "@assets/IMG_4851_1753919805052.jpg";
import friznikBonyImage from "@assets/ChatGPT Image Jul 31, 2025, 02_27_18 PM_1753936048598.png";
// Using URL approach for JPG file compatibility
const aretMuradyanImage = "/attached_assets/IMG_4238 2_1753919866092.JPG";

const teamMembers = [
  {
    name: "William Billings",
    title: "Principal",
    legalTitle: "Barrister & Solicitor",
    subtitle: "Criminal, Admin, and Workplace Law",
    image: williamBillingsImage,
    description: "William Billings doesn't just \"handle\" legal matters — he dismantles them. Known for his forensic attention to detail and calculated execution, William thrives in the pressure-cooker environment of high-stakes litigation.\n\nWhether it's cross-examining a hostile witness, dismantling a sloppy prosecution brief, or pulling apart a bureaucratic decision at tribunal, William brings sharp legal intellect and controlled aggression to every matter. He doesn't waste words. He doesn't waste time. His courtroom style is deliberate, composed, and quietly lethal.\n\nWilliam cut his teeth at Midwinters Lawyers, where he worked across complex files in criminal defence, administrative law, immigration, and employment disputes. His ability to distil chaos into clean strategy has earned him a reputation as the lawyer you want when the system's stacked against you.\n\nFast. Focused. Relentless. If you're facing real heat — William doesn't flinch. He leans in."
  },
  {
    name: "Aret Muradyan",
    title: "Co-Founder",
    legalTitle: "Barrister & Solicitor",
    subtitle: "Criminal, Crisis Intervention & Misconduct",
    image: aretMuradyanImage,
    description: "Aret brings over 30 years of operational and legal experience spanning law enforcement, prosecutions, and high-risk governance. As a former Victoria Police Sergeant, he understands the justice system from both sides — the frontline and the courtroom — with deep expertise in incident response, duty of care, and institutional accountability.\n\nHe specialises in criminal defence, police discipline, and legal issues affecting first responders, emergency services, and public-sector personnel. Aret is frequently sought for complex misconduct investigations, use-of-force reviews, mental health–related charges, and trauma-informed defence strategies.\n\nKnown for his tactical mindset and unshakable courtroom presence, Aret cuts through bureaucratic resistance and builds bulletproof defence strategies for clients facing serious allegations or systemic pressure. He's not here to play politics — he's here to win your case and protect your reputation.\n\nIf your matter involves criminal charges, law enforcement conflict, or workplace risk within a government or uniformed agency, Aret is the lawyer you want in your corner — calm under pressure, relentless in defence."
  },
  {
    name: "Friznik Bony",
    title: "Associate",
    legalTitle: "Barrister & Solicitor",
    subtitle: "Family & Immigration Law",
    image: friznikBonyImage,
    description: "Friznik Bony leads the Family and Immigration Law practice at Octagon Legal, bringing deep expertise, strategic calm, and unwavering client advocacy to two of the most sensitive areas in law. With years of experience navigating the emotional and procedural complexities of migration cases and family disputes, Friznik is known for turning legal obstacles into structured outcomes.\n\nWhether you're facing a high-conflict parenting matter, a property division dispute, or a visa refusal that could separate your family, Friznik brings precision, empathy, and tactical clarity. His grasp of immigration and family legislation — including cross-border custody, partner visas, protection claims, and judicial review — is both practical and cutting-edge.\n\nClients rely on Friznik for his steady guidance, cultural intelligence, and ability to manage pressure. His method is deliberate: assess, plan, act — with no wasted motion. He's calm in court, clear in advice, and relentless in achieving results.\n\nIf your future, your family, or your residency is on the line — Friznik is the name you want leading your case."
  },
  {
    name: "Estelle Costabile",
    title: "Legal Assistant",
    legalTitle: "",
    subtitle: "",
    image: "/attached_assets/IMG_5154_1753926849979.jpg",
    description: "Estelle is a Legal Assistant at Octagon Legal and a current Bachelor of Laws student, bringing a sharp intellect, disciplined workflow, and a genuine passion for justice to her role. She supports the firm's criminal, family, and immigration law practices with a strong foundation in legal research, case preparation, and client communication.\n\nEstelle plays a vital role in ensuring matters are organised, deadlines are met, and clients are kept informed and supported throughout their legal journey. Her ability to absorb complex legal material and translate it into practical, actionable support makes her a standout among emerging legal professionals.\n\nDriven, detail-focused, and grounded in real-world legal experience, Estelle is steadily building a future as a capable and confident lawyer — starting with every case file she touches today."
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <section id="our-team" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">The Team That Stands Behind You</h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg">
            Our team of highly skilled Barristers and Solicitors are admitted to practice in the High Court of Australia through to local jurisdictions. We bring decades of combined experience and a commitment to excellence in every case.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 max-w-4xl mx-auto justify-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center max-w-sm mx-auto">
              <div className="mb-6">
                <img 
                  src={member.image}
                  alt={`${member.name} - ${member.title}`}
                  className={`w-64 h-64 object-cover rounded-lg mx-auto shadow-lg border-4 border-gray-200 cursor-pointer hover:border-gold transition-colors ${
                    member.name === "Aret Muradyan" ? "object-center" : "object-top"
                  }`}
                  style={member.name === "Aret Muradyan" ? { 
                    objectPosition: "center",
                    transform: "translateY(6px)"
                  } : {}}
                  onClick={() => setSelectedMember(member)}
                />
              </div>
              <button 
                onClick={() => setSelectedMember(member)}
                className="text-2xl font-serif font-bold text-navy mb-2 hover:text-gold transition-colors cursor-pointer"
              >
                {member.name}
              </button>
              <p className="text-gold font-semibold mb-1">{member.title}</p>
              {member.legalTitle && (
                <p className="text-gold font-bold text-base mb-1">{member.legalTitle}</p>
              )}
              {member.subtitle && (
                <p className="text-gray-700 font-medium text-sm mb-3 italic">{member.subtitle}</p>
              )}
              <button 
                onClick={() => setSelectedMember(member)}
                className="text-gold font-medium text-sm hover:text-navy transition-colors underline"
              >
                Read Full Profile →
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 relative">
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
                
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={selectedMember.image}
                      alt={`${selectedMember.name} - ${selectedMember.title}`}
                      className={`w-48 h-48 object-cover rounded-lg shadow-lg border-4 border-gray-200 ${
                        selectedMember.name === "Aret Muradyan" ? "object-center" : "object-top"
                      }`}
                      style={selectedMember.name === "Aret Muradyan" ? { 
                        objectPosition: "center",
                        transform: "translateY(6px)"
                      } : {}}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-serif font-bold text-navy mb-2">{selectedMember.name}</h3>
                    <p className="text-gold font-semibold mb-1 text-lg">{selectedMember.title}</p>
                    {selectedMember.legalTitle && (
                      <p className="text-gold font-bold text-lg mb-2">{selectedMember.legalTitle}</p>
                    )}
                    {selectedMember.subtitle && (
                      <p className="text-gray-700 font-medium text-base mb-4 italic">{selectedMember.subtitle}</p>
                    )}
                  </div>
                </div>
                
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed text-base text-justify whitespace-pre-line">
                    {selectedMember.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

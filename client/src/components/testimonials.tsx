const testimonials = [
  {
    quote: "I was facing serious charges that could've ended my career. The team at Octagon Legal dissected the case, found procedural flaws, and got the charges dropped. A tactical genius in the courtroom.",
    name: "JACOB R.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    quote: "When I thought I'd never see my kids again, Octagon Legal stepped in. The team was compassionate, fierce, and relentless in securing shared custody. They restored my hope.",
    name: "SAMIRA H.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    quote: "I had been underpaid and mistreated at work for over a year. No one would take the case — until Octagon's lawyers did. We didn't just win. We sent a message.",
    name: "DANIEL T.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    quote: "Facing deportation after 12 years in Australia was devastating. Octagon Legal lodged my appeal with precision and care. I'm now a permanent resident. I owe them everything.",
    name: "LIANG W.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    quote: "After being wrongfully arrested, I needed more than a lawyer. I needed someone who believed me. The team at Octagon Legal didn't just fight — they dismantled the case.",
    name: "MARCUS V.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    quote: "I felt silenced during my divorce. Octagon Legal changed that. They gave me a voice in mediation and secured a just property split and full protection order.",
    name: "EMMA J.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    quote: "I was unfairly terminated for standing up to discrimination. Octagon's lawyers didn't hesitate. Within weeks, I had a settlement and my dignity intact.",
    name: "NAVEEN P.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    quote: "We tried everything to get my mother's partner visa through. Everyone told us no — until Octagon Legal said, 'Leave it with us.' Six months later, she's here.",
    name: "ARPI K.",
    rating: "⭐⭐⭐⭐⭐"
  }
];

export default function Testimonials() {
  return (
    <section className="pt-6 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Real stories from real clients who trusted us with their most important legal matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-lg border-l-4 border-gold hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-navy text-xs tracking-wide">
                    {testimonial.name}
                  </p>
                </div>
                <div className="text-yellow-400 text-sm">
                  {testimonial.rating}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
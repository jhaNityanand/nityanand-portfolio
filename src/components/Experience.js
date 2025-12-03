export default function Experience() {
  const items = [
    {
      company: "Cubiz Infotech",
      title: "Senior PHP Developer",
      location: "Surat, India",
      period: "May 2023 – Present",
      bullets: [
        "Lead developer for Laravel-based projects and API-driven applications.",
        "Integrated multiple payment gateways including Stripe, Instamojo, Tilled.",
        "Built automation workflows using n8n, connected with Superchat & webhook-driven processes.",
        "Developed AI-powered applications integrating OpenAI, Groq & OpenRouter via custom APIs.",
        "Implemented Docker-based development & deployment environments.",
        "Built multiple Lovable-based applications with prompt-driven workflows."
      ]
    },
    {
      company: "Kareliya Infotech",
      title: "Junior PHP Developer",
      location: "Surat, India",
      period: "Nov 2021 – Feb 2023",
      bullets: [
        "Worked on Core PHP, CodeIgniter, and legacy system optimization.",
        "Developed new features, database optimizations, and admin panels.",
        "Participated in full-cycle development including deployment & maintenance."
      ],
    },
    {
      company: "Self Web Development",
      title: "For College Project",
      location: "Surat, India",
      period: "2020 – 2021",
      bullets: [
        "E-commerce Website (Based on Core PHP and MySQL, Ajax, and Laravel Framework).",
        "Skilled at working independently and collaboratively in a team environment."
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/50 to-white/30 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            My journey in software development and automation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hidden md:block"></div>
            
            <div className="space-y-6 sm:space-y-8">
              {items.map((item, index) => (
                <div key={index} className="relative pl-0 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-6 top-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white border-3 sm:border-4 border-primary-500 shadow-lg hidden md:block z-10"></div>
                  
                  <div className="glass rounded-2xl p-5 sm:p-6 md:p-8 card-hover">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                      <div className="flex-1 min-w-0">
                        <div className={`inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-white text-xs sm:text-sm font-semibold mb-2 sm:mb-3 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 shadow-lg`}>
                          {item.period}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 break-words">{item.company}</h3>
                        <p className="text-base sm:text-lg font-semibold text-primary-600 mb-2">{item.title}</p>
                        <p className="text-gray-600 text-sm sm:text-base flex items-center gap-2">
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="break-words">{item.location}</span>
                        </p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                          <span className="text-primary-500 mt-1.5 flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="flex-1 break-words">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

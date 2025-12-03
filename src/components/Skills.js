export default function Skills() {
  const skills = [
    { 
      title: "Backend Development", 
      items: "Laravel, Core PHP, CodeIgniter, Kohana, Node.js (basic)",
      gradient: "from-blue-500 to-cyan-500",
      icon: "💻"
    },
    { 
      title: "Automation Tools", 
      items: "n8n, Superchat, Lovable",
      gradient: "from-purple-500 to-pink-500",
      icon: "⚙️"
    },
    { 
      title: "API Integrations", 
      items: "Stripe, Tilled, Instamojo, WhatsApp Cloud API, Facebook, Twitter/X, Instagram, Webhooks",
      gradient: "from-green-500 to-emerald-500",
      icon: "🔌"
    },
    { 
      title: "LLM Integrations", 
      items: "OpenAI, Groq, OpenRouter, Anthropic (basic)",
      gradient: "from-orange-500 to-red-500",
      icon: "🤖"
    },
    { 
      title: "Frontend", 
      items: "HTML, CSS, JavaScript, jQuery, Bootstrap, Vue.js (basic), React (basic)",
      gradient: "from-indigo-500 to-blue-500",
      icon: "🎨"
    },
    { 
      title: "DevOps", 
      items: "Docker, basic CI/CD workflows",
      gradient: "from-teal-500 to-cyan-500",
      icon: "🐳"
    },
    { 
      title: "Databases", 
      items: "MySQL, MongoDB, Supabase, SQL",
      gradient: "from-yellow-500 to-orange-500",
      icon: "🗄️"
    },
    { 
      title: "Tools", 
      items: "Git, Postman, Composer, npm",
      gradient: "from-pink-500 to-rose-500",
      icon: "🛠️"
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Core Skills
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Technologies and tools I work with to build amazing solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass rounded-2xl p-5 sm:p-6 card-hover group cursor-pointer h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${skill.gradient} flex items-center justify-center text-2xl sm:text-3xl mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                {skill.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                {skill.items}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

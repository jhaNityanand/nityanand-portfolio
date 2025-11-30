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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Core Skills
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass rounded-2xl p-6 card-hover group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skill.gradient} flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {skill.items}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

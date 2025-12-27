export default function ProjectsGrid() {
  const projectCategories = [
    {
      title: "Lovable / Automation Projects",
      gradient: "from-purple-500 to-pink-500",
      projects: [
        {
          title: "Guildboard Connect",
          link: "https://guildboard-connect-create.lovable.app/",
          stack: "Lovable, Supabase",
          desc: "An automated onboarding workflow that uses Lovable prompts and n8n automations to create seamless user flows and streamline business processes."
        },
        {
          title: "Apply Flow Forge (Admin)",
          link: "https://apply-flow-forge.lovable.app/admin",
          stack: "Lovable, Supabase, API, XML Parsing, Webhooks",
          desc: "Comprehensive admin dashboard for flow management with integrated webhooks and payment test flows for efficient workflow automation."
        },
        {
          title: "Candidate Hub",
          link: "https://hub.wonderkind.com",
          stack: "Lovable, Supabase, API, n8n, Superchat, Firecrawl, Brightdata",
          desc: "Internal candidate routing engine and ATS for Wonderkind operators."
        },
        {
          title: "Kleo Chic Closet",
          link: "https://kleo-chic-closet.lovable.app/",
          stack: "Lovable, Supabase",
          desc: "Modern e-commerce platform with automated inventory management and AI-powered product recommendations."
        },
        {
          title: "Variabudget Dashboard",
          link: "https://variabudget-display.lovable.app/dashboard",
          stack: "Lovable, Analytics",
          desc: "Advanced budgeting and financial tracking dashboard with real-time analytics and automated reporting features."
        },
        {
          title: "Tempo Time Visualizer",
          link: "https://tempo-time-visualizer-app.lovable.app/dashboard",
          stack: "Lovable, Supabase, Data Visualization",
          desc: "Interactive time tracking and visualization tool with automated data processing and insightful analytics."
        },
        {
          title: "Sailsy.ai",
          link: "https://sailsy.ai/",
          stack: "Lovable, Supabase, OpenAi, Operrouter, Groq, AI",
          desc: "AI-powered platform leveraging advanced machine learning algorithms for intelligent business solutions."
        },
        {
          title: "Local Art Finder",
          link: "https://local-art-finder.lovable.app/",
          stack: "Lovable, Supabase",
          desc: "Discover and connect with local artists through an intuitive platform with automated matching and recommendation system."
        }
      ]
    },
    {
      title: "Laravel Projects",
      gradient: "from-blue-500 to-cyan-500",
      projects: [
        {
          title: "AhevalNest",
          link: "https://ahevalnest.tarasvat.co.in/",
          stack: "Laravel, MySQL, API, webhooks",
          desc: "Machine data tracking dashboard that collects runtime data, generates comprehensive reports, and sends automated notifications for industrial monitoring."
        },
        {
          title: "ListOfRecruiters",
          link: "https://listofrecruiters.com/",
          stack: "Laravel, Database",
          desc: "Professional recruitment platform connecting job seekers with top recruiters, featuring advanced search and matching algorithms."
        },
        {
          title: "PowerGauge Hub",
          link: "https://hub.powergaugepro.com/",
          stack: "Laravel, MySQL, GitHub API, GOOGLE API, Gitea API, S3 Bucket",
          desc: "Centralized hub for power monitoring and analytics with real-time data visualization and automated alert systems."
        },
        {
          title: "Shreeji Ratnam",
          link: "https://www.shreejiratnam.com/",
          stack: "Laravel, MySQL, Excel parse, E-commerce",
          desc: "Elegant e-commerce platform for jewelry and precious stones with secure payment integration and inventory management."
        },
        {
          title: "ExamTube",
          link: "https://examtube.in/",
          stack: "Laravel, MySQL, API",
          desc: "Comprehensive online exam portal with question management, automated grading, detailed result reports, and student analytics."
        }
      ]
    },
    {
      title: "Other Web Projects",
      gradient: "from-green-500 to-emerald-500",
      projects: [
        {
          title: "ChurchSpring",
          link: "https://churchspring.com",
          stack: "Web Platform",
          desc: "Complete church management platform with event scheduling, member management, and community engagement features."
        },
        {
          title: "Churchspring Admin Site",
          link: "https://site.churchspring.review",
          stack: "Admin Dashboard, Khona, MySQL, API, Google Recaptcha",
          desc: "Administrative interface for managing church operations, content, and member communications efficiently."
        },
        {
          title: "Peter & Clark",
          link: "https://www.peterandclark.com",
          stack: "Business Website, Symfony, MySQL, API, MemoQ",
          desc: "Professional business website with modern design, showcasing services and facilitating client engagement."
        },
        {
          title: "Livestream (Video Calling)",
          link: "https://livestream.churchspring.review/sfu/r7",
          stack: "WebRTC, Video Streaming",
          desc: "Real-time video calling and streaming platform with SFU architecture for high-quality, low-latency communication."
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 bg-clip-text text-transparent">
              Selected Projects
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            A showcase of my work across automation, Laravel development, and web platforms
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {projectCategories.map((category, catIndex) => (
            <div key={catIndex} className="w-full">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className={`h-0.5 sm:h-1 flex-1 bg-gradient-to-r ${category.gradient} rounded-full w-full sm:w-auto`}></div>
                <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent whitespace-nowrap px-2`}>
                  {category.title}
                </h3>
                <div className={`h-0.5 sm:h-1 flex-1 bg-gradient-to-r ${category.gradient} rounded-full w-full sm:w-auto`}></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {category.projects.map((project, projIndex) => (
                  <a
                    key={projIndex}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-2xl p-5 sm:p-6 card-hover group block h-full flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-3 sm:mb-4 gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-300 break-words">
                          {project.title}
                        </h4>
                        <div className={`inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${category.gradient} text-white shadow-md whitespace-nowrap`}>
                          {project.stack}
                        </div>
                      </div>
                      <div className="ml-2 flex-shrink-0">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow line-clamp-3">
                      {project.desc}
                    </p>
                    <div className="mt-4 flex items-center text-primary-600 text-sm font-semibold group-hover:gap-2 transition-all duration-300">
                      <span>View Project</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackToTop from "../../components/BackToTop";

export const metadata = {
  title: "Resume — Nityanand Jha",
  description: "Download Nityanand Jha's resume - Senior PHP & Automation Developer",
};

export default function Resume() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="container mx-auto max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                My Resume
              </span>
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Download my resume or view the summary below
            </p>
          </div>

          {/* Download Card */}
          <div className="glass rounded-2xl p-8 mb-8 text-center card-hover relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-transparent rounded-full -ml-12 -mb-12 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Download PDF Resume</h2>
              <p className="text-gray-600 mb-8 text-lg">Get a complete copy of my resume in PDF format</p>
              <a
                href="/resume/resume-nityanand.pdf"
                download
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:from-primary-600 hover:via-primary-700 hover:to-accent-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Resume Summary */}
          <div className="glass rounded-2xl p-8 space-y-6">
            {/* Professional Summary */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"></span>
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Experienced Senior PHP & Automation Developer with 4+ years of expertise in Laravel, Core PHP, API development, AI-integrated systems, and automation workflows. Skilled in integrating payment gateways, social media APIs, and LLM models (OpenAI, Groq, OpenRouter). Adept at building Lovable AI-powered applications, n8n workflows, and scalable backend systems using Docker. Strong problem-solving skills and a proven track record of delivering high-quality solutions.
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"></span>
                Work Experience
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-500 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Senior PHP Developer</h3>
                      <p className="text-primary-600 font-semibold">Cubiz Infotech</p>
                    </div>
                    <span className="text-gray-600 font-medium mt-1 sm:mt-0">May 2023 – Present</span>
                  </div>
                  <p className="text-gray-600 mb-2">Surat, India</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1.5">•</span>
                      <span>Lead developer for Laravel-based projects and API-driven applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1.5">•</span>
                      <span>Integrated multiple payment gateways including Stripe, Instamojo, Tilled</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1.5">•</span>
                      <span>Built automation workflows using n8n, connected with Superchat & webhook-driven processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1.5">•</span>
                      <span>Developed AI-powered applications integrating OpenAI, Groq & OpenRouter via custom APIs</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-accent-500 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Junior PHP Developer</h3>
                      <p className="text-accent-600 font-semibold">Kareliya Infotech</p>
                    </div>
                    <span className="text-gray-600 font-medium mt-1 sm:mt-0">Nov 2021 – Feb 2023</span>
                  </div>
                  <p className="text-gray-600 mb-2">Surat, India</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-500 mt-1.5">•</span>
                      <span>Worked on Core PHP, CodeIgniter, and legacy system optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-500 mt-1.5">•</span>
                      <span>Developed new features, database optimizations, and admin panels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-500 mt-1.5">•</span>
                      <span>Participated in full-cycle development including deployment & maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"></span>
                Education
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-4 border-l-4 border-primary-500">
                  <h3 className="font-bold text-gray-800 mb-1">Master of Computer Applications (MCA)</h3>
                  <p className="text-gray-600">VNSGU, Surat • 2023</p>
                </div>
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-4 border-l-4 border-accent-500">
                  <h3 className="font-bold text-gray-800 mb-1">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-gray-600">VNSGU, Surat • 2022</p>
                </div>
              </div>
            </section>

            {/* Core Skills */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"></span>
                Core Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Backend Development</h4>
                  <p className="text-gray-600 text-sm">Laravel, Core PHP, CodeIgniter, Kohana, Node.js</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Automation Tools</h4>
                  <p className="text-gray-600 text-sm">n8n, Superchat, Lovable</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">API Integrations</h4>
                  <p className="text-gray-600 text-sm">Stripe, Tilled, Instamojo, WhatsApp, Facebook, Twitter/X</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">LLM Integrations</h4>
                  <p className="text-gray-600 text-sm">OpenAI, Groq, OpenRouter, Anthropic</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

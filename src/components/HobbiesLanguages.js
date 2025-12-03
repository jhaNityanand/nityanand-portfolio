export default function HobbiesLanguages() {
  const hobbies = [
    "Listening music",
    "Playing Cricket"
  ];

  const languages = [
    {
      name: "Maithili",
      proficiency: 90,
      isNative: true
    },
    {
      name: "Hindi",
      proficiency: 90
    },
    {
      name: "English",
      proficiency: 70
    },
    {
      name: "Gujarati",
      proficiency: 60
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/50 to-white/30 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Hobbies Section */}
          <div className="glass rounded-2xl p-6 sm:p-8 card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-600">Hobbies</h2>
            </div>
            <div className="space-y-3">
              {hobbies.map((hobby, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0"></div>
                  <p className="text-gray-700 text-base sm:text-lg">{hobby}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div className="glass rounded-2xl p-6 sm:p-8 card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm0-6h.01M21 10.5V14" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-teal-600">Languages</h2>
            </div>
            <div className="space-y-5">
              {languages.map((language, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-800 text-base sm:text-lg">
                        {language.name}
                      </span>
                      {language.isNative && (
                        <span className="px-2 py-0.5 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                          Native
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-semibold text-teal-600">{language.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${language.proficiency}%` }}
                    ></div>
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


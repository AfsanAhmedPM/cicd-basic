import { Cloud, Shield, Brain } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'Cloud Architecture', icon: Cloud, progress: 90, color: '#FF9900' },
    { name: 'Security', icon: Shield, progress: 85, color: '#1565C0' },
    { name: 'AI Engineering', icon: Brain, progress: 80, color: '#FF9900' },
  ];

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-[#FFF8F0] to-[#FFE8D6] relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full animate-pulse">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-sm font-medium">Available for opportunities</span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight">
            Afsan Ahmed P.M
          </h1>

          <h2 className="text-3xl lg:text-4xl font-serif text-[#1565C0]">
            AI & Cloud Engineer
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
            Architecting scalable cloud solutions on AWS, automating security workflows,
            and building intelligent applications. Passionate about infrastructure as code,
            serverless computing, and AI-powered automation.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-[#FF9900] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#e68a00] transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-[#1565C0] text-[#1565C0] px-8 py-4 rounded-full font-semibold hover:bg-[#1565C0] hover:text-white transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="space-y-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-in-right"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#FF9900]/20 to-[#1565C0]/20">
                      <Icon className="w-6 h-6" style={{ color: skill.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                      <div className="mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out animate-progress"
                          style={{
                            width: `${skill.progress}%`,
                            backgroundColor: skill.color,
                          }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-2xl font-bold" style={{ color: skill.color }}>
                      {skill.progress}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-500 hover:text-[#FF9900] transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

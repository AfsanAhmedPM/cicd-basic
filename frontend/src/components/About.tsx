import { Server, Lock, Cpu, Award } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Server,
      title: 'Cloud Architecture',
      description: 'Expert in designing scalable AWS infrastructure with ECS, Lambda, and serverless patterns.',
    },
    {
      icon: Lock,
      title: 'Security Automation',
      description: 'Building automated security monitoring and incident response systems with AWS services.',
    },
    {
      icon: Cpu,
      title: 'AI Engineering',
      description: 'Developing intelligent applications using AI APIs, FastAPI, and modern ML frameworks.',
    },
    {
      icon: Award,
      title: 'IEEE Published',
      description: 'Published research at international conferences, contributing to academic knowledge.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-serif font-bold text-gray-900 mb-16 text-center">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
            <p className="animate-fade-in">
              As an AI & Cloud Engineer, I specialize in architecting robust, scalable solutions
              on Amazon Web Services. My expertise spans across containerization, serverless
              computing, and infrastructure automation using Terraform and modern DevOps practices.
            </p>

            <p className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              Security is at the core of everything I build. I develop automated security
              monitoring systems using CloudTrail, EventBridge, and Lambda to ensure proactive
              threat detection and response. My approach combines cloud-native security tools
              with custom automation to create resilient infrastructures.
            </p>

            <p className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              Beyond cloud infrastructure, I'm passionate about building AI-powered applications
              that solve real-world problems. From email intelligence systems to automated
              security audit tools, I leverage cutting-edge AI technologies to create innovative
              solutions.
            </p>

            <p className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              My work has been recognized at the IEEE international level, and I continuously
              push the boundaries of what's possible with cloud computing and artificial
              intelligence. I believe in writing clean, maintainable code and building systems
              that scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="bg-gradient-to-br from-[#FFF8F0] to-white p-6 rounded-2xl border border-gray-100 hover:border-[#FF9900] hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 bg-gradient-to-br from-[#FF9900] to-[#1565C0] rounded-xl inline-block mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

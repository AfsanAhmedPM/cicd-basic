import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'afsanahmedpm@gmail.com',
      link: 'mailto:afsanahmedpm@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/afsan-ahmed-pm-27aa10288/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@AlastairBss',
      link: 'https://github.com/AlastairBss',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-5xl font-serif font-bold leading-tight">
              Let's build something great
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              I'm always interested in hearing about new projects, opportunities, and
              collaborations. Whether you need cloud infrastructure, security automation,
              or AI-powered solutions, let's connect and discuss how we can work together.
            </p>

            <a
              href="mailto:afsanahmedpm@gmail.com"
              className="inline-block bg-[#FF9900] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#e68a00] transition-all duration-200 hover:shadow-lg hover:shadow-[#FF9900]/50 hover:scale-105"
            >
              Send an Email
            </a>
          </div>

          <div className="space-y-6">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#FF9900] hover:bg-white/10 transition-all duration-300 hover:scale-105 group animate-slide-in-right"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-4 bg-gradient-to-br from-[#FF9900] to-[#1565C0] rounded-xl group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm mb-1">{contact.label}</p>
                    <p className="text-white font-semibold group-hover:text-[#FF9900] transition-colors">
                      {contact.value}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-[#FF9900] group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© 2024 Afsan Ahmed P.M. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

import { Award, Briefcase, ExternalLink } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Award,
      title: 'IEEE Paper Published',
      organization: '9th International Conference',
      location: 'Muthayammal College',
      description: 'Published research paper at an international IEEE conference, contributing to academic knowledge in technology and engineering.',
      certificateUrl: 'https://drive.google.com/file/d/1UaT7Cqws6sDo05PaaWebk011N_gvpSql/view?usp=sharing',
    },
    {
      icon: Briefcase,
      title: 'Web Development Internship',
      organization: 'Izeon Innovative Pvt Ltd',
      location: 'Professional Experience',
      description: 'Completed comprehensive web development internship, gaining hands-on experience in modern web technologies and professional development practices.',
      certificateUrl: 'https://drive.google.com/file/d/1Y7NBY7DVwfcPC7hctaTJUEpPn_RLQmZC/view?usp=sharing',
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">
            Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognition and professional milestones
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.title}
                className="bg-gradient-to-br from-[#FFF8F0] to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#FF9900] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-[#FF9900] to-[#1565C0] rounded-xl">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-[#1565C0] font-semibold">
                      {achievement.organization}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {achievement.location}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {achievement.description}
                </p>

                <a
                  href={achievement.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#FF9900] font-semibold hover:text-[#e68a00] transition-colors group"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

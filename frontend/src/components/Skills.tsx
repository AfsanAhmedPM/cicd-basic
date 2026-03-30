export default function Skills() {
  const skillCategories = [
    {
      title: 'AWS Cloud',
      skills: [
        'EC2',
        'Lambda',
        'ECS',
        'S3',
        'RDS',
        'CloudTrail',
        'EventBridge',
        'CloudWatch',
        'SNS',
        'IAM',
        'SSM',
        'ALB',
        'VPC',
      ],
      color: '#FF9900',
    },
    {
      title: 'DevOps & IaC',
      skills: [
        'Terraform',
        'Docker',
        'CI/CD',
        'GitHub Actions',
        'Linux',
        'Bash',
      ],
      color: '#1565C0',
    },
    {
      title: 'AI & Dev',
      skills: [
        'Python',
        'FastAPI',
        'Streamlit',
        'AI APIs',
        'Gmail API',
        'OAuth 2.0',
        'Boto3',
      ],
      color: '#FF9900',
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern cloud and AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF9900]/10 animate-slide-in-up"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1 h-12 rounded-full"
                  style={{ backgroundColor: category.color }}
                ></div>
                <h3 className="text-2xl font-serif font-bold">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 group animate-fade-in"
                    style={{ animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms` }}
                  >
                    <div
                      className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150"
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200 group-hover:translate-x-1 transform">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

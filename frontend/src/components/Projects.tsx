import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Containerized Microservices on AWS ECS Fargate',
      description: 'Production-grade microservices architecture deployed on AWS ECS Fargate with automated CI/CD pipeline, containerized using Docker for scalability and reliability.',
      tags: ['ECS Fargate', 'Docker', 'CI/CD'],
      link: 'https://github.com/AlastairBss/cloud-microservices-deployment',
      type: 'github',
    },
    {
      title: 'Highly Available AWS Web App',
      description: 'Enterprise-level web application infrastructure built with Terraform, featuring Application Load Balancer and Auto Scaling groups for high availability and fault tolerance.',
      tags: ['Terraform', 'ALB', 'Auto Scaling'],
      link: 'https://github.com/AlastairBss/aws-webapp-terraform',
      type: 'github',
    },
    {
      title: 'Cloud Security Monitoring & Auto Response',
      description: 'Automated security monitoring system using CloudTrail, Lambda, and EventBridge to detect and respond to security events in real-time with SSM automation.',
      tags: ['CloudTrail', 'Lambda', 'EventBridge', 'SSM'],
      link: 'https://github.com/AlastairBss/Cloud-Security-Automation',
      type: 'github',
    },
    {
      title: 'Inbox Intelligence — AI Email Organizer',
      description: 'Intelligent email organization system powered by AI, built with FastAPI and Streamlit. Automatically categorizes and prioritizes emails using Gmail API and OAuth 2.0.',
      tags: ['FastAPI', 'AI', 'Gmail API', 'Streamlit'],
      link: 'https://inbox-intelligence.streamlit.app/',
      type: 'demo',
    },
    {
      title: 'IAM Security Audit Tool',
      description: 'Automated IAM security auditing tool that analyzes permissions, detects misconfigurations, and sends alerts via SNS. Built with Lambda and CloudWatch for continuous monitoring.',
      tags: ['Lambda', 'IAM', 'CloudWatch', 'SNS'],
      link: 'https://github.com/AlastairBss/IAM-Audit-Tool',
      type: 'github',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-[#FFF8F0] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of cloud infrastructure, security automation, and AI projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#FF9900] animate-slide-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-[#FF9900]/10 to-[#1565C0]/10 rounded-xl">
                  {project.type === 'github' ? (
                    <Github className="w-6 h-6 text-[#1565C0]" />
                  ) : (
                    <ExternalLink className="w-6 h-6 text-[#FF9900]" />
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-[#1565C0] transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gradient-to-r from-[#FF9900]/10 to-[#1565C0]/10 text-[#1565C0] text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#FF9900] font-semibold hover:text-[#e68a00] transition-colors group"
              >
                {project.type === 'github' ? 'View on GitHub' : 'Live Demo'}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

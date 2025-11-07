import { SocialLinks } from '@/components/SocialLinks';
import { Code2, Shield, Terminal, Zap } from 'lucide-react';

const Whoami = () => {
  const skills = [
    { icon: Code2, name: 'Full-Stack Development', desc: 'React, TypeScript, Node.js, Python' },
    { icon: Shield, name: 'Cybersecurity', desc: 'Security research, penetration testing' },
    { icon: Terminal, name: 'DevOps', desc: 'CI/CD, Docker, Cloud infrastructure' },
    { icon: Zap, name: 'Problem Solving', desc: 'Algorithm design, system architecture' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-black text-primary mb-8 font-orbitron">whoami</h1>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            I'm st4rburg3r, a software engineer and security researcher with a passion for building 
            secure, scalable systems. My journey in tech started with curiosity about how things work 
            under the hood, and it's evolved into a career focused on creating meaningful solutions.
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            Currently, I work on full-stack applications with a strong emphasis on security and 
            performance. I believe in writing clean, maintainable code and sharing knowledge with 
            the community through blogs, open-source contributions, and mentoring.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to 
            open-source projects, or diving deep into cybersecurity research. I'm always learning, 
            always building, and always curious.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary">
                    <skill.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            Feel free to reach out if you want to collaborate on a project, discuss tech, 
            or just say hello.
          </p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Whoami;

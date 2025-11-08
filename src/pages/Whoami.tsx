import { SocialLinks } from '@/components/SocialLinks';
import { Code2, Shield, Terminal, Zap } from 'lucide-react';

const Whoami = () => {
  const skills = [
    { icon: Shield, name: 'Offensive Security', desc: 'Web app pentesting, network exploitation, privilege escalation' },
    { icon: Code2, name: 'Automation Engineering', desc: 'Building low-code security workflows & integrations' },
    { icon: Terminal, name: 'Security Tools', desc: 'Nmap, Burp Suite, Metasploit, Wireshark, Hydra, JohnTheRipper' },
    { icon: Code2, name: 'Automation & Scripting', desc: 'Python, Bash, workflow automation using n8n & iAgents' },
    { icon: Zap, name: 'Blue Team Ops', desc: 'SIEM analysis, threat detection, incident response' },
    { icon: Shield, name: 'System & Network Hardening', desc: 'Linux security, firewall configuration, access control' },
    { icon: Terminal, name: 'Monitoring & Intelligence', desc: 'Log analysis, alert correlation, IOC tracking' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-black text-primary mb-8 font-orbitron">$ cat whoami</h1>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            Coming from Mumbai, I'm a junior security engineer with hands-on experience in web app and network penetration testing. I'm fluent with using tools like Nmap, Burp Suite, and Metasploit for vulnerability assessment and exploitation in homelab environments.
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            I have practical experience in SOC analysis and threat detection using Splunk and ELK Stack. My work includes building sample dashboards to spot brute-force attempts and malware patterns in event logs. I've also conducted digital forensics tasks, from analyzing disk images with Autopsy to running memory analysis in Volatility for intrusion investigations.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Recently, I've been exploring the intersection of AI and cybersecurity — automating security checks, building small AI scripts to summarize vulnerability reports, and experimenting with machine learning for smarter threat detection.
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

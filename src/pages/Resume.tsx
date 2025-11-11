import { Download, ExternalLink } from 'lucide-react';
import { SocialLinks } from '@/components/SocialLinks';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'st4rburg3r-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-black text-primary mb-8 font-orbitron">$ history | grep career</h1>

        <div className="space-y-8">
          {/* Download Section */}
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Download Resume</h2>
            <p className="text-muted-foreground mb-6">
              Get a PDF copy of my resume with full professional experience, skills, and education.
            </p>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Download size={20} />
              Download PDF Resume
            </button>
          </div>

          {/* Quick Overview */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">$ head -n 10 resume.txt</h2>

            <div className="space-y-6">
              {/* Experience */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Experience</h3>
                <p className="text-muted-foreground text-sm">
                  Hands-on experience with SIEM tools like Splunk — building dashboards, correlation searches, and
                  alerting systems for security event monitoring. Skilled in analyzing logs and identifying potential
                  threats across systems and networks.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Cybersecurity',
                    'Splunk',
                    'SIEM',
                    'Python',
                    'Networking',
                    'Automation',
                    'Linux',
                    'Security Monitoring',
                    'Incident Response',
                    'Cloud Security'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary rounded text-sm text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Education</h3>
                <p className="text-muted-foreground text-sm">
                  B.Tech in Electronics and Computer Science with Honours in Cybersecurity — graduating in 2027.
                </p>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Projects</h3>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <div>
                    <strong>Web Application Pentesting</strong>
                    <p>
                      Performed reconnaissance, scanning, exploitation, and privilege escalation on simulated web targets.
                      Gained experience identifying OWASP Top 10 vulnerabilities and creating remediation documentation.
                    </p>
                  </div>

                  <div>
                    <strong>Junior Penetration Testing Pipeline</strong>
                    <p>
                      Designed automated workflows for recon and exploitation using Bash and Python. Focused on improving
                      efficiency and consistency in vulnerability assessment.
                    </p>
                  </div>

                  <div>
                    <strong>SOC Level 1 — Threat Detection</strong>
                    <p>
                      Focused on log analysis, alert triage, and security event correlation. Utilized Splunk and ELK Stack
                      for detecting brute-force and privilege escalation attempts.
                    </p>
                  </div>

                  <div>
                    <strong>Splunk SIEM Dashboard</strong>
                    <p>
                      Built interactive dashboards to visualize system activity and detect anomalies. Created custom alerts
                      for unauthorized access, lateral movement, and privilege escalation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Interests</h3>
                <p className="text-muted-foreground text-sm">
                  Cybersecurity, AI-driven automation, security research, and writing about technology. 
                  Also passionate about coffee, running, and exploring neuroscience and biohacking.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-4">
              Interested in collaborating or discussing cybersecurity and automation? Reach out through any of these platforms:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.linkedin.com/in/trupti-vibhute-182835274/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-card border border-border rounded-lg p-4 hover:border-primary transition-all text-center group"
              >
                <span className="text-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-2">
                  LinkedIn
                  <ExternalLink size={16} />
                </span>
              </a>
              <a
                href="https://medium.com/@trupti.v19625"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-card border border-border rounded-lg p-4 hover:border-primary transition-all text-center group"
              >
                <span className="text-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-2">
                  Medium
                  <ExternalLink size={16} />
                </span>
              </a>
              <a
                href="https://instagram.com/st0pgeeking"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-card border border-border rounded-lg p-4 hover:border-primary transition-all text-center group"
              >
                <span className="text-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-2">
                  Instagram
                  <ExternalLink size={16} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

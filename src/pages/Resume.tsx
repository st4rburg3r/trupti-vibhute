import { Download, ExternalLink } from 'lucide-react';
import { SocialLinks } from '@/components/SocialLinks';

const Resume = () => {
  const handleDownload = () => {
    // Create a simple placeholder PDF content
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
        <h1 className="text-5xl font-black text-primary mb-8 font-orbitron">resume</h1>

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
            <h2 className="text-2xl font-bold text-foreground mb-6">Quick Overview</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Experience</h3>
                <p className="text-muted-foreground text-sm">
                  5+ years in full-stack development with focus on React, TypeScript, Node.js, 
                  and cloud infrastructure. Strong background in cybersecurity and secure application development.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 
                    'AWS', 'Security', 'CI/CD', 'Git'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary rounded text-sm text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Education</h3>
                <p className="text-muted-foreground text-sm">
                  Bachelor's in Computer Science with additional certifications in cybersecurity 
                  and cloud architecture.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Interests</h3>
                <p className="text-muted-foreground text-sm">
                  Open-source contributions, security research, technical writing, and mentoring 
                  aspiring developers.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-4">
              Interested in working together? Reach out through any of these platforms:
            </p>
            <SocialLinks />
          </div>

          {/* Additional Links */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-card border border-border rounded-lg p-4 hover:border-primary transition-all text-center group"
            >
              <span className="text-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-2">
                View GitHub Profile
                <ExternalLink size={16} />
              </span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-card border border-border rounded-lg p-4 hover:border-primary transition-all text-center group"
            >
              <span className="text-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-2">
                View LinkedIn Profile
                <ExternalLink size={16} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

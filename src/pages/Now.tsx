import { Clock, Code, BookOpen, Target } from 'lucide-react';

const Now = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-black text-primary mb-8 font-orbitron">now</h1>

        <p className="text-muted-foreground mb-12 leading-relaxed">
          This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="cyber-link text-primary">now page</a>, 
          inspired by Derek Sivers. It's a snapshot of what I'm currently focused on.
        </p>

        <div className="space-y-6">
          {/* Current Projects */}
          <section className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-primary" size={24} />
              <h2 className="text-2xl font-bold text-foreground">Current Projects</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">→</span>
                <span>Building a security automation toolkit for web application testing</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span>
                <span>Contributing to open-source React component libraries</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span>
                <span>Writing technical blog posts about modern web development</span>
              </li>
            </ul>
          </section>

          {/* Learning */}
          <section className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-primary" size={24} />
              <h2 className="text-2xl font-bold text-foreground">Currently Learning</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">→</span>
                <span>Advanced TypeScript patterns and design systems</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span>
                <span>Cloud security and infrastructure hardening</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span>
                <span>WebAssembly and performance optimization techniques</span>
              </li>
            </ul>
          </section>

          {/* Focus Areas */}
          <section className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-primary" size={24} />
              <h2 className="text-2xl font-bold text-foreground">Focus Areas</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">→</span>
                <span>Writing clean, maintainable code with comprehensive tests</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span>
                <span>Building secure applications with security-first mindset</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span>
                <span>Sharing knowledge through blog posts and mentoring</span>
              </li>
            </ul>
          </section>

          {/* Last Updated */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4">
            <Clock size={16} />
            <span>Last updated: January 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Now;

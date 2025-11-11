import { Clock, Cpu, Shield, BookOpen } from 'lucide-react';

const Now = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-black text-primary mb-8 font-orbitron">now</h1>

        <p className="text-muted-foreground mb-12 leading-relaxed">
          This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="cyber-link text-primary">now page</a>, 
          inspired by Derek Sivers — a quick snapshot of what I’m focused on right now.
        </p>

        <div className="space-y-6">
          {/* Current Focus */}
          <section className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-primary" size={24} />
              <h2 className="text-2xl font-bold text-foreground">Current Focus</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">→</span>
                <span>Building and experimenting with AI automation pipelines using tools like n8n and LLM agents</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">→</span>
                <span>Exploring how AI can enhance cybersecurity — from intelligent recon to automated reporting</span>
              </li>
            </ul>
          </section>

          {/* Reading */}
          <section className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-primary" size={24} />
              <h2 className="text-2xl font-bold text-foreground">Currently Reading</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">→</span>
                <span>
                  <em>Why We Sleep</em> by Matthew Walker — learning how sleep impacts cognition, focus, and long-term performance
                </span>
              </li>
            </ul>
          </section>

          {/* Last Updated */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4">
            <Clock size={16} />
            <span>Last updated: November 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Now;

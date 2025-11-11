import { Shield, Cpu, Coffee, BookOpen } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      items: [
        'Penetration testing, CTFs, and vulnerability research',
        'Network and web application security',
        'Secure system architecture and automation',
        'Constantly learning exploit development and red team tactics'
      ]
    },
    {
      icon: Cpu,
      title: 'Automation & AI Engineering',
      items: [
        'Building and automating workflows with tools like n8n',
        'Exploring AI agents, LLM fine-tuning, and RAG systems',
        'Developing intelligent automation pipelines for productivity',
        'Experimenting with open-source AI models and self-hosted setups'
      ]
    },
    {
      icon: Coffee,
      title: 'Lifestyle & Performance',
      items: [
        'Running, cycling, and outdoor training',
        'Pilates and bodyweight strength work',
        'Specialty coffee — pour-over, AeroPress, and espresso experiments',
        'Hiking, minimalism, and finding flow in movement'
      ]
    },
    {
      icon: BookOpen,
      title: 'Reading & Mindset',
      items: [
        'Neuroscience, psychology, and behavioral science',
        'Biohacking and performance optimization — Andrew Huberman is the GOAT',
        'Non-fiction and mindset development reads',
        'Esoteric philosophy — books like *The Kybalion* and related works'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-black text-primary mb-8 font-orbitron">interests</h1>

        <p className="text-muted-foreground mb-12 leading-relaxed">
          
          Trying to learn about multible things- from cybersecurity and AI systems 
          to neuroscience, coffee, and everything that sharpens the mind and body.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {interests.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary">
                  <category.icon size={24} />
                </div>
                <h2 className="text-xl font-bold text-foreground">
                  {category.title}
                </h2>
              </div>
              
              <ul className="space-y-2">
                {category.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interests;

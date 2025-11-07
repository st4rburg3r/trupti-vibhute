import { Code, Shield, BookOpen, Music, Coffee, Gamepad2 } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      icon: Code,
      title: 'Software Engineering',
      items: [
        'Full-stack development with modern frameworks',
        'System design and architecture',
        'Clean code principles and best practices',
        'Open-source contributions'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      items: [
        'Security research and vulnerability analysis',
        'Penetration testing and ethical hacking',
        'Cryptography and secure protocols',
        'Security automation tools'
      ]
    },
    {
      icon: BookOpen,
      title: 'Learning & Growth',
      items: [
        'Technical books and documentation',
        'Online courses and certifications',
        'Tech conferences and meetups',
        'Teaching and mentoring others'
      ]
    },
    {
      icon: Music,
      title: 'Creative Outlets',
      items: [
        'Music production and sound design',
        'Photography and visual arts',
        'Writing technical and creative content',
        'UI/UX design experiments'
      ]
    },
    {
      icon: Coffee,
      title: 'Lifestyle',
      items: [
        'Specialty coffee and brewing methods',
        'Fitness and outdoor activities',
        'Minimalism and productivity systems',
        'Travel and exploring new cultures'
      ]
    },
    {
      icon: Gamepad2,
      title: 'Gaming',
      items: [
        'Strategy and puzzle games',
        'Indie game development',
        'Retro gaming and emulation',
        'Game design analysis'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-black text-primary mb-8 font-orbitron">interests</h1>

        <p className="text-muted-foreground mb-12 leading-relaxed">
          Things I'm passionate about, constantly learning, or just enjoy spending time on. 
          Technology is at the core, but there's more to life than code.
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

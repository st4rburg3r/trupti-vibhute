import { Link } from 'react-router-dom';
import { Home, User, BookOpen, FileText, Heart, Clock, List, FileDown } from 'lucide-react';

const Slashes = () => {
  const routes = [
    {
      path: '/',
      name: 'Home',
      icon: Home,
      description: 'Main landing page with introduction and quick navigation'
    },
    {
      path: '/whoami',
      name: 'Whoami',
      icon: User,
      description: 'About me, skills, background, and contact information'
    },
    {
      path: '/blogs',
      name: 'Blogs',
      icon: BookOpen,
      description: 'Latest blog posts from Medium with RSS integration'
    },
    {
      path: '/notes',
      name: 'Notes',
      icon: FileText,
      description: 'Quick thoughts, tips, and short-form content'
    },
    {
      path: '/interests',
      name: 'Interests',
      icon: Heart,
      description: 'Things I care about, hobbies, and passions'
    },
    {
      path: '/now',
      name: 'Now',
      icon: Clock,
      description: 'What I\'m currently working on and learning'
    },
    {
      path: '/slashes',
      name: 'Slashes',
      icon: List,
      description: 'This page - a sitemap of all available routes'
    },
    {
      path: '/resume',
      name: 'Resume',
      icon: FileDown,
      description: 'Download my resume and professional information'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-black text-primary mb-8 font-orbitron">/slashes</h1>

        <p className="text-muted-foreground mb-12 leading-relaxed">
          All the routes available on this site. Think of this as a sitemap, but more fun.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <route.icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {route.name}
                    </h2>
                    <code className="text-xs text-muted-foreground font-mono">
                      {route.path}
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {route.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-card border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold text-foreground mb-2">Navigation Tips</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary">→</span>
              <span>Use the header menu to navigate between pages</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">→</span>
              <span>All links show a red underline on hover</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">→</span>
              <span>The hamburger menu works on mobile devices</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slashes;

import { Link } from 'react-router-dom';
import { SocialLinks } from '@/components/SocialLinks';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black text-primary mb-4 font-orbitron">
            st4rburg3r &gt;
          </h1>
          <p className="text-muted-foreground text-lg mb-8">Tech | Coding | Life</p>
          <SocialLinks />
        </div>

        {/* Welcome Text */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-foreground text-lg leading-relaxed mb-6">
            Welcome to my digital space. I'm a developer passionate about building elegant solutions 
            to complex problems. This is where I document my journey through code, technology, and life.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I write about software engineering, cybersecurity, and the intersection of technology 
            with everyday life. Whether you're here to read my latest thoughts, check out my projects, 
            or just browse around—feel free to explore.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            to="/blogs"
            className="group bg-card border border-border rounded-lg p-6 hover:border-primary transition-all"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
              Latest Blogs
              <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
            </h3>
            <p className="text-muted-foreground text-sm">
              Read my latest thoughts on tech, coding practices, and industry insights
            </p>
          </Link>

          <Link
            to="/whoami"
            className="group bg-card border border-border rounded-lg p-6 hover:border-primary transition-all"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
              About Me
              <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
            </h3>
            <p className="text-muted-foreground text-sm">
              Learn more about my background, skills, and what drives me
            </p>
          </Link>

          <Link
            to="/notes"
            className="group bg-card border border-border rounded-lg p-6 hover:border-primary transition-all"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
              Quick Notes
              <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
            </h3>
            <p className="text-muted-foreground text-sm">
              Short-form thoughts and quick tips on various topics
            </p>
          </Link>

          <Link
            to="/now"
            className="group bg-card border border-border rounded-lg p-6 hover:border-primary transition-all"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
              What I'm Doing Now
              <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
            </h3>
            <p className="text-muted-foreground text-sm">
              Current projects, learning goals, and focus areas
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

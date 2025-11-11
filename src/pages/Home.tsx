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
          <p className="text-muted-foreground text-lg mb-8">Talks | Projects | Digital wanderings</p>
          {/* <SocialLinks /> */}
        </div>

{/* Welcome Text */}
        <div className="space-y-8 max-w-2xl">
          <div>
            <p className="text-foreground leading-relaxed mb-4">
              Hi, I'm <span className="highlight">Trupti</span>. I work with tech, build things, and share what I learn along the way.
            </p>
            <p className="text-foreground leading-relaxed">
              I write <Link to="/blogs" className="highlight">longer pieces</Link> and <Link to="/notes" className="highlight">quick notes</Link>. Here's <Link to="/now" className="highlight">what I'm doing now</Link> and things that <Link to="/interests" className="highlight">interest me</Link>.
            </p>
          </div>

          <div>
            <p className="text-foreground leading-relaxed">
              See my <Link to="/whoami" className="highlight">"about"</Link> page.
            </p>
          </div>

          <div>
            <p className="text-foreground leading-relaxed">
              Random <Link to="/slashes" className="highlight">commands</Link> I use.
            </p>
          </div>

          <div>
            <p className="text-foreground leading-relaxed">
              Check my <Link to="/resume" className="highlight">resume</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

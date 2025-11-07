import { useEffect, useState } from 'react';
import { ExternalLink, Calendar } from 'lucide-react';

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
}

const Blogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@trupti.v19625'
        );
        const data = await response.json();
        
        if (data.status === 'ok') {
          setPosts(data.items.slice(0, 5));
        } else {
          setError('Failed to fetch blog posts');
        }
      } catch (err) {
        setError('Error loading blog posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const stripHtml = (html: string) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-black text-primary mb-8 font-orbitron">blogs</h1>

        <p className="text-muted-foreground mb-12 leading-relaxed">
          Here are my latest posts from Medium. I write about software development, 
          cybersecurity, and lessons learned from building things.
        </p>

        {loading && (
          <div className="text-center text-muted-foreground py-12">
            Loading posts...
          </div>
        )}

        {error && (
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <p className="text-muted-foreground mb-4">{error}</p>
            <p className="text-sm text-muted-foreground">
              Check out my{' '}
              <a
                href="https://medium.com/@trupti.v19625"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-link text-primary"
              >
                Medium profile
              </a>{' '}
              directly.
            </p>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <p className="text-muted-foreground">No posts available yet.</p>
          </div>
        )}

        <div className="space-y-6">
          {posts.map((post, index) => {
            const excerpt = stripHtml(post.description).substring(0, 200) + '...';
            
            return (
              <article
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all group"
              >
                <div className="md:flex">
                  {post.thumbnail && (
                    <div className="md:w-48 md:flex-shrink-0">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar size={14} />
                      <time>{formatDate(post.pubDate)}</time>
                    </div>
                    
                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {excerpt}
                    </p>
                    
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      Read on Medium
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://medium.com/@trupti.v19625"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 cyber-link text-primary"
          >
            View all posts on Medium
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
// nae nigga nae nae nigg nigga nae nae
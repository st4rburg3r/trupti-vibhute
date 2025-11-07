import { FileText } from 'lucide-react';

const Notes = () => {
  const notes = [
    {
      id: 1,
      title: 'Mastering AI Prompts',
      date: '2025-01-10',
      content: 'Learning to craft effective prompts is becoming essential. Key principles: be specific, provide context, iterate on results, and understand model limitations.'
    },
    {
      id: 2,
      title: 'Security First Development',
      date: '2025-01-05',
      content: 'Security should never be an afterthought. Input validation, proper authentication, rate limiting, and regular security audits are non-negotiable in modern apps.'
    },
    {
      id: 3,
      title: 'React Performance Tips',
      date: '2024-12-28',
      content: 'Quick wins: useMemo/useCallback for expensive computations, React.lazy for code splitting, virtualization for long lists, and avoiding inline functions in render.'
    },
    {
      id: 4,
      title: 'TypeScript Best Practices',
      date: '2024-12-20',
      content: 'Strict mode is your friend. Use interfaces for object shapes, avoid "any", leverage union types, and let TypeScript infer types when possible.'
    },
    {
      id: 5,
      title: 'Git Workflow Efficiency',
      date: '2024-12-15',
      content: 'Small, focused commits with clear messages. Use branches for features, rebase to keep history clean, and always review your own PR before requesting reviews.'
    }
  ];

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
        <h1 className="text-5xl font-black text-primary mb-8 font-orbitron">notes</h1>

        <p className="text-muted-foreground mb-12 leading-relaxed">
          Quick thoughts, tips, and observations. These are shorter than blog posts but 
          still worth sharing.
        </p>

        <div className="space-y-4">
          {notes.map((note) => (
            <article
              key={note.id}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1">
                  <FileText size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-semibold text-foreground">
                      {note.title}
                    </h2>
                    <time className="text-xs text-muted-foreground">
                      {formatDate(note.date)}
                    </time>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {note.content}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;

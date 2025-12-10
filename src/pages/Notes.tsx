import { FileText } from 'lucide-react';
export const notes = [
  {
    id: 1,
    title: 'Switched to Linux Mint',
    date: '2025-06-17',
    content:
      'finally ditched Windows for Linux Mint and its wayyy smoother than I expected. No random updates, no unnecessary widgets popping on my lockscreen, no bloat. Spent the day customizing the look and i absolutely love it. Its fast, stable, and crazy customizable. You can make it look cute, edgy, or sleek. Thats what I love and hate about Linux — youre in control of everything, for better or worse. But honestly, that freedom hits different.',
  },
  {
    id: 2,
    title: 'Automating with n8n',
    date: '2025-07-05',
    content:
      'Stumbled across an n8n youtube tutorial and life doesnt feel the same after that lol. Its wild how much you can automate with it. I  Set up a workflow that grabs tech news and drops it straight into my Discord server (not a big deal but i feel like GOD after doing this, let me have my moment). I am also working on a workflow for adding new notes to this page. Thinking about how i can exploit n8n next.Once you start automating (exploiting n8n), doing things manually just feels dumb (you get lazier).',
  },
  {
    id: 3,
    title: 'Deactivating Socials? Yae or nae',
    date: '2025-10-06',
    content:
      'Thinking about pulling the plug on socials for a bit I mean they`re great for finding solid tech content, but man, they drain focus fast. I actually got the idea to switch to Linux Mint from scrolling through reels and stumbled into the whole “ricing” scene, people turning their setups into literal art. Now it`s time to stop just watching and actually build my own. Might go dark for a week, cut the noise, and see if my productivity (and desktop) finally level up.',
  },
  {
    id: 4,
    title: 'Cold Shower + Coffee Hack',
    date: '2025-11-04',
    content:
      'Cold showers followed by a hot black coffee is honestly, the best combo Ive found. Ts gets me locked in fast.',
  },
  {
    id: 5,
    title: 'First internship — cybersecurity',
    date: '2025-12-10',
    content:
      "I got my first internship in cybersecurity and I can't wait to get started! I gave two interviews and got accepted for both, which peaked my confidence. Interview was not that tough, mostly about my projects and what i know so far. Yeah but anyways, super excited to learn a lot of new stuff and make new connections with my peers.",
  },
];

// ------------------------------------------------------------

const Notes = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-black text-primary mb-8 font-orbitron">
          $ git log --notes
        </h1>

        <p className="text-muted-foreground mb-12 leading-relaxed">
          Quick brain-dumps, random thoughts, and stuff I’m messing with. Shorter
          than blogs, but still worth a peek.
        </p>

        <div className="space-y-4">
          {notes
            .slice()
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((note) => (
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

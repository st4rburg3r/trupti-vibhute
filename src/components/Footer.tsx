export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  return (
    <footer className="border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} st4rburg3r • Updated {currentMonth} {currentYear} • Latest: Building with React & TypeScript
        </p>
      </div>
    </footer>
  );
};

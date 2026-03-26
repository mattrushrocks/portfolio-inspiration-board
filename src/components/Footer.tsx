const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-sm text-muted-foreground font-body">© 2026 Portfolio. All rights reserved.</span>
      <div className="flex gap-6 text-sm text-muted-foreground font-body">
        <a href="https://www.linkedin.com/in/matt-rushforth-8aa512332/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
        <a href="https://www.instagram.com/_mattrush4th_/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
      </div>
    </div>
  </footer>
);

export default Footer;
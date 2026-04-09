export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b-2 border-foreground">
      <div className="container flex items-center justify-between py-4">
        <a href="/" className="text-3xl font-bold" style={{ fontFamily: "'Chewy', cursive", color: "#FF6B4A" }}>
          Cutlyst
        </a>
        <nav className="hidden md:flex gap-8">
          <a href="/#services" className="hover:text-primary transition">Services</a>
          <a href="/#portfolio" className="hover:text-primary transition">Portfolio</a>
          <a href="/#process" className="hover:text-primary transition">Process</a>
          <a href="/about" className="hover:text-primary transition">About</a>
          <a href="/blog" className="hover:text-primary transition">Blog</a>
        </nav>
        <a href="https://calendly.com/videoediting/meeting" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
          Get a Quote
        </a>
      </div>
    </header>
  );
}

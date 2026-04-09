export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Chewy', cursive" }}>Cutlyst</h3>
            <p style={{ fontFamily: "'Space Mono', monospace" }} className="text-sm">
              Crafting visual stories that captivate, convert, and command attention.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>Services</h4>
            <ul className="space-y-2 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
              <li><a href="/#services" className="hover:underline">Precision Editing</a></li>
              <li><a href="/#services" className="hover:underline">Motion Graphics</a></li>
              <li><a href="/#services" className="hover:underline">Sound Design</a></li>
              <li><a href="/#services" className="hover:underline">Color Grading</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>Company</h4>
            <ul className="space-y-2 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/#portfolio" className="hover:underline">Portfolio</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>Legal</h4>
            <ul className="space-y-2 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
              <li><a href="/contact" className="hover:underline">Get in Touch</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-background pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
            <p>&copy; 2026 Cutlyst Studios. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useLocation } from "wouter";
import { useState } from "react";

export default function Contact() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", projectType: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b-2 border-foreground">
        <div className="container flex items-center justify-between py-4">
          <button onClick={() => navigate("/")} className="text-3xl font-bold" style={{ fontFamily: "'Chewy', cursive", color: "#FF6B4A" }}>
            PixelCut
          </button>
          <nav className="hidden md:flex gap-8">
            <button onClick={() => navigate("/")} className="hover:text-primary transition">Home</button>
            <button onClick={() => navigate("/about")} className="hover:text-primary transition">About</button>
            <button onClick={() => navigate("/services")} className="hover:text-primary transition">Services</button>
          </nav>
          <a href="https://calendly.com/videoediting/meeting" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">Get a Quote</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container text-center">
          <h1 className="mb-6">Get in Touch</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ fontFamily: "'Space Mono', monospace" }}>
            Have a project in mind? We'd love to hear about it. Reach out and let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-dark py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="neobrutalist-card bg-card">
                  <h3 style={{ fontSize: "20px", color: "#FF6B4A" }}>Email</h3>
                  <p className="mt-3" style={{ fontFamily: "'Space Mono', monospace" }}>
                    <a href="mailto:hello@pixelcut.studio" className="hover:text-primary transition">hello@pixelcut.studio</a>
                  </p>
                </div>

                <div className="neobrutalist-card bg-card">
                  <h3 style={{ fontSize: "20px", color: "#FF6B4A" }}>Phone</h3>
                  <p className="mt-3" style={{ fontFamily: "'Space Mono', monospace" }}>
                    <a href="tel:+1234567890" className="hover:text-primary transition">+1 (234) 567-890</a>
                  </p>
                </div>

                <div className="neobrutalist-card bg-card">
                  <h3 style={{ fontSize: "20px", color: "#FF6B4A" }}>Location</h3>
                  <p className="mt-3" style={{ fontFamily: "'Space Mono', monospace" }}>
                    San Francisco, CA<br />
                    United States
                  </p>
                </div>

                <div className="neobrutalist-card bg-card">
                  <h3 style={{ fontSize: "20px", color: "#FF6B4A" }}>Hours</h3>
                  <p className="mt-3 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-foreground rounded-lg bg-card text-foreground"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-foreground rounded-lg bg-card text-foreground"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-foreground rounded-lg bg-card text-foreground"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-foreground rounded-lg bg-card text-foreground"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    <option value="">Select a project type</option>
                    <option value="commercial">Commercial</option>
                    <option value="corporate">Corporate Video</option>
                    <option value="social">Social Media Content</option>
                    <option value="documentary">Documentary</option>
                    <option value="explainer">Explainer Video</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-foreground rounded-lg bg-card text-foreground"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-3 text-center">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-light py-20 md:py-32">
        <div className="container text-center">
          <h2 className="mb-12">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <a href="https://calendly.com/videoediting/meeting" target="_blank" rel="noopener noreferrer" className="neobrutalist-card hover:shadow-lg transition">
              <h3 style={{ fontSize: "20px", color: "#FF6B4A" }}>Schedule a Call</h3>
              <p className="mt-4 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>Book a consultation with our team directly.</p>
            </a>
            <div className="neobrutalist-card">
              <h3 style={{ fontSize: "20px", color: "#FF6B4A" }}>Email Us</h3>
              <p className="mt-4 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>Send us your project details and we'll respond within 24 hours.</p>
            </div>
            <div className="neobrutalist-card">
              <h3 style={{ fontSize: "20px", color: "#FF6B4A" }}>Follow Us</h3>
              <p className="mt-4 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>Connect with us on social media for updates and behind-the-scenes content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background border-t-2 border-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-2" style={{ fontFamily: "'Chewy', cursive", color: "#FF6B4A" }}>
                PixelCut
              </div>
              <p style={{ fontFamily: "'Space Mono', monospace" }}>Crafting visual stories with precision and punch.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
                <li><a href="/services" className="hover:underline">Video Editing</a></li>
                <li><a href="/services" className="hover:underline">Motion Graphics</a></li>
                <li><a href="/services" className="hover:underline">Color Grading</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/about" className="hover:underline">About</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
                <li><a href="#" className="hover:underline">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background pt-8 text-center text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
            <p>&copy; 2026 PixelCut Studios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

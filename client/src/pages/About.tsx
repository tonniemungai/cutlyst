import { useLocation } from "wouter";

export default function About() {
  const [, navigate] = useLocation();

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
            <button onClick={() => navigate("/services")} className="hover:text-primary transition">Services</button>
            <button onClick={() => navigate("/blog")} className="hover:text-primary transition">Blog</button>
            <button onClick={() => navigate("/contact")} className="hover:text-primary transition">Contact</button>
          </nav>
          <a href="https://calendly.com/videoediting/meeting" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">Get a Quote</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container text-center">
          <h1 className="mb-6">About PixelCut Studios</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ fontFamily: "'Space Mono', monospace" }}>
            We're a team of passionate video editors dedicated to transforming raw footage into compelling visual stories that resonate with audiences.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-dark py-20 md:py-32">
        <div className="container max-w-3xl">
          <h2 className="mb-8">Our Story</h2>
          <div className="space-y-6" style={{ fontFamily: "'Space Mono', monospace" }}>
            <p>
              PixelCut Studios was founded with a simple mission: to deliver exceptional video editing services that help brands and creators tell their stories more effectively. What started as a small team of passionate editors has grown into a trusted partner for businesses of all sizes.
            </p>
            <p>
              We believe that great video editing is more than just cutting and transitions. It's about understanding the narrative, respecting the audience's time, and creating an emotional connection through visual storytelling. Every project we work on is treated with the same level of care and attention to detail.
            </p>
            <p>
              Over the years, we've had the privilege of working with startups, established brands, content creators, and agencies. Each project has taught us something new and helped us refine our craft. Today, we're proud to be recognized as a leader in professional video editing.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Excellence", description: "We never compromise on quality. Every frame is carefully crafted to meet the highest standards." },
              { title: "Collaboration", description: "Your vision is our mission. We work closely with clients to ensure the final product exceeds expectations." },
              { title: "Innovation", description: "We stay ahead of industry trends and constantly explore new techniques and technologies." },
            ].map((value, idx) => (
              <div key={idx} className="neobrutalist-card">
                <h3 style={{ fontSize: "24px", color: "#FF6B4A" }}>{value.title}</h3>
                <p className="mt-4" style={{ fontFamily: "'Space Mono', monospace" }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-dark py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex Morgan", role: "Founder & Lead Editor", bio: "With over 10 years of experience in professional video editing, Alex founded PixelCut with a vision to elevate video production standards." },
              { name: "Jordan Lee", role: "Creative Director", bio: "Jordan brings a wealth of creative expertise, specializing in motion graphics and visual storytelling that captivates audiences." },
              { name: "Casey Williams", role: "Sound Design Lead", bio: "Casey's passion for audio excellence ensures every project sounds as good as it looks, creating immersive experiences." },
            ].map((member, idx) => (
              <div key={idx} className="neobrutalist-card bg-card">
                <div className="bg-muted h-40 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-6xl">👤</div>
                </div>
                <h3 style={{ fontSize: "22px", color: "#FF6B4A" }}>{member.name}</h3>
                <p className="text-sm text-primary mt-2" style={{ fontFamily: "'Space Mono', monospace" }}>{member.role}</p>
                <p className="mt-4 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "10+", label: "Years Experience" },
              { number: "100%", label: "Satisfaction Rate" },
            ].map((stat, idx) => (
              <div key={idx} className="neobrutalist-card text-center">
                <div className="text-5xl font-bold mb-4" style={{ color: "#FF6B4A" }}>{stat.number}</div>
                <p style={{ fontFamily: "'Space Mono', monospace" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark py-20 md:py-32">
        <div className="container text-center">
          <h2 className="mb-8">Ready to Work Together?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ fontFamily: "'Space Mono', monospace" }}>
            Let's discuss your project and how we can bring your vision to life.
          </p>
          <a href="https://calendly.com/videoediting/meeting" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-12 py-8 inline-block">Schedule a Consultation</a>
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
                <li><a href="/blog" className="hover:underline">Blog</a></li>
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

import { useLocation } from "wouter";
import { ChevronRight } from "lucide-react";

export default function Blog() {
  const [, navigate] = useLocation();

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Pacing: How to Keep Your Audience Engaged",
      category: "Editing Tips",
      date: "March 15, 2026",
      excerpt: "Learn the fundamentals of video pacing and how strategic cuts and transitions can dramatically improve viewer retention.",
      readTime: "5 min read",
      image: "📹",
    },
    {
      id: 2,
      title: "Color Grading 101: Creating Mood Through Color",
      category: "Color Grading",
      date: "March 10, 2026",
      excerpt: "Discover how professional color grading can transform your footage and create emotional connections with your audience.",
      readTime: "7 min read",
      image: "🎨",
    },
    {
      id: 3,
      title: "Audio Design: Why Sound Matters More Than You Think",
      category: "Sound Design",
      date: "March 5, 2026",
      excerpt: "Explore the critical role of audio in video production and how proper sound design elevates your entire project.",
      readTime: "6 min read",
      image: "🎵",
    },
    {
      id: 4,
      title: "Motion Graphics Trends for 2026",
      category: "Motion Graphics",
      date: "February 28, 2026",
      excerpt: "Stay ahead of the curve with the latest motion graphics trends and techniques that are dominating the industry.",
      readTime: "8 min read",
      image: "✨",
    },
    {
      id: 5,
      title: "Optimizing Videos for Social Media Platforms",
      category: "Social Media",
      date: "February 20, 2026",
      excerpt: "Master the art of creating platform-specific videos that maximize engagement on Instagram, TikTok, and YouTube.",
      readTime: "6 min read",
      image: "📱",
    },
    {
      id: 6,
      title: "Case Study: How We Increased Views by 300%",
      category: "Case Study",
      date: "February 15, 2026",
      excerpt: "An in-depth breakdown of our editing and optimization strategy that resulted in massive engagement growth.",
      readTime: "9 min read",
      image: "📊",
    },
  ];

  const categories = ["All", "Editing Tips", "Color Grading", "Sound Design", "Motion Graphics", "Social Media", "Case Study"];

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
            <button onClick={() => navigate("/about")} className="hover:text-primary transition">About</button>
            <button onClick={() => navigate("/contact")} className="hover:text-primary transition">Contact</button>
          </nav>
          <a href="https://calendly.com/videoediting/meeting" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">Get a Quote</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container text-center">
          <h1 className="mb-6">PixelCut Blog</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ fontFamily: "'Space Mono', monospace" }}>
            Tips, tricks, and insights from our team of professional video editors. Stay updated with the latest trends in video production.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-dark py-8">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-6 py-2 rounded-full border-2 transition ${
                  idx === 0 ? "bg-primary text-primary-foreground border-primary" : "bg-card text-card-foreground border-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-light py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="neobrutalist-card group cursor-pointer hover:shadow-lg transition">
                <div className="bg-muted h-48 rounded-lg mb-4 flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-sm text-primary" style={{ fontFamily: "'Space Mono', monospace" }}>
                    {post.category}
                  </p>
                  <span className="text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>•</span>
                  <p className="text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
                    {post.readTime}
                  </p>
                </div>

                <h3 style={{ fontSize: "22px", color: "#FF6B4A" }} className="mb-3">
                  {post.title}
                </h3>

                <p className="mb-4 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t-2 border-foreground">
                  <p className="text-xs" style={{ fontFamily: "'Space Mono', monospace" }}>
                    {post.date}
                  </p>
                  <button className="text-primary hover:text-primary transition flex items-center gap-1">
                    <span style={{ fontFamily: "'Space Mono', monospace" }}>Read More</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-dark py-20 md:py-32">
        <div className="container max-w-2xl text-center">
          <h2 className="mb-6">Subscribe to Our Newsletter</h2>
          <p className="mb-8" style={{ fontFamily: "'Space Mono', monospace" }}>
            Get the latest video editing tips, industry insights, and exclusive content delivered to your inbox.
          </p>
          
          <form className="flex gap-4 flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border-2 border-foreground rounded-lg bg-card text-foreground"
              style={{ fontFamily: "'Space Mono', monospace" }}
            />
            <button type="submit" className="btn-primary px-8 py-3">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container text-center">
          <h2 className="mb-8">Ready to Work With Us?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ fontFamily: "'Space Mono', monospace" }}>
            Apply these insights to your next project. Let's create something amazing together.
          </p>
          <a href="https://calendly.com/videoediting/meeting" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-12 py-8 inline-block">
            Schedule a Consultation
          </a>
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

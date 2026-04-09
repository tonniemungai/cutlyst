import { useLocation } from "wouter";
import { ChevronLeft, Star } from "lucide-react";

export default function PortfolioDetail() {
  const [, navigate] = useLocation();
  const params = new URLSearchParams(window.location.search);
  const projectId = parseInt(params.get("id") || "0");

  const projects = [
    {
      id: 0,
      title: "Tech Startup Launch Video",
      category: "Commercial",
      client: "TechFlow Inc.",
      year: "2025",
      description: "High-energy promotional video for a SaaS startup launch.",
      fullDescription: "We created a compelling 3-minute promotional video for TechFlow's product launch. The video showcases the product's key features through dynamic animations, customer testimonials, and a clear call-to-action. The result was a 50K view surge in the first week and a 35% increase in sign-ups.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      challenge: "Create a video that would stand out in a crowded SaaS market and clearly communicate the product's value proposition within 3 minutes.",
      solution: "We combined motion graphics, customer testimonials, and a compelling narrative to create an engaging video that resonated with the target audience.",
      results: ["50K views in first week", "35% increase in sign-ups", "Featured in 3 industry publications"],
      testimonial: {
        text: "PixelCut's team delivered an exceptional promotional video that exceeded our expectations. The attention to detail and creative execution was outstanding.",
        author: "Sarah Johnson",
        role: "Marketing Director at TechFlow Inc.",
        rating: 5,
      },
    },
    {
      id: 1,
      title: "Corporate Training Series",
      category: "Educational",
      client: "Online Learning Platform",
      year: "2025",
      description: "Multi-part training series with motion graphics and voiceover.",
      fullDescription: "We produced a comprehensive 12-part training video series for an online learning platform. Each video features clear explanations, professional voiceovers, and custom motion graphics to enhance learning retention.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      challenge: "Create 12 educational videos that maintain consistent branding while being engaging and easy to follow for diverse learning styles.",
      solution: "We developed a modular approach with consistent visual language, professional voiceovers, and strategic use of motion graphics to break down complex concepts.",
      results: ["12 videos completed on schedule", "95% client satisfaction", "1M+ views across series"],
      testimonial: {
        text: "The training series has been incredibly well-received by our students. The production quality and clear explanations have significantly improved completion rates.",
        author: "Michael Chen",
        role: "Content Director at Online Learning Platform",
        rating: 5,
      },
    },
    {
      id: 2,
      title: "Product Demo Reel",
      category: "Product",
      client: "Creative Agency Co.",
      year: "2024",
      description: "Sleek product demonstration video with smooth transitions.",
      fullDescription: "A 90-second product demo showcasing the features and benefits of a new software tool. The video uses smooth transitions, clear UI demonstrations, and customer success stories.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      challenge: "Demonstrate complex software features in an engaging way that appeals to both technical and non-technical audiences.",
      solution: "We used screen recording, motion graphics overlays, and real-world use cases to make the product features easy to understand and compelling.",
      results: ["90-second concise demo", "40% increase in demo requests", "Shared 500+ times on social media"],
      testimonial: {
        text: "The product demo video has been our best-performing marketing asset. It clearly communicates our value proposition and has driven significant interest.",
        author: "Emily Rodriguez",
        role: "Product Manager at Creative Agency Co.",
        rating: 5,
      },
    },
    {
      id: 3,
      title: "Event Highlight Reel",
      category: "Event",
      client: "Digital Media Group",
      year: "2024",
      description: "Fast-paced event recap with dynamic cuts and music.",
      fullDescription: "A dynamic 5-minute highlight reel from a major industry conference, capturing key moments, speaker insights, and attendee reactions.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      challenge: "Condense 2 days of event footage into a compelling 5-minute highlight reel that captures the energy and key takeaways.",
      solution: "We used fast-paced editing, dynamic transitions, and carefully selected music to maintain energy while highlighting important moments.",
      results: ["5-minute engaging recap", "2K+ attendees shared video", "Event ROI increased by 45%"],
      testimonial: {
        text: "The event highlight reel perfectly captured the energy and essence of our conference. It's been invaluable for promoting next year's event.",
        author: "David Park",
        role: "Event Director at Digital Media Group",
        rating: 5,
      },
    },
    {
      id: 4,
      title: "Brand Documentary",
      category: "Documentary",
      client: "StartUp Ventures",
      year: "2024",
      description: "In-depth brand story told through cinematic editing.",
      fullDescription: "A 15-minute documentary-style video telling the story of a startup's journey from idea to market success. Featuring founder interviews, behind-the-scenes footage, and customer testimonials.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      challenge: "Create a compelling narrative that showcases the company's values, mission, and impact while maintaining cinematic quality.",
      solution: "We conducted in-depth interviews, gathered archival footage, and used professional color grading and sound design to create a polished documentary.",
      results: ["15-minute cinematic documentary", "Featured at 2 film festivals", "10K+ views on YouTube"],
      testimonial: {
        text: "The documentary beautifully tells our company's story. It's become a key tool for recruiting, investor relations, and brand building.",
        author: "Jessica Wong",
        role: "Founder at StartUp Ventures",
        rating: 5,
      },
    },
    {
      id: 5,
      title: "Social Media Campaign",
      category: "Social",
      client: "TechFlow Inc.",
      year: "2024",
      description: "Series of short-form videos optimized for Instagram and TikTok.",
      fullDescription: "A series of 15 short-form videos (15-60 seconds each) optimized for Instagram Reels, TikTok, and YouTube Shorts, designed to drive engagement and brand awareness.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      challenge: "Create engaging short-form content that performs well on multiple platforms while maintaining brand consistency.",
      solution: "We developed platform-specific strategies, used trending formats, and optimized each video for maximum engagement on its target platform.",
      results: ["15 videos delivered", "500K+ total views", "12% engagement rate (3x industry average)"],
      testimonial: {
        text: "The social media videos have been a game-changer for our brand awareness. The engagement rates are exceptional and the content resonates with our audience.",
        author: "Alex Martinez",
        role: "Social Media Manager at TechFlow Inc.",
        rating: 5,
      },
    },
  ];

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1>Project Not Found</h1>
          <button onClick={() => navigate("/")} className="btn-primary mt-8">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

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
            <button onClick={() => navigate("/blog")} className="hover:text-primary transition">Blog</button>
            <button onClick={() => navigate("/contact")} className="hover:text-primary transition">Contact</button>
          </nav>
          <a href="https://calendly.com/videoediting/meeting" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">Get a Quote</a>
        </div>
      </header>

      {/* Back Button */}
      <section className="section-light py-6">
        <div className="container">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-primary hover:underline">
            <ChevronLeft size={20} />
            <span style={{ fontFamily: "'Space Mono', monospace" }}>Back to Portfolio</span>
          </button>
        </div>
      </section>

      {/* Project Hero */}
      <section className="section-dark py-12">
        <div className="container">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-primary" style={{ fontFamily: "'Space Mono', monospace" }}>{project.category}</span>
            <span className="text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>•</span>
            <span className="text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>{project.year}</span>
          </div>
          <h1 className="mb-4">{project.title}</h1>
          <p className="text-lg max-w-2xl" style={{ fontFamily: "'Space Mono', monospace" }}>
            Client: <strong>{project.client}</strong>
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-light py-12">
        <div className="container">
          <div className="aspect-video bg-muted rounded-lg border-2 border-foreground overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={project.videoUrl}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-dark py-20">
        <div className="container max-w-3xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Challenge</h2>
              <p style={{ fontFamily: "'Space Mono', monospace" }}>{project.challenge}</p>
            </div>
            <div>
              <h2 className="mb-6">Solution</h2>
              <p style={{ fontFamily: "'Space Mono', monospace" }}>{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-light py-20">
        <div className="container max-w-3xl">
          <h2 className="mb-12">Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {project.results.map((result, idx) => (
              <div key={idx} className="neobrutalist-card text-center">
                <p style={{ fontFamily: "'Space Mono', monospace" }}>{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-dark py-20">
        <div className="container max-w-3xl">
          <div className="neobrutalist-card bg-card p-8">
            <div className="flex gap-1 mb-6">
              {[...Array(project.testimonial.rating)].map((_, i) => (
                <Star key={i} size={24} fill="#FF6B4A" color="#FF6B4A" />
              ))}
            </div>
            <p className="text-lg mb-6 italic" style={{ fontFamily: "'Space Mono', monospace" }}>
              "{project.testimonial.text}"
            </p>
            <div>
              <p className="font-bold" style={{ color: "#FF6B4A" }}>{project.testimonial.author}</p>
              <p className="text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>{project.testimonial.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-light py-20">
        <div className="container text-center">
          <h2 className="mb-8">Ready to Start Your Project?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ fontFamily: "'Space Mono', monospace" }}>
            Let's discuss how we can bring your vision to life with the same level of quality and creativity.
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

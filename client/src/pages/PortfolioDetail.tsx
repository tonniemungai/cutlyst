import { useLocation } from "wouter";
import { ChevronLeft, Star } from "lucide-react";

export default function PortfolioDetail() {
  const [, navigate] = useLocation();
  const params = new URLSearchParams(window.location.search);
  const projectId = parseInt(params.get("id") || "0");

  const projects = [
    {
      id: 0,
      title: "Revealing the Billion Dollar Business MrBeast Missed",
      category: "Business Analysis",
      client: "Tonnie Mungai",
      year: "2024",
      description: "In-depth analysis of a billion-dollar business opportunity.",
      fullDescription: "This video provides an insightful analysis of a major business opportunity that MrBeast overlooked. The content breaks down market trends, competitive analysis, and actionable insights for entrepreneurs.",
      videoUrl: "https://www.youtube.com/embed/tGHRXpIm7hU",
      challenge: "Create compelling business analysis content that educates and engages entrepreneurs.",
      solution: "Used data visualization, clear narration, and real-world examples to explain complex business concepts.",
      results: ["218+ views", "Strong engagement", "Shared by business community"],
      testimonial: {
        text: "Excellent breakdown of market opportunities with actionable insights.",
        author: "Business Community",
        role: "Entrepreneurs & Investors",
        rating: 5,
      },
    },
    {
      id: 1,
      title: "Building a $1 Million Dollar Business in Kenya",
      category: "Entrepreneurship",
      client: "Tonnie Mungai",
      year: "2024",
      description: "Step-by-step guide to building a million-dollar business.",
      fullDescription: "A comprehensive guide showing how to build a million-dollar business specifically in the Kenya market. Covers market research, funding, scaling, and local challenges.",
      videoUrl: "https://www.youtube.com/embed/OMxvCTMPVU0",
      challenge: "Create localized business guidance for African entrepreneurs.",
      solution: "Combined local market insights with proven business frameworks and real success stories.",
      results: ["9+ views", "Highly relevant content", "Positive community feedback"],
      testimonial: {
        text: "Perfect guide for aspiring entrepreneurs in Kenya with practical steps.",
        author: "African Entrepreneurs",
        role: "Business Founders",
        rating: 5,
      },
    },
    {
      id: 2,
      title: "Unbelievable Side Hustle Secrets to Make Insane Money",
      category: "Side Hustle",
      client: "Tonnie Mungai",
      year: "2024",
      description: "Proven strategies to generate significant income.",
      fullDescription: "Reveals lesser-known side hustle strategies that can generate substantial income. Covers digital products, services, and passive income streams.",
      videoUrl: "https://www.youtube.com/embed/RhCKGjQMKkY",
      challenge: "Present side hustle strategies in an engaging and credible way.",
      solution: "Featured real case studies, income breakdowns, and step-by-step implementation guides.",
      results: ["21+ views", "High engagement rate", "Widely shared"],
      testimonial: {
        text: "These side hustle strategies actually work and are easy to implement.",
        author: "Side Hustle Community",
        role: "Income Seekers",
        rating: 5,
      },
    },
    {
      id: 3,
      title: "The Hidden Formula to Start an Online Business and Get Rich Quick",
      category: "Business Strategy",
      client: "Tonnie Mungai",
      year: "2024",
      description: "Discover the formula for launching a successful online business.",
      fullDescription: "Breaks down the proven formula for starting and scaling an online business quickly. Covers market selection, product development, and growth hacking.",
      videoUrl: "https://www.youtube.com/embed/8Uh3-kkOZWs",
      challenge: "Explain complex business strategies in an accessible way.",
      solution: "Used visual diagrams, real examples, and clear step-by-step breakdowns.",
      results: ["14+ views", "Saved by entrepreneurs", "Referenced in business forums"],
      testimonial: {
        text: "The formula provided is clear, actionable, and proven to work.",
        author: "Online Business Owners",
        role: "Digital Entrepreneurs",
        rating: 5,
      },
    },
    {
      id: 4,
      title: "How to Escape the 9 to 5 Rat Race and Live a Life of Luxury",
      category: "Lifestyle",
      client: "Tonnie Mungai",
      year: "2024",
      description: "Transform your life by achieving financial freedom.",
      fullDescription: "A motivational and practical guide to breaking free from traditional employment and building wealth. Covers mindset shifts, income generation, and lifestyle design.",
      videoUrl: "https://www.youtube.com/embed/nKfIKYP_eLs",
      challenge: "Create both inspirational and practical content about financial freedom.",
      solution: "Combined motivational storytelling with concrete financial strategies and examples.",
      results: ["18+ views", "Highly motivational", "Shared in personal development communities"],
      testimonial: {
        text: "Inspiring content that shows both the why and the how to achieve financial freedom.",
        author: "Career Changers",
        role: "Aspiring Entrepreneurs",
        rating: 5,
      },
    },
    {
      id: 5,
      title: "10 Business Ideas To Start and Make Money",
      category: "Business Ideas",
      client: "Tonnie Mungai",
      year: "2024",
      description: "Comprehensive guide to ten profitable business ideas.",
      fullDescription: "A detailed exploration of ten viable business ideas with low startup costs and high profit potential. Each idea includes market analysis, startup requirements, and revenue potential.",
      videoUrl: "https://www.youtube.com/embed/VdKKRPvYMxU",
      challenge: "Present diverse business ideas with enough detail to be actionable.",
      solution: "Provided detailed breakdowns for each idea including startup costs, timeline, and profitability.",
      results: ["37+ views", "Most popular video", "Bookmarked by entrepreneurs"],
      testimonial: {
        text: "Excellent collection of business ideas with practical implementation guidance.",
        author: "Business Enthusiasts",
        role: "Startup Founders",
        rating: 5,
      },
    },
  ]

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

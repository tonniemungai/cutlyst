import { ChevronLeft } from "lucide-react";

export default function IndustryNewsletters() {
  const newsletterVideos = [
    { title: "Blog Content with AI", description: "How To Write a Blog Post With AI - Create content faster with AI assistance.", videoUrl: "https://www.youtube.com/embed/IqSgAQ-vwB8" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b-2 border-foreground">
        <div className="container flex items-center justify-between py-4">
          <a href="/" className="text-3xl font-bold" style={{ fontFamily: "'Chewy', cursive", color: "#FF6B4A" }}>PixelCut</a>
          <a href="/" className="flex items-center gap-2 btn-primary px-6 py-2">
            <ChevronLeft size={20} />
            Back to Portfolio
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-dark py-20 md:py-32">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Chewy', cursive", color: "#FF6B4A" }}>
            Newsletters & Content Creation
          </h1>
          <p className="text-xl max-w-2xl" style={{ fontFamily: "'Space Mono', monospace" }}>
            Content for newsletter creators, bloggers, and content marketers. We've edited videos on building audiences, monetizing content, and creating engaging written material.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="section-light py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">Newsletter & Content Library</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {newsletterVideos.map((video, idx) => (
              <div key={idx} className="neobrutalist-card">
                <div className="bg-muted h-64 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden border-2 border-foreground">
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.videoUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  />
                </div>
                <h3 style={{ fontSize: "22px", color: "#FF6B4A" }}>{video.title}</h3>
                <p className="mt-4 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark py-20 md:py-32">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Chewy', cursive", color: "#FF6B4A" }}>
            Amplify Your Content Strategy
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'Space Mono', monospace" }}>
            We create video content that complements your newsletter and blog, building a cohesive content ecosystem.
          </p>
          <a href="https://calendly.com/videoediting/meeting" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-lg">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}

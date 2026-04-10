import { ChevronLeft } from "lucide-react";

export default function IndustryMakeMoney() {
  const makeMoneyVideos = [
    { title: "Make Money Strategies", description: "10 Ways to Make your First $1000 Online - Actionable income generation tactics.", videoUrl: "https://www.youtube.com/embed/JMJ5SOt7FYM" },
    { title: "Side Hustle Secrets", description: "Unbelievable Side Hustle Secrets to Make Insane Money - Proven income streams.", videoUrl: "https://www.youtube.com/embed/x1c59c0ytYw" },
    { title: "Escape the 9 to 5 Rat Race", description: "How to Escape the 9 to 5 Rat Race and Live a Life of Luxury - Financial freedom strategies.", videoUrl: "https://www.youtube.com/embed/njoApmvimQ0" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b-2 border-foreground">
        <div className="container flex items-center justify-between py-4">
          <a href="/" className="text-3xl font-bold" style={{ fontFamily: "'Chewy', cursive", color: "#FF6B4A" }}>Cutlyst</a>
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
            Make Money & Income Strategies
          </h1>
          <p className="text-xl max-w-2xl" style={{ fontFamily: "'Space Mono', monospace" }}>
            Expert content on income generation, side hustles, and financial freedom. We've edited videos covering diverse money-making strategies and entrepreneurial opportunities.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="section-light py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">Make Money Content Library</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {makeMoneyVideos.map((video, idx) => (
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
            Create Compelling Money-Making Content
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'Space Mono', monospace" }}>
            We specialize in editing engaging content that teaches viewers how to generate income and build wealth.
          </p>
          <a href="https://calendly.com/videoediting/meeting" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-lg">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}

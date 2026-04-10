import { useLocation } from "wouter";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Services() {
  const [, navigate] = useLocation();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqItems = [
    { question: "What types of videos do you edit?", answer: "We specialize in corporate videos, commercials, social media content, documentaries, promotional videos, and more. Our team has experience across all genres and styles." },
    { question: "What is your typical turnaround time?", answer: "Turnaround times vary based on project complexity. Most projects are completed within 2-4 weeks. Rush services are available upon request." },
    { question: "Do you offer revisions?", answer: "Yes! We include multiple revision rounds in our standard packages to ensure you're completely satisfied with the final product." },
    { question: "What formats do you deliver in?", answer: "We deliver in all standard formats including MP4, MOV, ProRes, and more. We can also optimize for specific platforms like YouTube, Instagram, or TikTok." },
    { question: "Can you work with raw footage from any camera?", answer: "Absolutely! We work with footage from all professional and consumer cameras, including DSLRs, mirrorless, cinema cameras, and smartphones." },
    { question: "Do you offer color grading services?", answer: "Yes, color grading and color correction are included in our premium packages and available as standalone services." },
  ];

  const services = [
    {
      title: "Video Editing",
      description: "Professional video editing for all types of content. From corporate videos to social media content, we handle it all with precision and creativity.",
      features: ["Seamless cuts and transitions", "Color correction", "Audio synchronization", "Multi-camera editing", "Format optimization"],
      price: "Starting at $499",
    },
    {
      title: "Motion Graphics",
      description: "Dynamic animations and visual effects that bring your content to life. Perfect for intros, explainer videos, and branded content.",
      features: ["Custom animations", "Text effects", "Logo animations", "Lower thirds", "Animated infographics"],
      price: "Starting at $699",
    },
    {
      title: "Color Grading",
      description: "Professional color correction and grading to enhance the visual quality of your footage. Create a cinematic look or match specific aesthetics.",
      features: ["Color correction", "Cinematic grading", "Consistency across footage", "LUT creation", "HDR grading"],
      price: "Starting at $299",
    },
    {
      title: "Sound Design",
      description: "Crystal-clear audio and immersive soundscapes. We handle voiceover integration, sound effects, and professional mixing.",
      features: ["Audio cleanup", "Voiceover editing", "Sound effects", "Music integration", "Professional mixing"],
      price: "Starting at $199",
    },
    {
      title: "Explainer Videos",
      description: "Engaging explainer videos that simplify complex concepts. Perfect for SaaS products, services, and educational content.",
      features: ["Script writing", "Animation", "Voiceover", "Motion graphics", "Full production"],
      price: "Starting at $1,499",
    },
    {
      title: "Social Media Content",
      description: "Optimized short-form videos for Instagram, TikTok, YouTube Shorts, and more. Designed to capture attention and drive engagement.",
      features: ["Platform optimization", "Trending formats", "Captions & graphics", "Multi-format delivery", "Fast turnaround"],
      price: "Starting at $399",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b-2 border-foreground">
        <div className="container flex items-center justify-between py-4">
          <button onClick={() => navigate("/")} className="text-3xl font-bold" style={{ fontFamily: "'Chewy', cursive", color: "#FF6B4A" }}>
            Cutlyst
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

      {/* Hero Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container text-center">
          <h1 className="mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ fontFamily: "'Space Mono', monospace" }}>
            Comprehensive video editing solutions tailored to your needs. From basic editing to full production, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-dark py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="neobrutalist-card bg-card">
                <h3 style={{ fontSize: "24px", color: "#FF6B4A" }}>{service.title}</h3>
                <p className="mt-4 mb-6" style={{ fontFamily: "'Space Mono', monospace" }}>{service.description}</p>
                
                <div className="mb-6">
                  <p className="text-sm font-bold mb-3">Key Features:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="text-sm flex items-start" style={{ fontFamily: "'Space Mono', monospace" }}>
                        <span className="text-primary mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-6 border-t-2 border-foreground">
                  <p className="font-bold" style={{ color: "#FF6B4A" }}>{service.price}</p>
                  <a href="https://calendly.com/videoediting/meeting" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-4 py-2 inline-block">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">How We Work</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Consultation", description: "We discuss your project goals, timeline, and vision." },
              { step: "2", title: "Planning", description: "We create a detailed plan and timeline for your project." },
              { step: "3", title: "Execution", description: "Our team brings your vision to life with expert editing." },
              { step: "4", title: "Delivery", description: "We deliver your final video in all required formats." },
            ].map((item, idx) => (
              <div key={idx} className="neobrutalist-card">
                <div className="text-5xl font-bold text-primary mb-4">{item.step}</div>
                <h3 style={{ fontSize: "20px", color: "#FF6B4A" }}>{item.title}</h3>
                <p className="mt-4 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="section-dark py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">Popular Add-ons</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Subtitles & Captions", price: "$99", description: "Professional subtitles in multiple languages." },
              { title: "Thumbnail Design", price: "$49", description: "Custom YouTube thumbnail design." },
              { title: "Voiceover Recording", price: "$149", description: "Professional voiceover recording and editing." },
              { title: "Stock Footage", price: "$99", description: "Licensed stock footage integration." },
              { title: "Rush Delivery", price: "+50%", description: "Expedited turnaround time." },
              { title: "Unlimited Revisions", price: "$199", description: "Unlimited revision rounds." },
            ].map((addon, idx) => (
              <div key={idx} className="neobrutalist-card bg-card">
                <h3 style={{ fontSize: "20px", color: "#FF6B4A" }}>{addon.title}</h3>
                <p className="text-2xl font-bold my-4" style={{ color: "#FF6B4A" }}>{addon.price}</p>
                <p className="text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section-dark py-20 md:py-32">
        <div className="container max-w-3xl">
          <h2 className="text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="neobrutalist-card">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 hover:bg-muted transition"
                >
                  <h3 style={{ fontSize: "18px", color: "#FF6B4A" }} className="text-left">{item.question}</h3>
                  <ChevronDown
                    size={24}
                    className={`transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t-2 border-foreground">
                    <p style={{ fontFamily: "'Space Mono', monospace" }} className="mt-4">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container text-center">
          <h2 className="mb-8">Ready to Get Started?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ fontFamily: "'Space Mono', monospace" }}>
            Let's discuss which service is right for your project.
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
                Cutlyst
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
            <p>&copy; 2026 Cutlyst Studios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

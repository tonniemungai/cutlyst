import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container text-center">
          <h1 className="mb-6">About Cutlyst</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ fontFamily: "'Space Mono', monospace" }}>
            Professional video editing that transforms your content into compelling stories that drive results.
          </p>
        </div>
      </section>

      {/* CEO Story Section */}
      <section className="section-dark py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">Meet the Founder</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663432093360/nD6SUFfkmCryuCdZNmutcT/1000643781_6bfc0d28.jpg" 
                alt="Antony Mungai, CEO of Cutlyst" 
                className="w-full rounded-lg border-3 border-foreground"
              />
            </div>
            <div className="space-y-6" style={{ fontFamily: "'Space Mono', monospace" }}>
              <div>
                <h3 style={{ fontSize: "28px", color: "#FF6B4A" }} className="mb-2">Antony Mungai</h3>
                <p className="text-lg font-bold">Founder & CEO</p>
              </div>
              <p>
                I started Cutlyst because I saw a massive gap in the market. Content creators and entrepreneurs were spending countless hours on video editing when they should have been focused on what they do best—creating amazing content and growing their businesses.
              </p>
              <p>
                After working with dozens of creators and agencies, I realized that professional video editing wasn't just a nice-to-have—it was essential for success. Yet most people either didn't have access to quality editors or couldn't afford them.
              </p>
              <p>
                That's why I founded Cutlyst. I wanted to build a service that delivers Hollywood-quality editing at prices that make sense for growing businesses. Every project we take on is treated with the same care and attention I'd give to my own content.
              </p>
              <p>
                Today, Cutlyst works with entrepreneurs, agencies, and creators across industries—from finance and tech to e-commerce and business. Our mission is simple: help you look professional, save time, and focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">Why Cutlyst?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Quality First", description: "We never compromise. Every edit, color grade, and sound design is perfected to Hollywood standards.", emoji: "🎬" },
              { title: "Fast Turnaround", description: "We respect your timeline. Most projects delivered within 2-4 weeks. Rush services available.", emoji: "⚡" },
              { title: "True Partnership", description: "Your vision matters. We collaborate closely to ensure the final product exceeds your expectations.", emoji: "🤝" },
            ].map((value, idx) => (
              <div key={idx} className="neobrutalist-card">
                <p className="text-5xl mb-4">{value.emoji}</p>
                <h3 style={{ fontSize: "24px", color: "#FF6B4A" }}>{value.title}</h3>
                <p className="mt-4" style={{ fontFamily: "'Space Mono', monospace" }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section-dark py-20 md:py-32">
        <div className="container max-w-3xl">
          <h2 className="text-center mb-16">What to Expect When Working With Us</h2>
          <div className="space-y-8">
            {[
              { step: "1", title: "Initial Consultation", description: "We discuss your project goals, vision, timeline, and any specific requirements. This is where we understand your brand and what success looks like for you." },
              { step: "2", title: "Project Planning", description: "We create a detailed project plan, timeline, and deliverables. You'll know exactly what to expect and when to expect it." },
              { step: "3", title: "Expert Execution", description: "Our team brings your vision to life with professional editing, color grading, sound design, and motion graphics as needed." },
              { step: "4", title: "Revision & Refinement", description: "Your feedback matters. We provide revision rounds to ensure the final product is exactly what you envisioned." },
              { step: "5", title: "Final Delivery", description: "We deliver your video in all required formats, optimized for your platforms—YouTube, Instagram, TikTok, or wherever you need it." },
            ].map((item, idx) => (
              <div key={idx} className="neobrutalist-card">
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-bold text-primary flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 style={{ fontSize: "22px", color: "#FF6B4A" }}>{item.title}</h3>
                    <p className="mt-3" style={{ fontFamily: "'Space Mono', monospace" }}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Time & Productivity Benefits Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">The Real Value: Time & Productivity</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="neobrutalist-card">
              <h3 style={{ fontSize: "28px", color: "#FF6B4A" }} className="mb-6">The Problem</h3>
              <ul className="space-y-4" style={{ fontFamily: "'Space Mono', monospace" }}>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✗</span>
                  <span>Spending 10-20 hours per week on video editing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✗</span>
                  <span>Losing focus on core business activities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✗</span>
                  <span>Producing lower-quality content due to time constraints</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✗</span>
                  <span>Missing content deadlines and growth opportunities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✗</span>
                  <span>Struggling to maintain consistent content output</span>
                </li>
              </ul>
            </div>
            <div className="neobrutalist-card" style={{ backgroundColor: "#FDF8D8", borderColor: "#FF6B4A" }}>
              <h3 style={{ fontSize: "28px", color: "#FF6B4A" }} className="mb-6">The Cutlyst Solution</h3>
              <ul className="space-y-4" style={{ fontFamily: "'Space Mono', monospace" }}>
                <li className="flex gap-3">
                  <span style={{ color: "#FF6B4A" }} className="font-bold">✓</span>
                  <span>Reclaim 40-60 hours per month to focus on content creation</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: "#FF6B4A" }} className="font-bold">✓</span>
                  <span>Concentrate on strategy, growth, and business development</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: "#FF6B4A" }} className="font-bold">✓</span>
                  <span>Deliver professional-quality videos consistently</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: "#FF6B4A" }} className="font-bold">✓</span>
                  <span>Maintain consistent publishing schedule and momentum</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: "#FF6B4A" }} className="font-bold">✓</span>
                  <span>Scale content production without scaling your team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-dark py-20 md:py-32">
        <div className="container text-center">
          <h2 className="mb-16">Industries We Specialize In</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Business & Entrepreneurship", emoji: "💼" },
              { name: "Technology & SaaS", emoji: "💻" },
              { name: "Finance & Trading", emoji: "💹" },
              { name: "E-commerce & Marketing", emoji: "🛍️" },
              { name: "Newsletters & Content", emoji: "📧" },
              { name: "Agencies & Services", emoji: "🤝" },
            ].map((industry, idx) => (
              <div key={idx} className="neobrutalist-card">
                <p className="text-5xl mb-3">{industry.emoji}</p>
                <p className="font-bold" style={{ fontFamily: "'Space Mono', monospace" }}>{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container text-center">
          <h2 className="mb-8">Ready to Transform Your Content?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-12" style={{ fontFamily: "'Space Mono', monospace" }}>
            Let's discuss how Cutlyst can help you save time, maintain quality, and scale your content production.
          </p>
          <a href="https://calendly.com/videoediting/meeting" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-6 inline-block">
            Schedule a Free Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

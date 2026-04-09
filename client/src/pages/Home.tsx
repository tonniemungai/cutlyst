import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Play, Star } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const services = [
    {
      title: "Precision Editing",
      description: "Seamless cuts, perfect transitions, and a polished final product. We meticulously craft every frame to tell your story effectively.",
      icon: "✂️",
    },
    {
      title: "Dynamic Motion Graphics",
      description: "Elevate your content with custom animations, engaging intros, and captivating visual effects that grab attention.",
      icon: "✨",
    },
    {
      title: "Sound Design & Mixing",
      description: "Crystal-clear audio, immersive soundscapes, and professional mixing to ensure your message is heard loud and clear.",
      icon: "🎵",
    },
    {
      title: "Color Grading & Enhancement",
      description: "Transform raw footage into cinematic masterpieces with expert color correction and grading that sets the mood.",
      icon: "🎬",
    },
  ];

  const process = [
    { step: "Discovery & Strategy", description: "We start by understanding your goals, audience, and vision to develop a tailored video strategy." },
    { step: "Creative Execution", description: "Our expert editors bring your footage to life, applying the latest techniques and creative insights." },
    { step: "Refinement & Feedback", description: "Collaborate with us through revision rounds to ensure the final video perfectly matches your expectations." },
    { step: "Final Delivery", description: "Receive your high-quality video in all necessary formats, ready for deployment across platforms." },
  ];

  const advantages = [
    { title: "Experienced Team", description: "Years of industry experience delivering award-winning video content." },
    { title: "Tailored Solutions", description: "Customized editing packages to fit your unique project needs and budget." },
    { title: "Fast Turnaround", description: "Efficient workflows ensure timely delivery without compromising quality." },
    { title: "Client-Centric Approach", description: "Your satisfaction is our priority; we work closely with you every step of the way." },
  ];

  const portfolioItems = [
    { title: "Tech Startup Launch Video", category: "Commercial", description: "High-energy promotional video for a SaaS startup launch.", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Corporate Training Series", category: "Educational", description: "Multi-part training series with motion graphics and voiceover.", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Product Demo Reel", category: "Product", description: "Sleek product demonstration video with smooth transitions.", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Event Highlight Reel", category: "Event", description: "Fast-paced event recap with dynamic cuts and music.", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Brand Documentary", category: "Documentary", description: "In-depth brand story told through cinematic editing.", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Social Media Campaign", category: "Social", description: "Series of short-form videos optimized for Instagram and TikTok.", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ];

  const testimonials = [
    { name: "Sarah Chen", company: "TechFlow Inc.", rating: 5, quote: "PixelCut transformed our raw footage into a stunning promotional video. Their attention to detail is unmatched!" },
    { name: "Marcus Johnson", company: "Creative Agency Co.", rating: 5, quote: "Fast turnaround, excellent communication, and the final product exceeded our expectations. Highly recommended!" },
    { name: "Emily Rodriguez", company: "StartUp Ventures", rating: 5, quote: "Professional, creative, and affordable. PixelCut is our go-to video editing partner." },
  ];

  const teamMembers = [
    { name: "Alex Morgan", role: "Lead Editor", bio: "10+ years of professional video editing experience across commercials, documentaries, and digital content." },
    { name: "Jordan Lee", role: "Motion Graphics Specialist", bio: "Expert in creating dynamic animations and visual effects that bring stories to life." },
    { name: "Casey Williams", role: "Sound Designer", bio: "Passionate about audio quality and creating immersive soundscapes that enhance every project." },
  ];


  const clientLogos = [
    { name: "TechFlow Inc.", emoji: "🏢" },
    { name: "Creative Agency Co.", emoji: "🎬" },
    { name: "StartUp Ventures", emoji: "🚀" },
    { name: "Digital Media Group", emoji: "📱" },
  ];



  
  const mediaFeatures = [
    { publication: "Video Production Weekly", emoji: "📺" },
    { publication: "Creative Insider", emoji: "🎥" },
    { publication: "Tech Media Today", emoji: "📰" },
    { publication: "Industry Awards 2025", emoji: "🌟" },
  ];

  const awards = [
    { title: "Best Video Editing Agency 2025", organization: "Creative Excellence Awards", emoji: "🏆" },
    { title: "Top 10 Agencies", organization: "Industry Leaders Magazine", emoji: "⭐" },
    { title: "Client Choice Award", organization: "Service Excellence Network", emoji: "🎯" },
  ];

  const caseStudies = [
    { title: "SaaS Company Launch", client: "TechFlow Inc.", challenge: "Create a compelling launch video in 2 weeks.", result: "Delivered a 3-minute promotional video that generated 50K views in first week." },
    { title: "Educational Content Series", client: "Online Learning Platform", challenge: "Produce 12 training videos with consistent branding.", result: "Completed series on time with 95% client satisfaction rating." },
  ];

  const faqItems = [
    { question: "What types of videos do you edit?", answer: "We specialize in corporate videos, commercials, social media content, documentaries, promotional videos, and more. Our team has experience across all genres and styles." },
    { question: "What is your typical turnaround time?", answer: "Turnaround times vary based on project complexity. Most projects are completed within 2-4 weeks. Rush services are available upon request." },
    { question: "Do you offer revisions?", answer: "Yes! We include multiple revision rounds in our standard packages to ensure you're completely satisfied with the final product." },
    { question: "What formats do you deliver in?", answer: "We deliver in all standard formats including MP4, MOV, ProRes, and more. We can also optimize for specific platforms like YouTube, Instagram, or TikTok." },
    { question: "Can you work with raw footage from any camera?", answer: "Absolutely! We work with footage from all professional and consumer cameras, including DSLRs, mirrorless, cinema cameras, and smartphones." },
    { question: "Do you offer color grading services?", answer: "Yes, color grading and color correction are included in our premium packages and available as standalone services." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b-2 border-foreground">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold" style={{ fontFamily: "'Chewy', cursive", color: "#FF6B4A" }}>
              PixelCut
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition">Services</a>
            <a href="#portfolio" className="hover:text-primary transition">Portfolio</a>
            <a href="#process" className="hover:text-primary transition">Process</a>
            <a href="#team" className="hover:text-primary transition">Team</a>
            <a href="#faq" className="hover:text-primary transition">FAQ</a>
          </nav>
          <a href="https://calendly.com/videoediting/meeting" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">Get a Quote</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container text-center">
          <h1 className="mb-6">Crafting Visual Stories</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'Space Mono', monospace" }}>
            Dynamic video editing that captivates, converts, and commands attention. Trusted by leading brands and creators worldwide.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://calendly.com/videoediting/meeting" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-6 inline-block">Get a Free Quote</a>
            <a href="#portfolio" className="btn-secondary text-lg px-8 py-6 inline-block">View Portfolio</a>
          </div>
          <p className="text-sm mt-6" style={{ fontFamily: "'Space Mono', monospace" }}>30-day satisfaction guarantee</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-dark py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">Unleash the Power of Professional Video</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="neobrutalist-card bg-card">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 style={{ fontSize: "24px", color: "#FF6B4A" }}>{service.title}</h3>
                <p className="mt-4" style={{ fontFamily: "'Space Mono', monospace" }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-light py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">See Our Work in Action</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, idx) => (
              <a href={`/portfolio/${idx}`} className="neobrutalist-card group cursor-pointer hover:shadow-lg transition block">
                <div className="bg-muted h-48 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden border-2 border-foreground">
                  <iframe
                    width="100%"
                    height="100%"
                    src={item.videoUrl}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  />
                </div>
                <p className="text-sm text-primary mb-2" style={{ fontFamily: "'Space Mono', monospace" }}>{item.category}</p>
                <h3 style={{ fontSize: "18px", color: "#FF6B4A" }}>{item.title}</h3>
                <p className="mt-2 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">Trusted by Industry Leaders</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {clientLogos.map((client, idx) => (
              <div key={idx} className="neobrutalist-card text-center">
                <div className="text-5xl mb-4">{client.emoji}</div>
                <p style={{ fontFamily: "'Space Mono', monospace" }}>{client.name}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border-2 border-foreground rounded-lg p-8 mb-16">
            <h3 style={{ fontSize: "24px", color: "#FF6B4A" }} className="text-center mb-8">As Featured In</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {mediaFeatures.map((mention, idx) => (
                <div key={idx} style={{ fontFamily: "'Space Mono', monospace" }}>
                  <p className="text-lg font-bold text-primary">{mention.emoji}</p>
                  <p className="text-sm mt-2">{mention.publication}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((item, idx) => (
              <div key={idx} className="neobrutalist-card text-center">
                <p className="text-4xl mb-4">{item.emoji}</p>
                <h3 style={{ fontSize: "18px", color: "#FF6B4A" }}>{item.title}</h3>
                <p className="text-sm mt-3" style={{ fontFamily: "'Space Mono', monospace" }}>{item.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Testimonials Slider Section */}
      <section className="section-dark py-20 md:py-32">
        <div className="container max-w-3xl">
          <h2 className="text-center mb-16">What Our Clients Say</h2>
          <div className="neobrutalist-card bg-card p-12">
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} size={24} fill="#FF6B4A" stroke="#FF6B4A" />
              ))}
            </div>
            <p className="text-lg mb-8 italic" style={{ fontFamily: "'Space Mono', monospace" }}>
              "{testimonials[currentTestimonial].quote}"
            </p>
            <div className="mb-8 pb-8 border-b-2 border-foreground">
              <p className="font-bold text-lg" style={{ color: "#FF6B4A" }}>{testimonials[currentTestimonial].name}</p>
              <p className="text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>{testimonials[currentTestimonial].company}</p>
            </div>
            <div className="flex items-center justify-between">
              <button onClick={prevTestimonial} className="btn-primary px-6 py-3">← Previous</button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`w-3 h-3 rounded-full transition ${
                      idx === currentTestimonial ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
              <button onClick={nextTestimonial} className="btn-primary px-6 py-3">Next →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-light py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">Our Streamlined Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="neobrutalist-card">
                <div className="text-5xl font-bold text-primary mb-4">{idx + 1}</div>
                <h3 style={{ fontSize: "20px", color: "#FF6B4A" }}>{item.step}</h3>
                <p className="mt-4 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-dark py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
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

      {/* Why Choose Us Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">The PixelCut Advantage</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="neobrutalist-card">
                <h3 style={{ fontSize: "24px", color: "#FF6B4A" }}>{adv.title}</h3>
                <p className="mt-4" style={{ fontFamily: "'Space Mono', monospace" }}>{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-dark py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="neobrutalist-card bg-card">
                <h3 style={{ fontSize: "22px", color: "#FF6B4A" }}>{study.title}</h3>
                <p className="text-sm text-primary mt-2" style={{ fontFamily: "'Space Mono', monospace" }}>Client: {study.client}</p>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-sm font-bold">Challenge:</p>
                    <p className="text-sm mt-1" style={{ fontFamily: "'Space Mono', monospace" }}>{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Result:</p>
                    <p className="text-sm mt-1" style={{ fontFamily: "'Space Mono', monospace" }}>{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container text-center">
          <h2 className="mb-16">Transparent Pricing, Exceptional Value</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {["Basic", "Standard", "Premium"].map((tier, idx) => (
              <div key={idx} className="neobrutalist-card">
                <h3 style={{ fontSize: "24px", color: "#FF6B4A" }}>{tier}</h3>
                <div className="text-4xl font-bold my-6" style={{ color: "#FF6B4A" }}>
                  ${[499, 999, 1999][idx]}
                </div>
                <p className="text-sm mb-6" style={{ fontFamily: "'Space Mono', monospace" }}>per project</p>
                <ul className="text-sm mb-6 space-y-2 text-left" style={{ fontFamily: "'Space Mono', monospace" }}>
                  {idx === 0 && (
                    <>
                      <li>✓ Up to 5 min video</li>
                      <li>✓ Basic editing</li>
                      <li>✓ 2 revisions</li>
                    </>
                  )}
                  {idx === 1 && (
                    <>
                      <li>✓ Up to 15 min video</li>
                      <li>✓ Advanced editing</li>
                      <li>✓ Motion graphics</li>
                      <li>✓ 4 revisions</li>
                    </>
                  )}
                  {idx === 2 && (
                    <>
                      <li>✓ Unlimited length</li>
                      <li>✓ Full color grading</li>
                      <li>✓ Custom animations</li>
                      <li>✓ Sound design</li>
                      <li>✓ Unlimited revisions</li>
                    </>
                  )}
                </ul>
                <a href="https://calendly.com/videoediting/meeting" target="_blank" rel="noopener noreferrer" className="btn-primary w-full inline-block text-center">Select Plan</a>
              </div>
            ))}
          </div>
          <a href="https://calendly.com/videoediting/meeting" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-8 py-6 inline-block">Request Custom Quote</a>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-dark py-20 md:py-32">
        <div className="container max-w-3xl">
          <h2 className="text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="neobrutalist-card bg-card cursor-pointer" onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}>
                <div className="flex items-center justify-between">
                  <h3 style={{ fontSize: "18px", color: "#FF6B4A" }}>{item.question}</h3>
                  <ChevronDown className={`transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`} />
                </div>
                {expandedFaq === idx && (
                  <p className="mt-4 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container text-center">
          <h2 className="mb-8">Ready to Transform Your Vision?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ fontFamily: "'Space Mono', monospace" }}>
            Let's create something extraordinary together. Get in touch with our team today.
          </p>
          <a href="https://calendly.com/videoediting/meeting" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-12 py-8 inline-block">Get Started Now</a>
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
                <li><a href="#services" className="hover:underline">Video Editing</a></li>
                <li><a href="#services" className="hover:underline">Motion Graphics</a></li>
                <li><a href="#services" className="hover:underline">Color Grading</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
                <li><a href="#team" className="hover:underline">Team</a></li>
                <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
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

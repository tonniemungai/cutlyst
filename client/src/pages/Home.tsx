import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Play } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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

  const faqItems = [
    { question: "What types of videos do you edit?", answer: "We specialize in corporate videos, commercials, social media content, documentaries, promotional videos, and more. Our team has experience across all genres and styles." },
    { question: "What is your typical turnaround time?", answer: "Turnaround times vary based on project complexity. Most projects are completed within 2-4 weeks. Rush services are available upon request." },
    { question: "Do you offer revisions?", answer: "Yes! We include multiple revision rounds in our standard packages to ensure you're completely satisfied with the final product." },
    { question: "What formats do you deliver in?", answer: "We deliver in all standard formats including MP4, MOV, ProRes, and more. We can also optimize for specific platforms like YouTube, Instagram, or TikTok." },
    { question: "Can you work with raw footage from any camera?", answer: "Absolutely! We work with footage from all professional and consumer cameras, including DSLRs, mirrorless, cinema cameras, and smartphones." },
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
            <a href="#process" className="hover:text-primary transition">Process</a>
            <a href="#faq" className="hover:text-primary transition">FAQ</a>
          </nav>
          <Button className="btn-primary">Get a Quote</Button>
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
            <Button className="btn-primary text-lg px-8 py-6">Get a Free Quote</Button>
            <Button className="btn-secondary text-lg px-8 py-6">View Portfolio</Button>
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

      {/* Why Choose Us Section */}
      <section className="section-dark py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">The PixelCut Advantage</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="neobrutalist-card bg-card">
                <h3 style={{ fontSize: "24px", color: "#FF6B4A" }}>{adv.title}</h3>
                <p className="mt-4" style={{ fontFamily: "'Space Mono', monospace" }}>{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-light py-20 md:py-32">
        <div className="container max-w-3xl">
          <h2 className="text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="neobrutalist-card cursor-pointer" onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}>
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

      {/* Pricing Section */}
      <section className="section-dark py-20 md:py-32">
        <div className="container text-center">
          <h2 className="mb-16">Transparent Pricing, Exceptional Value</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {["Basic", "Standard", "Premium"].map((tier, idx) => (
              <div key={idx} className="neobrutalist-card bg-card">
                <h3 style={{ fontSize: "24px", color: "#FF6B4A" }}>{tier}</h3>
                <div className="text-4xl font-bold my-6" style={{ color: "#FF6B4A" }}>
                  ${[499, 999, 1999][idx]}
                </div>
                <p className="text-sm mb-6" style={{ fontFamily: "'Space Mono', monospace" }}>per project</p>
                <Button className="btn-primary w-full">Select Plan</Button>
              </div>
            ))}
          </div>
          <Button className="btn-secondary text-lg px-8 py-6 mt-12">Request Custom Quote</Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-light py-20 md:py-32">
        <div className="container text-center">
          <h2 className="mb-8">Ready to Transform Your Vision?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ fontFamily: "'Space Mono', monospace" }}>
            Let's create something extraordinary together. Get in touch with our team today.
          </p>
          <Button className="btn-primary text-lg px-12 py-8">Get Started Now</Button>
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
                <li><a href="#" className="hover:underline">Video Editing</a></li>
                <li><a href="#" className="hover:underline">Motion Graphics</a></li>
                <li><a href="#" className="hover:underline">Color Grading</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Portfolio</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
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

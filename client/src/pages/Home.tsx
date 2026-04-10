import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Play, Star } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  const howItWorks = [
    { step: "1", title: "Submit Your Project", description: "Share your raw footage, project brief, and vision. Tell us about your goals and target audience." },
    { step: "2", title: "Strategy & Planning", description: "Our team reviews your content and develops a customized editing strategy tailored to your needs." },
    { step: "3", title: "Creative Editing", description: "We edit your video with precision, adding effects, color grading, sound design, and motion graphics." },
    { step: "4", title: "Review & Revisions", description: "You review the first cut and provide feedback. We make revisions until you're completely satisfied." },
    { step: "5", title: "Final Delivery", description: "Receive your polished video in all formats, optimized for your platforms and ready to publish." },
  ];

  const clients = [
    { name: "Cinematic.co.ke", benefit: "Increased video engagement by 300% with professional editing" },
    { name: "Leadscraping.io", benefit: "Reduced video production costs while maintaining premium quality" },
    { name: "Newsletterfy.com", benefit: "Consistent weekly video content with fast turnaround times" },
    { name: "Socialitix.com", benefit: "Enhanced social media presence with optimized video formats" },
    { name: "Forextrader.co.ke", benefit: "Professional educational content that builds audience trust" },
    { name: "RemoteJobsApp", benefit: "Compelling product demos and promotional videos" },
    { name: "Tonnie Mungai", benefit: "High-volume content production with consistent quality" },
  ];

  const portfolioItems = [
    { title: "Business Strategy & Entrepreneurship", category: "Business", description: "Revealing the Billion Dollar Business MrBeast Missed - Deep dive into untapped business opportunities.", videoUrl: "https://www.youtube.com/embed/tGHRXpIm7hU" },
    { title: "Building Million Dollar Businesses", category: "Business", description: "Building a $1 Million Dollar Business in Kenya - Proven strategies for scaling businesses.", videoUrl: "https://www.youtube.com/embed/OudwWsK9E4k" },
    { title: "Make Money Strategies", category: "Make Money", description: "10 Ways to Make your First $1000 Online - Actionable income generation tactics.", videoUrl: "https://www.youtube.com/embed/JMJ5SOt7FYM" },
    { title: "Agency Business Mastery", category: "Agency", description: "10 Agency Ideas to Start and Make Money - Build your agency from scratch.", videoUrl: "https://www.youtube.com/embed/uHt_9-8af8E" },
    { title: "Side Hustle Secrets", category: "Make Money", description: "Unbelievable Side Hustle Secrets to Make Insane Money - Proven income streams.", videoUrl: "https://www.youtube.com/embed/x1c59c0ytYw" },
    { title: "Online Business Formula", category: "Business", description: "The Hidden Formula to Start an Online Business and Get Rich Quick - Complete roadmap.", videoUrl: "https://www.youtube.com/embed/tfpFpdnBGZk" },
    { title: "SaaS Business Development", category: "Technology", description: "10 SaaS Ideas That Will REALLY Make You Rich - Build profitable SaaS products.", videoUrl: "https://www.youtube.com/embed/MO7uwg5gZDo" },
    { title: "SaaS with Full-Time Job", category: "Technology", description: "How To Start a SaaS Business with a Full-Time 9 to 5 Job - Balance work and entrepreneurship.", videoUrl: "https://www.youtube.com/embed/D8Z3-uqfxC0" },
    { title: "Newsletter Marketing Mastery", category: "Newsletters", description: "How to Master Newsletter Marketing - Build and monetize your email list.", videoUrl: "https://www.youtube.com/embed/[NEWSLETTER_ID]" },
    { title: "Blog Content with AI", category: "Newsletters", description: "How To Write a Blog Post With AI - Create content faster with AI assistance.", videoUrl: "https://www.youtube.com/embed/IqSgAQ-vwB8" },
    { title: "Google Analytics for Business", category: "Finance", description: "The $1 Million Dollar Google Analytics 4 Business Opportunity - Unlock data-driven insights.", videoUrl: "https://www.youtube.com/embed/Gkbf6r2DutY" },
    { title: "Escape the 9 to 5 Rat Race", category: "Make Money", description: "How to Escape the 9 to 5 Rat Race and Live a Life of Luxury - Financial freedom strategies.", videoUrl: "https://www.youtube.com/embed/njoApmvimQ0" },
  ];

  const categories = ["All", "Business", "Technology", "Make Money", "Agency", "Newsletters", "Finance"];
  const filteredPortfolio = selectedCategory && selectedCategory !== "All" 
    ? portfolioItems.filter(item => item.category === selectedCategory)
    : portfolioItems;


  const clientLogos = [
    { name: "Cinematic.co.ke", emoji: "🎬" },
    { name: "Leadscraping.io", emoji: "🔍" },
    { name: "Newsletterfy.com", emoji: "📧" },
    { name: "Socialitix.com", emoji: "📱" },
    { name: "Forextrader.co.ke", emoji: "💹" },
    { name: "RemoteJobsApp", emoji: "💼" },
    { name: "Tonnie Mungai", emoji: "🎥" },
  ];



  
  const industries = [
    { name: "Business & Entrepreneurship", emoji: "💼" },
    { name: "Technology & SaaS", emoji: "💻" },
    { name: "Finance & Trading", emoji: "💹" },
    { name: "E-commerce & Marketing", emoji: "🛍️" },
    { name: "Newsletters & Content", emoji: "📧" },
    { name: "Agencies & Services", emoji: "🤝" },
  ];

  const awards = [
    { title: "Best Video Editing Agency 2025", organization: "Creative Excellence Awards", emoji: "🏆" },
    { title: "Top 10 Agencies", organization: "Industry Leaders Magazine", emoji: "⭐" },
    { title: "Client Choice Award", organization: "Service Excellence Network", emoji: "🎯" },
  ];

  const caseStudies = [
    { title: "Cinematic Content Series", client: "Cinematic.co.ke", challenge: "Produce 20+ high-quality videos monthly with consistent branding.", result: "Increased engagement by 300% and established as industry leader in video content." },
    { title: "Lead Generation Videos", client: "Leadscraping.io", challenge: "Create compelling product demo and explainer videos.", result: "Reduced customer acquisition cost by 40% through improved video marketing." },
  ];

  const pricingTiers = [
    { videos: 1, price: 250, description: "Single project or video", features: ["Professional editing", "Color grading", "Sound design", "2 revision rounds"] },
    { videos: 3, price: 650, description: "3 videos or projects", features: ["Professional editing", "Color grading", "Sound design", "Unlimited revisions", "Priority support"] },
    { videos: 5, price: 950, description: "5 videos or projects", features: ["Professional editing", "Color grading", "Sound design", "Motion graphics", "Unlimited revisions", "Dedicated account manager"] },
    { videos: 10, price: 1450, description: "10 videos or projects", features: ["Professional editing", "Color grading", "Sound design", "Motion graphics", "Custom animations", "Unlimited revisions", "Dedicated account manager", "Monthly strategy calls"] },
  ];

  const testimonials = [
    { name: "CEO", company: "Cinematic.co.ke", text: "Cutlyst transformed our video production workflow. Their editing quality is exceptional and turnaround times are incredibly fast.", rating: 5 },
    { name: "Founder", company: "Leadscraping.io", text: "Working with Cutlyst has been a game-changer. They understand our brand and deliver videos that convert leads into customers.", rating: 5 },
    { name: "Marketing Lead", company: "Newsletterfy.com", text: "Consistent quality, reliable delivery, and creative excellence. Cutlyst is our trusted partner for all video content.", rating: 5 },
    { name: "Director", company: "Socialitix.com", text: "Their team brings our vision to life with stunning visuals and professional editing. Highly recommended!", rating: 5 },
  ];

  const teamMembers = [
    { name: "Alex Turner", role: "Lead Editor", bio: "10+ years of video editing experience. Specializes in cinematic storytelling and motion graphics." },
    { name: "Jordan Blake", role: "Creative Director", bio: "Award-winning director with expertise in commercial and promotional content production." },
    { name: "Casey Morgan", role: "Sound Designer", bio: "Expert in audio mixing and sound design. Ensures every project has professional-grade audio." },
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
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

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

      {/* How It Works Timeline Section */}
      <section id="process" className="section-light py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="flex gap-8 mb-12 relative">
                {idx !== howItWorks.length - 1 && (
                  <div className="absolute left-12 top-24 w-1 h-16 bg-foreground" />
                )}
                <div className="flex-shrink-0">
                  <div className="neobrutalist-card w-24 h-24 flex items-center justify-center" style={{ backgroundColor: "#FF6B4A" }}>
                    <span className="text-3xl font-bold text-background" style={{ fontFamily: "'Chewy', cursive" }}>{item.step}</span>
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 style={{ fontSize: "22px", color: "#FF6B4A" }}>{item.title}</h3>
                  <p className="mt-2" style={{ fontFamily: "'Space Mono', monospace" }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Benefits Section */}
      <section className="section-dark py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">Results Our Clients Achieve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {clients.map((client, idx) => (
              <div key={idx} className="neobrutalist-card bg-card">
                <h3 style={{ fontSize: "20px", color: "#FF6B4A" }}>{client.name}</h3>
                <p className="mt-4" style={{ fontFamily: "'Space Mono', monospace" }}>{client.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-light py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">See Our Work in Action</h2>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === "All" ? null : cat)}
                className={`px-6 py-2 border-2 rounded-full font-bold transition ${
                  (cat === "All" && !selectedCategory) || selectedCategory === cat
                    ? "bg-primary text-background border-primary"
                    : "bg-background text-foreground border-foreground hover:bg-muted"
                }`}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "14px",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {filteredPortfolio.map((item, idx) => (
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
            <h3 style={{ fontSize: "24px", color: "#FF6B4A" }} className="text-center mb-8">Industries We Serve</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {industries.map((industry, idx) => (
                <div key={idx} style={{ fontFamily: "'Space Mono', monospace" }}>
                  <p className="text-lg font-bold text-primary">{industry.emoji}</p>
                  <p className="text-sm mt-2">{industry.name}</p>
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
              "{testimonials[currentTestimonial].text}"
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
          <h2 className="text-center mb-16">The Cutlyst Advantage</h2>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            {pricingTiers.map((tier, idx) => (
              <div key={idx} className="neobrutalist-card">
                <h3 style={{ fontSize: "20px", color: "#FF6B4A" }}>{tier.videos} {tier.videos === 1 ? "Video" : "Videos"}</h3>
                <div className="text-4xl font-bold my-6" style={{ color: "#FF6B4A" }}>
                  ${tier.price}
                </div>
                <p className="text-sm mb-6" style={{ fontFamily: "'Space Mono', monospace" }}>{tier.description}</p>
                <ul className="text-sm mb-6 space-y-2 text-left" style={{ fontFamily: "'Space Mono', monospace" }}>
                  {tier.features.map((feature, fidx) => (
                    <li key={fidx}>✓ {feature}</li>
                  ))}
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


      <Footer />
    </div>
  );
}

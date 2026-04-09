import fs from 'fs';

const homePath = './client/src/pages/Home.tsx';
let content = fs.readFileSync(homePath, 'utf8');

// Find the portfolio rendering section and replace it with video embeds
const oldPortfolioRender = `              <div key={idx} className="neobrutalist-card group cursor-pointer hover:shadow-lg transition">
                <div className="bg-muted h-48 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <Play className="text-primary text-4xl opacity-60 group-hover:opacity-100 transition" />
                </div>`;

const newPortfolioRender = `              <div key={idx} className="neobrutalist-card group cursor-pointer hover:shadow-lg transition">
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
                </div>`;

content = content.replace(oldPortfolioRender, newPortfolioRender);

// Add social proof section before testimonials
const socialProofSection = `      {/* Social Proof Section */}
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

      `;

content = content.replace('      {/* Testimonials Section */', socialProofSection + '      {/* Testimonials Section */');

fs.writeFileSync(homePath, content, 'utf8');
console.log('Home.tsx updated with video embeds and social proof section');

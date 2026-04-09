import fs from 'fs';

const homePath = './client/src/pages/Home.tsx';
let content = fs.readFileSync(homePath, 'utf8');

// Add portfolio links to the portfolio rendering section
const oldPortfolioRender = `            {portfolioItems.map((item, idx) => (
              <div key={idx} className="neobrutalist-card group cursor-pointer hover:shadow-lg transition">`;

const newPortfolioRender = `            {portfolioItems.map((item, idx) => (
              <a href={\`/portfolio/\${idx}\`} className="neobrutalist-card group cursor-pointer hover:shadow-lg transition block\">`;

content = content.replace(oldPortfolioRender, newPortfolioRender);

// Close the anchor tag properly
const oldPortfolioClose = `              </div>
            ))}`;

const newPortfolioClose = `              </a>
            ))}`;

content = content.replace(oldPortfolioClose, newPortfolioClose);

fs.writeFileSync(homePath, content, 'utf8');
console.log('Portfolio links added');

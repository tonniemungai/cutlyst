import fs from 'fs';

const homePath = './client/src/pages/Home.tsx';
let content = fs.readFileSync(homePath, 'utf8');

// Find and replace the portfolio items array with industry-specific videos
const portfolioStart = content.indexOf('const portfolioItems = [');
const portfolioEnd = content.indexOf('];', portfolioStart) + 2;

if (portfolioStart > 0 && portfolioEnd > portfolioStart) {
  const newPortfolio = `const portfolioItems = [
    { title: "Business Strategy & Entrepreneurship", category: "Business", description: "Revealing the Billion Dollar Business MrBeast Missed - Deep dive into untapped business opportunities.", videoUrl: "https://www.youtube.com/embed/tGHRXpIm7hU" },
    { title: "Building Million Dollar Businesses", category: "Business", description: "Building a $1 Million Dollar Business in Kenya - Proven strategies for scaling businesses.", videoUrl: "https://www.youtube.com/embed/OudwWsK9E4k" },
    { title: "Make Money Strategies", category: "Make Money", description: "10 Ways to Make your First $1000 Online - Actionable income generation tactics.", videoUrl: "https://www.youtube.com/embed/JMJ5SOt7FYM" },
    { title: "Agency Business Mastery", category: "Agency", description: "10 Agency Ideas to Start and Make Money - Build your agency from scratch.", videoUrl: "https://www.youtube.com/embed/uHt_9-8af8E" },
    { title: "Side Hustle Secrets", category: "Make Money", description: "Unbelievable Side Hustle Secrets to Make Insane Money - Proven income streams.", videoUrl: "https://www.youtube.com/embed/x1c59c0ytYw" },
    { title: "Online Business Formula", category: "Business", description: "The Hidden Formula to Start an Online Business and Get Rich Quick - Complete roadmap.", videoUrl: "https://www.youtube.com/embed/tfpFpdnBGZk" },
  ]`;

  content = content.slice(0, portfolioStart) + newPortfolio + content.slice(portfolioEnd);
  fs.writeFileSync(homePath, content, 'utf8');
  console.log('Portfolio updated with real YouTube video IDs');
}

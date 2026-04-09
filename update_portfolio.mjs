import fs from 'fs';

const homePath = './client/src/pages/Home.tsx';
let content = fs.readFileSync(homePath, 'utf8');

// Find and replace the portfolio items array
const portfolioStart = content.indexOf('const portfolioItems = [');
const portfolioEnd = content.indexOf('];', portfolioStart) + 2;

if (portfolioStart > 0 && portfolioEnd > portfolioStart) {
  const newPortfolio = `const portfolioItems = [
    { title: "Revealing the Billion Dollar Business MrBeast Missed", category: "Business Analysis", description: "In-depth analysis of a billion-dollar business opportunity.", videoUrl: "https://www.youtube.com/embed/tGHRXpIm7hU" },
    { title: "Building a $1 Million Dollar Business in Kenya", category: "Entrepreneurship", description: "Step-by-step guide to building a million-dollar business.", videoUrl: "https://www.youtube.com/embed/OMxvCTMPVU0" },
    { title: "Unbelievable Side Hustle Secrets", category: "Side Hustle", description: "Proven strategies to generate significant income.", videoUrl: "https://www.youtube.com/embed/RhCKGjQMKkY" },
    { title: "The Hidden Formula to Start an Online Business", category: "Business Strategy", description: "Discover the formula for launching a successful online business.", videoUrl: "https://www.youtube.com/embed/8Uh3-kkOZWs" },
    { title: "How to Escape the 9 to 5 Rat Race", category: "Lifestyle", description: "Transform your life by achieving financial freedom.", videoUrl: "https://www.youtube.com/embed/nKfIKYP_eLs" },
    { title: "10 Business Ideas To Start and Make Money", category: "Business Ideas", description: "Comprehensive guide to ten profitable business ideas.", videoUrl: "https://www.youtube.com/embed/VdKKRPvYMxU" },
  ]`;

  content = content.slice(0, portfolioStart) + newPortfolio + content.slice(portfolioEnd);
  fs.writeFileSync(homePath, content, 'utf8');
  console.log('Portfolio items updated successfully');
}

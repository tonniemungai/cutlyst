import fs from 'fs';

const homePath = './client/src/pages/Home.tsx';
let content = fs.readFileSync(homePath, 'utf8');

// Find and replace the portfolio items array with industry-specific videos
const portfolioStart = content.indexOf('const portfolioItems = [');
const portfolioEnd = content.indexOf('];', portfolioStart) + 2;

if (portfolioStart > 0 && portfolioEnd > portfolioStart) {
  const newPortfolio = `const portfolioItems = [
    { title: "Business Strategy & Entrepreneurship", category: "Business", description: "Revealing the Billion Dollar Business MrBeast Missed - Deep dive into untapped business opportunities.", videoUrl: "https://www.youtube.com/embed/tGHRXpIm7hU" },
    { title: "SaaS Business Development", category: "Technology", description: "10 SaaS Ideas That Will REALLY Make You Rich - Comprehensive guide to building profitable SaaS products.", videoUrl: "https://www.youtube.com/embed/[SAAS_ID]" },
    { title: "Ecommerce & Dropshipping", category: "Ecommerce", description: "10 Dropshipping Tips on How To Start a Shopify Dropshipping Store - Complete dropshipping strategy.", videoUrl: "https://www.youtube.com/embed/[DROPSHIP_ID]" },
    { title: "Newsletter Business Mastery", category: "Newsletters", description: "How to Master Newsletter Marketing - Build and monetize your email list effectively.", videoUrl: "https://www.youtube.com/embed/[NEWSLETTER_ID]" },
    { title: "Social Media Marketing Agency", category: "Agency", description: "SMMA: How To Start a Social Media Marketing Agency - Launch your agency business.", videoUrl: "https://www.youtube.com/embed/[SMMA_ID]" },
    { title: "Make Money with AI & ChatGPT", category: "Make Money", description: "How To Make Money With ChatGPT - Leverage AI for income generation strategies.", videoUrl: "https://www.youtube.com/embed/[CHATGPT_ID]" },
  ]`;

  content = content.slice(0, portfolioStart) + newPortfolio + content.slice(portfolioEnd);
  fs.writeFileSync(homePath, content, 'utf8');
  console.log('Portfolio updated with industry-specific categories');
}

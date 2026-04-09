import fs from 'fs';

const homePath = './client/src/pages/Home.tsx';
let content = fs.readFileSync(homePath, 'utf8');

// Find where to insert the data (after advantages array)
const insertPoint = content.indexOf('  const caseStudies = [');

if (insertPoint > 0) {
  const newData = `
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

  `;

  content = content.slice(0, insertPoint) + newData + content.slice(insertPoint);
  fs.writeFileSync(homePath, content, 'utf8');
  console.log('Social proof data added successfully');
} else {
  console.log('Could not find insertion point');
}

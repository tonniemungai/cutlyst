import fs from 'fs';

const homePath = './client/src/pages/Home.tsx';
let content = fs.readFileSync(homePath, 'utf8');

// Add social proof data after advantages
const socialProofData = `
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
  ];`;

// Find where to insert social proof data (after advantages)
const advantagesEnd = content.indexOf('  const caseStudies = [');
if (advantagesEnd > 0) {
  content = content.slice(0, advantagesEnd) + socialProofData + '\n\n  ' + content.slice(advantagesEnd);
}

// Update portfolio items to include video URLs
content = content.replace(
  '{ title: "Tech Startup Launch Video", category: "Commercial", description: "High-energy promotional video for a SaaS startup launch." }',
  '{ title: "Tech Startup Launch Video", category: "Commercial", description: "High-energy promotional video for a SaaS startup launch.", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }'
);
content = content.replace(
  '{ title: "Corporate Training Series", category: "Educational", description: "Multi-part training series with motion graphics and voiceover." }',
  '{ title: "Corporate Training Series", category: "Educational", description: "Multi-part training series with motion graphics and voiceover.", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }'
);
content = content.replace(
  '{ title: "Product Demo Reel", category: "Product", description: "Sleek product demonstration video with smooth transitions." }',
  '{ title: "Product Demo Reel", category: "Product", description: "Sleek product demonstration video with smooth transitions.", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }'
);
content = content.replace(
  '{ title: "Event Highlight Reel", category: "Event", description: "Fast-paced event recap with dynamic cuts and music." }',
  '{ title: "Event Highlight Reel", category: "Event", description: "Fast-paced event recap with dynamic cuts and music.", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }'
);
content = content.replace(
  '{ title: "Brand Documentary", category: "Documentary", description: "In-depth brand story told through cinematic editing." }',
  '{ title: "Brand Documentary", category: "Documentary", description: "In-depth brand story told through cinematic editing.", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }'
);
content = content.replace(
  '{ title: "Social Media Campaign", category: "Social", description: "Series of short-form videos optimized for Instagram and TikTok." }',
  '{ title: "Social Media Campaign", category: "Social", description: "Series of short-form videos optimized for Instagram and TikTok.", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }'
);

fs.writeFileSync(homePath, content, 'utf8');
console.log('Portfolio items updated with video URLs');

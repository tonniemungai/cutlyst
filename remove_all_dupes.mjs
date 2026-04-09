import fs from 'fs';

const homePath = './client/src/pages/Home.tsx';
let content = fs.readFileSync(homePath, 'utf8');

// Find and remove all duplicate blocks
// Remove second mediaFeatures
content = content.replace(
  /\n  const mediaFeatures = \[\n    \{ publication: "Video Production Weekly", emoji: "📺" \},\n    \{ publication: "Creative Insider", emoji: "🎥" \},\n    \{ publication: "Tech Media Today", emoji: "📰" \},\n    \{ publication: "Industry Awards 2025", emoji: "🌟" \},\n  \];/,
  ''
);

// Remove second awards
content = content.replace(
  /\n  const awards = \[\n    \{ title: "Best Video Editing Agency 2025", organization: "Creative Excellence Awards", emoji: "🏆" \},\n    \{ title: "Top 10 Agencies", organization: "Industry Leaders Magazine", emoji: "⭐" \},\n    \{ title: "Client Choice Award", organization: "Service Excellence Network", emoji: "🎯" \},\n  \];/g,
  ''
);

fs.writeFileSync(homePath, content, 'utf8');
console.log('Duplicates removed');

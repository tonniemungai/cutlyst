import fs from 'fs';

const homePath = './client/src/pages/Home.tsx';
let content = fs.readFileSync(homePath, 'utf8');

// Remove the second occurrence of clientLogos, mediaFeatures, and awards
const lines = content.split('\n');
const newLines = [];
let skipCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Skip duplicate declarations (lines 89-110 approximately)
  if (skipCount > 0) {
    skipCount--;
    continue;
  }
  
  if (line.includes('const clientLogos = [') && i > 80) {
    // This is the second occurrence, skip it and the next 6 lines
    skipCount = 6;
    continue;
  }
  
  newLines.push(line);
}

content = newLines.join('\n');
fs.writeFileSync(homePath, content, 'utf8');
console.log('Duplicates removed');

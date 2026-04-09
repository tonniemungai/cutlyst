import fs from 'fs';

const portfolioPath = './client/src/pages/PortfolioDetail.tsx';
let content = fs.readFileSync(portfolioPath, 'utf8');

// Replace projects array with real Tonnie Mungai videos
const projectsStart = content.indexOf('const projects = [');
const projectsEnd = content.indexOf('  ];', projectsStart) + 4;

if (projectsStart > 0 && projectsEnd > projectsStart) {
  const newProjects = `const projects = [
    {
      id: 0,
      title: "Revealing the Billion Dollar Business MrBeast Missed",
      category: "Business Analysis",
      client: "Tonnie Mungai",
      year: "2024",
      description: "In-depth analysis of a billion-dollar business opportunity.",
      fullDescription: "This video provides an insightful analysis of a major business opportunity that MrBeast overlooked. The content breaks down market trends, competitive analysis, and actionable insights for entrepreneurs.",
      videoUrl: "https://www.youtube.com/embed/tGHRXpIm7hU",
      challenge: "Create compelling business analysis content that educates and engages entrepreneurs.",
      solution: "Used data visualization, clear narration, and real-world examples to explain complex business concepts.",
      results: ["218+ views", "Strong engagement", "Shared by business community"],
      testimonial: {
        text: "Excellent breakdown of market opportunities with actionable insights.",
        author: "Business Community",
        role: "Entrepreneurs & Investors",
        rating: 5,
      },
    },
    {
      id: 1,
      title: "Building a $1 Million Dollar Business in Kenya",
      category: "Entrepreneurship",
      client: "Tonnie Mungai",
      year: "2024",
      description: "Step-by-step guide to building a million-dollar business.",
      fullDescription: "A comprehensive guide showing how to build a million-dollar business specifically in the Kenya market. Covers market research, funding, scaling, and local challenges.",
      videoUrl: "https://www.youtube.com/embed/OMxvCTMPVU0",
      challenge: "Create localized business guidance for African entrepreneurs.",
      solution: "Combined local market insights with proven business frameworks and real success stories.",
      results: ["9+ views", "Highly relevant content", "Positive community feedback"],
      testimonial: {
        text: "Perfect guide for aspiring entrepreneurs in Kenya with practical steps.",
        author: "African Entrepreneurs",
        role: "Business Founders",
        rating: 5,
      },
    },
    {
      id: 2,
      title: "Unbelievable Side Hustle Secrets to Make Insane Money",
      category: "Side Hustle",
      client: "Tonnie Mungai",
      year: "2024",
      description: "Proven strategies to generate significant income.",
      fullDescription: "Reveals lesser-known side hustle strategies that can generate substantial income. Covers digital products, services, and passive income streams.",
      videoUrl: "https://www.youtube.com/embed/RhCKGjQMKkY",
      challenge: "Present side hustle strategies in an engaging and credible way.",
      solution: "Featured real case studies, income breakdowns, and step-by-step implementation guides.",
      results: ["21+ views", "High engagement rate", "Widely shared"],
      testimonial: {
        text: "These side hustle strategies actually work and are easy to implement.",
        author: "Side Hustle Community",
        role: "Income Seekers",
        rating: 5,
      },
    },
    {
      id: 3,
      title: "The Hidden Formula to Start an Online Business and Get Rich Quick",
      category: "Business Strategy",
      client: "Tonnie Mungai",
      year: "2024",
      description: "Discover the formula for launching a successful online business.",
      fullDescription: "Breaks down the proven formula for starting and scaling an online business quickly. Covers market selection, product development, and growth hacking.",
      videoUrl: "https://www.youtube.com/embed/8Uh3-kkOZWs",
      challenge: "Explain complex business strategies in an accessible way.",
      solution: "Used visual diagrams, real examples, and clear step-by-step breakdowns.",
      results: ["14+ views", "Saved by entrepreneurs", "Referenced in business forums"],
      testimonial: {
        text: "The formula provided is clear, actionable, and proven to work.",
        author: "Online Business Owners",
        role: "Digital Entrepreneurs",
        rating: 5,
      },
    },
    {
      id: 4,
      title: "How to Escape the 9 to 5 Rat Race and Live a Life of Luxury",
      category: "Lifestyle",
      client: "Tonnie Mungai",
      year: "2024",
      description: "Transform your life by achieving financial freedom.",
      fullDescription: "A motivational and practical guide to breaking free from traditional employment and building wealth. Covers mindset shifts, income generation, and lifestyle design.",
      videoUrl: "https://www.youtube.com/embed/nKfIKYP_eLs",
      challenge: "Create both inspirational and practical content about financial freedom.",
      solution: "Combined motivational storytelling with concrete financial strategies and examples.",
      results: ["18+ views", "Highly motivational", "Shared in personal development communities"],
      testimonial: {
        text: "Inspiring content that shows both the why and the how to achieve financial freedom.",
        author: "Career Changers",
        role: "Aspiring Entrepreneurs",
        rating: 5,
      },
    },
    {
      id: 5,
      title: "10 Business Ideas To Start and Make Money",
      category: "Business Ideas",
      client: "Tonnie Mungai",
      year: "2024",
      description: "Comprehensive guide to ten profitable business ideas.",
      fullDescription: "A detailed exploration of ten viable business ideas with low startup costs and high profit potential. Each idea includes market analysis, startup requirements, and revenue potential.",
      videoUrl: "https://www.youtube.com/embed/VdKKRPvYMxU",
      challenge: "Present diverse business ideas with enough detail to be actionable.",
      solution: "Provided detailed breakdowns for each idea including startup costs, timeline, and profitability.",
      results: ["37+ views", "Most popular video", "Bookmarked by entrepreneurs"],
      testimonial: {
        text: "Excellent collection of business ideas with practical implementation guidance.",
        author: "Business Enthusiasts",
        role: "Startup Founders",
        rating: 5,
      },
    },
  ]`;

  content = content.slice(0, projectsStart) + newProjects + content.slice(projectsEnd);
  fs.writeFileSync(portfolioPath, content, 'utf8');
  console.log('PortfolioDetail projects updated successfully');
}

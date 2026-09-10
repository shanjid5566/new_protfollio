const fs = require('fs');
const path = require('path');

const replacements = [
  {
    file: 'src/App.jsx',
    replacements: [
      { from: "./components/SEO", to: "./components/layout/SEO" },
      { from: "./components/Preloader", to: "./components/ui/Preloader" },
      { from: "./components/Starfield", to: "./components/effects/Starfield" },
      { from: "./components/FlyingShip", to: "./components/effects/FlyingShip" },
      { from: "./components/Moon", to: "./components/effects/Moon" },
      { from: "./components/CustomCursor", to: "./components/effects/CustomCursor" },
      { from: "./components/Navigation", to: "./components/layout/Navigation" },
      { from: "./components/Hero", to: "./components/sections/Hero" },
      { from: "./components/About", to: "./components/sections/About" },
      { from: "./components/Experience", to: "./components/sections/Experience" },
      { from: "./components/Skills", to: "./components/sections/Skills" },
      { from: "./components/Projects", to: "./components/sections/Projects" },
      { from: "./components/Education", to: "./components/sections/Education" },
      { from: "./components/Contact", to: "./components/sections/Contact" },
      { from: "./components/Footer", to: "./components/layout/Footer" }
    ]
  },
  {
    file: 'src/components/sections/About.jsx',
    replacements: [
      { from: "'../data/portfolioData'", to: "'../../data/portfolioData'" },
      { from: "'./Marquee'", to: "'../ui/Marquee'" },
      { from: "'./SectionStars'", to: "'../effects/SectionStars'" }
    ]
  },
  {
    file: 'src/components/sections/Contact.jsx',
    replacements: [
      { from: "'../data/portfolioData'", to: "'../../data/portfolioData'" },
      { from: "'./IconLink'", to: "'../ui/IconLink'" },
      { from: "'./SectionStars'", to: "'../effects/SectionStars'" }
    ]
  },
  {
    file: 'src/components/sections/Education.jsx',
    replacements: [
      { from: "'../data/portfolioData'", to: "'../../data/portfolioData'" },
      { from: "'./SectionStars'", to: "'../effects/SectionStars'" }
    ]
  },
  {
    file: 'src/components/sections/Experience.jsx',
    replacements: [
      { from: "'../data/portfolioData'", to: "'../../data/portfolioData'" },
      { from: "'./SectionStars'", to: "'../effects/SectionStars'" }
    ]
  },
  {
    file: 'src/components/sections/Hero.jsx',
    replacements: [
      { from: "'../data/portfolioData'", to: "'../../data/portfolioData'" },
      { from: "'./RollingButton'", to: "'../ui/RollingButton'" },
      { from: "'./SectionStars'", to: "'../effects/SectionStars'" }
    ]
  },
  {
    file: 'src/components/sections/Projects.jsx',
    replacements: [
      { from: "'../data/portfolioData'", to: "'../../data/portfolioData'" },
      { from: "'./SectionStars'", to: "'../effects/SectionStars'" }
    ]
  },
  {
    file: 'src/components/sections/Skills.jsx',
    replacements: [
      { from: "'../data/portfolioData'", to: "'../../data/portfolioData'" },
      { from: "'./SkillChip'", to: "'../ui/SkillChip'" },
      { from: "'./SectionStars'", to: "'../effects/SectionStars'" }
    ]
  },
  {
    file: 'src/components/ui/Marquee.jsx',
    replacements: [
      { from: "'../data/portfolioData'", to: "'../../data/portfolioData'" }
    ]
  },
  {
    file: 'src/components/ui/RollingButton.jsx',
    replacements: [
      { from: "'../utils/scrollToSection'", to: "'../../utils/scrollToSection'" }
    ]
  },
  {
    file: 'src/components/ui/SkillChip.jsx',
    replacements: [
      { from: "'../utils/skillIcons'", to: "'../../utils/skillIcons'" }
    ]
  },
  {
    file: 'src/components/layout/Navigation.jsx',
    replacements: [
      { from: "'../data/portfolioData'", to: "'../../data/portfolioData'" },
      { from: "'../utils/scrollToSection'", to: "'../../utils/scrollToSection'" }
    ]
  },
  {
    file: 'src/components/layout/Footer.jsx',
    replacements: [
      { from: "'../data/portfolioData'", to: "'../../data/portfolioData'" }
    ]
  },
  {
    file: 'src/components/layout/SEO.jsx',
    replacements: [
      { from: "'../data/seoConfig'", to: "'../../data/seoConfig'" },
      { from: "'../data/portfolioData'", to: "'../../data/portfolioData'" },
      { from: "'../hooks/useDynamicSEO'", to: "'../../hooks/useDynamicSEO'" }
    ]
  }
];

for (const task of replacements) {
  const filePath = path.join(process.cwd(), task.file);
  if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  for (const { from, to } of task.replacements) {
    content = content.split(from).join(to);
  }
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated', filePath);
}

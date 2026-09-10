const fs = require('fs');

const files = [
  'index.html',
  'public/404.html',
  'public/site.webmanifest',
  'README.md',
  'package.json'
];

const replacements = [
  { from: /MD\. Shariar Hosain Sanny/g, to: 'Shanjid Ahmed Rafi' },
  { from: /Shariar Hosain Sanny/g, to: 'Shanjid Ahmed Rafi' },
  { from: /Shariar Hosain/g, to: 'Shanjid Ahmed' },
  { from: /MD\. SHARIAR HOSAIN SANNY/g, to: 'SHANJID AHMED RAFI' },
  { from: /shariar-portfolio/g, to: 'shanjid-portfolio' }
];

for (const file of files) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    for (const rep of replacements) {
      content = content.replace(rep.from, rep.to);
    }
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  } catch (e) {
    console.error('Failed to update ' + file, e.message);
  }
}

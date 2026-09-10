const fs = require('fs');

const files = [
  'src/data/seoConfig.js',
  'index.html'
];

const replacements = [
  { from: /Software Engineer piloting Node.js microservices/g, to: 'Full Stack Developer piloting MERN and PERN stack applications' },
  { from: /Node\.js microservices, NestJS, Redis, RabbitMQ/g, to: 'MERN stack, PERN stack, React, and Node.js' },
  { from: /Software Engineer/g, to: 'Full Stack Developer' },
  { from: /Node\.js Developer/g, to: 'MERN Stack Developer' },
  { from: /Node\.js · Microservices/g, to: 'MERN · PERN Stack' },
  { from: /Node\.js Microservices/g, to: 'Full Stack Developer' },
  { from: /Express, NestJS, Redis, RabbitMQ — scalable/g, to: 'MongoDB, PostgreSQL, React, Node.js — scalable' }
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

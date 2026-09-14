const fs = require('fs');
const path = require('path');

const filesToFix = [
  'HistoricalActsView.tsx',
  'JudicialCasesView.tsx',
  'Magic89View.tsx',
  'PolityTermsView.tsx',
  'PolityTricksView.tsx',
  'SchedulesView.tsx',
];

filesToFix.forEach((file) => {
  const filePath = path.join(__dirname, 'src/components', file);
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/\), document\.body\)}/g, ', document.body)}');

  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
});

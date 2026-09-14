const fs = require('fs');
const path = require('path');

const filesToFix = [
  { file: 'HistoricalActsView.tsx', variable: 'selectedActModal' },
  { file: 'JudicialCasesView.tsx', variable: 'selectedCaseModal' },
  { file: 'Magic89View.tsx', variable: 'selectedPairModal' },
  { file: 'PolityTermsView.tsx', variable: 'selectedTermModal' },
  { file: 'PolityTricksView.tsx', variable: 'selectedTrickModal' },
  { file: 'SchedulesView.tsx', variable: 'selectedScheduleModal' },
];

filesToFix.forEach(({ file, variable }) => {
  const filePath = path.join(__dirname, 'src/components', file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Import createPortal if not present
  if (!content.includes("from 'react-dom'")) {
    content = content.replace(/(import React.*?;\n)/, "$1import { createPortal } from 'react-dom';\n");
  }

  // Replace modal opening
  const regex = new RegExp(`{\\s*${variable}\\s*&&\\s*\\(`);
  content = content.replace(regex, `{${variable} && createPortal(`);

  // Note: the closing tag will need `), document.body)}` instead of `)}`
  // We can find the end of the modal by looking for the last `)}` in the file which corresponds to the modal,
  // but it's easier to just do a string replace since we know the structure.
  
  // Actually, we can just replace the last `)}` in the file.
  const lastIndex = content.lastIndexOf(')}');
  if (lastIndex !== -1) {
    content = content.slice(0, lastIndex) + '), document.body)}' + content.slice(lastIndex + 2);
  }

  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
});

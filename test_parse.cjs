const ts = require('typescript');
const fs = require('fs');

const content = fs.readFileSync('src/components/HistoricalActsView.tsx', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(415, 428).join('\n'));

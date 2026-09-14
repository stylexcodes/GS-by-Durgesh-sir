const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components', 'ArticlesView.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Remove explanations state
content = content.replace(/\s*const \[explanations, setExplanations\] = useState<Record<string, \{ loading: boolean; text\?: string; error\?: string \}>\>\(\{\}\);\s*/, '\n  ');

// Remove fetchExplanation
const fetchExpRegex = /\s*const fetchExplanation = async \([\s\S]*?\} catch \(error\) \{[\s\S]*?\}[\s\S]*?\};\s*/;
content = content.replace(fetchExpRegex, '\n  ');

// Update toggleExpand to not call fetchExplanation
content = content.replace(/if \(isNowExpanded\) \{\s*fetchExplanation\(id, artNum, artTitle\);\s*\}/, '');

fs.writeFileSync(filePath, content);
console.log('Cleaned state from ArticlesView.tsx');

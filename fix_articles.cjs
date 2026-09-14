const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components', 'ArticlesView.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Remove explanations state
content = content.replace(/const \[explanations, setExplanations\] = useState<Record<string, { loading: boolean; text\?: string; error\?: string }>>\({}\);/, '');

// Remove fetchExplanation
const fetchExpRegex = /const fetchExplanation = async \([\s\S]*?\} catch \(error\) \{[\s\S]*?\}[\s\S]*?\};/;
content = content.replace(fetchExpRegex, '');

// Update toggleExpand to not call fetchExplanation
content = content.replace(/if \(isNowExpanded\) \{\s*fetchExplanation\(id, artNum, artTitle\);\s*\}/, '');

// Remove the AI Expert Explanation block
const aiBlockRegex = /\{\/\* AI Expert Explanation Section \*\/\}\s*<div className="bg-\[#081224\] print:bg-gray-50 p-4 rounded-xl border border-amber-500\/30 print:border-gray-300 relative overflow-hidden">[\s\S]*?\{\/\* END AI Expert Explanation Section \*\/\}/;
// Wait, I didn't see END AI Expert Explanation Section.

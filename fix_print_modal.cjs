const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components', 'PrintModal.tsx');
let content = fs.readFileSync(filePath, 'utf8');

if (!content.includes("from 'react-dom'")) {
  content = content.replace(/(import React.*?;\n)/, "$1import { createPortal } from 'react-dom';\n");
}

content = content.replace(/return\s*\(\s*<div\s+className="fixed inset-0/g, 'return createPortal(\n    <div className="fixed inset-0');

const lastIndex = content.lastIndexOf('</div>\n    </div>\n  );');
if (lastIndex !== -1) {
  content = content.slice(0, lastIndex) + '</div>\n    </div>,\n    document.body\n  );' + content.slice(lastIndex + 19);
} else {
  // if not exactly matched, just replace the last );
  const lastParen = content.lastIndexOf(');');
  if (lastParen !== -1) {
    content = content.slice(0, lastParen) + '), document.body);' + content.slice(lastParen + 2);
  }
}

fs.writeFileSync(filePath, content);
console.log('Fixed PrintModal.tsx');

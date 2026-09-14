const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/PrintModal.tsx');
let content = fs.readFileSync(filePath, 'utf8');

if (!content.includes("from 'motion/react'")) {
  content = content.replace(/(import React.*?;\n)/, "$1import { motion } from 'motion/react';\n");
}

content = content.replace(/<button(?=[\s>])/g, "<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}");
content = content.replace(/<\/button>/g, "</motion.button>");

fs.writeFileSync(filePath, content);
console.log('Processed PrintModal.tsx');

const fs = require('fs');
const uglify = require('uglify-js');

const code = fs.readFileSync('dist/flow-motion.js', 'utf8');

const result = uglify.minify(code);

fs.writeFileSync('Flow Motion', result.code);

console.log('✅ JS Minified.');
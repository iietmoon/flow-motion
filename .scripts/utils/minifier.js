const fs = require('fs');
const uglify = require('uglify-js');

const code = fs.readFileSync('dist/index.js', 'utf8');

const result = uglify.minify(code);

fs.writeFileSync('dist/index.min.js', result.code);

console.log('✅ JS Minified.');
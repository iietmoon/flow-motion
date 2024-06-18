const { execSync } = require("child_process");

try {
  console.log("🚀 Compiling TypeScript files...");
  execSync("npm run ts", { stdio: "inherit" });
  console.log("✅ TypeScript files compiled successfully.");
} catch (error) {
  console.error("❌ Error compiling TypeScript files:", error.message);
  process.exit(1);
}

try {
  console.log("🚀 Minifying JavaScript files...");
  execSync("npm run minify:js", { stdio: "inherit" });
  console.log("✅ JavaScript files minified successfully.");
} catch (error) {
  console.error("❌ Error minifying JavaScript files:", error.message);
  process.exit(1);
}

console.log("🎉 Build process completed successfully.");

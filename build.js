#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('Building wallet-connect-button.js...');

// File paths
const srcDir = './src';
const outputFile = './wallet-connect-button.js';

// Files to combine (in order)
const sourceFiles = [
  'nl-wallet-web.js',
  'WalletConnectButton.js'
];

// Read and combine files
let combinedContent = '';

// Add header comment
combinedContent += `/**
 * Wallet Connect Button - Combined Build
 * Generated from src/ files
 * Build date: ${new Date().toISOString()}
 */

`;

// Process each source file
for (const filename of sourceFiles) {
  const filePath = path.join(srcDir, filename);
  
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Source file not found: ${filePath}`);
    process.exit(1);
  }
  
  console.log(`📦 Adding ${filename}...`);
  
  // Add file separator comment
  combinedContent += `/* ===== ${filename} ===== */\n`;
  
  // Read file content
  let fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Process WalletConnectButton.js specifically
  if (filename === 'WalletConnectButton.js') {
    // Remove the import statement for nl-wallet-web.js since it's now included
    fileContent = fileContent.replace(
      /await import\("\.\/nl-wallet-web\.js"\);/g,
      '// nl-wallet-web.js is already included above'
    );
    
    // Update the loadWebComponent method comment
    fileContent = fileContent.replace(
      '// nl-wallet-web.js is now included in this file, so no need to import',
      '// nl-wallet-web.js is included above in this combined file'
    );
  }
  
  combinedContent += fileContent;
  combinedContent += '\n\n';
}

// Write the combined file
try {
  fs.writeFileSync(outputFile, combinedContent);
  console.log(`✅ Successfully built ${outputFile}`);
  
  // Show file size
  const stats = fs.statSync(outputFile);
  const fileSize = (stats.size / 1024).toFixed(2);
  console.log(`📊 File size: ${fileSize} KB`);
  
} catch (error) {
  console.error('❌ Error writing output file:', error.message);
  process.exit(1);
}

console.log('🎉 Build complete!');
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting cross-platform build...');

// Set CI=false for all platforms
process.env.CI = 'false';

try {
  // Run React build
  console.log('📦 Building React app...');
  execSync('react-scripts build', { stdio: 'inherit' });

  // Copy _redirects file if it exists
  const redirectsSource = path.join(__dirname, '..', 'public', '_redirects');
  const redirectsTarget = path.join(__dirname, '..', 'build', '_redirects');

  if (fs.existsSync(redirectsSource)) {
    console.log('📄 Copying _redirects file...');
    fs.copyFileSync(redirectsSource, redirectsTarget);
    console.log('✅ _redirects file copied successfully');
  }

  console.log('🎉 Build completed successfully!');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
#!/bin/bash

# Build the project
echo "🔨 Building project..."
npm run build

# Get version from package.json
VERSION=$(node -p "require('./package.json').version")

echo "📦 Creating release v$VERSION..."

# Update version in src/index.html
echo "🔄 Updating version in src/index.html..."
sed -i.bak "s|@v[0-9]*\.[0-9]*\.[0-9]*|@v$VERSION|g" src/index.html && rm src/index.html.bak

# Add all changes
git add .

# Commit changes
git commit -m "Release v$VERSION"

# Create tag
git tag "v$VERSION"

# Push changes and tags
git push origin main
git push origin "v$VERSION"

echo "✅ Release v$VERSION created successfully!"
echo "🌐 CDN URL: https://cdn.jsdelivr.net/gh/kvk-innovatie/wallet-connect-button-vanillajs@v$VERSION/wallet-connect-button.js"
echo "⏰ Cache: 1 year (immutable)"
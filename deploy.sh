#!/bin/bash
set -e

echo "Building GST Decoded..."
npm run build

echo "Deploying to GitHub Pages..."

# Create a temporary directory for gh-pages
TMPDIR=$(mktemp -d)
cp -r dist/* "$TMPDIR/"

# Switch to gh-pages branch
git checkout --orphan gh-pages-temp 2>/dev/null || git checkout gh-pages-temp
git rm -rf . 2>/dev/null || true

# Copy build output
cp -r "$TMPDIR"/* .
touch .nojekyll

# Commit and push
git add -A
git commit -m "Deploy GST Decoded to GitHub Pages"
git branch -M gh-pages-temp gh-pages
git push origin gh-pages --force

# Switch back to main
git checkout main

# Cleanup
rm -rf "$TMPDIR"

echo "Deployed! Visit: https://charles161.github.io/gst-decoded/"

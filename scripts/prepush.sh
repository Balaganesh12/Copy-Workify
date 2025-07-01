#!/bin/sh

echo "🔍 Running ESLint with fix..."
npm run lint -- --fix
if [ $? -ne 0 ]; then
    echo "❌ Linting failed. Push aborted."
    exit 1
fi

echo "🎨 Running Prettier format..."
npm run format
if [ $? -ne 0 ]; then
    echo "❌ Prettier formatting failed. Push aborted."
    exit 1
fi

echo "🏗️ Running build..."
npm run husky:buildcheck
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Push aborted."
    exit 1
fi

echo "✅ All checks passed! Proceeding with push."
exit 0

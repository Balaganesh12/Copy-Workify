# Workify

A modern web app built with Next.js, React, and TypeScript.

## 🔧 Project Configuration

- Framework: Next.js 15.3.2
- UI Library: React 19
- Language: TypeScript
- Styling: SCSS (detailed usage under 🎨 Styling section)
- Bundler: Turbopack
- Linter: ESLint (with Prettier integration)
- Formatter: Prettier
- Package Manager: npm
- UI Components: Ant Design (detailed usage under 🧩 UI Components section)

## 🎨 Styling

- SCSS with global variables
- Configured in `next.config.ts`
- Variables file: `src/styles/variables.scss`
- No need to manually import variables in each SCSS file
- use can access the varibale using `vars.$border-color`

## 🧩 UI Components

- **Ant Design** is used for UI components.
- Server-side rendering is supported using `@ant-design/nextjs-registry`.
- `AntdRegistry` wraps the app layout in `app/layout.tsx`.

## ⚙️ Git Hook Setup

Husky is installed to manage Git hooks.
The `pre-push` hook runs a custom script `scripts/prepush.sh` that does all the checks before pushing:

- `npm run lint -- --fix` (fixes lint issues)
- `npm run format` (runs Prettier formatting)
- `npm run husky:buildcheck` (creates an optimized production build; the config in nextjs.config.ts is used only in development and ignored in production)

This ensures code quality before pushing to Git.

## 🛠️ Editor Setup (VS Code)

To improve your developer experience and maintain consistent code quality, we recommend using VS Code with the following workspace settings.

### ✨ Features Enabled

- **Remove unused imports automatically**
- **Auto-save after short delay**
- **Organized imports**

### 📁 How to Apply (One-Time Setup)

1. Open VS Code (or any other code editor).
2. Press `Ctrl + Shift + P` (or Cmd + `Shift + P on Mac`).
3. Type: `Preferences: Open Settings (JSON)` and select it.
4. Copy the contents from your project's `.vscode/settings.json` and paste only the key-value pairs into your User Settings JSON like this:
5. Save the file.
6. Reload the window: `Ctrl + Shift + P` → `Developer: Reload Window`.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── (private)/
│   ├── api/
│   └── (public)/
├── components/
│   ├── ui/
│   └── antd/
├── stores/
├── constants/
│   └── routes.ts
├── utils/
│   ├── routes/
│   └── validations/
├── lib/
│   └── supabase/
├── theme/
│   ├── ComponentToken/
│   ├── GlobalToken/
│   └── index.ts
├── styles/
│   ├── variables.scss
│   └── antdOverride.scss
├── section/
│   └── login/
├── layout/
│   ├── PrivateLayout/
│   └── PublicLayout/
└── assets/
```

### Key Directories Explained

- **app/**: Contains all routes and pages using Next.js 13+ app directory structure
- **components/**: Reusable UI components, split between Ant Design wrappers and custom components
- **theme/**: Theme configuration for consistent styling across the application
- **styles/**: Global styles and SCSS variables for the application
- **section/**: Page-specific components and sections
- **layout/**: Layout components for different parts of the application
- **assets/**: Static assets like images and icons

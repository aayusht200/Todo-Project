# ⚙️ Webpack + Biome Template

A **modern, minimal Webpack boilerplate** for front-end development — preconfigured with **Biome** for formatting and linting, and ready for **GitHub Pages deployment**.

---

## 🧱 Folder Structure

```
project/
├── src/
│   ├── index.js
│   ├── style.css
│   └── template.html
├── dist/
├── webpack.dev.js
├── webpack.prod.js
├── package.json
├── biome.json
└── .gitignore
```

---

## ⚙️ Setup Instructions

### 1️⃣ Initialize Project

Install all dependencies in one command:
```bash
npm run setup
```

---

### 2️⃣ Start Development Server

Launch Webpack Dev Server with live reload:
```bash
npm start
```
**Default:** runs in development mode with `eval-source-map`.

---

### 3️⃣ Build for Production

Create an optimized, minified build inside `/dist`:
```bash
npm run build
```

---

### 4️⃣ Lint & Format Code

Automatically fix and format files using Biome:
```bash
npm run lint-format
```

Biome handles:
- ✅ Auto import sorting  
- ✅ Linting and code quality  
- ✅ Consistent formatting across JS, CSS, and HTML  

---

### 5️⃣ Deploy to GitHub Pages

#### 🔹 One-time Setup

Run these commands once per project to create the `gh-pages` branch and prepare it for deployment:

```bash
git checkout -b gh-pages
git add dist -f
git commit -m "Initial deployment"
git push origin gh-pages
git checkout main
```

#### 🔹 Future Deployments

After making changes and running `npm run build`, deploy your latest `/dist` folder:

```bash
npm run deploy
```

This command:
- Pushes the contents of `/dist` to the `gh-pages` branch.
- Keeps your main branch clean and separate from the built site.

#### 🔹 Enable GitHub Pages

1. Go to your GitHub repository → **Settings → Pages**  
2. Under **Source**, choose **Deploy from branch**  
3. Select **Branch: gh-pages** and **Folder: / (root)**  
4. Save changes — your site will be live in a few minutes 🎉

---

## 🧩 Tech Stack

| Tool | Purpose |
|------|----------|
| **Webpack 5** | Module bundler for modern JS apps |
| **Biome 2.3.4** | Fast formatter, linter, and import organizer |
| **HTML Webpack Plugin** | Generates HTML with bundled scripts |
| **CSS & Style Loaders** | Handles CSS imports and injection |
| **Clean Webpack Plugin** | Cleans `/dist` before each build |
| **ES Modules** | Fully ESM-based configuration |

---

## 🗂️ .gitignore

```
node_modules/
dist/
.DS_Store
package-lock.json
webpack.dev.js
webpack.prod.js
```

---

## 🧰 Notes

- Supports both **development** and **production** environments.  
- Uses **ESM imports** (`import/export` syntax).  
- Automatically cleans `dist/` on each build.  
- Biome ensures code consistency and speed in place of Prettier + ESLint.

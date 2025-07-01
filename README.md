
# 🔍GitHub Searcher

A modern and responsive web app to search GitHub **users** and **repositories** using the GitHub REST API. Built with **React** and **TypeScript**, this project features a clean UI, theme toggle (Dark/Light), and efficient debounced search. All UI elements are built using **Material UI (MUI)** components, and API requests are handled using the native `fetch` API.

---

## 📸 Screenshots

### 👤 User Search Mode

![User Search](./screenshots/github-users.png)

### 📁 Repository Search Mode

![Repository Search](./screenshots/github-repos.png)

---

## 🚀 Features

- 🔍 Search GitHub **users** and **repositories** live
- 🌗 **Dark/Light mode** toggle using MUI Switch
- ⌨️ Debounced input for optimized performance
- 📦 Display user/repo info with MUI Cards
- 📎 Direct link to GitHub profile or repo
- 💡 Responsive design with modern UI

---

## 🛠️ Tech Stack

- **React** + **TypeScript**
- **Vite** (for dev server and build)
- **Material UI (MUI)** – for buttons, inputs, dropdowns, cards, and theming
- **Fetch API** – for making REST API calls to GitHub
- **CSS Modules** or inline styles for layout

---

## 🧠 Purpose & Learnings

This project helped me:

- Practice **React + TypeScript** component structuring
- Implement **theme switching** with MUI
- Work with **GitHub REST API** using `fetch`
- Use **debouncing** to limit unnecessary API calls
- Design and layout responsive UIs with **Material UI**

---

## 📁 Folder Structure

```

src/
├── components/          # Reusable UI components (SearchField, ThemeToggle, ResultCard)
├── hooks/               # Custom hooks (e.g., useDebounce)
├── utils/               # Helper functions
├── types/               # TypeScript interfaces/types
├── App.tsx              # Main app structure and routing
└── main.tsx             # Entry point

````

---

## 🧪 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/github-searcher.git
cd github-searcher
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

Open your browser and visit: `http://localhost:5173`

```



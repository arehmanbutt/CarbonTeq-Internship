
# GitHub Searcher

A modern and responsive web app to search GitHub **users** and **repositories** using the GitHub REST API. Built with **React** and **TypeScript**, this project features a clean UI, theme toggle (Dark/Light), and efficient debounced search. All UI elements are built using **Material UI (MUI)** components, and API requests are handled using the native `fetch` API.

---

## 🚀 Features

- 🔍 Search GitHub **users** and **repositories** live
- 🌗 **Dark/Light mode** toggle using MUI Switch
- ⌨️ Debounced input for optimized performance
- 📦 Display user/repo info with Cards
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
├── components/    # Reusable core components (e.g. Header, SearchBar, UserCard, RepoCard)
├── ui/            # Smaller UI elements like dropdowns and input fields (SearchField, DropDown)
├── styles/        # CSS files scoped to specific components
├── App.tsx        # Root component containing main layout and logic
├── main.tsx       # Entry point to render the React app
└── vite-env.d.ts  # Vite and TypeScript environment declarations

```

---

## 🧪 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/github-search.git
cd github-search
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev




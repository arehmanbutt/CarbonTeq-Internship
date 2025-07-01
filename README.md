# CarbonTeq-Internship
# GitHub Searcher

A sleek and responsive web app to search GitHub **users** and **repositories** using the GitHub REST API. Built with **React** and **TypeScript**, this project demonstrates API integration, theme toggling, debounced input handling, and dynamic rendering of GitHub data.

---

## Screenshots

### User Search Mode

![User Search](./screenshots/github-users.png)

### Repository Search Mode

![Repository Search](./screenshots/github-repos.png)

---

## Features

- Search GitHub **users** and **repositories** with live results
- Toggle between **Dark** and **Light** themes
- Debounced search input to optimize API calls
- Dynamic rendering of user cards and repo cards
- View GitHub profiles and repositories directly
- Clean, responsive UI

---

## Tech Stack

- **React** (with Hooks)
- **TypeScript**
- **Vite** (for development & build)
- **Axios** (for API requests)
- **CSS Modules** or **Tailwind CSS** (based on setup)

---

## Purpose & Learning Goals

This project was created to:

- Strengthen React & TypeScript skills
- Learn API handling and debounced user input
- Practice responsive UI design
- Understand theme toggling logic
- Implement reusable, maintainable components

---

## Folder Structure
src/
├── components/ # UI components like SearchField, ToggleButton, ResultCard
├── hooks/ # Custom hooks (e.g., useDebounce)
├── services/ # Axios API service functions
├── types/ # TypeScript types and interfaces
├── App.tsx # Main app component
└── main.tsx # React root render via Vite

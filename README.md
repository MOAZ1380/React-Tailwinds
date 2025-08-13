# React + Vite

# React Tailwind Todo App

A modern, responsive Todo List application built with **React**, **Tailwind CSS**, and **Vite**. This project demonstrates clean code structure, context-based state management, and a beautiful UI/UX for managing your daily tasks.

---

## Features

- **Add, Edit, Delete Todos**
- **Mark Todos as Completed/Uncompleted**
- **View Todo Details**
- **Persistent Storage** (localStorage)
- **Responsive & Modern UI** (Tailwind CSS)
- **Dialog Modal for Actions** (Edit, Delete, View)
- **Separation of Concerns** (Hooks, Context, Components)

---

## Project Structure

```
React-Tailwinds/
├── public/
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # UI Components (Todo, TodoList, Dialog, Form)
│   ├── context/          # Context & Provider for Todos
│   ├── hooks/            # Custom hooks (useTodos)
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── tailwind.config.js    # Tailwind CSS config
├── postcss.config.js     # PostCSS config
├── vite.config.js        # Vite config
├── package.json          # Project metadata & scripts
└── README.md             # Project documentation
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/React-Tailwinds.git
cd React-Tailwinds
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173)

---

## Usage

- **Add Todo:** Use the form at the bottom to add a new todo with a title and details.
- **Edit/Delete/Complete:** Each todo has action buttons. Clicking them opens a dialog for confirmation or editing.
- **View Details:** Click on a todo to view its full details in a dialog.
- **Filter:** Switch between Active and Completed todos using the filter buttons at the top.
- **Persistence:** All todos are saved in your browser's localStorage automatically.

---

## Main Components

### `TodoList`

- Displays the list of todos.
- Handles filtering (active/completed).
- Manages dialog state for actions.

### `Todo`

- Represents a single todo item.
- Shows action buttons (Edit, Delete, Complete).
- Clicking a button opens the dialog for that action.

### `Dialog`

- Modal dialog for editing, deleting, or viewing a todo.
- Handles confirmation and form input.

### `Form`

- Add new todos with title and details.

### `TodoProvider` & `useTodos`

- Context and custom hook for global todo state and dispatch.
- All state changes (add, edit, delete, toggle) are managed here.

---

## Technologies Used

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

---

## Customization

- **Styling:** Easily customize the look by editing Tailwind classes in the components.
- **Persistence:** Uses localStorage by default. You can integrate with an API for real backend support.
- **Extensibility:** Add features like due dates, priorities, or user authentication as needed.

---

## Screenshots

![App Screenshot](public/Screenshot%20from%202025-08-13%2016-01-27.png)

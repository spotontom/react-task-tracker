# React Task Tracker

## Description

This is a simple task tracker application built using React. It allows users to add tasks with a title, description, and optional due date. Tasks can be marked as complete (with visual changes) or deleted. The app demonstrates core React concepts including functional components, props, state management with `useState`, lifting state, conditional rendering, list rendering with `.map()`, and persisting data with `localStorage`.

## How to Run the Application

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14.x or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Setup

1. Clone or download the project files to your local machine.
2. Open a terminal and navigate to the project directory.
3. Install the required dependencies:

```
cd taskapp
```

```
npm install
```

4. Start the development server:

```
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000/` to view the app.

## Project Structure

```
src/
├── components/
│ ├── TaskForm.jsx
│ ├── TaskForm.module.css
│ ├── TaskList.jsx
│ ├── TaskList.module.css
│ ├── TaskItem.jsx
│ └── TaskItem.module.css
├── App.jsx
└── index.js

```

## Features

- Add tasks with title, description, and due date
- Mark tasks as complete (strike-through and gray text)
- Delete tasks
- Persist tasks in `localStorage` (reloads preserved tasks)
- Component-based structure with CSS Modules for scoped styles

## Technologies Used

- React (functional components + hooks)
- JavaScript (ES6+)
- CSS Modules
- Express
- Node.js
- Cors
- localStorage (for persistence)

## Author

- Thomas Scott

## Notes

- All files have header comments describing their purpose, author, and modification date.
- Code is commented throughout for clarity.

```js
let dog = 16;
<cow />;
```

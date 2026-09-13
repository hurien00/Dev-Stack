 Project Name= Dev Stack

 Project Description:Dev Stack is an interactive web platform that helps developers discover and understand different technologies used in modern web development. Users can explore technologies, compare their features, and create a personalized tech stack based on their project needs.

## Technologies Used
- React.js
- Tailwind CSS & DaisyUI
- React-Toastify
- Vite

## Key Feature
1. **Interactive Tech Stack:** Explore technologies and add or remove them to build your own stack in real time.
2. **Duplicate Prevention:** Prevents duplicate selections with instant Toast notifications.
3. **Responsive Design:** Works smoothly across mobile, tablet, and desktop devices.



##  React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a JavaScript syntax that lets us write HTML-like code inside JavaScript. It makes React code easier to read and helps us build UI more easily.

### 2. What is the difference between props and state?

* **Props:** Data passed from a parent component to a child. They are read-only.
* **State:** Data managed inside a component that can change and cause the UI to update.

### 3. What does the `useState` hook do, and where did you use it?

`useState` is used to store and update changing data in a component. In this project, I used it in `Technologies.jsx` for the technology list, selected stack, and loading state.

### 4. What does the `useEffect` hook do, and why did you use it?

`useEffect` handles side effects such as data fetching. I used it to fetch the `/data.json` file when the component loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item and update the list efficiently when something changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. For example, I used it to show a loading message while the technology data was being fetched.
### 6. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent to Child: Data is passed down directly as attributes (props).

Child to Parent: The parent passes a callback function down as a prop, which the child component invokes with arguments to send data back up.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

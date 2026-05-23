# FocusFlow | Interactive Productivity Dashboard

FocusFlow is a modern, interactive web application designed to help users stay focused and productive. It demonstrates the use of JavaScript for DOM manipulation, event handling, and dynamic content updates.

## Features & Interactivity

### 1. Dynamic Greeting
- **How it works:** JavaScript detects the current time of day when the page loads.
- **Interaction:** Automatically updates the header to "Good Morning", "Good Afternoon", or "Good Evening" based on your local time.

### 2. Theme Toggle (Light/Dark Mode)
- **How it works:** A toggle button that switches CSS classes on the `<body>` element.
- **Interaction:** Click the moon/sun icon in the top right to switch between a clean light theme and a focused dark theme.

### 3. Daily Focus Setter
- **How it works:** Captures user input from a text field and updates the DOM dynamically.
- **Interaction:** Type your main goal into the input field and click "Set Focus" (or press Enter) to see it prominently displayed in the header.

### 4. Focus Session Counter
- **How it works:** Maintains a numeric state in JavaScript and updates the UI in real-time.
- **Interaction:** 
  - Click **+** to increment your completed sessions.
  - Click **-** to decrement.
  - Click **Reset** to start over.

### 5. Inspiration Generator
- **How it works:** Picks a random string from a JavaScript array and applies a smooth fade transition.
- **Interaction:** Click "New Quote" to get a fresh piece of productivity advice.

## Technical Skills Demonstrated
- **JavaScript Basics:** Variables, arrays, functions, and conditional logic.
- **DOM Manipulation:** Selecting elements (`getElementById`), updating content (`textContent`), and modifying styles.
- **Event Listeners:** Handling `click` and `keypress` events.
- **CSS Variables:** Using `:root` and class-based overrides for theme switching.
- **Responsive Design:** Using Flexbox and CSS Grid to ensure the dashboard looks great on all devices.

## How to Run
Simply open the `index.html` file in any modern web browser.

# Project 4: Form Design & Validation

A modern, responsive registration form built with HTML5, CSS3, and Vanilla JavaScript. This project demonstrates client-side form handling, input validation, and real-time user feedback.

## Features

- **Advanced Functionality:**
    - **Real-Time Validation:** Feedback is provided immediately as the user types.
    - **Password Strength Meter:** Visual bar indicating password complexity (Weak, Fair, Good, Strong).
    - **Password Toggle:** Show or hide password characters for both password fields.
    - **Character Counter:** Live character count for the Full Name field.
- **Client-Side Validation:**
    - **Full Name:** Required, minimum 3 characters.
    - **Email Address:** Required, must be a valid email format.
    - **Password:** Required, minimum 8 characters.
    - **Confirm Password:** Required, must match the Password field.
- **Dynamic Feedback:**
    - Animated error messages that slide into view.
    - Visual indicators for valid/invalid states (borders and colors).
    - Success banner with a gradient theme upon valid submission.
- **Responsive Layout:** Works seamlessly on mobile and desktop.

## Technologies Used

- **HTML5:** Semantic structure.
- **CSS3 (Custom Properties):** Modern styling and theme management.
- **JavaScript (ES6):** Validation logic and DOM manipulation.
- **Google Fonts (Inter):** Clean typography.

## How to Run

1. Navigate to the `form-validation` directory.
2. Open `index.html` in any modern web browser.

## Key Logic

The validation logic is centralized in `script.js`, using helper functions to check requirements, lengths, and patterns. It prevents the default form submission and provides immediate visual feedback to the user.

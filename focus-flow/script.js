// --- DOM Elements ---
const greetingElement = document.getElementById('greeting');
const themeToggle = document.getElementById('theme-toggle');
const focusInput = document.getElementById('focus-input');
const setFocusBtn = document.getElementById('set-focus');
const displayFocus = document.getElementById('display-focus');
const sessionCountDisplay = document.getElementById('session-count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset-counter');
const quoteText = document.getElementById('quote-text');
const newQuoteBtn = document.getElementById('new-quote');
const privacyToggle = document.getElementById('privacy-toggle');
const compactToggle = document.getElementById('compact-toggle');

// --- State ---
let sessionCount = 0;
const quotes = [
    "The secret of getting ahead is getting started.",
    "Focus on being productive instead of busy.",
    "Your future is created by what you do today, not tomorrow.",
    "Productivity is never an accident.",
    "Don't wish it were easier, wish you were better.",
    "Efficiency is doing things right; effectiveness is doing the right things.",
    "Action is the foundational key to all success."
];

// --- 1. Dynamic Greeting ---
function updateGreeting() {
    const hours = new Date().getHours();
    let message = "Hello!";

    if (hours < 12) message = "Good Morning!";
    else if (hours < 18) message = "Good Afternoon!";
    else message = "Good Evening!";

    greetingElement.textContent = message;
}

// --- 2. Theme Toggle ---
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    
    // Switch icon visually
    const icon = themeToggle.querySelector('.icon');
    icon.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌓';
});

// --- 3. Daily Focus ---
setFocusBtn.addEventListener('click', () => {
    const focus = focusInput.value.trim();
    if (focus) {
        displayFocus.textContent = `Today's Focus: ${focus}`;
        focusInput.value = '';
        displayFocus.style.color = 'var(--accent-color)';
        displayFocus.style.fontWeight = 'bold';
    } else {
        alert("Please enter a focus for today!");
    }
});

// Allow 'Enter' key to set focus
focusInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') setFocusBtn.click();
});

// --- 4. Counter Logic ---
function updateCounter() {
    sessionCountDisplay.textContent = sessionCount;
}

incrementBtn.addEventListener('click', () => {
    sessionCount++;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    if (sessionCount > 0) {
        sessionCount--;
        updateCounter();
    }
});

resetBtn.addEventListener('click', () => {
    sessionCount = 0;
    updateCounter();
});

// --- 5. Quote Generator ---
newQuoteBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.style.opacity = 0;
    
    setTimeout(() => {
        quoteText.textContent = `"${quotes[randomIndex]}"`;
        quoteText.style.opacity = 1;
    }, 200);
});

// Add transition for quote change
quoteText.style.transition = 'opacity 0.3s ease';

// --- 6. Advanced Toggles ---
privacyToggle.addEventListener('change', () => {
    document.body.classList.toggle('privacy-active', privacyToggle.checked);
});

compactToggle.addEventListener('change', () => {
    document.body.classList.toggle('compact-active', compactToggle.checked);
});

// --- Initialization ---
updateGreeting();
updateCounter();

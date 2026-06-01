const form = document.getElementById('registrationForm');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const successMessage = document.getElementById('successMessage');
const charCount = document.getElementById('charCount');
const strengthBar = document.querySelector('.strength-bar');
const strengthText = document.getElementById('strengthText');
const toggleBtns = document.querySelectorAll('.toggle-password');

// --- Helper Functions ---

function showError(input, message) {
    const formControl = input.closest('.form-control');
    formControl.classList.add('error');
    formControl.classList.remove('success');
    const small = formControl.querySelector('.error-message');
    small.innerText = message;
    successMessage.classList.add('hidden');
}

function showSuccess(input) {
    const formControl = input.closest('.form-control');
    formControl.classList.add('success');
    formControl.classList.remove('error');
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1).replace(/([A-Z])/g, ' $1');
}

// --- Validation Logic ---

function validateFullName() {
    const val = fullname.value.trim();
    if (val === '') {
        showError(fullname, 'Full Name is required');
        return false;
    } else if (val.length < 3) {
        showError(fullname, 'Name must be at least 3 characters');
        return false;
    }
    showSuccess(fullname);
    return true;
}

function validateEmail() {
    const val = email.value.trim();
    if (val === '') {
        showError(email, 'Email is required');
        return false;
    } else if (!isValidEmail(val)) {
        showError(email, 'Please enter a valid email address');
        return false;
    }
    showSuccess(email);
    return true;
}

function validatePassword() {
    const val = password.value;
    updatePasswordStrength(val);
    
    if (val === '') {
        showError(password, 'Password is required');
        return false;
    } else if (val.length < 8) {
        showError(password, 'Password must be at least 8 characters');
        return false;
    }
    showSuccess(password);
    return true;
}

function validateConfirmPassword() {
    const val1 = password.value;
    const val2 = confirmPassword.value;
    
    if (val2 === '') {
        showError(confirmPassword, 'Please confirm your password');
        return false;
    } else if (val1 !== val2) {
        showError(confirmPassword, 'Passwords do not match');
        return false;
    }
    showSuccess(confirmPassword);
    return true;
}

// --- Advanced Features ---

function updatePasswordStrength(p) {
    let strength = 0;
    if (p.length >= 8) strength += 25;
    if (p.match(/[a-z]/) && p.match(/[A-Z]/)) strength += 25;
    if (p.match(/\d/)) strength += 25;
    if (p.match(/[^a-zA-Z\d]/)) strength += 25;

    strengthBar.style.width = strength + '%';
    
    if (strength <= 25) {
        strengthBar.style.background = '#ff4b2b';
        strengthText.innerText = p.length > 0 ? 'Weak' : '';
        strengthText.style.color = '#ff4b2b';
    } else if (strength <= 50) {
        strengthBar.style.background = '#ffa502';
        strengthText.innerText = 'Fair';
        strengthText.style.color = '#ffa502';
    } else if (strength <= 75) {
        strengthBar.style.background = '#2ed573';
        strengthText.innerText = 'Good';
        strengthText.style.color = '#2ed573';
    } else {
        strengthBar.style.background = '#00b09b';
        strengthText.innerText = 'Strong';
        strengthText.style.color = '#00b09b';
    }
}

// --- Event Listeners ---

// Real-time validation
fullname.addEventListener('input', () => {
    validateFullName();
    charCount.innerText = `${fullname.value.length}/30`;
});

email.addEventListener('input', validateEmail);
password.addEventListener('input', () => {
    validatePassword();
    if (confirmPassword.value !== '') validateConfirmPassword();
});
confirmPassword.addEventListener('input', validateConfirmPassword);

// Password Toggle
toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const input = document.getElementById(targetId);
        const icon = btn.querySelector('i');
        
        if (input.type === 'password') {
            input.type = 'text';
            icon.setAttribute('data-lucide', 'eye-off');
        } else {
            input.type = 'password';
            icon.setAttribute('data-lucide', 'eye');
        }
        lucide.createIcons();
    });
});

// Form Submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmValid = validateConfirmPassword();

    if (isNameValid && isEmailValid && isPasswordValid && isConfirmValid) {
        successMessage.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Optional: form.reset();
    }
});

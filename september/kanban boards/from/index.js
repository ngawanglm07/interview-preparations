const form = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', function (event) {
  let isValid = true;

  if (usernameInput.value.trim() === '') {
    usernameError.textContent = 'Username is required.';
    isValid = false;
  } else {
    usernameError.textContent = '';
  }

  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = 'Invalid email format.';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }

  if (!isValid) {
    event.preventDefault();
  }
});

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

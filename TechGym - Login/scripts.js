document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeModal = document.querySelectorAll('.close');
    const registerLink = document.getElementById('registerLink');
    const loginLink = document.getElementById('loginLink');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
  
    loginBtn.addEventListener('click', () => {
        registerModal.style.display = 'none';  // Add this line
        loginModal.style.display = 'block';
    });
  
    registerLink.addEventListener('click', (event) => {
        event.preventDefault();
        loginModal.style.display = 'none';
        registerModal.style.display = 'block';
    });
  
    loginLink.addEventListener('click', (event) => {
        event.preventDefault();
        registerModal.style.display = 'none';  // Add this line
        loginModal.style.display = 'block';
    });
  
    closeModal.forEach(button => button.addEventListener('click', () => {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    }));
  
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });
  
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle login form data...
    });
  
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle register form data...
        const email = document.getElementById('registerEmail').value;
        const confirmEmail = document.getElementById('confirmEmail').value;
        const displayName = document.getElementById('displayName').value;
        const password = document.getElementById('registerPassword').value;
  
        console.log('Email:', email);
        console.log('Confirm Email:', confirmEmail);
        console.log('Display Name:', displayName);
        console.log('Password:', password);
    });
  });
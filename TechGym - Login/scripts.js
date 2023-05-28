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
        loginModal.style.display = 'block';
    });

    registerLink.addEventListener('click', (event) => {
        event.preventDefault();
        loginModal.style.display = 'none';
        registerModal.style.display = 'block';
    });

    loginLink.addEventListener('click', (event) => {
        event.preventDefault();
        registerModal.style.display = 'none';
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
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Perform login logic here, e.g., send data to the server

        console.log('Email:', email);
        console.log('Password:', password);
    });

    registerForm.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const email = document.getElementById('reg_email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('reg_password').value;
        const password_confirmation = document.getElementById('reg_password_confirmation').value;

        // Perform registration logic here, e.g., send data to the server

        console.log('Name:', name);
        console.log('Surname:', surname);
        console.log('Email:', email);
        console.log('Display Name:', username);
        console.log('Password:', password);
        console.log('Confirm Password:', password_confirmation);
    });
});
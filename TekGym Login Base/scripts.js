document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.querySelector('.close');
    const registerLink = document.getElementById('registerLink');
    const loginForm = document.getElementById('loginForm');
  
    loginBtn.addEventListener('click', () => {
      loginModal.style.display = 'block';
    });
  
    closeModal.addEventListener('click', () => {
      loginModal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === loginModal) {
        loginModal.style.display = 'none';
      }
    });
  
    registerLink.addEventListener('click', () => {
      // Redirect to the registration page or open a registration modal
    });
  
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const userType = document.getElementById('userType').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Perform login or registration logic here, e.g., send data to the server
  
      console.log('User Type:', userType);
      console.log('Email:', email);
      console.log('Password:', password);
    });
  });
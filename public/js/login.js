// const nodemailer = require('nodemailer');
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    //  checks username and password
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
    //   redirects location to the home page
      if (response.ok) {
        document.location.replace('/')
        // extra to make sure the page loads the changes
        document.location.replace('/')
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
 
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

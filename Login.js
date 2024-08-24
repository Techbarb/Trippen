document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signUpForm');
    
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form from submitting the traditional way
  
      const userName = document.getElementById('UserName').value;
      const password = document.getElementById('password').value;
  
      // Perform simple validation
      if (userName === '' || password === '') {
        alert('Please fill in all fields.');
        return;
      }
  
      // For demo purposes, simply log the user in
      alert('Login successful!'); 
  
      // Here you can add further actions, such as sending the data to the server
    });
  });
  
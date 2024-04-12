document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission behavior (page reload)
  
      // Here you would handle the login process
      // For simplicity, let's just redirect back to the main page after a successful login
      window.location.href = 'resume.html'; // Redirect to the main page
    });
  });
  
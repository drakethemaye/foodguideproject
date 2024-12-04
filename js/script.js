// interaction for contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Get form elements
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
  
    // Validate the fields
    if (!name || !email || !message) {
      alert("Please fill out all the fields.");
      event.preventDefault();
    } else {
      // Optionally, check email format (basic check)
      var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
      }
    }
  });
  
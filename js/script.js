// INTERACTION FOR CONTACT FORM
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

  // INTERACTION FOR REVIEW SECTION
  document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the user's rating and review
    const rating = document.getElementById("rating").value;
    const reviewText = document.getElementById("review").value;

    if (!rating || !reviewText) {
        alert("Please fill out both the rating and the review.");
        return;
    }

    // Create a new review element
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");

    // Create the rating and review content
    const ratingElement = document.createElement("div");
    ratingElement.classList.add("rating");
    ratingElement.innerHTML = "Rating: " + "⭐".repeat(rating);

    const reviewContentElement = document.createElement("p");
    reviewContentElement.innerText = reviewText;

    // Append the rating and review content to the review element
    reviewElement.appendChild(ratingElement);
    reviewElement.appendChild(reviewContentElement);

    // Append the new review to the reviews list
    document.getElementById("reviews-list").appendChild(reviewElement);

    // Reset the form
    document.getElementById("review-form").reset();
});

  
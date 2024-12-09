// INTERACTION FOR REVIEW SECTION
document.getElementById("review-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the user's rating and review
  const rating = document.getElementById("rating").value.trim();
  const reviewText = document.getElementById("review").value.trim();

  // Validation: Ensure both fields are filled out
  if (!rating || !reviewText) {
    alert("Please fill out both the rating and the review.");
    return;
  }

  // Create a new review element
  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");

  // Add the rating stars
  const ratingElement = document.createElement("div");
  ratingElement.classList.add("rating");
  ratingElement.innerHTML = `Rating: ${"⭐".repeat(parseInt(rating))}`;

  // Add the review text
  const reviewContentElement = document.createElement("p");
  reviewContentElement.classList.add("review-text");
  reviewContentElement.innerText = reviewText;

  // Append the rating and review content to the review element
  reviewElement.appendChild(ratingElement);
  reviewElement.appendChild(reviewContentElement);

  // Add the review element to the reviews list
  document.getElementById("reviews-list").appendChild(reviewElement);

  // Reset the form
  document.getElementById("review-form").reset();

  // Optional: Success message
  alert("Thank you for your review!");
});

// INTERACTION FOR REVIEW SECTION
document.getElementById("review-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get user inputs
  const rating = document.getElementById("rating").value.trim();
  const reviewText = document.getElementById("review").value.trim();
  const photoFile = document.getElementById("photo").files[0];

  if (!rating || !reviewText) {
    alert("Please fill out both the rating and the review.");
    return;
  }

  // Create a new review element
  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");

  // Add rating stars
  const ratingElement = document.createElement("div");
  ratingElement.classList.add("rating");
  ratingElement.innerHTML = `Rating: ${"⭐".repeat(parseInt(rating))}`;
  reviewElement.appendChild(ratingElement);

  // Add review text
  const reviewContentElement = document.createElement("p");
  reviewContentElement.classList.add("review-text");
  reviewContentElement.innerText = reviewText;
  reviewElement.appendChild(reviewContentElement);

  // Add photo if uploaded
  if (photoFile) {
    const photoElement = document.createElement("img");
    photoElement.src = URL.createObjectURL(photoFile);
    photoElement.alt = "Uploaded review photo";
    photoElement.classList.add("review-photo");
    reviewElement.appendChild(photoElement);
  }

  // Append the new review to the reviews list
  document.getElementById("reviews-list").appendChild(reviewElement);

  // Add the review to "Recent Reviews"
  const recentReviewsContainer = document.getElementById("recent-reviews");
  recentReviewsContainer.prepend(reviewElement.cloneNode(true));

  // Reset the form
  document.getElementById("review-form").reset();
});

// MOST HELPFUL REVIEWS (Static Example for Now)
const mostHelpfulReviewsContainer = document.getElementById("most-helpful-reviews");
// Example of adding a static helpful review
mostHelpfulReviewsContainer.innerHTML = `
  <div class="review">
    <div class="rating">Rating: ⭐⭐⭐⭐⭐</div>
    <p class="review-text">This place has the best pancakes I've ever had! Highly recommended.</p>
  </div>
`;

import axios from 'axios'; // Needs `npm install axios`

const API_URL = 'http://localhost:3000/reviews'; // !! IMPORTANT: Update if your backend runs elsewhere

/**
 * Fetches all reviews from the backend.
 * Referenced by: HomePage.vue, AllReviewsPage.vue
 */
export async function getReviews() {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Expecting an array of review objects
  } catch (error) {
    console.error('API Error: Failed to fetch reviews:', error);
    throw error; // Re-throw to allow calling component to handle it
  }
}

/**
 * Sends a new review to the backend for creation.
 * Referenced by: PublishReviewForm.vue
 */
export async function createReview(reviewData) {
  try {
    const response = await axios.post(API_URL, reviewData);
    return response.data; // Expecting the created review object or a success confirmation
  } catch (error) {
    console.error('API Error: Failed to create review:', error);
     // Attempt to get a specific error message from the backend response
    const errorMessage = error.response && error.response.data && error.response.data.message
                         ? error.response.data.message
                         : error.message || 'Unknown error';
    throw new Error(errorMessage); // Throw a more informative error
  }
}

// Optional: Add functions for getReviewById, updateReview, deleteReview later
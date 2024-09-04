document.addEventListener("DOMContentLoaded", function() {
  const posts = document.querySelectorAll("#post-thumbnails .post-content-item");
  let currentIndex = 0;

  function showNextPost() {
      posts[currentIndex].classList.remove("visible"); // Hide current post
      currentIndex = (currentIndex + 1) % posts.length; // Move to the next post
      posts[currentIndex].classList.add("visible"); // Show next post
  }

  // Initially show the first post
  posts[currentIndex].classList.add("visible");

  // Set interval to show next post every 3 seconds
  setInterval(showNextPost, 3000);
});

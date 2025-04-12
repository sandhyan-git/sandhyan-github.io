document.addEventListener("DOMContentLoaded", () => {
  const formHTML = `
    <div id="feedback-section">
      <h2>Submit Feedback</h2>
      <form id="feedback-form">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br>

        <label for="comments">Your Feedback:</label><br>
        <textarea id="comments" name="comments" rows="4" required></textarea><br>

        <button type="submit">Submit</button>
      </form>
      <p id="feedback-message"></p>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', formHTML);

  document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const comments = document.getElementById("comments").value.trim();

    console.log("Feedback Submitted:", { name, email, comments });

    document.getElementById("feedback-message").textContent = "Thank you for your feedback!";
    this.reset();
  });
});

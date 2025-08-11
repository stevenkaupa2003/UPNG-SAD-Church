document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = new FormData(this);

    // Send form data using fetch API
    fetch("contact-form-handler.php", {
      // Update with your server-side script URL
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse JSON response
        } else {
          throw new Error("Failed to submit the form.");
        }
      })
      .then((data) => {
        // Display success message
        document.getElementById("messageBox").textContent =
          "Thank you for contacting us! We will get back to you soon.";
        document.getElementById("messageBox").style.color = "green";

        // Optionally, reset the form
        document.getElementById("contactForm").reset();
      })
      .catch((error) => {
        // Display error message
        document.getElementById("messageBox").textContent =
          "There was an error submitting the form. Please try again.";
        document.getElementById("messageBox").style.color = "red";
        console.error("Error:", error);
      });
  });

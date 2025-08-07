// Navbar JS

function toggleMenu() {
      document.getElementById("navbar").classList.toggle("show");
    }

    // Handle multiple contact buttons
    document.querySelectorAll(".open-contact").forEach(btn => {
      btn.addEventListener("click", () => {
        document.getElementById("popup").style.display = "flex";
      });
    });

    // Close popup
    document.getElementById("closePopup").addEventListener("click", () => {
      document.getElementById("popup").style.display = "none";
    });

    // Close when clicking outside
    window.addEventListener("click", (e) => {
      if (e.target === document.getElementById("popup")) {
        document.getElementById("popup").style.display = "none";
      }
    });

    // Form submission
    const form = document.getElementById("contactForm");
    const messageDiv = document.getElementById("form-message");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(form);

      fetch("https://sheetdb.io/api/v1/m1ldwodvsks7s", {
        method: "POST",
        body: formData,
      })
      .then((response) => {
        if (response.ok) {
          messageDiv.textContent = "Form submitted successfully!";
          messageDiv.className = "success";
          form.reset();
          setTimeout(() => {
            document.getElementById("popup").style.display = "none";
          }, 1000);
        } else {
          throw new Error("Submission failed");
        }
      })
      .catch(() => {
        messageDiv.textContent = "Something went wrong. Please try again.";
        messageDiv.className = "error";
      });
    });
// Add your deployed Google Apps Script Web App URL here when ready.
// Example: const FEEDBACK_ENDPOINT = "https://script.google.com/macros/s/XXXX/exec";
const FEEDBACK_ENDPOINT = "";

const form = document.getElementById("feedback-form");
const field = document.getElementById("feedback");
const status = document.getElementById("feedback-status");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const feedback = field.value.trim();
  if (!feedback) return;

  if (!FEEDBACK_ENDPOINT) {
    status.textContent = "Feedback connection is not configured yet.";
    return;
  }

  const button = form.querySelector("button");
  button.disabled = true;
  status.textContent = "Sending…";

  try {
    await fetch(FEEDBACK_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: new URLSearchParams({ feedback })
    });
    field.value = "";
    status.textContent = "Thank you.";
  } catch (error) {
    status.textContent = "Could not send. Please try again.";
  } finally {
    button.disabled = false;
  }
});

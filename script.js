const form = document.getElementById("feedbackForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwvrXieSUBYZS2QkfT1lKgR6bWLVQKVYdDiSOW2A2zAjevqwDf9aGWhecA9hQ0ciWs4/exec", {
      method: "POST",
      body: new FormData(form),
    });

    const data = await response.json();

    if (data.result === "success") {
      alert("Feedback Submitted! Thank you for your feedback.");
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    console.error("Error! Something's wrong", error.message);
    alert("Error! Please try again.");
  }
});
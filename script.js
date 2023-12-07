const form = document.getElementById("feedbackForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: form.querySelector('input[name="name"]').value,
    email: form.querySelector('input[name="email"]').value,
    location: form.querySelector('select[name="location"]').value,
    dayVisited: form.querySelector('input[name="dayvisited"]').value,
    timeVisited: form.querySelector('input[name="timevisited"]').value,
    dineInOrTakeOut: form.querySelector('input[name="Dine"]:checked')
      ? form.querySelector('input[name="Dine"]:checked').value
      : "",
    age: form.querySelector('select[name="age"]').value,
    comments: form.querySelector('textarea').value,
  };

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwvrXieSUBYZS2QkfT1lKgR6bWLVQKVYdDiSOW2A2zAjevqwDf9aGWhecA9hQ0ciWs4/exec", {
      method: "POST",
      body: new FormData(formData),
      
    });

    const data = await response.json();

    if (data.result === "success") {
      alert("Feedback Submitted! Thank you for your feedback.");
      window.location.reload();
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    console.error("Error! Something's wrong", error.message);
    alert("Error! Please try again.");
  }
});

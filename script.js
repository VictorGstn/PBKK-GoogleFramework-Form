document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedbackForm");

    form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("name", form.querySelector('input[name="name"]').value)
    formData.append("email", form.querySelector('input[name="email"]').value)
    formData.append("location", form.querySelector('select[name="location"]').value)
    formData.append("dayVisited", form.querySelector('input[name="dayvisited"]').value)
    formData.append("timeVisited", form.querySelector('input[name="timevisited"]').value)
    formData.append("dine", getRadioValue("Dine"))
    formData.append("age", form.querySelector('select[name="age"]').value)
    formData.append("food", getRadioValue("Food"))
    formData.append("service", getRadioValue("Service"))
    formData.append("speed", getRadioValue("Speed"))
    formData.append("price", getRadioValue("Price"))
    formData.append("experience", getRadioValue("Experience"))
    formData.append("comments", form.querySelector('textarea').value)
    /*
        name: form.querySelector('input[name="name"]').value,
        email: form.querySelector('input[name="email"]').value,
        location: form.querySelector('select[name="location"]').value,
        dayVisited: form.querySelector('input[name="dayvisited"]').value,
        timeVisited: form.querySelector('input[name="timevisited"]').value,
        dine: getRadioValue("Dine"),
        age: form.querySelector('select[name="age"]').value,
        food: getRadioValue("Food"),
        service: getRadioValue("Service"),
        speed: getRadioValue("Speed"),
        price: getRadioValue("Price"),
        experience: getRadioValue("Experience"),
        comments: form.querySelector('textarea').value,*/

        console.log([...formData.entries()]);
    
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

    function getRadioValue(groupName) {
        const radioGroup = document.getElementsByName(groupName);

        for (let i = 0; i < radioGroup.length; i++) {
        if (radioGroup[i].checked) {
            return radioGroup[i].value;
        }
        }

        return null; // Return null if no option is selected
    }
});

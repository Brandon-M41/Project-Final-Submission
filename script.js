document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const message = document.getElementById("message").value.trim();

    if (message === "") {
        alert("Please write a message before submitting.");
    } else {
        alert("Thank you for your message!");
        document.getElementById("contact-form").reset();
    }
});

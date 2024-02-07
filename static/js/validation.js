function validateForm() {
    var firstNameInput = document.getElementById('first-name').value;
    var lastNameInput = document.getElementById('last-name').value;
    var phoneInput = document.getElementById('phone').value;
    var emailInput = document.getElementById('email').value;
    var whyJoin = document.getElementById('why-join').value;

    // Check if any of the required fields are empty
    if (
        firstNameInput.trim() === '' ||
        lastNameInput.trim() === '' ||
        phoneInput.trim() === '' ||
        emailInput.trim() === ''
    ) {
        alert("Please fill in all required fields.");
        return false;
    }

    // Simple phone number validation (allowing only digits and hyphens)
    var phoneRegex = /^[\d-]+$/;
    if (!phoneRegex.test(phoneInput)) {
        alert("Please enter a valid phone number (digits and hyphens only).");
        return false;
    }

    // Simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
        alert("Please enter a valid email address.");
        return false;
    }
    

    alert("Form submitted successfully!");

    window.location.href = "index.html";
    return false;
}
// submitForm.js

// Function to handle form submission
function submitForm() {
    // Retrieve form data
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var whyJoin = document.getElementById('why-join').value;

    // Organize the form data as a CSV string
    var csvData = '"' + firstName + '","' + lastName + '","' + phone + '","' + email + '","' + whyJoin + '"\n';

    // Perform AJAX request to save the data to the server
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'saveFormData.php', true); // Replace 'saveFormData.php' with the appropriate server-side script
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Form submitted successfully
            alert("Form submitted successfully!");
            window.location.href = "home.html"; // Redirect to home page
        }
    };
    
    // Send the CSV data to the server
    xhr.send('csvData=' + encodeURIComponent(csvData));

    return false; // Prevent form submission
}

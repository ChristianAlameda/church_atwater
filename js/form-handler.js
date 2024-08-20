document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signUpForm');

    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Capture the form data
        const formData = new FormData(form);
        const fname = formData.get('fname');
        const lname = formData.get('lname');
        const email = formData.get('email');
        const mobilePhone = formData.get('mobile_phone');

        // Log the captured data to the console
        console.log("Form Submitted");
        console.log("First Name:", fname);
        console.log("Last Name:", lname);
        console.log("Email:", email);
        console.log("Mobile Phone:", mobilePhone);

        // Submit the form programmatically
        form.submit();
    });
});

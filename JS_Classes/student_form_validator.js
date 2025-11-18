function validateStudentForm() {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const phoneField = document.getElementById("phone");
    const passwordField = document.getElementById("password");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");

    const namePattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;

    validateField(nameField, namePattern, nameError, "Name must contain only alphabets");
    validateField(emailField, emailPattern, emailError, "Enter a valid email");
    validateField(phoneField, phonePattern, phoneError, "Phone must be 10 digits");
    validateField(passwordField, passwordPattern, passwordError, "Password must contain 1 uppercase, 1 number, 1 special character");
}

function validateField(field, pattern, errorElement, errorMessage) {
    if (pattern.test(field.value)) {
        field.style.border = "2px solid green";
        errorElement.textContent = "";
    } else {
        field.style.border = "2px solid red";
        errorElement.textContent = errorMessage;
    }
}
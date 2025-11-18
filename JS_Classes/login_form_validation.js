function validateLogin() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const message = document.getElementById("message");

    const userPattern = /^.{5,}$/;
    const passPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    let valid = true;
    let errors = [];

    if (!userPattern.test(username.value)) {
        valid = false;
        errors.push("Username must be at least 5 characters");
        username.style.border = "2px solid red";
    } else {
        username.style.border = "2px solid green";
    }

    if (!passPattern.test(password.value)) {
        valid = false;
        errors.push("Password must be 8+ chars, include upper, lower, number, special char");
        password.style.border = "2px solid red";
    } else {
        password.style.border = "2px solid green";
    }

    if (valid) {
        message.style.color = "green";
        message.textContent = "Login Successful";
    } else {
        message.style.color = "red";
        message.textContent = errors.join(" | ");
    }
}
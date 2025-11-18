function bookTicket() {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const seatsField = document.getElementById("seats");

    const namePattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const seatsPattern = /^([1-9]|10)$/;

    const isNameValid = namePattern.test(nameField.value);
    const isEmailValid = emailPattern.test(emailField.value);
    const isSeatsValid = seatsPattern.test(seatsField.value);

    if (!isNameValid) {
        nameField.style.border = "2px solid red";
    } else {
        nameField.style.border = "2px solid green";
    }

    if (!isEmailValid) {
        emailField.style.border = "2px solid red";
    } else {
        emailField.style.border = "2px solid green";
    }

    if (!isSeatsValid) {
        seatsField.style.border = "2px solid red";
    } else {
        seatsField.style.border = "2px solid green";
    }

    if (isNameValid && isEmailValid && isSeatsValid) {
        const booking = {
            name: nameField.value,
            email: emailField.value,
            seats: seatsField.value
        };

        const ticket = document.getElementById("ticketDetails");
        ticket.innerHTML = `Name: ${booking.name}<br>Email: ${booking.email}<br>Seats: ${booking.seats}`;
    }
}
